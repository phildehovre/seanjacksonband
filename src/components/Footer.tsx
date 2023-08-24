import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          <div className="mb-4 flex flex-col flex-items  w-full h-full text-center gap-5">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="text-xs">
              Uncover the ultimate wedding band journey with The Sean Jackson
              Band – a versatile ensemble fusing classic to modern repertoire.
              From electrifying London residencies to igniting lavish parties,
              our rock-inspired vibe resonates with foot-stomping barn party
              music that's truly mesmerizing. Elevating celebrations, our
              interactive roaming band adds an extra layer of excitement,
              serenading with smooth, soulful performances for an unforgettable
              experience.
            </p>
          </div>
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
                <a href="#services" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col gap-5">
            <h3 className="text-xl font-semibold">Social Media</h3>
            <div className="flex mt-2 space-x-4 items-start">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} copyright{" "}
          <a href="http://www.philippedehovre.com" target="_blank">
            Philippe De Hovre
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
