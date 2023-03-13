import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap justify-center bg-no-repeat h-[76vh]">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div className="shimmer-block" key={index}>
            <div className="h-40 w-60 m-2 bg-gray-200"></div>
            <div className="h-6 w-60 m-2 bg-gray-200 rounded-md">
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ShimmerUi;
