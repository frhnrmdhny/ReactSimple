import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!email.includes("@")) {
      setError("Invalid email format");
      setIsLoading(false);
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setIsLoading(false);
      toast.error("Password must be at least 8 characters long");
      return;
    }

    setError("");
    setIsLoading(false);
    toast.success("Login successful!");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="form-control mt-6">
              <button
                className={`btn btn-accent w-full ${
                  isLoading ? "btn-disabled" : ""
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
            <div className="form-control mt-2">
              <button
                className="btn btn-outline btn-white"
                disabled={isLoading}
                onClick={handleRegisterClick}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ToastContainer untuk menampilkan notifikasi */}
      <ToastContainer />
    </div>
  );
};

export default Login;
