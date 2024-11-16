import React from "react";
import dp from "../assets/dp.jpg";
import ScrollRevealComponent from "../utils/ScrollRevealComponent";

function ProfilePicture() {
  return (
    <ScrollRevealComponent>
      <div className="left-0 m-4 top-9">
        <img
          src={dp}
          className="w-32 h-32 mx-48 border-4 border-green-400 rounded-full sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 lg:mx-32" // Responsive sizing
          alt="Profile"
        />
      </div>
    </ScrollRevealComponent>
  );
}

export default ProfilePicture;
