import React from "react";
import ButtonItem from "./ButtonItem";
import FormHotel from "./FormHotel";

function HeroBanner() {
  return (
    <div className="bg-[url(/img/gambar.webp)] bg-no-repeat bg-cover bg-center flex justify-around py-24 rounded-xl m-3">
      {/* Tulisan */}
      <div className="w-[35%] text-white flex flex-col justify-between gap-4">
        <div>
          <h1 className="font-extrabold text-2xl">
            Where You Get Trapped in the Beauty of the World and Unforgettable
            Happiness!
          </h1>

          <ButtonItem text="Booking Now" isActive={true} />
        </div>
        <p>
          At TripTrap, we believe that every journey is an opportunity for
          adventure, discovery, and unforgettable experience.
        </p>
      </div>

      {/* Form */}
      <div>
        <FormHotel />
      </div>
    </div>
  );
}

export default HeroBanner;
