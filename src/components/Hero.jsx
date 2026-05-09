import Lanyard from "./lanyard";
import SplitText from "./split_text.jsx";
import Shuffle from "./shuffle.jsx";
import { X } from "lucide-react";
export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <div
        className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 bg-[#081b29] p-6 pt-24 md:p-16 lg:px-40 relative"
        style={{ overflow: "hidden" }}
      >
        <div className="w-full flex md:hidden items-center justify-center mt-6 z-0">
          <div className="w-64 h-64 rounded-full border-[4px] border-[#02aaef] overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uuWbeLEQ1pplRRzDKfMaJE_UrUh5_JHtnQ&s"
              alt="Fathur Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <p>
            <Shuffle
              className="text-white text-4xl sm:text-5xl md:text-7xl font-bold"
              text="Hi, Im Fathur"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
          </p>

          <SplitText
            text="Frontend Developer"
            className="text-xl sm:text-2xl md:text-3xl text-[#02aaef] font-bold mt-2 md:mt-0"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-white text-sm md:text-base w-full max-w-lg mt-6 md:mt-8 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            consequuntur, cumque ullam repudiandae veniam aperiam voluptates
            eveniet illum minus quam unde dolorem nostrum perferendis maxime cum
            animi, minima quasi eum!
          </p>
          <div className="flex gap-4 mt-8 md:mt-10">
            <button className="bg-[#C5138D] px-6 py-3 rounded-md font-bold text-lg md:text-xl transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(197,19,141,0.5)]">
              About
            </button>
            <button className="border-[#02aaef] border-[2px] bg-transparent px-6 py-3 rounded-md font-bold text-lg md:text-xl text-[#02aaef] transition-all hover:scale-105 hover:bg-[#02aaef] hover:text-black hover:shadow-[0_0_15px_rgba(2,170,239,0.5)]">
              Skills
            </button>
          </div>
        </div>
        <div className="hidden w-full h-[300px] md:h-[600px] md:absolute md:right-10 lg:right-32 md:w-[400px] lg:w-[500px] z-0 md:flex items-center justify-center -mt-10 md:mt-0 relative">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>

        {/* Mobile Profile Image Replacement */}
      </div>
    </>
  );
}
