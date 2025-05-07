import { useState } from "react";

function StudentFilter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    course: "",
    status: "",
  });

  const courses = [
    "All Courses",
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Engineering",
  ];

  const statuses = ["All Status", "Active", "Inactive", "Graduated"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value === "All Courses" || value === "All Status" ? "" : value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="course"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Filter by Course
          </label>
          <select
            id="course"
            name="course"
            value={filters.course || "All Courses"}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-lg py-3 px-4"
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Filter by Status
          </label>
          <select
            id="status"
            name="status"
            value={filters.status || "All Status"}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-lg py-3 px-4"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default StudentFilter;
