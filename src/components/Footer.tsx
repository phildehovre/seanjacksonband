import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
 
          <div className="mb-4 flex flex-col flex-items  w-full h-full text-center gap-5">
            <h3 className="text-xl font-semibold">Links</h3>
            <ul className="mt-2 flex flex-col gap-5">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
   
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col gap-5 text-center">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="flex mt-2 space-x-4 justify-center items-center w-full">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="http://www.philippedehovre.com"
            target="_blank"
            className="underline hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Philippe De Hovre
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
