import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading menjadi true saat tombol ditekan

    // Simulasi proses login
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi delay

    // Validasi login
    if (!email.includes("@")) {
      setError("Invalid email format");
      setIsLoading(false); // Set loading menjadi false setelah selesai
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false); // Set loading menjadi false setelah selesai
      toast.error("Password must be at least 8 characters");
      return;
    }

    // Reset error dan tampilkan success toast
    setError("");
    toast.success("Login successful!");

    // Redirect setelah login sukses
    setTimeout(() => {
      setIsLoading(false); // Set loading menjadi false setelah redirect
      navigate("/"); // Arahkan ke halaman home setelah login sukses
    }, 2000);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero flex-col lg:flex-row">
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
                className="btn btn-accent w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span> // Tampilkan spinner saat loading
                ) : (
                  "Login"
                )}
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
      <ToastContainer />
    </div>
  );
};

export default Login;
