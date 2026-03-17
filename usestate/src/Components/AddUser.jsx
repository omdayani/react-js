import { useState } from "react";

const AddUser = () => {
  const [Data, setdata] = useState([
    { name: "Aarav Patel", email: "aaravpatel@gmail.com", color: "bg-red-400" },
    { name: "Riya Shrma", email: "riyashrma@gmail.com", color: "bg-teal-400" },
    {
      name: "Vivaan Maheta",
      email: "vivaanmaheta@gmail.com",
      color: "bg-blue-800",
    },
  ]);

  function Add() {
    let arr = [...Data]; // copy array

    arr.push({
      name: "Ananaya Gupta",
      email: "ananayagupta@gmail.com",
      color: "bg-pink-500",
    });

    if (Data[3]?.name === "Ananaya Gupta") {
      return alert("You can only use btn at a one time");
    }
    setdata(arr);
  }

   function Add2() {
    let arr = [...Data]; //copy array

      if (Data.length === 6) {
            alert("All user rendered..!");
      return;
    }
        if((Data[3]?.name ==="Thala" && Data[4]?.name ==="Rohit") || (Data[4]?.name ==="Thala" && Data[5]?.name ==="Rohit")){
        alert("You can only use btn at a one time..!")
        return;
    }
    let arr2 = [{
      name: "Thala",
      email: "thala@gmail.com",
      color: "bg-yellow-200",
    } , {
        name : "Rohit",
        email : "rohit@gmail.com",
        color: "bg-blue-500",
    }]
    arr.push(...arr2);
    setdata(arr);
}
  return (
    <>
      <section className="flex flex-wrap justify-center items-center gap-6 my-10">
        {Data.map((user) => {
          return (
            <div
              className={`w-auto h-auto max-w-sm rounded-xl p-2 text-center fond-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}
            >
              <h1 className="bg-[#222] w-full rounded-xl px-4 py-2 ">
                {user.name}
              </h1>
              <h1 className="bg-[#222] w-full rounded-xl px-4 py-2 ">
                {user.email}
              </h1>
            </div>
          );
        })}
      </section>

      <div className="flex justify-center items-center">
        <button
          onClick={Add}
          className="bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all "
        >
          Add One More User
        </button>
      </div>
      <br />
      <div className="flex justify-center items-center">
        <button  onClick={Add2} className="bg-blue-600 text-center px-6 py-4 active:bg-blue-100 active:scale-95 active:text-blue-600 text-2xl font-bold rounded-xl transition-all ">
          Add Secound 2 User
        </button>
      </div>
    </>
  );
};

export default AddUser;
