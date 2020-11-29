import "./About.css";

export default function () {
  return (
    <div className="about-outer">
      <div className="about-container">
        <div className="about-keyos">
          <h1>KeyOS</h1>
          <h4>
            Distributing company-owned devices to employees ? KeyOS gives you
            greater flexibility and control to manage your business devices.
            KeyOS is a management solution that’s just right for your business.
          </h4>
        </div>
        <div className="service-agriment">
          <h1>Service agreement</h1>
          <a href="https://www.devash.tech/keyos/privacypolicy">
            {" "}
            <h4>{">"} Privacy policy</h4>
          </a>
          <a href="https://www.devash.tech/keyos/privacypolicy">
            {" "}
            <h4>{">"} Tearms and conditions</h4>
          </a>
          <a href="https://www.devash.tech">
            {" "}
            <h4>{">"} Developer contact</h4>
          </a>
        </div>
        <div className="company">
          <h1>Company</h1>
          <h3
            style={{
              padding: 0,
              margin: 0,
              marginTop: 10,
              opacity: 0.6,
              fontWeight: 600,
            }}
          >
            {" "}
            DevAsh private limited
          </h3>
          <h4>
            No. 234, 3rd main road, Mr. Nager <br />
            Chennai - 600118 <br />
            Tamil nadu
          </h4>
        </div>
      </div>
      <div className="copyright-container">
        <h5>
          Copyrights © 2020. All rights reserved by{" "}
          <a href="https://www.devash.tech">DevAsh Private Limited</a>
        </h5>
      </div>
    </div>
  );
}
