import { useState } from "react";

import "./Header.scss";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className={`absolute inset-x-0 top-0 z-50`}>
			<nav
				className={`${isMenuOpen ? "darken" : "bg-transparent"}
			container mx-auto flex items-center justify-between px-4 md:px-8 py-4`}
				aria-label="Main Navigation"
			>
				{/* Logo */}
				<a
					href="#"
					className="flex text-white font-semibold h-20 w-20 items-center z-50"
				>
					<img
						src="https://res.cloudinary.com/dtnif6mzm/image/upload/v1693061438/Sean%20Jackson%20Assets/seanjacksonband-icon_sbojbx.svg"
						alt="Logo"
					/>
				</a>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6">
					<li>
						<a href="#" className="text-white hover:text-gray-300">
							Home
						</a>
					</li>
					<li>
						<a href="#events" className="text-white hover:text-gray-300">
							Tickets
						</a>
					</li>
					<li>
						<a href="#about" className="text-white hover:text-gray-300">
							About
						</a>
					</li>
					<li>
						<a href="#gallery" className="text-white hover:text-gray-300">
							Gallery
						</a>
					</li>
					<li>
						<a href="#contact" className="text-white hover:text-gray-300">
							Bookings
						</a>
					</li>
				</ul>

				{/* Mobile Hamburger */}
				<button
					type="button"
					className="md:hidden text-white focus:outline-none"
					onClick={() => setIsMenuOpen((prev) => !prev)}
					aria-label="Toggle navigation"
				>
					<svg className="h-6 w-6" viewBox="0 0 24 24">
						<path
							d="M4 6h16M4 12h16M4 18h16"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</nav>

			{/* Mobile Menu (in flow, below nav) */}
			<div
				className={`mobile_menu md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
					isMenuOpen ? "max-h-screen" : "max-h-0"
				}`}
			>
				<ul className="flex flex-col space-y-6 p-8 text-lg font-semibold">
					<li>
						<a href="#" onClick={() => setIsMenuOpen(false)}>
							Home
						</a>
					</li>
					<li>
						<a href="#events" onClick={() => setIsMenuOpen(false)}>
							Tickets
						</a>
					</li>
					<li>
						<a href="#about" onClick={() => setIsMenuOpen(false)}>
							About
						</a>
					</li>
					<li>
						<a href="#gallery" onClick={() => setIsMenuOpen(false)}>
							Gallery
						</a>
					</li>
					<li>
						<a href="#contact" onClick={() => setIsMenuOpen(false)}>
							Bookings
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
