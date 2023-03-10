import React from "react";

function movieList() {
  return (
    <>
    <div className="w-full  shadow-md flex my-3 justify-between items-center p-4 px-6 h-28 border-b-2 border-green-500" >
      <div>
        <h1 className="text-4xl">Thor</h1>
        <p className="text-lg text-[#00000096]">Rating: 90/100</p>
      </div>
      <div>
        <p className="float-right text-lg text-[#00000096]">2.3 Hrs</p>
      </div>
    </div>
    </>
  );
}

export default movieList;
