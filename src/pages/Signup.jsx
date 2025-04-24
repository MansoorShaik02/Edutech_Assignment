import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Create your PopX account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-purple-600 font-semibold block mb-1">
              Full Name*
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-purple-600 font-semibold block mb-1">
              Phone number*
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-purple-600 font-semibold block mb-1">
              Email address*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-purple-600 font-semibold block mb-1">
              Password*
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-purple-600 font-semibold block mb-1">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-black mb-2">
              Are you an Agency?*
            </p>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
