import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* ===================== MODULE CONFIG ===================== */

const modules = [
  /* ========= SPORTS ========= */

  { name: "Chess", isTeam: false },

  {
    name: "Cricket",
    isTeam: true,
    maxMembers: 11,
    allowedBranches: ["ECE"],
  },

  {
    name: "Badminton",
    isTeam: true,
    maxMembers: 2,
    allowedBranches: ["ECE", "OTHER"],
  },

  { name: "Table Tennis", isTeam: false, allowedBranches: ["ECE", "OTHER"] },

  {
    name: "Futsal",
    isTeam: true,
    maxMembers: 6,
    allowedBranches: ["ECE"],
  },

  {
    name: "Relay Race",
    isTeam: true,
    maxMembers: 4,
    allowedBranches: ["ECE", "OTHER"],
  },

  {
    name: "Tug Of War",
    isTeam: true,
    maxMembers: 7,
    allowedBranches: ["ECE", "OTHER"],
  },

  /* ========= CULTURAL ========= */

  { name: "Minimalist", isTeam: false },
  { name: "Poesis", isTeam: false },
  { name: "Moments", isTeam: false },
  { name: "Memecraft", isTeam: false },
  { name: "Get hired", isTeam: false },

  /* ========= TECHNICAL ========= */

  {
    name: "Knock your heads",
    isTeam: true,
    maxMembers: 2,
    allowedBranches: ["ECE"],
  },

  {
    name: "Shabd Showdown",
    isTeam: true,
    maxMembers: 2,
    allowedBranches: ["ECE"],
  },

  {
    name: "Electrohunt",
    isTeam: true,
    maxMembers: 4,
    allowedBranches: ["ECE"],
  },

  {
    name: "IPL Auction",
    isTeam: true,
    maxMembers: 6,
    allowedBranches: ["ECE", "OTHER"],
  },

  {
    name: "Chamber of secrets",
    isTeam: true,
    maxMembers: 4,
    allowedBranches: ["ECE"],
  },

  {
    name: "Fastweb",
    isTeam: true,
    maxMembers: 3,
    allowedBranches: ["ECE"],
  },

  {
    name: "Curve Crafters",
    isTeam: true,
    maxMembers: 3,
    allowedBranches: ["ECE"],
  },

  {
    name: "Eniac",
    isTeam: true,
    maxMembers: 2,
    allowedBranches: ["ECE"],
  },

  {
    name: "Byte the Code",
    isTeam: true,
    maxMembers: 2,
    allowedBranches: ["ECE"],
  },

  {
    name: "Smartdroid",
    isTeam: true,
    maxMembers: 4,
    allowedBranches: ["ECE"],
  },
];

/* ===================== SLUG MAP ===================== */

const moduleSlugMap = {
  chess: "Chess",
  cricket: "Cricket",
  badminton: "Badminton",
  "table-tennis": "Table Tennis",
  futsal: "Futsal",
  "relay-race": "Relay Race",
  "tug-of-war": "Tug Of War",

  minimalist: "Minimalist",
  poesis: "Poesis",
  moments: "Moments",
  memecraft: "Memecraft",
  "get-hired": "Get hired",

  "knock-your-heads": "Knock your heads",
  "shabd-showdown": "Shabd Showdown",
  electrohunt: "Electrohunt",
  "ipl-auction": "IPL Auction",
  "chamber-of-secrets": "Chamber of secrets",
  fastweb: "Fastweb",
  "curve-crafters": "Curve Crafters",
  eniac: "Eniac",
  "byte-the-code": "Byte the Code",
  smartdroid: "Smartdroid",
};

const BRANCH_OPTIONS = {
  ECE: "All team members from ECE",
  OTHER: "Team members from other branches also",
};

const API_URL = "https://ecs-gdof.onrender.com/api/v1/registrations";
const WHATSAPP_COMMUNITY_LINK =
  "https://chat.whatsapp.com/H0bA0ylPoBY8zKfgNdDB3M";

/* ===================== COMPONENT ===================== */

function EventRegister() {
  const { eventName } = useParams();

  const [selectedModule, setSelectedModule] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const module = moduleSlugMap[eventName?.toLowerCase()];
    if (module) setSelectedModule(module);
  }, [eventName]);

  const moduleData = modules.find((m) => m.name === selectedModule);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setSuccess(true);
      e.target.reset();
      setBranch("");
    } catch (err) {
      alert(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!selectedModule) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 text-2xl font-bold">
        ❌ Invalid Event URL
      </div>
    );
  }

  /* ===================== SUCCESS ===================== */

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
        <div className="bg-[#020c2f] border border-blue-300 rounded-2xl p-10 text-center space-y-6 max-w-md w-full">
          <h2 className="text-3xl font-bold text-blue-400">
            Registration Successful 🎉
          </h2>

          <p className="text-blue-200">
            You are registered for <b>{selectedModule}</b>
          </p>

          <a
            href={WHATSAPP_COMMUNITY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-xl text-lg transition"
          >
            Join WhatsApp Community
          </a>

          <p className="text-sm text-blue-300">
            All event updates will be shared here
          </p>
        </div>
      </div>
    );
  }

  /* ===================== FORM ===================== */

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#020c2f] border border-blue-800 rounded-2xl p-10 space-y-10"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-400">
            {selectedModule}
          </h2>
          <p className="text-blue-300">Event Registration Form</p>
        </div>

        <input type="hidden" name="module" value={selectedModule} />

        {/* BASIC DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" placeholder="Full Name" className="input" required />
          <input name="scholarId" placeholder="Scholar ID" className="input" required />
          <input name="mobile" placeholder="Mobile Number" className="input" required />
          <input name="email" placeholder="Institute Email" className="input" required />

          {moduleData?.allowedBranches && (
            <select
              name="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="input md:col-span-2"
              required
            >
              <option value="">Select Branch</option>
              {moduleData.allowedBranches.map((b) => (
                <option key={b} value={b}>
                  {BRANCH_OPTIONS[b]}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* TEAM DETAILS */}
        {moduleData?.isTeam && (
          <div className="space-y-5 border border-blue-700 rounded-xl p-6">
            <h3 className="text-blue-300 font-semibold text-xl">
              Team Details (Max {moduleData.maxMembers})
            </h3>

            <input name="teamName" placeholder="Team Name" className="input" required />

            {[...Array(moduleData.maxMembers - 1)].map((_, i) => (
              <input
                key={i}
                name="participants[]"
                placeholder={`Participant ${i + 2} Name`}
                className="input"
              />
            ))}
          </div>
        )}

        {/* PAYMENT */}
        {branch === "OTHER" && (
          <div className="border border-blue-700 rounded-xl p-6 text-center space-y-4">
            <p className="text-blue-300 font-semibold text-lg">
              Pay ₹30 per non-ECE team member
            </p>

            <img
              src="/gpayqr.jpeg"
              alt="QR Code"
              className="mx-auto w-48 h-48 rounded-xl border border-blue-500"
            />

            <input
              type="file"
              name="paymentScreenshot"
              accept="image/*"
              className="block w-full text-sm text-blue-200"
              required
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 py-4 rounded-xl font-bold text-xl disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>

      <style>{`
        .input {
          background: #020617;
          border: 1px solid #2563eb;
          padding: 12px 16px;
          border-radius: 12px;
          color: #e0f2fe;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default EventRegister;
