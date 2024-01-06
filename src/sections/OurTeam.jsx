import React from "react";
import AboutUs from "./AboutUs";
import OurBarbers from "./OurBarbers";
const OurTeam = () => {
  return (
    <>
      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <AboutUs />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          <OurBarbers />
        </div>
      </section>
    </>
  );
};

export default OurTeam;
