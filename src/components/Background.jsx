import React from "react";

const Background = () => {
  return (
    <div className="bg bg-[#030014]  ">
      <div className="h-full w-full flex items-center justify-center relative">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[0] left-0 z-[-1] w-full h-full object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Background;
