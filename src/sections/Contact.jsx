import React from "react";
import Background from "../assets/Background.png";

const Contact = () => {
  return (
    <div className="-mt-2 w-full overflow-hidden p-0 leading-none">
      <img
        src={Background}
        alt="Contact section background"
        className="block h-auto w-full scale-110 rounded-none"
      />
    </div>
  );
};

export default Contact;
