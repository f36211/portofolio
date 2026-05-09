import SpotlightCard from "./card";
const project = [
  {
    name: "Ambalan Website",
    img: "ambalan.png",
    url: "https://ambalanuq.netlify.app/",
  },
  {
    name: "UQBRAVO website",
    img: "image.png",
    url: "https://uqbravo.xyz/",
  },
  {
    name: "Proyek Konstruksi Website",
    img: "image.png",
    url: "https://uqbravo.xyz/",
  },
  {
    name: "Sekolah Website",
    img: "sekolah.png",
    url: "https://uqbravo.xyz/",
  },
];

export default function Project() {
  return (
    <>
      <div className="bg-[#081b29] min-h-screen py-20 flex flex-col items-center">
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold mb-12 md:mb-20">
          My <span className="text-[#02aaef]">Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center px-6 md:px-12 w-full max-w-7xl mx-auto">
          {project.map((item) => (
            <div
              className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 rounded-2xl flex flex-col items-center shadow-xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm text-center text-white"
              key={item.name}
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-xl w-full h-48 md:h-56 object-cover"
              />
              <p className="text-lg md:text-xl text-center my-4 md:mb-6">
                {item.name}
              </p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <button className="w-40 sm:w-48 bg-[#02aaef] h-10 md:h-12 rounded-xl text-center text-black text-sm md:text-base font-semibold cursor-pointer transition hover:bg-white hover:text-black shadow-[0_0_10px_rgba(2,170,239,0.4)]">
                  Redirect
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
