import { useEffect } from "react";
import Section from "./Section";
import { Card, CardContent } from "./ui/card";
import { animate, inView } from "motion";

function About() {
  useEffect(() => {
    inView("#about-content", () => {
      animate(
        "#about-content",
        { y: [20, 0], opacity: [0, 1] },
        { delay: 0.5, duration: 1, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);

  return (
    <Section id="about" title="About">
      <Card className="bg-black-700 border-none text-color-white w-full md:w-5/6  h-full">
        <CardContent id="about-content">
          <p className="px-7 text-justify gap-2 flex flex-col gap-3">
            <span>
              The Sean Jackson band is a high energy country blues, funk, rock
              band available as a 3-5 piece playing classic to modern floor
              fillers and medleys with a creative twist.
            </span>
            <span>
              Over 10 years of London residencies, events, ski resorts, exotic
              beaches, tours of Scandinavia, military gigs, Mediterranean villa
              parties, 5 star hotels and much more. Sean can put together a
              unique lineup of musicians to match your desired taste.
            </span>
            <span>
              Whether you need an interactive roaming band to serenade your
              wedding breakfast, a full bore hoe down for your barn party or
              something a little more smooth and soulful to turn your shin dig
              up a notch - The Sean Jackson Band has it covered!
            </span>
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}

export default About;
