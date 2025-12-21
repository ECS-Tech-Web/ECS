import ParticlesComponent from "./Particle/Particle.jsx"; // adjust path
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    scholar_ID: "",
    Mobile_No: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      const res = await fetch(
        "https://ecs-gdof.onrender.com/api/v1/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            fullName: formData.fullName,
            email: formData.email,
            scholar_ID: formData.scholar_ID,
            Mobile_No: formData.Mobile_No,
            password: formData.password,
          }),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      setSuccess(true);
      setFormData({
        username: "",
        fullName: "",
        email: "",
        scholar_ID: "",
        Mobile_No: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/sign-in");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesComponent id="signup-particles" />
      </div>

      {/* Sign Up Form */}
      <div className="flex items-center justify-center min-h-screen px-4 py-16">
        <form className="w-full max-w-3xl bg-[#020c2f]/90 backdrop-blur-md border border-blue-800 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] p-10 space-y-6"
              onSubmit={handleSubmit}>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-blue-400">Sign Up</h1>
            <p className="text-gray-400 text-sm">Create your account to register for events</p>
          </div>

          {error && <div className="text-red-500 text-center">{error}</div>}
          {success && <div className="text-green-400 text-center">Registration successful!</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input-style"
              required
            />
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="input-style"
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-style"
              required
            />
            <input
              id="scholar_ID"
              type="text"
              placeholder="Scholar ID"
              value={formData.scholar_ID}
              onChange={handleChange}
              className="input-style"
              maxLength={10}
              minLength={7}
              required
            />
            <input
              id="Mobile_No"
              type="number"
              placeholder="Mobile No"
              value={formData.Mobile_No}
              onChange={handleChange}
              className="input-style"
              minLength={10}
              maxLength={10}
              required
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-style"
              minLength={8}
              required
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-Enter Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-style"
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 py-3 rounded-xl text-lg font-bold shadow-lg"
          >
            Sign Up
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/sign-in")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>

          <style>{`
            .input-style {
              width: 100%;
              padding: 12px 14px;
              border-radius: 10px;
              background-color: #020617;
              border: 1px solid #1e40af;
              color: white;
              outline: none;
              transition: all 0.3s ease;
            }
            .input-style::placeholder {
              color: #94a3b8;
            }
            .input-style:focus {
              border-color: #38bdf8;
              box-shadow: 0 0 0 2px rgba(56,189,248,0.3);
            }
          `}</style>
        </form>
      </div>
    </div>
  );
}

export default Signup;
