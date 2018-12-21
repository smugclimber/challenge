import React from "react";
// import "../../styles/Footer.css";

const Footer = () => (
  <div className="row mb-4">
    <div className="col-6 justify-content-start pl-4">
      <div copyrights="© 2017-2018 Company, Inc." className="mobile-footer">© 2017-2018 Company, Inc.<a href="/"> &middot; Privacy</a><a href="/"> &middot; Terms </a></div>
    </div>
    <div className="col-6 d-flex justify-content-end pr-4">
      <div className="mobile-footer"><a href="/">Back to top</a></div>
    </div>
  </div>
);

export default Footer;