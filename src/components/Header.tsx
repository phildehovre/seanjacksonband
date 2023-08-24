import { cn } from "@/lib/utils";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function

  return (
    <header className="bg-transparent absolute inset-x-0 top-0">
      <nav
        className="container mx-auto"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between p-4 md:px-8">
          <a href="#" className="text-white font-semibold text-lg">
            Logo
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={cn(
            "md:flex", // Flex on medium screens and larger
            "mt-2", // Add spacing between the button and the dropdown menu
            "overflow-hidden", // Hide overflow on small screens
            { hidden: !isMenuOpen }
          )}
        >
          <li>
            <a
              href=""
              className="block px-4 py-2 text-white hover:text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-4 py-2 text-white hover:text-gray-300"
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="#socials"
              className="block px-4 py-2 text-white hover:text-gray-300"
            >
              Socials
            </a>
          </li> */}
          <li>
            <a
              href="#gallery"
              className="block px-4 py-2 text-white hover:text-gray-300"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 text-white hover:text-gray-300"
            >
              Bookings
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
