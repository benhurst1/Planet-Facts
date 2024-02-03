import Box from "./Box";

export default function RowOfBoxes({
  currentPlanet,
  prevPlanet,
  planets,
}) {
  return (
    <>
      <Box
        currentPlanet={currentPlanet}
        prevPlanet={prevPlanet}
        planets={planets}
        fact="Diameter"
        factNumber={0}
      />
      <Box
        currentPlanet={currentPlanet}
        prevPlanet={prevPlanet}
        planets={planets}
        fact="Earth days"
        factNumber={1}
      />
      <Box
        currentPlanet={currentPlanet}
        prevPlanet={prevPlanet}
        planets={planets}
        fact="Temperature"
        factNumber={2}
      />
    </>
  );
}
