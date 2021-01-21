import React from "react";
import Images from "../../assets/Images";
export default () => {
  return (
    <div className="download">
      <div className="text-container">
        <h1>Download Our App</h1>
        <h4>
          The enrollment require only download and install KeyOS Kiosk Lockdown
          application. Open Google Play store to download and install KeyOS
          Kiosk Lockdown app
        </h4>
        <img
          onClick={() => {
            const newWindow = window.open(
              "https://play.google.com/store/apps/details?id=tech.DevAsh.keyOS",
              "_blank",
              "noopener,noreferrer"
            );
            if (newWindow) newWindow.opener = null;
          }}
          style={{ height: 60, cursor: "pointer" }}
          src={Images.googlePlayBadge}
          alt=""
        />
      </div>
    </div>
  );
};
