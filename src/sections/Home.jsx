import Experience from "./Experience";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Services from "./Services";
import Welcome from "./Welcome";
import Welcome2 from "./Welcome2";
import WhyChooseUs from "./WhyChooseUs";
const Home = () => {
  return (
    <>
      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Hero />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          <WhyChooseUs />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Pricing />
        </div>
      </section>

      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Welcome />
        </div>
      </section>
      <section className="flexStart">
        <div className="boxWidth ">
          {" "}
          <Welcome2 />
        </div>
      </section>
      <section className="flexStart">
        <div className="boxWidth relative">
          {" "}
          <Services />
          <Experience />
        </div>
      </section>
    </>
  );
};

export default Home;
