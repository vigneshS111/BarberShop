import ReviewCard from "../components/ReviewCard";
import { TopComments } from "../constants";
import { MdAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon
import Rating from "../components/Rating";
import { IoSendSharp } from "react-icons/io5";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { app, auth, firestore, provider } from "../firebase.config"; // Update the path to your Firebase config file
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Reviews = () => {
  const storage = getStorage(app);
  const [customerReviews, setCustomerReviews] = useState([]);
  useEffect(() => {
    // Reference to the "Reviews" collection
    const reviewsCollection = collection(firestore, "Reviews");

    // Create a listener to get real-time updates
    const unsubscribe = onSnapshot(reviewsCollection, (snapshot) => {
      const reviewsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCustomerReviews(reviewsData);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [review, setReview] = useState({ comment: "", rate: "", img: "" });
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const isReviewValid = review.comment.trim() !== "";
  const isRatingValid = review.rate !== "";
  const isPostButtonEnabled = isReviewValid && isRatingValid;

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);

      try {
        // Upload file to Firebase Storage
        const snapshot = await uploadBytes(storageRef, file);

        // Get download URL and set it in the 'img' field
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Update the state
        setReview((prev) => ({
          ...prev,
          img: downloadURL,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const removeImage = () => {
    setReview((prev) => ({
      ...prev,
      img: "",
    }));
  };
  const postReview = async () => {
    const user = auth.currentUser;

    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      // Create a new document in the "reviews" collection
      const docRef = await addDoc(collection(firestore, "Reviews"), {
        userId: user.uid,
        name: user.displayName,
        photoURL: user.photoURL,
        comment: review.comment,
        rate: review.rate + ".0", // Make sure to capture the rating value in your Rating component
        img: review.img,
        timestamp: new Date(),
      });

      console.log("Review added with ID: ", docRef.id);

      // Close the modal or reset the review state as needed
      setShowSuccessModal(false);
      setReview({ comment: "", rate: "", img: "" });
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-20 px-6 gap-10">
      {TopComments.map((item, key) => {
        return (
          <div className="flex justify-center" key={key}>
            <ReviewCard
              name={item.name}
              image={item.image}
              comment={item.comment}
              rating={item.rating}
              reviewPage={true}
            />
          </div>
        );
      })}
      {customerReviews.map((review) => (
        <div key={review.id} className="flex justify-center">
          <ReviewCard
            name={review.name}
            image={review.photoURL}
            comment={review.comment}
            rating={review.rate}
            reviewPage={true}
            hairStyleImg={review.img}
          />
        </div>
      ))}

      <div
        className="flex flex-col fixed bottom-20 cursor-pointer z-50"
        onClick={() => {
          setShowSuccessModal(true);
        }}
      >
        <div className="bg-reviewBtn w-[60px] h-[60px] rounded-full flex justify-center items-center">
          <MdAdd className="text-white w-[40px] h-[40px]" />
        </div>
      </div>
      <div>
        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-5">
            <div className="bg-white p-10 rounded-md shadow-xl max-md:w-full w-[750px] px-5 relative border border-slate-200">
              <div className="flex flex-col  md:px-5 px-3">
                <div className="flex flex-col gap-5">
                  <label className="font-bold text-white">Review</label>
                  <textarea
                    className="border border-gray-300 rounded-md px-4 py-2 outline-none transition duration-300 focus:border-slate-gray"
                    style={{ height: "80px" }}
                    placeholder="Enter your review here"
                    value={review.comment}
                    onChange={(event) =>
                      setReview((prev) => ({
                        ...prev,
                        comment: event.target.value,
                      }))
                    }
                  />
                  <Rating setReview={setReview} />
                  <label className="font-bold text-white">Image</label>
                  <div className="flex items-center">
                    <label
                      className={`cursor-pointer text-blue-500 ${
                        review.img ? "text-green-500" : ""
                      }`}
                    >
                      {review.img ? "Image added ✓" : "+ Add your look"}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    {review.img && (
                      <button
                        className="ml-2 flex items-center text-red-500 cursor-pointer"
                        onClick={removeImage}
                      >
                        <AiOutlineClose className="mr-1" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center  ]">
                  <div
                    className={`bg-blue-200 flex flex-row  gap-3 px-4 py-3 rounded-xl cursor-pointer ${
                      isPostButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={isPostButtonEnabled ? postReview : undefined}
                  >
                    <p className="text-xl font-semibold">
                      {isPostButtonEnabled ? "Post" : "Fill in review"}
                    </p>
                    <IoSendSharp className="text-blue-500 w-[30px] h-[30px]" />
                  </div>
                </div>
              </div>
              <RxCross2
                className="w-[32px] h-[32px] absolute top-5 cursor-pointer"
                onClick={closeSuccessModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
