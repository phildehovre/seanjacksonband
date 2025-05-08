import "./Carousel.scss";
type ItemProps = {
  title: string;
  legend: string;
  path: string;
};

function CarouselItem({ item }: { item: ItemProps }) {
  return (
    <div className="carousel-item" aria-label={item.title}>
      <img className="carousel-img" src={item.path} />
      <div className="testimonial">
      </div>
    </div>
  );
}

export default CarouselItem;
