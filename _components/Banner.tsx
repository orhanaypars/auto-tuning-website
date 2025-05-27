import React from "react";

function Banner() {
  return (
    <div className="w-full bg-white text-black flex items-center justify-center px-2 md:px-0  md:py-1 relative overflow-hidden mb-10">
      <span className="font-bold text-sm tracking-wide drop-shadow-lg">
        Websitemize özel{" "}
        <span className="text-red-700 font-extrabold">%37 indirimli</span>{" "}
        fırsatlar için hemen iletişime geç!
      </span>
    </div>
  );
}

export default Banner;
