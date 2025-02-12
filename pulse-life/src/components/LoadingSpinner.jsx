const LoadingSpinner = () => (
  <svg
    className="w-5 h-5 animate-spin inline-block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default LoadingSpinner;

