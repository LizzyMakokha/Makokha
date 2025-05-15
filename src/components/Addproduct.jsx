import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product_name, setProductname] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductphoto] = useState("");
  const [product_description, setProductdescription] = useState("");

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Redirect if not admin
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData || userData.role !== "admin") {
      navigate("/"); // redirect to home or login
    }
  }, [navigate]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Processing your product...");
    setSuccess("");
    setError("");

    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://makokha1.pythonanywhere.com/api/add_product",
        formData
      );

      setLoading("");
      setSuccess("✅ Product added successfully!");
      setProductname("");
      setProductdescription("");
      setProductcost("");
      setProductphoto("");
    } catch (err) {
      setLoading("");
      setError("❌ Oops! Something went wrong.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 shadow-lg rounded p-4 bg-light">
          <h2 className="text-center mb-4 text-primary fw-bold">🛍️ Add New Product</h2>

          {loading && <div className="alert alert-info">{loading}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label text-secondary fw-semibold">Product Name</label>
              <input
                type="text"
                className="form-control"
                required
                value={product_name}
                onChange={(e) => setProductname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary fw-semibold">Description</label>
              <textarea
                className="form-control"
                rows="3"
                required
                value={product_description}
                onChange={(e) => setProductdescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary fw-semibold">Cost (Ksh)</label>
              <input
                type="number"
                className="form-control"
                required
                value={product_cost}
                onChange={(e) => setProductcost(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary fw-semibold">Product Photo</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setProductphoto(e.target.files[0])}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success fw-bold">
                ➕ Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
