import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth";

export default function CreateJobPage() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [missions, setMissions] = useState([""]);
  const [profile, setProfile] = useState([""]);
  const navigate = useNavigate();

  const handleAddField = (setter, values) => {
    setter([...values, ""]);
  };

  const handleChangeField = (setter, values, index, newValue) => {
    const updated = [...values];
    updated[index] = newValue;
    setter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      location,
      type,
      missions: missions.filter((m) => m.trim() !== ""),
      profile: profile.filter((p) => p.trim() !== ""),
    };

    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(jobData),
    });

    navigate("/admin");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Job</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-100 p-6 rounded-xl shadow-md"
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location (e.g. On site - Boumerdes)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        {/* Type */}
        <input
          type="text"
          placeholder="Type (e.g. CDI / Temps plein)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
          required
        />

        {/* Missions */}
        <h3 className="font-semibold mt-4">Missions</h3>
        {missions.map((m, i) => (
          <input
            key={i}
            type="text"
            value={m}
            onChange={(e) =>
              handleChangeField(setMissions, missions, i, e.target.value)
            }
            placeholder={`Mission ${i + 1}`}
            className="w-full mb-2 p-2 border rounded-md"
          />
        ))}
        <button
          type="button"
          onClick={() => handleAddField(setMissions, missions)}
          className="mb-3 text-blue-600"
        >
          ➕ Add Mission
        </button>

        {/* Profile */}
        <h3 className="font-semibold mt-4">Profile</h3>
        {profile.map((p, i) => (
          <input
            key={i}
            type="text"
            value={p}
            onChange={(e) =>
              handleChangeField(setProfile, profile, i, e.target.value)
            }
            placeholder={`Profile Requirement ${i + 1}`}
            className="w-full mb-2 p-2 border rounded-md"
          />
        ))}
        <button
          type="button"
          onClick={() => handleAddField(setProfile, profile)}
          className="mb-3 text-blue-600"
        >
          ➕ Add Profile Requirement
        </button>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md mt-4"
        >
          Save Job
        </button>
      </form>
    </div>
  );
}
