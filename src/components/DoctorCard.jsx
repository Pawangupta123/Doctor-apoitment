
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "./Button";
import { auth } from "../authentication/auth";
import { useNavigate } from "react-router-dom";

function DoctorCard({ name, specialty, image, rating = 4, available = true }) {
  const navigate = useNavigate();

  const handleConfirmBooking = async()=>{
    const user = auth.currentUser;
    if(!user){
      alert('Login first');
      return;
    }
    navigate('/book');
    
  }
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
      <img
        src={image || "https://via.placeholder.com/400x250?text=Doctor+Image"}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{specialty}</p>

        {/* ⭐ Rating */}
        <div className="flex items-center space-x-1 mb-2">
          {Array.from({ length: 5 }, (_, i) =>
            i < rating ? (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ) : (
              <FaRegStar key={i} className="text-gray-300 text-sm" />
            )
          )}
        </div>

        {/* Availability */}
        <p className={`text-sm font-medium ${available ? "text-green-600" : "text-red-500"}`}>
          {available ? "Available Now" : "Unavailable"}
        </p>

        {/* Button */}
        <Button
          disabled={!available}
          onClick={handleConfirmBooking}
          className={`mt-4 w-full py-2 text-sm font-medium rounded-full ${
            available
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          } transition`}
        >
          {available ? "Book Appointment" : "Not Available"}
        </Button>
      </div>
    </div>
  );
}

export default DoctorCard;
