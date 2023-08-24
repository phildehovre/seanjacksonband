import { Facebook, Headphones, Instagram, Youtube } from "lucide-react";

function SocialsWidget() {
  return (
    <div className="fixed top-0 right-0 bg-black p-2 top-1/3 rounded-tl-lg rounded-bl-lg ">
      <ul className="flex flex-items flex-col justify-between align-center gap-2 py-3 h-full ">
        <li>
          <a href="https://www.youtube.com/@Seanyplank" target="_blank">
            <Youtube />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/seanjacksonband"
            target="_blank"
          ></a>
          <Facebook />
        </li>
        <li>
          <a href="" target="_blank">
            <Headphones />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/seanjacksonband/" target="_blank">
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialsWidget;
