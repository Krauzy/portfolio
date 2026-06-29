const networkNodes = [
  [128, 189],
  [210, 142],
  [315, 176],
  [390, 250],
  [340, 361],
  [224, 386],
  [145, 318],
  [260, 260]
];

export function NetworkOrb() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 520 520"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="orbGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 260) rotate(90) scale(250)">
          <stop stopColor="#4D5DB3" stopOpacity="0.72" />
          <stop offset="0.45" stopColor="#141BD4" stopOpacity="0.18" />
          <stop offset="1" stopColor="#020207" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbStroke" x1="88" x2="430" y1="78" y2="448" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4F7FF" stopOpacity="0.58" />
          <stop offset="0.55" stopColor="#4D5DB3" stopOpacity="0.6" />
          <stop offset="1" stopColor="#141BD4" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="260" cy="260" r="244" fill="url(#orbGlow)" />
      <circle className="svg-pulse" cx="260" cy="260" r="154" stroke="url(#orbStroke)" strokeOpacity="0.72" />
      <circle cx="260" cy="260" r="104" stroke="#4D5DB3" strokeOpacity="0.24" />
      <g className="svg-orbit">
        <ellipse cx="260" cy="260" rx="178" ry="72" stroke="#F4F7FF" strokeOpacity="0.22" />
        <ellipse cx="260" cy="260" rx="178" ry="72" stroke="#4D5DB3" strokeOpacity="0.38" transform="rotate(58 260 260)" />
        <ellipse cx="260" cy="260" rx="178" ry="72" stroke="#4D5DB3" strokeOpacity="0.38" transform="rotate(122 260 260)" />
      </g>
      <path className="svg-line-flow" d="M128 189L210 142L315 176L390 250L340 361L224 386L145 318L128 189Z" stroke="#F4F7FF" strokeOpacity="0.26" />
      <path className="svg-line-flow" d="M210 142L224 386M315 176L145 318M390 250L128 189M340 361L210 142" stroke="#4D5DB3" strokeOpacity="0.28" />
      {networkNodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#F4F7FF" opacity="0.92" />
      ))}
      <circle cx="260" cy="260" r="10" fill="#B16258" />
    </svg>
  );
}
