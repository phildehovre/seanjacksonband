import "./Carousel.scss";
type ItemProps = {
  title: string;
  legend: string;
  path: string;
  customer: string;
};

function CarouselItem({ item }: { item: ItemProps }) {
  return (
    <div className="carousel-item" aria-label={item.title}>
      <img src={item.path} />
      {/* <p className="legend">{item.legend}</p> */}
      <div className="testimonial">
        {/* <span>"</span>
        <h1>{item.legend}</h1>
        <p>{item.customer}</p>
        <span>"</span> */}
      </div>
    </div>
  );
}

export default CarouselItem;
