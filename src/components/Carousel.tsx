import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import "./Carousel.scss";
import Section from "./Section";


const CarouselWrapper = () => {
  const items = [
    {
      title: "Sean Jackson Band on a tractor",
      legend: "Picture of the Sean Jackson band during a close-up performance",
      path: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1745672112/Sean%20Jackson%20Assets/SeanJacksonBand-3_pfzmhg.jpg",
    },
    {
      title: "Sean Jackson band in a field",
      legend: "Picture of the Sean Jackson band performing live",
      path: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1745671629/Sean%20Jackson%20Assets/SeanJacksonBand-19_puhoqy.jpg",
    },
    {
      title: "Sean Jackson Band Setup",
      legend: "Picture of the Sean Jackson band's wedding event setup",
      path: "https://res.cloudinary.com/dtnif6mzm/image/upload/v1745671616/Sean%20Jackson%20Assets/Screen_Shot_2025-04-21_at_10.42.04_b7bwwb.png",
    },
    {
      title: "title",
   legend: "Picture of the Sean Jackson band", 
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/c_crop,h_0.75/Sean%20Jackson%20Assets/3_coe94r.jpg`,
    },
    {
      title: "title",
      legend: "Picture of the Sean Jackson bandve",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212203/Sean%20Jackson%20Assets/IMG_0322_sjiu4h.jpg`,
    },
    {
      title: "title",
      legend: "Picture of the Sean Jackson band",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212198/Sean%20Jackson%20Assets/2_ccyrzm.jpg`,
    },
    {
      title: "title",
      legend: "Picture of the Sean Jackson band",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212201/Sean%20Jackson%20Assets/IMG_0341_vsytyg.jpg`,
    },
    {
      title: "title",
      legend: "Picture of the Sean Jackson band",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212203/Sean%20Jackson%20Assets/IMG_0338_nrvg89.jpg`,
    },
    {
      title: "title",
      legend: "Picture of the Sean Jackson band",
      path: `https://res.cloudinary.com/dtnif6mzm/image/upload/v1692212194/Sean%20Jackson%20Assets/IMG_0112_qrudlw.jpg`,
    },
    {
      title: "title",
      legend: "Picture of the Sean Jackson band",
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
