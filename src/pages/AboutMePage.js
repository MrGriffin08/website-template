import React from "react";
import stockPhoto from "../stockphoto.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen">
      <h1 className="text-6xl font-medium mb-5">About Me</h1>
      {/* image */}
      <img src={stockPhoto} alt="photo" className="w-96 h-56 my-10"/>
      {/*"about me" section */}
      <div className="bg-blue-200 min-w-56 max-w-96 font-bold flex justify-center px-5">TITLE</div>
      {/* bio */}
      <p className="w-96 px-5">a bunch of words about me</p>
      {/* hobbies and interests */}
      {/* To make a list:
      <ul>
        <li>item</li>
        <li>item</li>
      </ul> */}
      {/* <div className="bg-blue-500">
        <h1>Hobbies and interests</h1>
        <ul>
          <li>First thing</li>
          <li>second</li>
        </ul>
      </div> */}
      <div>
        <ul>
          <li>First thing</li>
          <li>second thing</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
