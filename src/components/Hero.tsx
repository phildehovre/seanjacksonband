import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="background-img"></div>
      <span className="slogan-ctn">
        <span>The</span>
        <h1>
          Sean
          <br /> Jackson
        </h1>
        <span>Band</span>
        <p>Your Ultimate Country Blues Rock Wedding Experience</p>
        <a href="#" className="cta-button">
          Book us!
        </a>
      </span>
    </section>
  );
}

export default Hero;
