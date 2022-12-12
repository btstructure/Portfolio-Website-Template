import React from "react";
import icons from "./icons";

function About() {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-300 to-purple-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-white text-center text-5xl p-4 font-bold">
            About me
          </h1>
        </div>
        <div>
          <p className="text-white text-center py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center">
          {icons.map(({ id, icon, name }) => (
            <img
              alt="icon"
              style={{ width: "90px", height: "90px" }}
              className="p-2 hover:scale-125 transform transition duration-500 ease-in-out"
              key={id}
              src={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

/* <div className="flex flex-col items-center">
<ul style={{ height: "100px", width: "100px" }}>
  {icons.map(({ id, icon }) => (
      <img src={icon} />
   
  ))}
</ul>
</div> */
