import React from "react";
import { useNavigate } from "react-router-dom";

const Welcomepage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-6 py-12 bg-white rounded-lg w-[360px]">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg mb-3 hover:bg-purple-700"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-purple-200 text-purple-800 font-semibold py-3 rounded-lg hover:bg-purple-300"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcomepage;
