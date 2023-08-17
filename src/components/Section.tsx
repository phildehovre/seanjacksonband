import React from "react";
import "./Section.scss";
import { cn } from "@/lib/utils";

function Section({
  children,
  height = "auto",
  title,
  classNames = "",
}: {
  height?: string;
  title?: string;
  children: React.ReactNode;
  classNames?: string;
}) {
  const style = {
    height: height,
  };

  return (
    <div
      className={cn("flex-items", `section-ctn ${classNames}`)}
      style={style}
    >
      <h1 className="px-7 py-2 text-3xl font-bold mb-4 text-left w-full">
        {title}
      </h1>
      {children}
    </div>
  );
}

export default Section;
