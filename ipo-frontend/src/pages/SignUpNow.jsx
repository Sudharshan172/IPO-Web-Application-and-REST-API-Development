import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);  // Track API request state
    const navigate = useNavigate();

    const handleRegister = async () => {
        setLoading(true);  // Show loading state

        try {
            const response = await fetch("http://127.0.0.1:8000/auth/signupnow/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            const contentType = response.headers.get("Content-Type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Unexpected response format from server");
            }

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Registration failed! Try again.");

            alert("Registration successful! Please log in.");
            navigate("/signin");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);  // Hide loading state
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up Now</h2>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <div className="mb-4">
                    <label className="block text-gray-600">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <button 
                    onClick={handleRegister} 
                    disabled={loading}  // Disable button while loading
                    className="w-full bg-green-500 text-white py-2 rounded-md"
                >
                    {loading ? "Signing Up..." : "Sign Up Now"}
                </button>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <button onClick={() => navigate("/signin")} className="text-blue-500 underline">
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
