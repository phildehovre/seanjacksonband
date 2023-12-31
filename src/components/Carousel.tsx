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
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212203/Sean%20Jackson%20Assets/IMG_0322_sjiu4h.jpg`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212198/Sean%20Jackson%20Assets/2_ccyrzm.jpg`,
    },

    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212201/Sean%20Jackson%20Assets/IMG_0341_vsytyg.jpg`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212203/Sean%20Jackson%20Assets/IMG_0338_nrvg89.jpg`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212194/Sean%20Jackson%20Assets/IMG_0112_qrudlw.jpg`,
    },
    {
      title: "title",
      legend: "Sean saved my marriage",
      customer: "Harry & Sally - Derbyshire",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212200/Sean%20Jackson%20Assets/FullSizeRender_hyxuep.jpg`,
    },
  ];

  const renderItems = () => {
    return items.map((item) => {
      return <CarouselItem key={item.path} item={item} />;
    });
  };

  return (
    <Section id="gallery">
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
