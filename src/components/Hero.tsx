import { useEffect } from "react";
import "./Hero.scss";
import Socials from "./SocialsWidget";
import { animate, scroll, timeline, spring } from "motion";

function Hero() {
  const ctaColor = "rgb(243, 62, 107)";

  useEffect(() => {
    const duration = 2;
    const delay = 1;
    animate(
      "#slogan",
      {
        scale: [0, 1],
      },
      { scale: { easing: spring({ velocity: 5 }), delay: 1 } }
    );
    animate(
      "#background",
      { scale: [1, 1.1] },
      {
        duration: 15,
        repeat: Infinity,
        direction: "alternate-reverse",
        easing: "linear",
      }
    );
    timeline([
      [
        "#socials-widget",
        { x: [50, 0], color: ["white", ctaColor] },
        {
          duration: 0.5,
          x: { duration: 0.5 },
          color: { duration: 0.5 },
        },
      ],
      [
        "#socials-widget",
        { color: [ctaColor, "white"] },
        {
          duration: duration,
          delay: delay,
          color: { duration: 0.5 },
        },
      ],
    ]);
    scroll(
      animate("#slogan", {
        x: [0, -1000 * 10],
        y: [0, 100 * 10],
      })
    );
  }, []);

  return (
    <section className="hero" id="top">
      <div id="background" className="background-img"></div>
      <span className="slogan-ctn" id="slogan">
        <img src="https://res.cloudinary.com/dtnif6mzm/image/upload/v1693137344/Sean%20Jackson%20Assets/seanjacksonband-logo_zpvzhr.png" />
        <p className="text-3xl py-5">
          Your Ultimate Country Blues Rock Wedding Experience
        </p>
        <span className="flex justify-center md:justify-center  ">
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
