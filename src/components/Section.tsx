import React from "react";
import "./Section.scss";

function Section({
  children,
  height = "auto",
}: {
  height?: string;
  children: React.ReactNode;
}) {
  const style = {
    height: height,
  };

  return (
    <div className="section-ctn" style={style}>
      {children}
    </div>
  );
}

export default Section;
