import { useEffect, useState } from "react";
import { getStudentById } from "../api/mockApi";
import { useToast } from "../context/ToastContext";

function StudentDetailsDialog({ studentId, isOpen, onClose }) {
  const { showToast } = useToast();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      if (!studentId) return;
      setLoading(true);
      try {
        const data = await getStudentById(Number(studentId));
        setStudent(data);
      } catch (error) {
        showToast("Error loading student details", "error");
        onClose();
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId, onClose, showToast]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"></div>
        </div>

        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    Student Details
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {loading ? (
                  <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
                  </div>
                ) : student ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Name
                        </label>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {student.name}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Email
                        </label>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {student.email}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Course
                        </label>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {student.course}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Grade
                        </label>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {student.grade}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Enrollment Date
                        </label>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {new Date(
                            student.enrollmentDate
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          Status
                        </label>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                          {student.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailsDialog;
