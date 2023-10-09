import React from "react";

function Notification(props) {
  const { type, message } = props.notification;
  const error = type === "error" ? true : false;
  const classError = type === "error" ? "bg-red-200" : "bg-green-200";

  return (
    <div>
      {!error && (
        <svg
          className="mx-auto mb-5"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <circle cx="35" cy="35" r="35" fill="#39b54a" />
          <polygon
            points="60.26 21.97 36.13 47.62 30.72 53.36 29.46 54.7 9.74 36.16 16.41 29.07 29.05 40.95 53.17 15.3 60.26 21.97"
            fill="#fff"
          />
        </svg>
      )}
      {error && (
        <svg
          className="mx-auto mb-5"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <circle cx="35" cy="35" r="35" fill="#c1272d" />
          <polygon
            points="41.67 35.01 53.94 48.03 46.85 54.7 35 42.09 23.14 54.7 16.06 48.03 28.32 35.01 16.06 21.96 23.14 15.3 35 27.91 46.85 15.3 53.94 21.96 41.67 35.01"
            fill="#fff"
          />
        </svg>
      )}
      <div className={`text-center ${classError} p-4`}>{message}</div>
    </div>
  );
}

export default Notification;
