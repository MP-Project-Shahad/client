import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footerMainDiv">
      <div className="rightsDiv">
        <p dir="rtl">كل الحقوق محفوظة لمالكها الاصلي &copy;</p>
        <p>&hearts; صنع بحب من قِبل: شَهَد</p>
      </div>
      {/* <div className="signatureDiv"></div> */}
    </div>
  );
};

export default Footer;
