import React from "react";

export default function About() {
  return (
    <div
      id="About"
      className="w-full bg-[#081b29] py-20 px-6 sm:px-10 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          About <span className="text-[#02aaef]">Me</span>
        </h2>

        <div className="relative flex items-center justify-center mb-10 mt-4">
          {/* Outer distinct circular arcs */}
          <div className="absolute inset-0 rounded-full border-[3px] border-t-transparent border-b-transparent border-l-[#02aaef] border-r-[#02aaef] scale-[1.25] md:scale-[1.3] transition-transform duration-500"></div>
          <div className="absolute inset-0 rounded-full border-[1px] border-t-[#02aaef] border-b-[#02aaef] border-l-transparent border-r-transparent scale-[1.15] md:scale-[1.2] opacity-50"></div>

          {/* Inner image */}
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[3px] border-[#02aaef] bg-gray-800 z-10 shadow-[0_0_15px_rgba(2,170,239,0.5)] flex items-center justify-center">
            {/* Using image.png as a placeholder for the profile pic */}
            <img
              src="image.png"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/250/02aaef/ffffff?text=Avatar";
              }}
            />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
          Frontend Developer!
        </h3>

        <p className="text-gray-300 text-center max-w-4xl mb-10 text-sm md:text-base leading-relaxed px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam
          iure, provident iste quos sequi vero excepturi impedit laboriosam nisi
          incidunt quisquam. Quae veritatis doloribus dolorum ratione eaque
          sapiente qui distinctio autem voluptate. Quis eum odio ducimus neque
          quisquam reiciendis. Ut animi accusamus quaerat labore beatae
          repellat, nisi mollitia voluptatem.
        </p>

        <button className="bg-[#02aaef] text-white font-bold px-5 py-2 text-sm rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(2,170,239,0.4)]">
          Read More
        </button>
      </div>
    </div>
  );
}
