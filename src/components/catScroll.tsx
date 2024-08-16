"use client";

import { ReactNode, useRef } from "react";

const ScrollableContainer = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute -top-12 right-10 z-10">
        <button
          onClick={() => scroll("left")}
          className="py-1 px-2 bg-gray-200 text-gray-500 rounded"
        >
          &larr;
        </button>
      </div>
      <div className="absolute -top-12 right-0 z-10">
        <button
          onClick={() => scroll("right")}
          className="py-1 px-2 bg-gray-200 text-gray-500 rounded"
        >
          &rarr;
        </button>
      </div>
      <div className=" overflow-x-scroll scrollbar-hide" ref={scrollRef}>
        {children}
      </div>
    </div>
  );
};

export default ScrollableContainer;
