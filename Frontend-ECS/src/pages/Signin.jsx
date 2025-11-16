import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

function Signin() {
    const isLoggedIn = useContext(AuthContext);

    const navigate = useNavigate()

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

        // Frontend validation
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
                credentials: "include", // Include cookies in requests
                body: JSON.stringify(formData),
            });
            // const res = await fetch("http://localhost:7000/api/v1/users/login",{
            //     method: "POST",
            
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     credentials: "include", // Include cookies in requests
            //     body: JSON.stringify(formData),
            // });


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

            console.log(data)

            // Store the token and user in localStorage
            localStorage.setItem("token", accessToken);
            localStorage.setItem("token", refreshToken);
            localStorage.setItem("user", JSON.stringify({ currentUser: user }));
            console.log("User data saved to localStorage:", { currentUser: user });

            // Update the context
            isLoggedIn.setIsLoggedIn(true);
            navigate('/profile')
            window.location.reload();
        } catch (error) {
            console.error("Error during login:", error);
            setError(error.message);
        }
    };

    return (
        <div className="mb-5">
            <div className="pt-14">
            </div>
            <h1 className="text-3xl text-center p-3 mt-7">Sign In</h1>

            {error && (
                <div className="text-red-600 text-center mt-2">
                    {error}
                </div>
            )}
            {success && (
                <div className="text-green-600 text-center mt-2">
                    Login successful!
                </div>
            ) }

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-4 text-black w-1/2 mx-auto"
            >
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    id="scholar_ID"
                    type="text"
                    placeholder="Scholar ID"
                    value={formData.scholar_ID}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Signin;



// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

// function Signin() {
//   const { setIsLoggedIn, setIsECE } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     scholar_ID: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess(false);

//     if (!formData.email || !formData.scholar_ID || !formData.password) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:7000/api/v1/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(errorText || "An error occurred.");
//       }

//       const data = await res.json();
//       console.log("Login successful:", data);

//       setSuccess(true);
//       setFormData({
//         email: "",
//         scholar_ID: "",
//         password: "",
//       });

//       const {
//         data: { user, accessToken, refreshToken },
//       } = data;

//       // ✅ Save tokens
//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("refreshToken", refreshToken);

//       // ✅ Save user + isECE flag
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("isECE", user.isECE);

//       console.log("User data saved to localStorage:", user);

//       // ✅ Update context
//       setIsLoggedIn(true);
//       setIsECE(user.isECE);

//       navigate("/profile");
//       window.location.reload();
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         id="email"
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         id="scholar_ID"
//         type="text"
//         placeholder="Scholar ID"
//         value={formData.scholar_ID}
//         onChange={handleChange}
//       />
//       <input
//         id="password"
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Sign In</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>Login successful!</p>}
//     </form>
//   );
// }

// export default Signin;
