// Hand-crafted SVG icons (stroke-based, consistent 24x24 grid) used for the
// skill category tiles and the certification seal. Drawn specifically for this
// site so the set reads as original rather than off-the-shelf stock glyphs.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ShieldBoltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2l7.2 2.4v5.4c0 4.5-3 7.5-7.2 9-4.2-1.5-7.2-4.5-7.2-9V5.6L12 3.2z" />
      <path d="M13.6 7.6l-3.4 4.2h2.6l-1 3.8 3.4-4.2h-2.6l1-3.8z" />
    </svg>
  );
}

export function TerminalPromptIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
      <path d="M7.5 9.5l2.8 2.5-2.8 2.5" />
      <path d="M14 14.5h2.5" />
    </svg>
  );
}

export function MeshNodesIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6.5" r="2.3" />
      <circle cx="18" cy="6.5" r="2.3" />
      <circle cx="12" cy="17.5" r="2.3" />
      <path d="M7.9 8.2c1 2.9 2.6 4.7 2.3 7.1" />
      <path d="M16.1 8.2c-1 2.9-2.6 4.7-2.3 7.1" />
      <path d="M8.3 6.5h7.4" />
    </svg>
  );
}

export function StackLayersIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2l8.5 4.5-8.5 4.5-8.5-4.5 8.5-4.5z" />
      <path d="M3.5 13.2l8.5 4.5 8.5-4.5" />
      <path d="M3.5 17.6l8.5 4.5 8.5-4.5" />
    </svg>
  );
}

export function BoltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 3.5h5" />
      <path d="M12 3.5v4.2" />
      <path d="M8 7.7h8" />
      <path d="M9.5 11.7h5" />
      <path d="M10 15.7h4" />
      <path d="M9 19.7h6" />
    </svg>
  );
}

export function OpenBookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4.5C5.9 3.6 8.8 3 12 3s6.1.6 8 1.5v15c-1.9-.9-4.8-1.5-8-1.5s-6.1.6-8 1.5v-15z" />
      <path d="M12 6v12.5" />
      <path d="M8 8.5H6.5M8 11.5H6.5M16 8.5h1.5M16 11.5h1.5" />
    </svg>
  );
}

export function SealIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="10" r="5.5" />
      <path d="M9.4 10.1l1.9 1.9 3.3-3.7" />
      <path d="M12 15.5v5.2" />
      <path d="M9.4 20.7L12 18l2.6 2.7" />
    </svg>
  );
}
