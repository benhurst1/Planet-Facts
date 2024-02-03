import { useState } from "react";

export default function Navbar({ windowWidth, planets, clickHandle }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {windowWidth > 768 ? (
        <div className="h-20 px-[50px] mt-10 flex items-center text-white justify-center absolute w-full z-20 backdrop-blur-[10px] opacity-100">
          <nav>
            {planets.map((planet) => (
              <button
                className="lg:p-5 md:p-3 lg:text-[15px] md:text-[12px] cursor-pointer transform duration-500 hover:scale-115 hover:translate-y-[-5px]"
                key={planet.id}
                onClick={() => clickHandle(planet.id)}
              >
                {planet.text.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      ) : (
        <div>
          <button
            className="absolute p-4 top-2 rounded-2xl right-5 z-30 text-white"
            onClick={() => toggleMenu()}
          >
            <img src="./menu-custom.png" alt="" width={30} />
          </button>
          <div
            className={`h-screen w-screen pt-20 flex flex-col text-white absolute z-20 backdrop-blur-[10px] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <nav className={`flex flex-col gap-5`}>
              {planets.map((planet) => (
                <button
                  className="lg:p-5 md:p-3 lg:text-[15px] md:text-[12px] cursor-pointer transform duration-500 hover:scale-115 hover:translate-y-[-5px]"
                  key={planet.id}
                  onClick={() => {
                    clickHandle(planet.id);
                    setIsOpen(false);
                  }}
                >
                  {planet.text.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
