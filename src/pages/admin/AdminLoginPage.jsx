import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/auth";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      setToken(data.token);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img src="/logo.png" alt="Logo" className="mb-6 h-16" />
      <form
        onSubmit={handleLogin}
        className="bg-gray-100 p-8 rounded-xl shadow-md w-80"
      >
        <h2 className="text-center font-bold mb-6">CONNECT TO ADMIN PANEL</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded-md"
        />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Connect
        </button>
      </form>
    </div>
  );
}
