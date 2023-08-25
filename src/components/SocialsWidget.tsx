import { Facebook, Headphones, Instagram, Youtube } from "lucide-react";

function SocialsWidget({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="fixed top-0 right-0 bg-black p-2 top-1/3 rounded-tl-lg rounded-bl-lg "
    >
      <ul className="flex flex-items flex-col justify-between align-center gap-2 py-3 h-full ">
        <li>
          <a
            href="https://www.youtube.com/@Seanyplank"
            target="_blank"
            className="hover:text-red-600 transition duration-300 ease-in-out"
          >
            <Youtube />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/seanjacksonband"
            target="_blank"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            className="hover:text-green-400 transition duration-300 ease-in-out"
          >
            <Headphones />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/seanjacksonband/"
            target="_blank"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialsWidget;
