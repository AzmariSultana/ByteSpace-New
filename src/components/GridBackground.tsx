import React from "react";

interface GridBackgroundProps {
  height?: number;
  width?: number;
  className?: string;
  opacity?: number;
}

export default function GridBackground({
  height = 1024,
  width = 1440,
  className = "",
  opacity = 0.12,
}: GridBackgroundProps) {
  const vLines: number[] = [];
  for (let x = 0; x <= width; x += 120) {
    vLines.push(x);
  }

  let hLines: number[] = [];
  if (height === 1024 && width === 1440) {
    hLines = [0, 120, 240, 360, 480, 606, 720, 840, 960];
  } else {
    for (let y = 0; y <= height; y += 120) {
      hLines.push(y);
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${width}px`,
        height: `${height}px`,
        opacity: opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {vLines.map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={height}
          stroke="#ffffff"
          strokeWidth="2"
        />
      ))}
      {hLines.map((y) => (
        <line
          key={`h-${y}`}
          x1={0}
          y1={y}
          x2={width}
          y2={y}
          stroke="#ffffff"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
