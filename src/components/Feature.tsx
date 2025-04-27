import Section from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Globe, LucideIcon, Shuffle } from "lucide-react";

function Feature() {
  const iconColor = "#F15A29";

  const features: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: "Versatility",
      description:
        "The SJB Country Music Experience is a high energy 5 piece Country Rock band available to book now. With a unique blend of country music medleys, bluegrass reels, and their own material, SJB will always leave a crowd demanding more. ",
      icon: Shuffle,
    },
    {
      title: "Experience",
      description:
        "With over 15 years of experience, the band has a proven track record of playing at diverse venues including London residencies, ski resorts, exotic beaches, tours of Scandinavia, military gigs, Mediterranean villa parties, and 5-star hotels.",
      icon: Globe,
    },

  ];

  const renderCards = () => {
    return features.map((feature) => {
      return (
        <Card
          key={feature.title}
          className="bg-black-700 border-none text-color-white w-full md:w-5/12  h-full"
          id="about"
        >
          <CardHeader className="flex flex-items justify-center">
            <CardTitle className="flex flex-items justify-center">
              <feature.icon size="48" color={iconColor} />
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
      title="The Ultimate Country Music Experience"
      classNames="gap-5 px-5 items-start md:flex md:flex-row md:flex-wrap w-full"
      id="about"
    >
      {renderCards()}
    </Section>
  );
}

export default Feature;
