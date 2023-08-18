import Section from "./Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Brush, Globe, LucideIcon, Shuffle, Wrench } from "lucide-react";

function Feature() {
  const features: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: "Versatility",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: Shuffle,
    },
    {
      title: "Experience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: Globe,
    },
    {
      title: "Customisable",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: Brush,
    },
    {
      title: "Adaptability",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: Wrench,
    },
  ];

  const renderCards = () => {
    return features.map((feature) => {
      return (
        <Card
          key={feature.title}
          className="bg-black-700 border-none text-color-white w-full md:w-1/3"
        >
          <CardHeader className="flex flex-items justify-center">
            <CardTitle className="flex flex-items justify-center">
              <feature.icon size="48" />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>{feature.description}</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      );
    });
  };
  return (
    <Section
      title="Feature"
      classNames="gap-5 px-5  md:flex md:flex-row md:flex-wrap w-full"
    >
      {renderCards()}
    </Section>
  );
}

export default Feature;
