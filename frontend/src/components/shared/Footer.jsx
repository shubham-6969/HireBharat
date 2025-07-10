import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, LinkedinIcon, Facebook } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-green-500">
            Hire<span className="text-orange-500">Bharat</span>
          </h2>
          <p className="text-sm mt-2">
            India’s #1 Job Portal — Bringing Jobs Closer To You.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-white transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/browse" className="hover:text-white transition">
                Browse
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition">
                 Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="https://www.linkedin.com/in/shubhampatwal017"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href="https://www.facebook.com/shubham.patwal.017" 
            className="flex items-center gap-2 hover:text-blue-400 transition">
              <Facebook size={18} /> Facebook
            </a>
            <a
              href="https://x.com/shubham_17x"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Twitter size={18} /> Twitter
            </a>
            <a
              href="https://github.com/shubham-6969"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} HireBharat — All rights reserved.{" "}
        <br /> Designed and developed by {" "}
        <a
          href="https://www.linkedin.com/in/shubhampatwal017/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline font-medium ml-1"
        >
          Shubham Patwal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
