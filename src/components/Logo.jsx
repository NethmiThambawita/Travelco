const Logo = ({ variant = "dark", className = "" }) => {
  const wordColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/60" : "text-ink/50";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="32" fill="#0b2727" />
        <path
          d="M14 40c6-14 16-22 18-22-2 4-6 10-6 16 0 4 2 7 6 7 6 0 12-6 15-14"
          stroke="#41a4ff"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="46" cy="18" r="4" fill="#e3a94b" />
      </svg>
      <span className="leading-tight">
        <span className={`block font-bold text-lg tracking-tight ${wordColor}`}>
          Serendib Trails
        </span>
        <span className={`block text-[10px] font-semibold tracking-[0.2em] uppercase ${subColor}`}>
          Sri Lanka Travel Co.
        </span>
      </span>
    </div>
  );
};

export default Logo;
