import { useEffect } from "react";
import "./Hero.scss";
import Socials from "./SocialsWidget";
import { animate } from "motion";

function Hero() {
  const ctaColor = "rgb(243, 62, 107)";

  useEffect(() => {
    const controls = animate(
      "#socials-widget",
      { x: ["100", 0], color: ["white", ctaColor] },
      { delay: 0, duration: 0.5 }
    );

    setTimeout(() => {
      controls.stop();
      animate(
        "#socials-widget",
        { color: [ctaColor, "white"] },
        { delay: 0.2, duration: 0.5 }
      );
    }, 500);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="background-img"></div>
      <span className="slogan-ctn" id="slogan">
        {/* <span>The</span>
        <h1>
          Sean
          <br /> Jackson
        </h1>
        <span>Band</span> */}
        <img src="src\assets\seanjacksonband-logo.png" />
        <p className="text-2xl py-5">
          Your Ultimate Country Blues Rock Wedding Experience
        </p>
        <span className="flex justify-center md:justify-start">
          <a href="#contact" className="cta-button">
            Book us!
          </a>
        </span>
      </span>
      <Socials id="socials-widget" />
    </section>
  );
}

export default Hero;
