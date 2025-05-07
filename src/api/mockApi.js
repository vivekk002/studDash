// Mock data
const mockStudents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    course: "Computer Science",
    grade: "A",
    enrollmentDate: "2023-09-01",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    course: "Mathematics",
    grade: "B+",
    enrollmentDate: "2023-09-01",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    course: "Physics",
    grade: "A-",
    enrollmentDate: "2023-09-01",
    status: "Active",
  },
];

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API functions
export const fetchStudents = async () => {
  await delay(1000); // Simulate network delay
  return [...mockStudents];
};

export const addStudent = async (student) => {
  await delay(500);
  const newStudent = {
    ...student,
    id: Date.now(),
    enrollmentDate: new Date().toISOString().split("T")[0],
    status: "Active",
  };
  mockStudents.push(newStudent);
  return newStudent;
};

export const getStudentById = async (id) => {
  await delay(500);
  const student = mockStudents.find((s) => s.id === id);
  if (!student) {
    throw new Error("Student not found");
  }
  return student;
};
