import { Facebook, Headphones, Instagram, Youtube } from "lucide-react";

function Socials() {
  return (
    <ul className="flex flex-items flex-col gap-5 items-start">
      <li>
        <a
          className="flex flex-items flex-row gap-5"
          href="https://www.youtube.com/@Seanyplank"
          target="_blank"
        >
          <Youtube className="text-red-600" /> Our Youtube channel!
        </a>
      </li>
      <li>
        <a
          className="flex flex-items flex-row gap-5 "
          href="https://www.facebook.com/seanjacksonband"
          target="_blank"
        >
          <Facebook className="text-blue-500" /> Follow us on Facebook
        </a>
      </li>
      <li>
        <a className="flex flex-items flex-row gap-5" href="" target="_blank">
          <Headphones className="text-green-500" />
          Listen to us on Spotify{" "}
        </a>
      </li>
      <li>
        <a
          className="flex flex-items w-full flex-row gap-5"
          href="https://www.instagram.com/seanjacksonband/"
          target="_blank"
        >
          <Instagram size="30" className="text-pink-500" />
          We look pretty good on Instagram too!
        </a>
      </li>
    </ul>
  );
}

export default Socials;
