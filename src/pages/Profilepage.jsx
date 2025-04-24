import React from "react";
import { Camera } from "lucide-react"; // Using lucide-react icons

const Profilepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Account Settings</h2>
        </div>

        <div className="flex flex-col items-center text-center px-6 py-6 bg-gray-50">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="absolute -bottom-1 -right-1 bg-purple-600 p-1 rounded-full">
              <Camera size={14} color="white" />
            </span>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-sm">Marry Doe</h3>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>

          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
