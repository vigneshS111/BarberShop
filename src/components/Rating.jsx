import React, { useEffect, useState } from "react";
import Rate from "./Rate";

const Rating = ({ setReview }) => {
  const [rating, setRating] = useState(5);
  useEffect(() => {
    setReview((prev) => ({
      ...prev,
      rate: rating,
    }));
  }, [rating]);
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col justify-center  gap-2">
          <h2 className="font-bold font-poppins text-xl">
            How would you rate it?:
          </h2>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p className="font-poppins">Rating - {rating}</p>
        </div>
      </div>
    </>
  );
};

export default Rating;
