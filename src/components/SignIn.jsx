import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post("https://makokha1.pythonanywhere.com/api/signin", formData);
      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setLoading("");
      setError("Sign-in failed. Please check your credentials and try again.");
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        padding: "2rem",
      }}
    >
      <div className="col-md-6 col-lg-4">
        <div className="card p-4 shadow-lg border-0 rounded-4 bg-white">
          <h2 className="text-center mb-4 text-primary fw-bold">Welcome Back</h2>

          {loading && <div className="alert alert-info text-center py-2">{loading}</div>}
          {error && <div className="alert alert-danger text-center py-2">{error}</div>}

          <form onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold text-secondary">
                Email Address
              </label>
              <div className="input-group">
                <span className="input-group-text bg-white border-primary">
                  <i className="bi bi-envelope-fill text-primary"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. user@example.com"
                  className="form-control border-primary"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold text-secondary">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text bg-white border-primary">
                  <i className="bi bi-lock-fill text-primary"></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="form-control border-primary"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="input-group-text bg-white border-primary"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} text-primary`}
                  ></i>
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-semibold">
              <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
            </button>

            <div className="text-center mt-3">
              <p className="mb-0 text-secondary">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-decoration-none text-primary fw-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
