import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa"; // React Icons

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload your data");

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);

      const response = await axios.post(
        "https://makokha1.pythonanywhere.com/api/signup",
        formData
      );
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #3498db, #2980b9)", // Blue gradient from left to right
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "15px",
          backgroundColor: "#f0f8ff", // Light blue background for the card
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#2c3e50" }}>
          Create Your Account
        </h3>

        {loading && <div className="alert alert-info">{loading}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={submit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#2c3e50" }}>
              Username
            </label>
            <div className="input-group">
              <div
                className="input-group-text"
                style={{ backgroundColor: "#3498db", color: "white" }}
              >
                <FaUser />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ borderColor: "#3498db" }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#2c3e50" }}>
              Email Address
            </label>
            <div className="input-group">
              <div
                className="input-group-text"
                style={{ backgroundColor: "#3498db", color: "white" }}
              >
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: "#3498db" }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#2c3e50" }}>
              Password
            </label>
            <div className="input-group">
              <div
                className="input-group-text"
                style={{ backgroundColor: "#3498db", color: "white" }}
              >
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderColor: "#3498db" }}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label" style={{ color: "#2c3e50" }}>
              Phone Number
            </label>
            <div className="input-group">
              <div
                className="input-group-text"
                style={{ backgroundColor: "#3498db", color: "white" }}
              >
                <FaPhoneAlt />
              </div>
              <input
                type="tel"
                placeholder="Enter Phone"
                className="form-control"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ borderColor: "#3498db" }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ backgroundColor: "#3498db", borderColor: "#2980b9" }}
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-3">
            <small style={{ color: "#2c3e50" }}>
              Already have an account?{" "}
              <Link to="/signin" style={{ color: "#3498db" }}>
                Sign In
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
