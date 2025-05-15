import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MpesaPayment = () => {
  // Get product details from location state
  const { product } = useLocation().state || {};

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const submit = async (e) => {
    e.preventDefault();
    setMessage("⏳ Please wait...");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("amount", product.product_cost);

      await axios.post(
        "https://makokha1.pythonanywhere.com/api/mpesa_payment",
        formData
      );

      setMessage("✅ Please complete the payment on your phone. Thank you!");
      setPhone("");
    } catch (error) {
      setMessage("❌ Payment failed. Please try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5">
        <div className="card shadow-lg p-4 border-0 rounded">
          <h3 className="text-center mb-4 text-success">M-Pesa Payment</h3>

          <div className="mb-3">
            <p className="fw-bold text-primary">
              Product: <span className="text-dark">{product?.product_name}</span>
            </p>
            <p className="fw-bold text-warning">
              Amount: <span className="text-dark">Ksh {product?.product_cost}</span>
            </p>
          </div>

          {message && (
            <div
              className={`alert ${
                message.startsWith("✅")
                  ? "alert-success"
                  : message.startsWith("❌")
                  ? "alert-danger"
                  : "alert-info"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Phone Number (e.g. 2547xxxxxxx)</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your phone number"
                value={phone}
                required
                pattern="2547[0-9]{8}"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MpesaPayment;


