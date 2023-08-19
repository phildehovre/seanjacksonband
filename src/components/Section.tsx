import React from "react";
import "./Section.scss";
import { cn } from "@/lib/utils";

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
  return (
    <div
      id={id}
      className={cn(
        "flex-items py-10 w-full px-2 md:px-10",
        `section-ctn ${classNames}`
      )}
    >
      <h1 className="px-7 py-2 text-3xl font-bold mb-4 text-center w-full ">
        {title}
      </h1>
      {children}
    </div>
  );
}

export default Section;
