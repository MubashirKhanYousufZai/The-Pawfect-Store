"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaCreditCard } from "react-icons/fa";

const PaymentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Function to format card number (XXXX-XXXX-XXXX-XXXX)
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(.{4})/g, "$1-") // Add '-' after every 4 digits
      .replace(/-$/, ""); // Remove trailing '-'
  };

  // Function to format expiry date (MM/YY)
  const formatExpiryDate = (value: string) => {
    return value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/^(\d{2})/, "$1/") // Add '/' after 2 digits
      .slice(0, 5); // Limit to MM/YY format
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Use 'const' since 'name' and 'value' are not reassigned

    let updatedValue = value; // Create a new variable to store the updated value

    // Apply formatting based on field name
    if (name === "cardNumber") updatedValue = formatCardNumber(value);
    if (name === "expiry") updatedValue = formatExpiryDate(value);
    if (name === "cvv") updatedValue = value.replace(/\D/g, "").slice(0, 3); // Limit CVV to 3 digits

    setFormData({ ...formData, [name]: updatedValue });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Payment Submitted! (Integrate with Stripe or PayPal)");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaCreditCard className="text-teal-500" /> Payment Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name on Card</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 text-teal-700 focus:ring-teal-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              maxLength={19} // Includes '-' separators
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength={5}
                value={formData.expiry}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">CVV</label>
              <input
                type="password"
                name="cvv"
                maxLength={3}
                value={formData.cvv}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg shadow-lg font-semibold hover:bg-teal-600 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
