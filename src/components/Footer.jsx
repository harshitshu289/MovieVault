import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base md:text-lg">
          &copy; {new Date().getFullYear()} Harshit Shukla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
