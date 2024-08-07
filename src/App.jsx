import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./sections/Home";
import OurTeam from "./sections/OurTeam";
import Reviews from "./sections/Reviews";
import BookNow from "./sections/BookNow";
import NotFound from "./components/NotFound";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import Nav2 from "./components/Nav2";
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
          <Nav2 info={info} setInfo={setInfo} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/reviews" element={<Reviews info={info} />} />
        <Route path="*" element={<NotFound />} />
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
