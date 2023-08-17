import Section from "./Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function Feature() {
  const features = [
    {
      title: "Versatility",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "guitar?",
    },
    {
      title: "Experience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "globe",
    },
    {
      title: "Customisable",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "spanner",
    },
    {
      title: "Adaptability",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "chameleon",
    },
  ];

  const renderCards = () => {
    return features.map((feature) => {
      return (
        <Card key={feature.title}>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
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
    <Section height="50vh" title="Feature" className="flex-items">
      {renderCards()}
    </Section>
  );
}

export default Feature;
