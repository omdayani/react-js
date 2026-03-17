import React, { useState } from "react";

const login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function SubmitForm() {
    console.log("Data Send to Backend", {
      "Email:": Email,
      "password:": password,
    });
    setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      {/* Background Container - replace URL with your monstera image */}
      <div
        className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl flex border border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-photo/arabian-oud-attar-oil-perfume-260nw-2190219279.jpg')`,
        }}
      >
        {/* Left Section: Glassmorphism Overlay */}
        <div className="w-1/2 h-full backdrop-blur-md bg-black/40 p-16 flex flex-col justify-center border-r border-white/5">
          <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
            cezliar
          </h1>
          <h1 className="text-white text-6xl font-medium mb-6 ">
            Let's Get Started
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-md">
            Experience the timeless luxury of pure, alcohol-free attar.
            Distilled from the finest botanical ingredients using traditional
            methods, this concentrated perfume oil offers a deep, long-lasting
            fragrance that evolves beautifully with your unique body chemistry.
            Unlike synthetic sprays, our attar sits close to the skin, creating
            an intimate and captivating aura that lingers gently throughout the
            day.
          </p>
        </div>

        {/* Right Section: Form Overlay */}
        <div className="w-1/2 h-full bg-black/60 p-16 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-10">Sign up</h2>

          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              SubmitForm(); 
            }}
          >
           

            <div className="relative border-b border-zinc-600 pb-2 group">
              <input
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email"
                className="bg-transparent w-full text-zinc-100 placeholder-zinc-500 focus:outline-none transition-all"
              />
            </div>

            <div className="relative border-b border-zinc-600 pb-2 group">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Create Password"
                className="bg-transparent w-full text-zinc-100 placeholder-zinc-500 focus:outline-none transition-all"
              />
            </div>

           

            <button
              type="submit"
              className="w-full bg-[#00874e] hover:bg-[#00a35e] text-white font-semibold py-4 rounded-md transition-colors shadow-lg mt-4"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
