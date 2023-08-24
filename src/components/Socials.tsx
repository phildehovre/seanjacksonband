import { Facebook, Instagram, Speaker, Youtube } from "lucide-react";

function Socials() {
  return (
    // <Section title="Socials" id="socials" classNames="bg-black text-white">
    <div className="flex justify-center flex-items w-full">
      <ul className="flex flex-items flex-col justify-between align-center gap-5 py-3">
        <li>
          <a
            className="flex flex-items w-full flex-row gap-5"
            href="https://www.youtube.com/@Seanyplank"
            target="_blank"
          >
            <Youtube color="red" /> Our Youtube channel!
          </a>
        </li>
        <li>
          <a
            className="flex flex-items w-full flex-row gap-5"
            href="https://www.facebook.com/seanjacksonband"
            target="_blank"
          >
            <Facebook color="lightblue" /> Follow us on Facebook
          </a>
        </li>
        <li>
          <a
            className="flex flex-items w-full flex-row gap-5"
            href=""
            target="_blank"
          >
            <Speaker color="green" />
            Listen to us on Spotify{" "}
          </a>
        </li>
        <li>
          <a
            className="flex flex-items w-full flex-row gap-5"
            href="https://www.instagram.com/seanjacksonband/"
            target="_blank"
          >
            <Instagram color="pink" size="30" />
            We look pretty good on Instagram too!
          </a>
        </li>
      </ul>
    </div>
    // </Section>
  );
}

export default Socials;
