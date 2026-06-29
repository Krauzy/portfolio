export function CodeTerminal() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 300"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="16" width="456" height="268" rx="18" fill="#080A1A" stroke="white" strokeOpacity="0.1" />
      <path d="M12 64H468" stroke="white" strokeOpacity="0.1" />
      <circle cx="42" cy="40" r="6" fill="#B16258" />
      <circle cx="64" cy="40" r="6" fill="#4D5DB3" />
      <circle cx="86" cy="40" r="6" fill="#F4F7FF" opacity="0.6" />
      <path className="svg-pulse" d="M50 105L78 132L50 159" stroke="#4D5DB3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="106" y="97" width="128" height="12" rx="6" fill="#F4F7FF" opacity="0.78" />
      <rect x="250" y="97" width="74" height="12" rx="6" fill="#4D5DB3" opacity="0.8" />
      <rect className="svg-code-scan" x="106" y="128" width="260" height="10" rx="5" fill="#4D5DB3" opacity="0.38" />
      <rect x="106" y="156" width="198" height="10" rx="5" fill="#F4F7FF" opacity="0.28" />
      <rect x="52" y="209" width="92" height="10" rx="5" fill="#B16258" opacity="0.84" />
      <rect className="svg-code-scan" x="160" y="209" width="246" height="10" rx="5" fill="#4D5DB3" opacity="0.36" />
      <rect x="52" y="238" width="190" height="10" rx="5" fill="#F4F7FF" opacity="0.24" />
      <rect x="258" y="238" width="100" height="10" rx="5" fill="#4D5DB3" opacity="0.62" />
    </svg>
  );
}
