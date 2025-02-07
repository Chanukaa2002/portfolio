import React from "react";
import dp from "../assets/dp2.png";
import ScrollRevealComponent from "../utils/ScrollRevealComponent";

function ProfilePicture() {
  return (
    <ScrollRevealComponent>
      <div className="left-0 m-4 top-9">
        <img
          src={dp}
          className="w-40 h-40 p-2 mx-48 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:mx-32"
          alt="Profile"
        />
      </div>
    </ScrollRevealComponent>
  );
}





export default ProfilePicture;
