import React, { useState } from "react";
import "./DonateSyles.css";

function Donate() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset(); // Clear form fields
    setPaymentMethod(""); // Reset the payment method dropdown
    setShowPopup(true); // Show the pop-up
    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up after 3 seconds
    }, 3000);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value); // Update payment method
  };

  return (
    <div className="donate">
      <div className="donate-header">
        <h1>Support Marine Life Conservation</h1>
        <p>
          Your contributions help us protect endangered marine species, clean
          our oceans, and create sustainable futures for marine life. Together,
          we can make a difference.
        </p>
      </div>
      <div className="donation-form">
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Donation Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount (USD)"
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="payment">Payment Method</label>
            <select id="payment" value={paymentMethod} onChange={handlePaymentChange} required>
              <option value="">Select a payment method</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          {paymentMethod === "credit-card" && (
            <div className="credit-card-fields">
              <div className="form-group">
                <label htmlFor="cc-number">Card Number</label>
                <input
                  type="text"
                  id="cc-number"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cc-expiry">Expiry Date</label>
                <input
                  type="text"
                  id="cc-expiry"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  id="cc-cvv"
                  placeholder="123"
                  required
                />
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="paypal-fields">
              <div className="form-group">
                <label htmlFor="paypal-email">
                  PayPal E-Mail <span style={{ fontStyle: "italic", color: "gray" }}>(optional)</span>
                </label>
                <input
                  type="email"
                  id="paypal-email"
                  placeholder="Enter your PayPal E-Mail, if different from above E-Mail"
                />
              </div>
            </div>
          )}

          {paymentMethod === "bank-transfer" && (
            <div className="bank-fields">
              <div className="form-group">
                <label htmlFor="bank-account">Account Number</label>
                <input
                  type="text"
                  id="bank-account"
                  placeholder="Enter your bank account number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bank-routing">Routing Number</label>
                <input
                  type="text"
                  id="bank-routing"
                  placeholder="Enter your bank routing number"
                  required
                />
              </div>
            </div>
          )}

          <button type="submit" className="donate-button">
            Donate Now
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <p>
            🎉 <strong>Thank you!</strong> You’re amazing for supporting marine life conservation! 🌊 🐢
          </p>
        </div>
      )}
    </div>
  );
}

export default Donate;
