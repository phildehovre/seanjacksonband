import "./Hero.scss";
import Socials from "./SocialsWidget";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="background-img"></div>
      <span className="slogan-ctn">
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
      <Socials />
    </section>
  );
}

export default Hero;
