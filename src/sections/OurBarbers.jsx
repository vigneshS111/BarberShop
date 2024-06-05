import React from "react";
import BarberCard from "../components/BarberCard";
import { barbers } from "../constants";

const OurBarbers = () => {
  return (
    <div className="flex flex-col gap-5 py-12 sm:px-20 xl:px-36 px-6 bg-primary">
      <h2 className=" flex justify-center text-wrap font-montserrat md:text-[58px] text-[54px] text-white font-extrabold md:leading-[65px] leading-[65px] ">
        Our Barbers
      </h2>
      <div className="grid md:grid-cols-3  max-sm:grid-cols-1 grid-cols-2  gap-5 ">
        {barbers.map((item, key) => {
          return (
            <BarberCard
              key={key}
              name={item.name}
              role={item.role}
              abt={item.abt}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurBarbers;
