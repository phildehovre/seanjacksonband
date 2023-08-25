import { useEffect } from "react";
import "./Hero.scss";
import Socials from "./SocialsWidget";
import { animate, inView } from "motion";

function Hero() {
  // useEffect(() => {
  //   inView(".hero", ({ target }) => {
  //     animate(
  //       target.querySelector("#socials-widget") as HTMLElement,
  //       { x: [100, 0] },
  //       { delay: 0, duration: 2, easing: [0.17, 0.55, 0.55, 1] }
  //     );
  //   });
  // }, []);

  return (
    <section className="hero" id="top">
      <div className="background-img"></div>
      <span className="slogan-ctn" id="slogan">
        <span>The</span>
        <h1>
          Sean
          <br /> Jackson
        </h1>
        <span>Band</span>
        <p>Your Ultimate Country Blues Rock Wedding Experience</p>
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
