import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import OurTeam from "./sections/OurTeam";
import Reviews from "./sections/Reviews";
import BookNow from "./sections/BookNow";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
const App = () => {
  const [info, setInfo] = useState(null);
  const [uid, setUid] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setInfo({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        setUid(user.uid);
      } else {
        setInfo(null);
        setUid(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [auth, setInfo]);

  return (
    <main className="w-full overflow-hidden">
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Nav
            info={info}
            setInfo={setInfo}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <section id="bookNow" className="flexStart">
        <div className="boxWidth ">
          <BookNow userUID={uid} />{" "}
        </div>
      </section>
    </main>
  );
};

export default App;
