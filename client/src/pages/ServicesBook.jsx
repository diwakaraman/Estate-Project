import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function ServicesBook() {
  const location = useLocation();
  const service = location.state?.service;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    pan: '',
    income: '',
    insuranceType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your request for "${service.title}" has been submitted.`);
    setFormData({
      name: '',
      email: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      pan: '',
      income: '',
      insuranceType: '',
      message: '',
    });
  };

  if (!service) {
    return (
      <div className="p-8 text-center text-xl text-red-500">
        Service not found. Please go back to <a href="/services" className="text-blue-500 underline">Services</a>.
      </div>
    );
  }

  const renderServiceSpecificFields = () => {
    switch (service.title.toLowerCase()) {
      case 'pay on credit':
        return (
          <>
            <div>
              <label className="block mb-1 font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Expiry</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </>
        );

      case 'get best price':
        return (
          <>
            <div>
              <label className="block mb-1 font-medium">PAN Number</label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Annual Income</label>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </>
        );

      case 'loan assistance':
        return (
          <>
            <div>
              <label className="block mb-1 font-medium">Monthly Income</label>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Loan Type</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Home/Car/Personal etc."
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </>
        );

      case 'property insurance':
        return (
          <>
            <div>
              <label className="block mb-1 font-medium">Insurance Type</label>
              <input
                type="text"
                name="insuranceType"
                value={formData.insuranceType}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </>
        );

      default:
        return (
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 mb-2">{service.description}</p>
      <div className="text-sm text-slate-600 italic mb-8">Service ID: {service.id}</div>

      <h2 className="text-2xl font-semibold text-slate-700 mb-4">Next Step: Fill Your Details</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {/* Common Fields */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Dynamic Fields */}
        {renderServiceSpecificFields()}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
