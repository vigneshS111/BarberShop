import React, { useState } from "react";
import bookNow from "../assets/bookNow.png";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore"; // Add doc and setDoc to the imports
import { auth, firestore } from "../firebase.config.js";
const BookNow = ({ userUID }) => {
  const db = getFirestore();
  const [values, setValues] = useState({
    date: "",
    time: "",
    name: "",
    phoneNumber: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmission = async () => {
    console.log("Handling submission...");
    if (!values.name || !values.date || !values.time || !values.phoneNumber) {
      setErrorMsg("Fill all fields");
      return;
    }

    const dateFormatRegex = /^([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
    const timeFormatRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i;

    if (!dateFormatRegex.test(values.date)) {
      setErrorMsg("Invalid date format");
      return;
    }

    if (values.phoneNumber.length != 10) {
      setErrorMsg("Invalid phone number");
      return;
    }
    if (!timeFormatRegex.test(values.time)) {
      setErrorMsg("Invalid time format");
      return;
    }

    const [day, month, year] = values.date.split(".");
    const [hour, minutes, period] = values.time.split(/:| /);

    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10) - 1;
    const numericYear = parseInt(year, 10);
    const numericHour =
      (parseInt(hour, 10) % 12) + (period.toLowerCase() === "pm" ? 12 : 0);
    const numericMinutes = parseInt(minutes, 10);

    const enteredDate = new Date(
      numericYear,
      numericMonth,
      numericDay,
      numericHour,
      numericMinutes
    );
    const currentDate = new Date();

    if (enteredDate < currentDate) {
      setErrorMsg("Previous date or time");
      return;
    }

    setErrorMsg("");

    setSubmitButtonDisabled(true);

    try {
      setSubmitButtonDisabled(false);
      if (userUID) {
        const bookingCollectionRef = collection(db, "BookingInfo");
        await addDoc(bookingCollectionRef, {
          userId: userUID,
          name: values.name,
          date: values.date,
          time: values.time,
          phoneNumber: values.phoneNumber,
        });
      }
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitButtonDisabled(false);
    }
  };
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="flex md:flex-row flex-col ">
      <img
        src={bookNow}
        className="max-w-[350px] max-h-[400px] md:block hidden"
      />
      <div className="bg-blackVar w-full flex flex-col py-5 md:px-44 px-8 gap-5">
        <h2 className="text-wrap font-montserrat md:text-[45px] text-[40px] tracking-wide font-extrabold text-white flex justify-center ">
          BOOK NOW
        </h2>
        <div className="grid grid-cols-2  grid-rows-2 gap-6 font-montserrat tracking-wide">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-white">Date</label>

            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 outline-none transition duration-300 focus:border-slate-gray"
              placeholder="01.01.2024"
              value={values.date}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, date: event.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-white">Time</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 outline-none transition duration-300 focus:border-slate-gray"
              placeholder="10:00 AM"
              value={values.time}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, time: event.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-white">Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 outline-none transition duration-300 focus:border-slate-gray"
              placeholder="John Doe"
              value={values.name}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-white">Phone Number</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 outline-none transition duration-300 focus:border-slate-gray"
              placeholder="1234567890"
              value={values.phoneNumber}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  phoneNumber: event.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className=" flex justify-end items-center gap-4">
          <b className=" text-bold text-red-600">{errorMsg}</b>
          <button
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
            className=" border border-white text-white  tracking-wide font-montserrat rounded-md font-bold py-2 px-4 transition duration-100"
          >
            send
          </button>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-montserrat">
          <div className="bg-white p-10 rounded-md shadow-md">
            <p className="text-primary font-bold">
              {userUID
                ? "Sent! We will contact you shortly for confirmation"
                : "SignIn before booking!"}
            </p>
            <button
              onClick={closeSuccessModal}
              className="text-red-500 mt-2 border border-black py-[2px] rounded-md px-3"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
