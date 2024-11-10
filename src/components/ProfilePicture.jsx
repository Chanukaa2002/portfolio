import React from "react";
import dp from "../assets/dp.jpg";

function ProfilePicture() {
  return (
    <div className="left-0 m-4 w-72 h-72 top-16">
      {" "}
      {/* Use absolute positioning */}
      <img src={dp} className="border-4 border-green-400 rounded-full" />
    </div>
  );
}

export default ProfilePicture;
