import React from "react";
import "./Section.scss";

function Section({
  children,
  height = "auto",
  title,
}: {
  height?: string;
  title?: string;
  children: React.ReactNode;
}) {
  const style = {
    height: height,
  };

  return (
    <div className="section-ctn" style={style}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
