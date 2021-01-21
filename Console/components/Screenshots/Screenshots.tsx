import React from "react";

import Carousel, {
  Dots,
  slidesToShowPlugin,
  CarouselProps,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { appScreenshots } from "../../assets/appScreenshots/appScreenshots";
import Images from "../../assets/Images";

export default function Screenshots() {
  const [page, setPage] = React.useState(0);

  var carosolProps: CarouselProps = {};

  return (
    <div className="screenshots-container">
      <div className="top-round-orange" />

      <div className="screenshot-heading">
        <h1>Screenshots</h1>
        {/* <div className="underline"></div> */}
      </div>
      <div className="screenshots">
        <div
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
            }
          }}
          className="arrow left"
        >
          <img
            style={{ opacity: page == 0 ? 0.4 : 1 }}
            src={Images.leftArrow}
            alt=""
          />
        </div>
        <Carousel
          value={page}
          className="carousel"
          itemWidth={300}
          onChange={(value) => {
            setPage(value);
          }}
          plugins={[
            "centered",
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: appScreenshots.length,
              },
            },
          ]}
        >
          {appScreenshots.map((item, idex, _) => {
            return <img className="screenshotImages" src={item} />;
          })}
        </Carousel>
        <div
          style={{ opacity: page == appScreenshots.length - 1 ? 0.4 : 1 }}
          onClick={() => {
            if (page < appScreenshots.length - 1) {
              setPage(page + 1);
            }
          }}
          className="arrow right"
        >
          <img src={Images.rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}
