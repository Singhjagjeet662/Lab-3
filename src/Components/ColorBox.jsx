import { useState } from "react";

export default function ColorBox({ colors }) {
  //   const hue = Math.random() * 360;
  //   const lightness = Math.random() * 75;
  //   const randomColor = `hsl(${hue}, 100%, ${25 + lightness}%)`;
  const [currentColor, setCurrentColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const handleClick = () => {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div
      onClick={handleClick}
      style={{ width: "50px", height: "50px", backgroundColor: currentColor }}
    ></div>
  );
}
