import Images from "../../assets/Images";

export default () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="top-round" />

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
