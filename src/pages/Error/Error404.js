import React from "react";
import Typewriter from "typewriter-effect";

import "./index.scss";

const Error404 = () => {
  return (
    <div className="error">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-error">ERROR ! 😯 </span>`)
            .pauseFor(500)
            .deleteAll()
            .start();
        }}
      ></Typewriter>
    </div>
  );
};

export default Error404;
