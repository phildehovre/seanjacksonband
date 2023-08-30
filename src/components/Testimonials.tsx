import { cn } from "@/lib/utils";
import { useEffect } from "react";
// import SplitType from "split-type";
import { animate, inView } from "motion";

import Section from "./Section";
import { Star } from "lucide-react";

function Testimonials() {
  useEffect(() => {
    inView("#testimonial", () => {
      animate(
        "#testimonial",
        { y: [20, 0], opacity: [0, 1] },
        { delay: 0.5, duration: 1, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);

  const testimonials = [
    {
      name: "Tracey R. - Berkshire",
      content:
        "Always such a worry booking a band you’ve never seen, but five seconds into the first song, we knew we’d made a great choice. […] Guests commented all evening on how fantastic they were and they were with doubt the best function band I’ve ever seen.",
    },
    {
      name: "Katie - Warwickshire",
      content:
        "We are truly honoured to of had such an amazing duo to be part of our wedding day. […] I only wish I had them for the evening as well as the day because WOW I wouldn’t have anyone else.",
    },
    {
      name: "Josh R. - London",
      content:
        "The Sean Jacks band exceeded my guests and my wildest expectations. […] Quick and considerate, they made my 40th Birthday properly unforgettable and I was taken aside by many friends and asked where I came upon such awesome musicians. […] You absolutely get what you pay for. Pure Class.",
    },
    {
      name: "Becky - Wentworth",
      content:
        "We hired Sean for my 21st after hearing great things about him, and he certainly lived up to expectations! The communication and set up was great and straightforward. Sean managed to get the whole party up on their feet, playing songs that appealed to all age groups. I highly recommend Sean.",
    },
  ];
  const starColor = "#F15A29";

  return (
    <Section id="section" title="Testimonials" classNames="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="testimonials">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={cn(
              "gap-5 p-2 md:px-8 flex flex-col justify-center bg-black-700 text-color-white w-full md:w-full shadow-lg"
            )}
            id={`testimonial`}
          >
            <span className="flex flex-items justify-center w-full">
              <Star fill={starColor} color={starColor} />
              <Star fill={starColor} color={starColor} />
              <Star fill={starColor} color={starColor} />
              <Star fill={starColor} color={starColor} />
              <Star fill={starColor} color={starColor} />
            </span>
            <p className="text-lg text-center">"{testimonial.content}"</p>
            <p className="mt-2 font-semibold text-center">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
