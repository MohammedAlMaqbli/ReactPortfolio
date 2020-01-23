import React from "react";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-container">
        <br />
        <br />
        <div className="collab">
          <div className="row">
            <div className="col-lg-12">
              <p className="more-info">
                Got an interesting project? I can help you{" "}
                <span className="main-color">.</span>
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="hr">
          <div className="row"></div>
        </div>
        <br />
        <br />
        <div className="info">
          <div className="row">
            <div className="col-lg-4" id="personal">
              <p className="">check my code @github</p>
              <h4 className="">MohammedAlMaqbli</h4>
              <br />
              <br />
            </div>
            <div className="col-lg-4" id="media">
              <p className="">follow me</p>
              <ul>
                <li id="fb" className="" data-wow-delay="0.4s">
                  fb
                </li>
                <li id="ig" className="" data-wow-delay="0.6s">
                  ig
                </li>
                <li id="tw" className="" data-wow-delay="0.8s">
                  tw
                </li>
                <li id="yt" className="" data-wow-delay="1s">
                  yt
                </li>
              </ul>
              <br />
              <br />
            </div>
            <div className="col-lg-4" id="address">
              <p className="">say hello</p>
              <h4 className="">mohammed.Almaqbli@gmail.com</h4>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
