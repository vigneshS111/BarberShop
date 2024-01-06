import React, { useState } from "react";
import commentImg from "../assets/comment.png";
import { IoMdStar } from "react-icons/io";
import style4 from "../assets/style4.png";
import { RxCross2 } from "react-icons/rx";

const ReviewCard = ({
  name,
  image,
  comment,
  rating,
  reviewPage,
  hairStyleImg,
}) => {
  const [Modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div
        className={`flex relative flex-col justify-center text-wrap font-poppins rounded-2xl  gap-2  px-8 py-5 ${
          reviewPage
            ? "w-[600px] shadow-lg bg-slate-50"
            : "max-w-[350px] max-h-[400px] bg-white"
        } `}
      >
        <div className="flex flex-row items-center justify-between gap-8">
          <h3 className="font-semibold z-20 tracking-wide">{name}</h3>
          <img
            src={image}
            className="w-[60px] h-[60px] object-cover rounded-full "
          />
        </div>
        <div className="flex flex-row gap-1 items-center">
          <IoMdStar className="text-yellow-500 w-[25px] h-[25px] pb-1" />
          <p className="font-poppins font-semibold">{rating}</p>
        </div>
        {hairStyleImg && (
          <img
            src={hairStyleImg}
            className="w-[80px] h-[100px] object-cover rounded-xl cursor-pointer"
            onClick={() => {
              setModal(true);
            }}
          />
        )}
        <p className="font-light  text-slate-gray">{comment}</p>
        <img
          src={commentImg}
          className="w-[60px] h-[60px] object-contain absolute top-3 left-2 z-10"
        />
      </div>
      {Modal && (
        <div className="fixed inset-0 flex items-center justify-center z-[101] bg-slate-50">
          <div className="flex flex-col gap-4 relative">
            <div className="absolute top-[8px] left-[8px] bg-black rounded-full">
              <RxCross2
                className="md:w-[32px] md:h-[32px] w-[40px] h-[40px] text-white cursor-pointer "
                onClick={closeModal}
              />
            </div>

            <img
              src={hairStyleImg}
              className=" object-cover max-w-[600px] max-h-[400px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
