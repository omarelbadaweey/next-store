
"use client";
import { FaCreditCard, FaTruck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

function FormCheck() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    // Full Name: only letters and spaces
    if (!/^[A-Za-z\s]{3,}$/.test(form.fullName)) {
      newErrors.fullName = "Enter a valid name (letters only).";
    }

    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone
    if (!/^\+?\d{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    // Address
    if (form.address.trim().length < 5) {
      newErrors.address = "Enter a valid address.";
    }

    // City
    if (!/^[A-Za-z\s]{2,}$/.test(form.city)) {
      newErrors.city = "Enter a valid city name.";
    }

    // Postal Code
    if (!/^\d{4,10}$/.test(form.postal)) {
      newErrors.postal = "Enter a valid postal code.";
    }

    // Cardholder Name
    if (!/^[A-Za-z\s]{3,}$/.test(form.cardName)) {
      newErrors.cardName = "Enter a valid cardholder name.";
    }

    // Card Number
    if (!/^\d{13,16}$/.test(form.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Enter a valid card number.";
    }

    // Expiry MM/YY
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) {
      newErrors.expiry = "Enter a valid expiry date (MM/YY).";
    }

    // CVV
    if (!/^\d{3,4}$/.test(form.cvv)) {
      newErrors.cvv = "Enter a valid CVV.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      router.push("/completeorder");
    }
  };

  return (
    <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-10 grid md:grid-cols-2 gap-10">
      {/* Shipping Information */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaTruck className="text-blue-600" /> Shipping Information
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 234 567 890"
              value={form.phone}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="123 Main Street, City"
              value={form.address}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.address ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="New York"
                value={form.city}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.city ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                name="postal"
                placeholder="10001"
                value={form.postal}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.postal ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.postal && <p className="text-red-500 text-sm">{errors.postal}</p>}
            </div>
          </div>
        </form>
      </div>

      {/* Payment Details */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaCreditCard className="text-green-600" /> Payment Details
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardName"
              placeholder="John Doe"
              value={form.cardName}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.cardName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.cardName && <p className="text-red-500 text-sm">{errors.cardName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={form.cardNumber}
              onChange={handleChange}
              className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.cardNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.expiry ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                }`}
              />
              {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="123"
                value={form.cvv}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-2 focus:ring-2 focus:outline-none ${
                  errors.cvv ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                }`}
              />
              {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
            </div>
          </div>

          <button
            onClick={handelSubmit}
            type="submit"
            className="block text-center mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCheck;
