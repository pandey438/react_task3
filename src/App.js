import "./App.css";
import React, { useState } from "react";

function App() {
  const colorPalette = [
    "#ff0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#F39C12",
    "#800080",
    "#FFB6C1",
    "#008000",
    "##FF6347",
    "#00CED1",
    "#8B4513",
    "#FF8C00",
    "#4682B4",
    "#FFD700",
  ];

  const [paletteColor, setPaletteColor] = useState("");

  const changePaletteColor = (color) => {
    setPaletteColor(color);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Color Picker</h1>
        <br />
        <div
          className="palatte"
          style={{ backgroundColor: paletteColor }}
        ></div>
        <div className="color_lines">
          {colorPalette.map((color, index) => (
            <button
              key={index}
              className="color_button"
              style={{ backgroundColor: color }}
              onClick={() => changePaletteColor(color)}
            ></button>
          ))}
        </div>
        <div className="colour_pick">
          <h4 id="i1">Pick a Colour</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
