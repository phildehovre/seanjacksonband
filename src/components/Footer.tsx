import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum id ligula porta felis euismod semper.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2">
              Email: contact@example.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Links</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="flex mt-2 space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
