import React, { useState } from "react";

const modules = [
  { name: "Inauguration & Open mic", isTeam: false },

  { name: "Minimalist", isTeam: false },
  { name: "Poesis", isTeam: false },
  { name: "Moments", isTeam: false },
  { name: "Memecraft", isTeam: false },

  { name: "Knock your heads", isTeam: true, maxMembers: 2 },
  { name: "Shabd Showdown", isTeam: true, maxMembers: 2 },

  { name: "Electrohunt", isTeam: true, maxMembers: 4 },
  { name: "Get hired", isTeam: false },
  { name: "IPL Auction", isTeam: true, maxMembers: 6 },

  { name: "Chamber of secrets", isTeam: true, maxMembers: 4 },
  { name: "Fastweb", isTeam: true, maxMembers: 3 },
  { name: "Curve Crafters", isTeam: true, maxMembers: 3 },

  { name: "Eniac", isTeam: true, maxMembers: 2 },
  { name: "Byte the Code", isTeam: true, maxMembers: 2 },
  { name: "Smartdroid", isTeam: true, maxMembers: 4 },

  { name: "Chess", isTeam: false },
  { name: "Cricket", isTeam: false },
  { name: "Badminton", isTeam: true, maxMembers: 2 },
  { name: "Table Tennis", isTeam: false },
  { name: "Futsal", isTeam: false },
  { name: "Relay Race", isTeam: true, maxMembers: 3 },
  { name: "Tug Of War", isTeam: true, maxMembers: 6 },
];

const API_URL = "http://localhost:7000/api/v1/registrations";

function EventRegistrationForm() {
  const [selectedModule, setSelectedModule] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);

  const moduleData = modules.find((m) => m.name === selectedModule);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData, // ✅ NO credentials, NO JWT
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      alert("✅ Registration successful");
      e.target.reset();
      setSelectedModule("");
      setBranch("");
    } catch (err) {
      alert(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020b2d] to-[#020617] flex items-center justify-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#020c2f]/90 backdrop-blur-md border border-blue-800 rounded-2xl shadow-xl p-10 space-y-8"
      >
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-400">
            Event Registration
          </h2>
          <p className="text-gray-400 text-sm">
            Register carefully for your module
          </p>
        </div>

        {/* BASIC DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" placeholder="Full Name" className="input" required />

          <input
            name="scholarId"
            placeholder="Scholar ID"
            className="input"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Institute Email"
            className="input"
            required
          />

          {/* MODULE */}
          <select
            name="module"
            className="input md:col-span-2"
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            required
          >
            <option value="">Select Module</option>
            {modules.map((mod) => (
              <option key={mod.name} value={mod.name}>
                {mod.name}
              </option>
            ))}
          </select>

          {/* BRANCH */}
          <select
            name="branch"
            className="input md:col-span-2"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="EE">EE</option>
            <option value="CE">CE</option>
            <option value="EIE">EIE</option>
          </select>
        </div>

        {/* TEAM DETAILS */}
        {moduleData?.isTeam && (
          <div className="space-y-4">
            <h3 className="text-blue-300 font-semibold text-lg">
              Team Details (Max {moduleData.maxMembers})
            </h3>

            <input
              name="teamName"
              placeholder="Team Name"
              className="input"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(moduleData.maxMembers - 1)].map((_, i) => (
                <input
                  key={i}
                  name="participants[]"
                  placeholder={`Participant ${i + 2}`}
                  className="input"
                  required
                />
              ))}
            </div>
          </div>
        )}

        {/* PAYMENT */}
        {branch && branch !== "ECE" && (
          <div className="border border-blue-700 rounded-xl p-6 space-y-4 text-center">
            <p className="text-blue-300 font-semibold">
              Upload Payment Screenshot
            </p>

            <input
              type="file"
              name="paymentScreenshot"
              accept="image/*"
              className="input"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !selectedModule}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-xl font-bold text-lg disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>

      <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          background-color: #020617;
          border: 1px solid #1e40af;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 2px rgba(56,189,248,0.3);
        }
      `}</style>
    </div>
  );
}

export default EventRegistrationForm;
