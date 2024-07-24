import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen p-6 text-white">
      <h1 className="text-4xl font-extrabold mb-4 animate-bounce">
        Hello, I am Sharan Balla
      </h1>
      <img
        src="IMG_9379.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full mb-4 object-cover transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      />
      <h1 className="text-2xl font-semibold mb-2 animate-pulse">
        I like playing chess
      </h1>
      <h2 className="text-xl font-semibold mb-2">I like playing PlayStation</h2>
      <h3 className="text-lg font-semibold">Favorite food: Biryani</h3>

      <div className="mt-6">
        <button className="px-4 py-2 bg-purple-700 rounded-full font-bold hover:bg-purple-800 transition-colors duration-300 mr-4">
          Follow
        </button>
        <button className="px-4 py-2 bg-pink-700 rounded-full font-bold hover:bg-pink-800 transition-colors duration-300">
          Message
        </button>
      </div>

      <div className="mt-10 space-y-4 text-center">
        <p className="text-2xl font-bold">Fun Facts:</p>
        <p className="text-lg font-semibold">
          I can solve a Rubik's Cube in under a minute!
        </p>
        <p className="text-lg font-semibold">
          I have a collection of over 100 comic books.
        </p>
        <p className="text-lg font-semibold">
          I once won a hot dog eating contest!
        </p>
      </div>

      <div className="mt-10">
        <p className="text-2xl font-bold">Random Joke:</p>
        <p className="text-lg mt-2 animate-spin-slow font-semibold">
          Why don't scientists trust atoms? Because they make up everything!
        </p>
      </div>
    </div>
  );
};

export default Page;
