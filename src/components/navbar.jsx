import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="p-5 flex items-center justify-between px-6 md:px-15 text-[#F3F4F4] m-0 fixed top-0 z-40 w-full shadow-xl"
        style={{
          background:
            "linear-gradient(-135deg, #02aaef 0%, #02aaef 50%, #C5138D 80%, #C5138D 100%)",
        }}
      >
        {/* cspell: disable-next-line */}
        <div className="font-bold text-2xl">Fathur</div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-10 cursor-pointer text-lg font-bold">
            <li className="hover:text-black transition-colors">
              <a href="#Home" className="outline-none">
                Home
              </a>
            </li>
            <li className="hover:text-black transition-colors">
              <a href="#About" className="outline-none">
                About
              </a>
            </li>
            <li className="hover:text-black transition-colors">
              <a href="#Skills" className="outline-none">
                Skills
              </a>
            </li>
            <li className="hover:text-black transition-colors">
              <a href="#Project" className="outline-none">
                Project
              </a>
            </li>
            <li className="hover:text-black transition-colors">
              <a href="#Contact" className="outline-none">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-50 w-64 h-full transition-transform duration-300 md:hidden bg-[#081b29] border-r border-[#02aaef]/30 shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-6 px-2 mt-2">
            <span className="font-bold text-2xl text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#Home"
                className="flex items-center px-2 py-3 text-white rounded-lg hover:bg-[#02aaef]/20 hover:text-[#02aaef] group transition-all text-lg font-bold"
              >
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#About"
                className="flex items-center px-2 py-3 text-white rounded-lg hover:bg-[#02aaef]/20 hover:text-[#02aaef] group transition-all text-lg font-bold"
              >
                <span className="ms-3">About</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#Skills"
                className="flex items-center px-2 py-3 text-white rounded-lg hover:bg-[#02aaef]/20 hover:text-[#02aaef] group transition-all text-lg font-bold"
              >
                <span className="ms-3">Skills</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#Project"
                className="flex items-center px-2 py-3 text-white rounded-lg hover:bg-[#02aaef]/20 hover:text-[#02aaef] group transition-all text-lg font-bold"
              >
                <span className="ms-3">Project</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                href="#Contact"
                className="flex items-center px-2 py-3 text-white rounded-lg hover:bg-[#02aaef]/20 hover:text-[#02aaef] group transition-all text-lg font-bold"
              >
                <span className="ms-3">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
