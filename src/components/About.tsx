import Section from "./Section";

function About() {
  return (
    <Section height="75dvh" title="About">
      <p className="px-7 text-justify gap-2 flex flex-col gap-3">
        <span>
          The Sean Jackson band is a high energy country blues, funk, rock band
          available as a 3-5 piece playing classic to modern floor fillers and
          medleys with a creative twist.
        </span>
        <span>
          Over 10 years of London residencies, events, ski resorts, exotic
          beaches, tours of Scandinavia, military gigs, Mediterranean villa
          parties, 5 star hotels and much more. Sean can put together a unique
          lineup of musicians to match your desired taste.
        </span>
        <span>
          Whether you need an interactive roaming band to serenade your wedding
          breakfast, a full bore hoe down for your barn party or something a
          little more smooth and soulful to turn your shin dig up a notch - The
          Sean Jackson Band has it covered!
        </span>
      </p>
    </Section>
  );
}

export default About;
