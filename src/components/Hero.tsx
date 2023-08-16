import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="background-img"></div>
      <span className="slogan-ctn">
        <span>The</span>
        <h1>Sean Jackson</h1>
        <span>Band</span>
        <p>Your Ultimate Country Blues Rock Wedding Experience</p>
      </span>
      <a href="#" className="cta-button">
        Call to Action
      </a>
    </section>
  );
}

export default Hero;
