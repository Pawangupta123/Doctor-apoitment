import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Footer/Logo.jsx'


function Footer() {
    return (
        <footer className="bg-white-200 text-blue-500 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Doctor Connect */}
        <div>
          <h2 className="text-xl font-bold mb-4">Doctor Connect</h2>
          <p className="text-sm text-black">
            Doctor Connect is your trusted healthcare partner. Book appointments, consult doctors, and manage your health records — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/book-appointment" className="hover:underline">Book Appointment</Link></li>
            <li><Link to="/consult-online" className="hover:underline">Consult Online</Link></li>
            <li><Link to="/health-records" className="hover:underline">Health Records</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:support@doctorconnect.com" className="hover:underline">support@doctorconnect.com</a></li>
            <li>Phone: +91-9876543210</li>
            <li>Support: 24x7 Available</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Doctor Connect. All rights reserved.
      </div>
    </footer>
    )
}

export default Footer