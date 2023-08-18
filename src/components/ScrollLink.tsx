import { cn } from "@/lib/utils";
import React from "react";

function ScrollLink({
  target,
  label,
  classNames,
}: {
  target: string;
  classNames: string;
  label: string;
}) {
  function smoothScroll(target: string) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Attach click event to the link
  const scrollLink = document.querySelector(`.${target}-scroll-link`);
  if (scrollLink) {
    scrollLink.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(`#${target}`); // Change to your target element's selector
    });
  }
  return (
    <a
      className={cn(
        "block px-4 py-2 text-white hover:text-gray-300",
        classNames,
        target + "-scroll-link"
      )}
    >
      {label}
    </a>
  );
}

export default ScrollLink;
