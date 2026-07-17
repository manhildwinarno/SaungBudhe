"use client";

import { useState } from "react";

export default function SpiceGauge() {
  const [hoverLevel, setHoverLevel] = useState(0);

  const colors = [
    "bg-green-500",
    "bg-yellow-400",
    "bg-orange-500",
    "bg-red-500",
    "bg-red-700",
  ];
  const labels = [
    "Tidak Pedas",
    "Sedikit Pedas",
    "Sedang",
    "Pedas",
    "Sangat Pedas! 🔥",
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex justify-center w-xs sm:w-lg md:w-xl lg:w-3xl h-10"
        onMouseLeave={() => setHoverLevel(0)}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverLevel(index + 1)}
            className={`w-full cursor-pointer ${index === 0 ? "rounded-l-2xl" : ""} ${index === 4 ? "rounded-r-2xl" : ""} ${index < hoverLevel ? colors[index] : "bg-gray-500"}`}
          />
        ))}
      </div>
      <p className="text-white text-xl font-semibold mt-4">
        {hoverLevel > 0 ? labels[hoverLevel - 1] : "Hover untuk coba!"}
      </p>
    </div>
  );
}
