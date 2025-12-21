import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import ParticlesComponent from './Particle/Particle.jsx'; // make sure path is correct

function Signin() {
    const isLoggedIn = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        scholar_ID: "",
        password: ""
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

        if (!formData.email || !formData.scholar_ID || !formData.password) {
            setError("All fields are required.");
            return;
        }

        try { 
            const res = await fetch("https://ecs-gdof.onrender.com/api/v1/users/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText || "An error occurred.");
            }

            const data = await res.json();
            console.log("Login successful:", data);
            setSuccess(true);
            setFormData({
                email: "",
                scholar_ID: "",
                password: ""
            });

            const { data: { user, accessToken, refreshToken} } = data;

            localStorage.setItem("token", accessToken);
            localStorage.setItem("token", refreshToken);
            localStorage.setItem("user", JSON.stringify({ currentUser: user }));

            isLoggedIn.setIsLoggedIn(true);
            navigate('/profile');
            window.location.reload();
        } catch (error) {
            console.error("Error during login:", error);
            setError(error.message);
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Particles Background */}
            <div className="absolute inset-0 -z-10">
                <ParticlesComponent id="signin-particles" />
            </div>

            {/* Sign In Form */}
            <div className="flex items-center justify-center min-h-screen px-4 py-16">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-3xl bg-[#020c2f]/90 backdrop-blur-md border border-blue-800 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] p-10 space-y-6"
                >
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-blue-400">Sign In</h1>
                        <p className="text-gray-400 text-sm">Access your account to manage events</p>
                    </div>

                    {error && <div className="text-red-500 text-center">{error}</div>}
                    {success && <div className="text-green-400 text-center">Login successful!</div>}

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
                            required
                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input-style"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 py-3 rounded-xl text-lg font-bold shadow-lg"
                    >
                        Sign In
                    </button>

                    <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <span
                            onClick={() => navigate("/sign-up")}
                            className="text-blue-400 cursor-pointer hover:underline"
                        >
                            Sign Up
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

export default Signin;
