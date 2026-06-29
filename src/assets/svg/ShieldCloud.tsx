export function ShieldCloud() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 360 280"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="110" x2="248" y1="38" y2="244" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4F7FF" stopOpacity="0.68" />
          <stop offset="0.48" stopColor="#4D5DB3" stopOpacity="0.38" />
          <stop offset="1" stopColor="#141BD4" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        className="svg-pulse"
        d="M180 28L286 68V140C286 204 244 246 180 264C116 246 74 204 74 140V68L180 28Z"
        fill="#111338"
        fillOpacity="0.54"
        stroke="url(#shieldGradient)"
        strokeWidth="2"
      />
      <path
        d="M118 157C118 132 138 112 163 112H169C177 92 196 79 219 79C249 79 274 103 274 134C296 139 312 158 312 181C312 207 291 228 265 228H122C100 228 82 210 82 188C82 169 98 157 118 157Z"
        fill="#080A1A"
        stroke="#4D5DB3"
        strokeOpacity="0.72"
      />
      <path className="svg-line-flow" d="M132 185H252" stroke="#F4F7FF" strokeOpacity="0.3" />
      <path className="svg-line-flow" d="M150 164H226" stroke="#F4F7FF" strokeOpacity="0.22" />
      <path className="svg-line-flow" d="M151 207H220" stroke="#4D5DB3" strokeOpacity="0.5" />
      <circle cx="132" cy="185" r="5" fill="#F4F7FF" opacity="0.82" />
      <circle cx="252" cy="185" r="5" fill="#B16258" />
      <circle cx="188" cy="164" r="5" fill="#4D5DB3" />
      <circle cx="220" cy="207" r="5" fill="#F4F7FF" opacity="0.62" />
    </svg>
  );
}
