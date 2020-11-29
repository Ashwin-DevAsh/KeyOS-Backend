import "./Header.css";
import Images from "../../assets/Images";

export default () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="top-round" />
        <img className="top-ring-blue" src={Images.ovalRectBlue} alt="" />

        <div className="landing-text">
          <h1>An inovation kiosk lockdown protection for android</h1>
        </div>

        <div className="mobile-image">
          <img src={Images.mobile}></img>
        </div>
      </div>
      <div className="bottom-text">
        <h1>KeyOS</h1>
      </div>
    </div>
  );
};
