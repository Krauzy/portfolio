type ArchitectureNode = {
  label: string;
  tone: string;
};

type ArchitectureDiagramProps = {
  ariaLabel: string;
  nodes: readonly ArchitectureNode[];
};

const positions = [
  { x: 50, y: 80 },
  { x: 245, y: 80 },
  { x: 440, y: 80 },
  { x: 148, y: 226 },
  { x: 342, y: 226 },
  { x: 245, y: 360 }
];

const toneFill: Record<string, string> = {
  primary: "#141BD4",
  secondary: "#4D5DB3",
  warm: "#B16258"
};

export function ArchitectureDiagram({ ariaLabel, nodes }: ArchitectureDiagramProps) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 540 440"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="archLine" x1="54" x2="476" y1="70" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4F7FF" stopOpacity="0.44" />
          <stop offset="1" stopColor="#4D5DB3" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="14" y="16" width="512" height="408" rx="22" fill="#080A1A" fillOpacity="0.72" stroke="white" strokeOpacity="0.1" />
      <path className="svg-line-flow" d="M110 110H245H380M245 120L148 226M245 120L342 226M148 256L245 360M342 256L245 360M245 110L440 110" stroke="url(#archLine)" strokeWidth="2" strokeLinecap="round" />
      {nodes.map((node, index) => {
        const position = positions[index] ?? positions[0];
        const fill = toneFill[node.tone] ?? toneFill.primary;

        return (
          <g className="svg-node-pulse" key={node.label} transform={`translate(${position.x} ${position.y})`}>
            <rect width="150" height="60" rx="14" fill="#111338" stroke={fill} strokeOpacity="0.72" />
            <circle cx="26" cy="30" r="9" fill={fill} />
            <text x="46" y="35" fill="#F4F7FF" fontSize="14" fontFamily="Inter, system-ui, sans-serif">
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
