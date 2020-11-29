import React from "react";
import "./Features.css";
import Images from "../../assets/Images";
import { Feature } from "../FeaturesOverView/FeaturesOverView";

export default () => {
  const heading = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {}, []);

  var featuresLeft: Feature[] = [
    new Feature(
      "Kiosk Mode",
      `Lockdown your android devices to a single app 
       or multiple applications of your choice`,
      Images.featureKioskMode
    ),
    new Feature(
      "Web filter",
      `KeyOS web filter that allows you to browse securely and only allow through whitelisted websites`,
      Images.featureWebBrowser
    ),
    new Feature(
      "Call blocker",
      `With keyOS call blocker you can block unwanted incoming and outgoing calls`,
      Images.featureCallBlocker
    ),
  ];
  var featuresRight: Feature[] = [
    new Feature(
      "Customize",
      `KeyOS allows you to customize the locked homepage. You can also add widgets and shortcuts`,
      Images.featureCustomize
    ),
    new Feature(
      "Edit app",
      `With keyOS you can set time limit, block unwanted pages and hide icon for apps`,
      Images.featureEditApp
    ),
    new Feature(
      "Peripheral",
      `Configure wifi, bluetooth, screen orientation, sound settings with keyOS`,
      Images.featureSettings
    ),
  ];

  return (
    <div className="features">
      <div className="top-text-features">
        <h1 className="feature-heading" ref={heading}>
          Features
        </h1>
      </div>
      <div className="featuresImage">
        <div className="left-features">
          {featuresLeft.map((item, index, list) => {
            return featureTile(item.imagePath, item.name, item.para);
          })}
        </div>
        <img src={Images.mobileFeatures} alt="" />
        <div className="right-features">
          {" "}
          {featuresRight.map((item, index, list) => {
            return featureTile(item.imagePath, item.name, item.para);
          })}
        </div>
      </div>
    </div>
  );
};

function featureTile(image: any, title: String, subTitle: String) {
  return (
    <div className="fiture-listTile">
      <img src={image} />
      <div className="texts">
        <h4 style={{ padding: 0, margin: 0, textAlign: "start" }}>{title}</h4>
        <h5
          style={{
            padding: 0,
            margin: 0,
            textAlign: "start",
            marginTop: 5,
            fontWeight: 500,
            opacity: 0.6,
          }}
        >
          {subTitle}
        </h5>
      </div>
    </div>
  );
}
