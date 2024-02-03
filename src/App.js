import Navbar from "./components/navbar/Navbar";
import Background from "./components/navbar/Background";
import RowOfBoxes from "./components/RowOfBoxes";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [prevPlanet, setPrevPlanet] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //

  const planets = [
    {
      id: 0,
      text: "Planets",
      imagePath: "./images/solarsystem.webp",
      facts: [
        { id: 0, text: "Click the planet names" },
        { id: 1, text: "Read the facts" },
        { id: 2, text: "Enjoy the site!" },
      ],
    },
    {
      id: 1,
      text: "Mercury",
      imagePath: "./images/mercury.jpg",
      facts: [
        { id: 0, text: "4,880" },
        { id: 1, text: "88" },
        { id: 2, text: "167" },
      ],
    },
    {
      id: 2,
      text: "Venus",
      imagePath: "./images/venus.webp",
      facts: [
        { id: 0, text: "12,104" },
        { id: 1, text: "225" },
        { id: 2, text: "464" },
      ],
    },
    {
      id: 3,
      text: "Earth",
      imagePath: "./images/earth.webp",
      facts: [
        { id: 0, text: "12,742" },
        { id: 1, text: "365" },
        { id: 2, text: "15" },
      ],
    },
    {
      id: 4,
      text: "Mars",
      imagePath: "./images/mars.webp",
      facts: [
        { id: 0, text: "6,779" },
        { id: 1, text: "687" },
        { id: 2, text: "-65" },
      ],
    },
    {
      id: 5,
      text: "Jupiter",
      imagePath: "./images/jupiter.jpg",
      facts: [
        { id: 0, text: "139,820" },
        { id: 1, text: "4,333" },
        { id: 2, text: "-110" },
      ],
    },
    {
      id: 6,
      text: "Saturn",
      imagePath: "./images/saturn.jpg",
      facts: [
        { id: 0, text: "116,460" },
        { id: 1, text: "10,759" },
        { id: 2, text: "-140" },
      ],
    },
    {
      id: 7,
      text: "Uranus",
      imagePath: "./images/uranus.jpg",
      facts: [
        { id: 0, text: "50,724" },
        { id: 1, text: "30,687" },
        { id: 2, text: "-195" },
      ],
    },
    {
      id: 8,
      text: "Neptune",
      imagePath: "./images/neptune.webp",
      facts: [
        { id: 0, text: "49,244" },
        { id: 1, text: "60,190" },
        { id: 2, text: "-200" },
      ],
    },
  ];

  function clickHandle(id) {
    console.log(id);
    setPrevPlanet(currentPlanet);
    setCurrentPlanet(id);
  }

  return (
    <div>
      <Navbar
        windowWidth={windowWidth}
        planets={planets}
        clickHandle={clickHandle}
      />
      {windowWidth > 768 ? (
        <div className="flex gap-60 absolute h-screen w-screen items-center justify-center">
          <RowOfBoxes
            currentPlanet={currentPlanet}
            prevPlanet={prevPlanet}
            planets={planets}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-10 absolute h-screen w-screen items-center justify-end mb-10">
          <RowOfBoxes
            currentPlanet={currentPlanet}
            prevPlanet={prevPlanet}
            planets={planets}
          />
        </div>
      )}

      <Background
        windowWidth={windowWidth}
        planets={planets}
        currentPlanet={currentPlanet}
        prevPlanet={prevPlanet}
      />
    </div>
  );
}
