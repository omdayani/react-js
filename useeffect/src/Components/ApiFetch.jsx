import React, { useState } from "react";

const ApiFetch = () => {

    const [Data1, setData1] = useState([])


  // method 1
  function Method1() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
      })
      .then((data) => {
        console.log(data);
        return setData1(data);
      });
    // .catch()
  }

  // method 2

  // method 3

  return (
    <>
      {/* MEthod 1 */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 font-bold bg-green-200">
        <h1 className="text-center text-3xl ">
          Method 1: fatch -then -then - catch
        </h1>

        <div className="bg-black p-4 w-full rounded-md overflow-auto h-144 "></div>
        <button
          className="w-36 px-4 py-2 text-center text-white bg-green-950 rounded-md font-bold text-xl active:bg-green-500 active:text-green-950 active:scale-95 transition-all "
          onClick={Method1}
        >
          Get Data 1
        </button>
      </section>

      {/* MEthod 2 */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 font-bold bg-blue-200">
        <h1 className="text-center text-3xl ">
          Method 2 : Async - Await - Fetch
        </h1>

        <div className="bg-black p-4 w-full rounded-md overflow-auto h-144 "></div>

        <button className="w-36 px-4 py-2 text-center text-white bg-blue-950 rounded-md font-bold text-xl active:bg-blue-500 active:text-blue-950 active:scale-95 transition-all">
          Get Data 2
        </button>
      </section>
      {/* MEthod 3 */}
      <section className="w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 font-bold bg-orange-200">
        <h1 className="text-center text-3xl ">
          Method 3 : Async - Await - Axios{" "}
        </h1>

        <div className="bg-black p-4 w-full rounded-md overflow-auto h-144 "></div>
        <button className="w-36 px-4 py-2 text-center text-white bg-orange-700 rounded-md font-bold text-xl active:bg-orange-500 active:text-orange-950 active:scale-95 transition-all">
          Get Data 3
        </button>
      </section>
    </>
  );
};

export default ApiFetch;
