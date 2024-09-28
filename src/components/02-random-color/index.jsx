import { useEffect, useState } from "react";
import './styles.css'

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i=0; i<6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }

    // console.log(hexColor);
    setColor(hexColor)

  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=> {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
    <h1>02. Random Color</h1>
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: color
      }}
    >
      <button className="btns" onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
      <button className="btns" onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
      <button className="btns" onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random color</button>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',
        fontSize: "60px",
        flexDirection: 'column',
        gap: "20px",
      }}>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
    </>
  );
}
