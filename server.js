import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  users,
  courses,
  lessons,
  activities
} from "./data/seedData.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

/**
 * 1. Authentication (Mock Login)
 * Email-based mock login
 */
app.post("/api/auth/login", (req, res) => {
  const { email } = req.body;

  const user = users.find(
    (u) => `${u.name.toLowerCase().replace(" ", ".")}@example.com` === email
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid user" });
  }

  res.json(user);
});

/**
 * 2. Dashboard Data
 */
app.get("/api/dashboard/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const currentUser = users.find(u => u.id === userId);

  if (!currentUser) {
    return res.status(404).json({ error: "User not found" });
  }

  const isMentor = currentUser.role === "MENTOR";

  const visibleCourses = isMentor
    ? courses                // 👈 ALL courses for mentor
    : courses.filter(c => c.studentId === userId);

  const visibleActivities = isMentor
    ? activities
    : activities.filter(a => a.studentId === userId);

  const summary = {
    completedLessons: visibleCourses.reduce((s, c) => s + c.completedLessons, 0),
    totalLessons: visibleCourses.reduce((s, c) => s + c.totalLessons, 0),
    timeSpent: visibleCourses.reduce((s, c) => s + c.timeSpent, 0),
  };

  res.json({
    summary: {
      ...summary,
      progress:
        summary.totalLessons > 0
          ? Math.round((summary.completedLessons / summary.totalLessons) * 100)
          : 0
    },
    courses: visibleCourses,
    activities: visibleActivities,
    allStudents: users.filter(u => u.role === "STUDENT")
  });
});


/**
 * 3. Course Lessons
 */
app.get("/api/courses/:courseId/lessons", (req, res) => {
  const courseId = Number(req.params.courseId);
  const courseLessons = lessons.filter(
    (l) => l.courseId === courseId
  );
  res.json(courseLessons);
});

/**
 * 4. Activity Logging (In-Memory)
 */
app.post("/api/activities", (req, res) => {
  const event = req.body;

  activities.push({
    studentId: event.studentId,
    courseId: event.courseId,
    date: event.date || new Date().toISOString().split("T")[0],
    minutes: event.minutesSpent,
    lessonName: event.lessonName
  });

  const course = courses.find((c) => c.id === event.courseId);
  if (course) {
    course.completedLessons += 1;
    course.timeSpent += event.minutesSpent;
  }

  res.status(201).json({ message: "Activity logged successfully" });
});

/**
 * 5. Mentor Insights (Mock / Rule-based)
 */
app.post("/api/mentor/insights", (req, res) => {
  const insights = {
    message: "Rule-based insights generated",
    suggestions: [
      "Students with low activity may need follow-up",
      "High performers can be recommended advanced modules"
    ]
  };

  res.json(insights);
});

app.listen(port, () => {
  console.log(`🚀 EduTrack Backend running at http://localhost:${port}`);
});
