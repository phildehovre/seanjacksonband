import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Brush, Globe, LucideIcon, Shuffle, Wrench } from "lucide-react";

function Feature() {
  const features: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: "Versatility",
      description:
        "The Sean Jackson Band offers a dynamic blend of high-energy country blues, funk, and rock music, delivering classic to modern floor fillers with a creative twist. We bring an unforgettable experience to every note we play.",
      icon: Shuffle,
    },
    {
      title: "Experience",
      description:
        "With over 10 years of experience, the band has a proven track record of playing at diverse venues including London residencies, ski resorts, exotic beaches, tours of Scandinavia, military gigs, Mediterranean villa parties, and 5-star hotels.",
      icon: Globe,
    },
    {
      title: "Adaptability",
      description:
        "From interactive roaming bands for intimate settings to full-blown hoe downs for lively barn parties, or even smooth and soulful performances for elevated gatherings, The Sean Jackson Band is versatile and can cater to a variety of event styles.",
      icon: Wrench,
    },
    {
      title: "Customisable",
      description:
        "Sean Jackson can curate a unique lineup of talented musicians to perfectly match the desired musical taste and atmosphere of any event, whether it's a wedding breakfast, barn party, or a sophisticated soirée.",
      icon: Brush,
    },
  ];

  const renderCards = () => {
    return features.map((feature) => {
      return (
        <Card
          key={feature.title}
          className="bg-black-700 border-none text-color-white w-full md:w-5/12  h-full"
        >
          <CardHeader className="flex flex-items justify-center">
            <CardTitle className="flex flex-items justify-center">
              <feature.icon size="48" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{feature.description}</p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      );
    });
  };
  return (
    <Section
      title="Services"
      classNames="gap-5 px-5  md:flex md:flex-row md:flex-wrap w-full"
    >
      {renderCards()}
    </Section>
  );
}

export default Feature;
