import React from "react";
import "./FeaturesOverView.css";
import Images from "../../assets/Images";

export default () => {
  var features: Feature[] = [
    new Feature(
      "enterprise",
      `Distribute enterprise apps safely among the employees without any possibility of unethical/unprofessional and illegal use of the device. 
      Have a personalized and dedicated home screen with the help of KeyOS kiosk lockdown app that lets the employee use a device in a secured manner.`,
      Images.apps
    ),
    new Feature(
      "students",
      ` Using KeyOS, different kiosk modes can be created, and every mode can be customized as per every individual student’s requirement.
       It helps lockdown and hides all the unintended apps making sure that a student is more focused and does not explore any unplanned activity.`,
      Images.browser
    ),
    new Feature(
      "productivity",
      ` By restricting access only to specific apps, the kiosk mode helps users to focus on the task at hand, that in return boosts the overall
       productivity and work efficiency. With KeyOS you can also set a time lime for an app and also you can block unwanted pages`,
      Images.paint
    ),
  ];

  return (
    <div className="FeaturesOverview">
      <div className="featureOverview-selector" />
      <div className="heading">
        <div
          className="heading-inner"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>{"The right tool\n for the moment"}</h2>

          <h4 style={{ marginTop: 30, opacity: 0.7, textAlign: "center" }}>
            Avaliable for android
          </h4>
        </div>
        <div className="top-round-green" />
        <div className="ovel-rect">
          <img src={Images.ovelrect} />
        </div>
      </div>
      <div className="featuresContainer">
        {features.map((item, index, _) => {
          return featuresTile(item.name, item.para, item.imagePath);
        })}
      </div>
    </div>
  );
};

function featuresTile(title: String, para: String, imagePath: any) {
  return (
    <div className="featureTile">
      <h1>
        for
        <br />
        {title}
      </h1>
      <div className="para-container">
        <h4>{para}</h4>
      </div>
    </div>
  );
}

export class Feature {
  name: String = "";
  para: String = "";
  imagePath: any = null;
  constructor(name: String, para: String, imagePath: any) {
    this.name = name;
    this.imagePath = imagePath;
    this.para = para;
  }
}
