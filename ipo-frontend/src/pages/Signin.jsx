import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (token && role) {
            if (role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/"); // Ensure users go to /home after login
            }
        }
    }, [navigate]); // Runs only once to check login state

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://ipo-web-application.onrender.com/auth/signin/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Invalid credentials!");

            // Store authentication details
            localStorage.setItem("token", data.access_token);  
            localStorage.setItem("role", data.role);

            // Force role update dynamically across all components
            window.dispatchEvent(new Event("storage"));

            // Redirect after successful login
            if (data.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch (err) {
            setError(err.message || "Login failed! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

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
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                >
                    {loading ? "Signing In..." : "Sign In"}
                </button>

                <p className="text-sm text-center mt-4">
                    New User?{" "}
                    <button onClick={() => navigate("/signupnow")} className="text-blue-500 underline">
                        Sign Up Now
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signin;
