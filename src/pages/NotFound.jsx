import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <svg className="mx-auto"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="127.96"
        height="132.95"
        viewBox="0 0 127.96 132.95"
      >
        <path
          d="M16.05,27H80.43a45,45,0,0,1,45,45v58.46a0,0,0,0,1,0,0H2.56a0,0,0,0,1,0,0V40.44A13.49,13.49,0,0,1,16.05,27Z"
          fill="#212025"
        />
        <path
          d="M16.05,27H80.43a45,45,0,0,1,45,45v58.46a0,0,0,0,1,0,0H2.56a0,0,0,0,1,0,0V40.44A13.49,13.49,0,0,1,16.05,27Z"
          fill="none"
          stroke="#cb5930"
          stroke-miterlimit="10"
          stroke-width="5.13"
        />
        <line
          x1="55.28"
          y1="7.58"
          x2="55.28"
          y2="26.95"
          fill="none"
          stroke="#cb5930"
          strokeMiterlimit="10"
          strokeWidth="5.13"
        />
        <circle cx="55.28" cy="7.58" r="7.58" fill="#cb5930" />
        <polygon
          points="47.71 71.39 44.1 75.14 34.94 66.32 26.12 75.47 22.37 71.86 31.19 62.7 22.04 53.88 25.65 50.14 34.8 58.96 43.63 49.8 47.38 53.41 38.55 62.57 47.71 71.39"
          fill="#cb5930"
        />
        <polygon
          points="99.86 71.39 96.25 75.14 87.09 66.32 78.27 75.47 74.52 71.86 83.34 62.7 74.19 53.88 77.8 50.14 86.95 58.96 95.78 49.8 99.53 53.41 90.7 62.57 99.86 71.39"
          fill="#cb5930"
        />
        <polyline
          points="12.31 111.92 22.03 91.16 40.41 111.92 50.42 94.9 67.22 114.64 75.94 91.16 98.88 114.64 108.57 91.16 113.41 111.24"
          fill="none"
          stroke="#cb5930"
          strokeMiterlimit="10"
          strokeWidth="5"
        />
      </svg>
      <h1 className="text-6xl text-center mt-3">404!</h1>
      <div className="text-center">
        <p>page no found!</p>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  );
}

export default NotFound;
