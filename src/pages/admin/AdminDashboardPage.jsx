import { useEffect, useState } from "react";
import { getToken, removeToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function AdminDashboardPage() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then(setJobs)
      .catch((err) => console.error("Failed to load jobs:", err));
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (!confirmed) return;

    const res = await fetch(`http://localhost:3000/jobs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (res.ok) {
      setJobs((prev) => prev.filter((job) => job.id !== id));
    } else {
      alert("Failed to delete job.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleAdd = () => {
    navigate("/admin/create");
  };

  const handleLogout = () => {
    removeToken();
    navigate("/admin/login");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          🚪 Logout
        </button>
      </div>

      {/* Add Job Button */}
      <div className="w-full max-w-4xl flex justify-end mb-4">
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          ➕ Add Job
        </button>
      </div>

      {/* Job List */}
      <div className="w-full max-w-4xl bg-gray-100 p-6 rounded-xl shadow-md">
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs available.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="border bg-white p-4 rounded-lg flex justify-between items-center shadow-sm"
              >
                <div>
                  <h2 className="font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-500">
                    {job.location} · {job.type}
                  </p>
                </div>

                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(job.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
