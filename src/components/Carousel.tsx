import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import "./Carousel.scss";
import Section from "./Section";

const CarouselWrapper = () => {
  const items = [
    {
      title: "title",
      legend: "Best ever",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/c_crop,h_0.75/Sean%20Jackson%20Assets/3_coe94r.jpg`,
    },
    {
      title: "title",
      legend: "My wife is still in love",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/c_crop,h_0.75/cld-sample.jpg`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/c_crop,h_0.75/cld-sample.jpg`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/c_crop,h_600,w_900/co_rgb:00000091,e_colorize:50/cld-sample.jpg`,
    },
  ];

  const renderItems = () => {
    return items.map((item) => {
      return <CarouselItem key={item.path} item={item} />;
    });
  };

  return (
    <Section height="80dvh">
      <Carousel
        centerMode
        width="100%"
        infiniteLoop
        autoPlay
        showThumbs={false}
        renderItem={(item) => <div className="carousel-item">{item}</div>}
      >
        {renderItems()}
      </Carousel>
    </Section>
  );
};
export default CarouselWrapper;
