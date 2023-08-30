import React, { useEffect } from "react";
import "./Section.scss";
import { cn } from "@/lib/utils";
import { animate, inView } from "motion";

function Section({
  children,
  title,
  classNames = "",
  id,
}: {
  title?: string;
  children: React.ReactNode;
  classNames?: string;
  id?: string;
}) {
  useEffect(() => {
    const titleAnimation = inView("#section-title", () => {
      animate(
        "#section-title",
        { opacity: [0, 1], y: [20, 0] },
        { duration: 2 }
      );
    });
  });

  return (
    <div
      id={id}
      className={cn(
        "flex-items py-10 w-full px-2 md:px-10 h-full",
        `section-ctn ${classNames}`
      )}
    >
      <h1
        id="section-title"
        className="px-7 py-2 text-3xl font-bold mb-4 text-center w-full "
      >
        {title}
      </h1>
      {children}
    </div>
  );
}

export default Section;
