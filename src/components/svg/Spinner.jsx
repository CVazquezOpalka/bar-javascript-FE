const Spinner = () => {
  return (
    <>
      <svg
      className="w-24 h-24 animate-spin"
        role="status"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="st0"
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#AAA3A3"
          strokeWidth="12"
          strokeLinecap="square"
          strokeMiterlimit="10"
        />

        <path
          className="st1"
          d="M190,100c0.5,49.39-40.53,91.8-90,92.98C47.92,195.04,3.72,152.19,4,100C3.56,47.98,48.09,4.79,100,6.98
				C149.48,8.18,190.5,50.61,190,100L190,100z M190,100c0.31-35.67-22.84-69.19-56.25-81.48C77.13-2.99,15.75,39.79,16,100
				c-0.2,60.32,61.01,103,117.76,81.5C167.12,169.25,190.35,135.6,190,100L190,100z"
          fill="#F15A24"
        />
      </svg>
    </>
  );
};

export default Spinner;
