export const users = [
  {
    id: 1,
    name: "John Student",
    email: "john.student@example.com",
    role: "STUDENT",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Emily Student",
    email: "emily.student@example.com",
    role: "STUDENT",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 3,
    name: "Michael Student",
    email: "michael.student@example.com",
    role: "STUDENT",
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 4,
    name: "Sophia Student",
    email: "sophia.student@example.com",
    role: "STUDENT",
    avatar: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 5,
    name: "Daniel Student",
    email: "daniel.student@example.com",
    role: "STUDENT",
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 6,
    name: "Alice Mentor",
    email: "alice.mentor@example.com",
    role: "MENTOR",
    avatar: "https://i.pravatar.cc/150?img=16"
  },
  {
    id: 7,
    name: "Robert Mentor",
    email: "robert.mentor@example.com",
    role: "MENTOR",
    avatar: "https://i.pravatar.cc/150?img=17"
  }
];



// ================= COURSES =================
export const courses = [
  // John
  { id: 1, studentId: 1, title: "React Basics", category: "Frontend", totalLessons: 10, completedLessons: 7, timeSpent: 340 },
  { id: 2, studentId: 1, title: "Node.js Fundamentals", category: "Backend", totalLessons: 8, completedLessons: 5, timeSpent: 260 },

  // Emily
  { id: 3, studentId: 2, title: "HTML & CSS", category: "Frontend", totalLessons: 6, completedLessons: 6, timeSpent: 180 },
  { id: 4, studentId: 2, title: "JavaScript Basics", category: "Frontend", totalLessons: 9, completedLessons: 7, timeSpent: 300 },

  // Michael
  { id: 5, studentId: 3, title: "Python Basics", category: "Programming", totalLessons: 8, completedLessons: 4, timeSpent: 210 },

  // Sophia
  { id: 6, studentId: 4, title: "UI/UX Fundamentals", category: "Design", totalLessons: 5, completedLessons: 3, timeSpent: 150 },

  // Daniel
  { id: 7, studentId: 5, title: "Databases 101", category: "Backend", totalLessons: 7, completedLessons: 2, timeSpent: 120 }
];

// ================= LESSONS =================
export const lessons = [
  { id: 1, courseId: 1, title: "Intro to React", order: 1 },
  { id: 2, courseId: 1, title: "JSX & Components", order: 2 },
  { id: 3, courseId: 1, title: "Props & State", order: 3 },
  { id: 4, courseId: 1, title: "Hooks", order: 4 },

  { id: 5, courseId: 2, title: "Intro to Node.js", order: 1 },
  { id: 6, courseId: 2, title: "Express Basics", order: 2 },

  { id: 7, courseId: 3, title: "HTML Basics", order: 1 },
  { id: 8, courseId: 3, title: "CSS Layouts", order: 2 }
];

// ================= ACTIVITY LOGS (TIME SERIES) =================
export const activities = [
  // John (last 7 days)
  { studentId: 1, date: "2025-01-14", minutes: 40 },
  { studentId: 1, date: "2025-01-15", minutes: 55 },
  { studentId: 1, date: "2025-01-16", minutes: 35 },
  { studentId: 1, date: "2025-01-17", minutes: 60 },
  { studentId: 1, date: "2025-01-18", minutes: 45 },
  { studentId: 1, date: "2025-01-19", minutes: 70 },
  { studentId: 1, date: "2025-01-20", minutes: 65 },

  // Emily
  { studentId: 2, date: "2025-01-18", minutes: 50 },
  { studentId: 2, date: "2025-01-19", minutes: 40 },
  { studentId: 2, date: "2025-01-20", minutes: 60 },

  // Michael
  { studentId: 3, date: "2025-01-19", minutes: 30 },
  { studentId: 3, date: "2025-01-20", minutes: 45 },

  // Sophia
  { studentId: 4, date: "2025-01-20", minutes: 35 },

  // Daniel
  { studentId: 5, date: "2025-01-20", minutes: 25 }
];
