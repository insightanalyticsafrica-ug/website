const GeometricAfrica = ({ className = "" }: { className?: string }) => {
  // Simplified Africa outline as connected data points
  const points = [
    [50, 8], [58, 6], [65, 10], [68, 18], [70, 25],
    [72, 35], [68, 42], [64, 48], [58, 55], [55, 62],
    [50, 70], [48, 78], [52, 85], [48, 90], [42, 92],
    [38, 88], [35, 82], [30, 75], [28, 68], [25, 58],
    [22, 50], [20, 42], [18, 35], [22, 28], [28, 22],
    [32, 16], [38, 10], [44, 8], [50, 8],
  ];

  // Interior data nodes
  const dataNodes = [
    { x: 45, y: 30, r: 2.5 },
    { x: 55, y: 25, r: 2 },
    { x: 38, y: 45, r: 2 },
    { x: 50, y: 50, r: 3 },
    { x: 60, y: 40, r: 2 },
    { x: 42, y: 65, r: 2.5 },
    { x: 35, y: 55, r: 1.5 },
    { x: 52, y: 72, r: 2 },
    { x: 30, y: 38, r: 1.5 },
    { x: 48, y: 42, r: 1.5 },
  ];

  // Connection lines between nodes
  const connections = [
    [0, 1], [0, 4], [1, 4], [2, 3], [3, 4],
    [2, 6], [3, 5], [5, 7], [6, 8], [3, 9], [0, 9],
  ];

  const outlinePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outline as dots */}
      {points.slice(0, -1).map((p, i) => (
        <circle
          key={`outline-${i}`}
          cx={p[0]}
          cy={p[1]}
          r={1}
          fill="currentColor"
          opacity={0.3}
        />
      ))}

      {/* Subtle outline path */}
      <path d={outlinePath} fill="none" stroke="currentColor" strokeWidth={0.3} opacity={0.15} />

      {/* Connection lines */}
      {connections.map(([a, b], i) => (
        <line
          key={`conn-${i}`}
          x1={dataNodes[a].x}
          y1={dataNodes[a].y}
          x2={dataNodes[b].x}
          y2={dataNodes[b].y}
          stroke="currentColor"
          strokeWidth={0.4}
          opacity={0.25}
        />
      ))}

      {/* Data nodes */}
      {dataNodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle cx={node.x} cy={node.y} r={node.r} fill="currentColor" opacity={0.15} />
          <circle cx={node.x} cy={node.y} r={node.r * 0.5} fill="currentColor" opacity={0.6} />
        </g>
      ))}
    </svg>
  );
};

export default GeometricAfrica;
