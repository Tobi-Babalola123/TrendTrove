import React, { useEffect } from "react";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import "./Extrapages.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="extrapage">
      <Navbar reloadnavbar={false} />
      <SingleBanner
        heading="About Us"
        bannerimage="https://i.ibb.co/L6n5tP5/IMG-0131.jpg"
      />
      <div className="pgleft pgcommon">
        <img src="https://i.ibb.co/XFswt0d/IMG-0131-modified.png" alt="noimg" />

        <div>
          <h1>Our Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="pgright pgcommon">
        <img src="https://i.ibb.co/pdBsG8Y/IMG-0133-modified.png" alt="noimg" />

        <div>
          <h1>Who are we</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="pgleft pgcommon">
        <img src="https://i.ibb.co/tmczJvR/IMG-0127-modified.png" alt="noimg" />

        <div>
          <h1>Our Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default About;
