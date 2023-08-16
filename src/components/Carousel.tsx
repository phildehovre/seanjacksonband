import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const CarouselWrapper = () => {
  const items = [
    {
      title: "title",
      legend: "Best ever",
      customer: "Harry & Sally - Derbyshire",
      path: `src/assets/1.JPG`,
    },
    {
      title: "title",
      legend: "My wife is still in love",
      customer: "Harry & Sally - Derbyshire",
      path: `src/assets/2.JPG`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `src/assets/3.JPG`,
    },
  ];

  const renderItems = () => {
    return items.map((item) => {
      return <CarouselItem key={item.path} item={item} />;
    });
  };

  return (
    <Carousel
      autoPlay
      renderItem={(item) => <div className="carousel-item">{item}</div>}
    >
      {renderItems()}
    </Carousel>
  );
};
export default CarouselWrapper;
