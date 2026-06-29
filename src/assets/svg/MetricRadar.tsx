export function MetricRadar() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 320"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="radarGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 160) scale(150)">
          <stop stopColor="#141BD4" stopOpacity="0.32" />
          <stop offset="1" stopColor="#020207" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="150" fill="url(#radarGlow)" />
      <circle cx="160" cy="160" r="112" stroke="#4D5DB3" strokeOpacity="0.24" />
      <circle cx="160" cy="160" r="76" stroke="#4D5DB3" strokeOpacity="0.32" />
      <circle cx="160" cy="160" r="38" stroke="#F4F7FF" strokeOpacity="0.18" />
      <path d="M160 48V272M48 160H272M80 80L240 240M240 80L80 240" stroke="#F4F7FF" strokeOpacity="0.1" />
      <path className="svg-pulse" d="M160 62L236 126L218 226L126 244L82 160L112 92L160 62Z" fill="#141BD4" fillOpacity="0.18" stroke="#F4F7FF" strokeOpacity="0.46" />
      <path className="svg-radar-sweep" d="M160 160L236 126" stroke="#B16258" strokeWidth="2" strokeLinecap="round" />
      <circle cx="236" cy="126" r="7" fill="#B16258" />
      <circle cx="160" cy="160" r="8" fill="#F4F7FF" opacity="0.82" />
    </svg>
  );
}
