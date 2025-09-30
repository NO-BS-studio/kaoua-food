import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth";

export default function EditJobPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [missions, setMissions] = useState([""]);
  const [profile, setProfile] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || "");
        setLocation(data.location || "");
        setType(data.type || "");
        setMissions(data.missions?.length ? data.missions : [""]);
        setProfile(data.profile?.length ? data.profile : [""]);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load job:", err));
  }, [id]);

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

    const updatedJob = {
      title,
      location,
      type,
      missions: missions.filter((m) => m.trim() !== ""),
      profile: profile.filter((p) => p.trim() !== ""),
    };

    const res = await fetch(`/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(updatedJob),
    });

    if (res.ok) {
      alert("Job updated successfully!");
      navigate("/admin");
    } else {
      alert("Failed to update job.");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Job</h2>
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
          Save Changes
        </button>
      </form>
    </div>
  );
}
