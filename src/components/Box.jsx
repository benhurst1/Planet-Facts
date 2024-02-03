export default function Box({
  currentPlanet,
  prevPlanet,
  planets,
  factNumber,
  fact,
}) {
  return (
    <div
      className={`p-10 outline z-10 w-40 h-40 text-white backdrop-blur-[10px] backdrop-brightness-75 transform-all duration-500`}
    >
      <div className="flex flex-col justify-between w-full h-full items-center">
        {currentPlanet !== 0 && <h1>{fact}</h1>}
        <div className="flex gap-2">
          <p>{planets[currentPlanet]["facts"][factNumber]["text"]}</p>
          {fact === "Temperature" && currentPlanet !== 0 && <p>C</p>}
          {fact === "Diameter" && currentPlanet !== 0 && <p>km</p>}
        </div>
      </div>
    </div>
  );
}
