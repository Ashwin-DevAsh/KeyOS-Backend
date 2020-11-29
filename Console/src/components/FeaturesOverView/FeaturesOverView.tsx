import React from "react";
import "./FeaturesOverView.css";
import Images from "../../assets/Images";

export default () => {
  var features: Feature[] = [
    new Feature(
      "Basic",
      `Kiosk mode typically runs a single app or few selected applications,
       and users are prevented from accessing any features or functions on the device outside 
       of the KeyOS. It’s easy for administrators to create kiosk settings that run more than one app`,
      Images.apps
    ),
    new Feature(
      "Advance",
      `With keyOS you can block unwanted websites using keyOS web filter 
       and block unwanted incoming and outgoing calls with keyOS call blocker. 
       You can also configure whitelist or blacklist for websites and contacts`,
      Images.browser
    ),
    new Feature(
      "Customize",
      `KeyOS allows you to customize the locked homepage. 
      Alter the look and feel of your account to match your branding and have it as a wallpaper on the locked device. 
      It will take your branding one step ahead`,
      Images.paint
    ),
  ];

  return (
    <div className="FeaturesOverview">
      <div className="featureOverview-selector" />
      <div className="heading">
        <h2>{"The right tool\n for the moment"}</h2>
        <h5>
          KeySO is type of security tool used to monitor, manage, and secure
          android devices. KeyOS allows you to lockdown Android devices into
          kiosk mode, restrict access to apps & websites on devices to ensure
          device and data security
        </h5>
        <div className="top-round-green" />

        <div className="ovel-rect">
          <img src={Images.ovelrect} />
        </div>

        <div className="featuresContainer">
          {features.map((item, index, _) => {
            return featuresTile(item.name, item.para, item.imagePath);
          })}
        </div>
      </div>
    </div>
  );
};

function featuresTile(title: String, para: String, imagePath: any) {
  return (
    <div className="featureTile">
      <img
        src={imagePath}
        style={{ marginTop: 30, marginBottom: 5, width: 75, height: 75 }}
      />
      <h3>{title}</h3>
      <div style={{ marginTop: 20, marginRight: 30, marginLeft: 30 }}>
        <h4 style={{ fontWeight: 400, opacity: 0.7 }}>{para}</h4>
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
