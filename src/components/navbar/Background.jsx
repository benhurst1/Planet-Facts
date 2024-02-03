export default function Background({
  windowWidth,
  planets,
  currentPlanet,
  prevPlanet,
}) {
  function mapImages() {
    return planets.map((planet) => (
      <img
        className={`absolute h-screen w-screen transform-all object-center duration-1000 overflow-hidden ${
          currentPlanet === planet.id ? "opacity-100" : "opacity-0"
        } ${
          windowWidth > 768 ? "object-contain" : " min-h-screen object-cover"
        }`}
        src={planet.imagePath}
        key={planet.id}
        alt=""
      />
    ));
  }

  return (
    <div className="bg-black min-w-screen min-h-screen">{mapImages()}</div>
  );
}

//
