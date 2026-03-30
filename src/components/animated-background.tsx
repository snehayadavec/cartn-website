type AnimatedIconBase = {
  x: number;
  y: number;
  s: string;
  op: number;
  sc?: number;
};

type AnimatedIconWithDelay = AnimatedIconBase & {
  delay?: string;
};

type AnimatedWarehouseProps = AnimatedIconBase & {
  large?: boolean;
};

type AnimatedTruckProps = AnimatedIconBase & {
  animate?: boolean;
};

const AnimatedBackground = () => {
    const S = "#8C9BAA";
    const OP = 0.45;
    const SC = 0.62; // global icon scale-down factor
  
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <style>{`
            @keyframes gridDrift  { from{transform:translate(0,0)} to{transform:translate(30px,30px)} }
            @keyframes dashFwd    { from{stroke-dashoffset:0} to{stroke-dashoffset:-60} }
            @keyframes dashRev    { from{stroke-dashoffset:0} to{stroke-dashoffset:60} }
  
            @keyframes curveDash {
              from { stroke-dashoffset: 600; }
              to   { stroke-dashoffset: 0; }
            }
  
            @keyframes wifiWave {
              0%   { opacity: 0; }
              20%  { opacity: 0.75; }
              80%  { opacity: 0.5; }
              100% { opacity: 0; }
            }
  
            @keyframes scanSlide  { 0%,3%{transform:translateY(0);opacity:0} 6%{opacity:.9} 47%{transform:translateY(34px);opacity:.9} 51%{transform:translateY(34px);opacity:0} 54%{transform:translateY(0);opacity:0} 100%{transform:translateY(0);opacity:0} }
            @keyframes scanCorner { 0%,5%,55%,100%{opacity:.5} 24%,28%{opacity:1} }
  
            @keyframes cl1 { 0%,12%{opacity:0;transform:translateX(-5px)} 22%,100%{opacity:1;transform:translateX(0)} }
            @keyframes cl2 { 0%,28%{opacity:0;transform:translateX(-5px)} 38%,100%{opacity:1;transform:translateX(0)} }
            @keyframes cl3 { 0%,44%{opacity:0;transform:translateX(-5px)} 54%,100%{opacity:1;transform:translateX(0)} }
            @keyframes cl4 { 0%,60%{opacity:0;transform:translateX(-5px)} 70%,100%{opacity:1;transform:translateX(0)} }
            @keyframes ck1 { 0%,18%{stroke-dashoffset:22;opacity:0} 32%,100%{stroke-dashoffset:0;opacity:1} }
            @keyframes ck2 { 0%,34%{stroke-dashoffset:22;opacity:0} 48%,100%{stroke-dashoffset:0;opacity:1} }
            @keyframes ck3 { 0%,50%{stroke-dashoffset:22;opacity:0} 64%,100%{stroke-dashoffset:0;opacity:1} }
            @keyframes ck4 { 0%,66%{stroke-dashoffset:22;opacity:0} 80%,100%{stroke-dashoffset:0;opacity:1} }
  
            @keyframes arc1 { 0%{opacity:0;stroke-width:1.6} 15%{opacity:.9} 100%{opacity:0;stroke-width:.4;transform:scale(1.45)} }
            @keyframes arc2 { 0%,22%{opacity:0} 40%{opacity:.7} 100%{opacity:0;transform:scale(1.55)} }
            @keyframes arc3 { 0%,44%{opacity:0} 62%{opacity:.5} 100%{opacity:0;transform:scale(1.65)} }
  
            @keyframes cld1 { 0%,100%{transform:translateY(0);opacity:.6} 50%{transform:translateY(-9px);opacity:1} }
            @keyframes cld2 { 0%,100%{transform:translateY(0);opacity:.4} 50%{transform:translateY(-9px);opacity:.9} }
            @keyframes cld3 { 0%,100%{transform:translateY(0);opacity:.5} 50%{transform:translateY(-10px);opacity:1} }
  
            @keyframes lineLoop { 0%{stroke-dashoffset:220;opacity:1} 85%{stroke-dashoffset:0;opacity:1} 93%{opacity:0} 100%{stroke-dashoffset:220;opacity:0} }
  
            @keyframes radarRot  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
            @keyframes radarFade { from{opacity:.85} to{opacity:0} }
  
            @keyframes droneFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(7px,-5px)} 66%{transform:translate(-3px,4px)} }
  
            @keyframes pop      { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
            @keyframes smoke    { 0%{transform:translateY(0) scale(1);opacity:.7} 100%{transform:translateY(-22px) scale(1.9);opacity:0} }
            @keyframes connPulse{ 0%,100%{opacity:.08} 50%{opacity:.25} }
            @keyframes truckRun { 0%{transform:translateX(0)} 100%{transform:translateX(240px)} }
            @keyframes forkBob  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
            @keyframes qrShimmer{ 0%,100%{opacity:.5} 50%{opacity:.92} }
            @keyframes trackBlink{0%,100%{opacity:.3} 50%{opacity:1} }
            @keyframes magPan   { 0%,100%{transform:translate(0,0)} 30%{transform:translate(8px,-4px)} 65%{transform:translate(-4px,5px)} }
          `}</style>
  
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="abDots"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="0.8" fill="#8C9BAA" opacity="0.18" />
            </pattern>
            <linearGradient id="abScanG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={S} stopOpacity="0" />
              <stop offset="50%" stopColor={S} stopOpacity="0.9" />
              <stop offset="100%" stopColor={S} stopOpacity="0" />
            </linearGradient>
          </defs>
  
          {/* dot grid slow drift */}
          <g style={{ animation: "gridDrift 18s linear infinite" }}>
            <rect x="-60" y="-60" width="1620" height="1060" fill="url(#abDots)" />
          </g>
  
          {/* ROW y≈85 */}
          <Warehouse    x={28}   y={52}  s={S} op={OP} sc={SC} />
          <Truck        x={148}  y={65}  s={S} op={OP} sc={SC} />
          <LocationPin  x={310}  y={58}  s={S} op={OP} sc={SC} delay="0s" />
          <NfcTag       x={420}  y={62}  s={S} op={OP} sc={SC} delay="0.4s" />
          <Checklist    x={545}  y={48}  s={S} op={OP} sc={SC} delay="0s" />
          <QRCode       x={720}  y={58}  s={S} op={OP} sc={SC} />
          <BarcodeScanner x={868} y={52} s={S} op={OP} sc={SC} />
          <Drone        x={1040} y={58}  s={S} op={OP} sc={SC} delay="0.8s" />
          <MobilePhone  x={1178} y={55}  s={S} op={OP} sc={SC} />
          <Warehouse    x={1308} y={58}  s={S} op={OP} sc={SC} />
  
          {/* ROW y≈200 */}
          <CloudUpload  x={58}   y={168} s={S} op={OP} sc={SC} />
          <Database     x={238}  y={165} s={S} op={OP} sc={SC} />
          <Shelving     x={420}  y={168} s={S} op={OP} sc={SC} />
          <MagTracker   x={640}  y={162} s={S} op={OP} sc={SC} delay="1s" />
          <AnalyticsChart x={820} y={168} s={S} op={OP} sc={SC} />
          <Factory      x={1018} y={162} s={S} op={OP} sc={SC} />
          <LocationPin  x={1238} y={172} s={S} op={OP} sc={SC} delay="0.3s" />
          <NfcTag       x={1358} y={162} s={S} op={OP} sc={SC} delay="1.6s" />
  
          {/* ROW y≈315 */}
          <RouteNetwork x={18}   y={282} s={S} op={OP} sc={SC} />
          <LocationPin  x={340}  y={288} s={S} op={OP} sc={SC} delay="1.2s" />
          <Truck        x={460}  y={292} s={S} op={OP} sc={SC} />
          <QRCode       x={638}  y={285} s={S} op={OP} sc={SC} />
          <BarcodeScanner x={800} y={278} s={S} op={OP} sc={SC} />
          <Checklist    x={982}  y={282} s={S} op={OP} sc={SC} delay="0.6s" />
          <MagTracker   x={1195} y={282} s={S} op={OP} sc={SC} delay="2s" />
          <Warehouse    x={1322} y={285} s={S} op={OP} sc={SC} />
  
          {/* ROW y≈435 */}
          <NfcTag       x={42}   y={405} s={S} op={OP} sc={SC} delay="0.5s" />
          <AnalyticsChart x={178} y={395} s={S} op={OP} sc={SC} />
          <Database     x={398}  y={408} s={S} op={OP} sc={SC} />
          <Shelving     x={588}  y={398} s={S} op={OP} sc={SC} />
          <CloudUpload  x={788}  y={408} s={S} op={OP} sc={SC} />
          <Drone        x={958}  y={398} s={S} op={OP} sc={SC} delay="1.4s" />
          <Factory      x={1108} y={402} s={S} op={OP} sc={SC} />
          <LocationPin  x={1338} y={398} s={S} op={OP} sc={SC} delay="0.9s" />
  
          {/* ROW y≈555 */}
          <ConveyorBelt x={18}   y={532} s={S} op={OP} sc={SC} />
          <QRCode       x={258}  y={522} s={S} op={OP} sc={SC} />
          <MobilePhone  x={418}  y={528} s={S} op={OP} sc={SC} />
          <NfcTag       x={538}  y={515} s={S} op={OP} sc={SC} delay="1.8s" />
          <BarcodeScanner x={698} y={522} s={S} op={OP} sc={SC} />
          <Warehouse    x={878}  y={512} s={S} op={OP} sc={SC} />
          <MagTracker   x={1058} y={525} s={S} op={OP} sc={SC} delay="0.2s" />
          <AnalyticsChart x={1228} y={515} s={S} op={OP} sc={SC} />
  
          {/* ROW y≈675 */}
          <LocationPin  x={48}   y={648} s={S} op={OP} sc={SC} delay="0.8s" />
          <Database     x={168}  y={638} s={S} op={OP} sc={SC} />
          <Truck        x={328}  y={655} s={S} op={OP} sc={SC} />
          <Shelving     x={508}  y={642} s={S} op={OP} sc={SC} />
          <CloudUpload  x={718}  y={652} s={S} op={OP} sc={SC} />
          <Factory      x={878}  y={638} s={S} op={OP} sc={SC} />
          <Checklist    x={1058} y={645} s={S} op={OP} sc={SC} delay="1.1s" />
          <Drone        x={1268} y={635} s={S} op={OP} sc={SC} delay="2.2s" />
  
          {/* ROW y≈795 */}
          <RouteNetwork x={18}   y={765} s={S} op={OP} sc={SC} />
          <NfcTag       x={360}  y={758} s={S} op={OP} sc={SC} delay="0.7s" />
          <BarcodeScanner x={538} y={762} s={S} op={OP} sc={SC} />
          <MobilePhone  x={738}  y={758} s={S} op={OP} sc={SC} />
          <QRCode       x={898}  y={765} s={S} op={OP} sc={SC} />
          <LocationPin  x={1068} y={758} s={S} op={OP} sc={SC} delay="1.5s" />
          <Truck        x={1198} y={768} s={S} op={OP} sc={SC} />
          <Warehouse    x={1358} y={758} s={S} op={OP} sc={SC} />
        </svg>
      </div>
    );
  };
  
  /* ── shared stroke helper ── */
  const ic = (s: string) => ({
    stroke: s,
    strokeWidth: "1.3",
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  });
  

  
  function Warehouse({ x, y, s, op, large, sc = 1 }: AnimatedWarehouseProps) {
    const scale = (large ? 1.35 : 1) * sc;
    return (
      <g transform={`translate(${x},${y}) scale(${scale})`} opacity={op}>
        <rect x={0} y={16} width={72} height={52} rx={1} {...ic(s)} />
        <polyline points="0,16 36,0 72,16" {...ic(s)} />
        <rect x={22} y={34} width={28} height={34} rx={1} {...ic(s)} />
        <line x1={14} y1={36} x2={18} y2={36} stroke={s} strokeWidth="1" />
        <line x1={54} y1={36} x2={58} y2={36} stroke={s} strokeWidth="1" />
        <line x1={36} y1={16} x2={36} y2={30} stroke={s} strokeWidth="0.8" strokeDasharray="3 3"
          style={{ animation: "dashRev 2s linear infinite" }} />
      </g>
    );
  }
  
  function LocationPin({ x, y, s, op, delay = "0s", sc = 1 }: AnimatedIconWithDelay) {
    const d0 = delay;
    const d1 = `calc(${delay} + 0.6s)`;
    const d2 = `calc(${delay} + 1.2s)`;
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <path d="M 0 10 A 14 14 0 0 0 0 22" stroke={s} fill="none" strokeWidth="1.4" strokeLinecap="round"
          style={{ animation: `wifiWave 2.8s ease-in-out ${d0} infinite` }} />
        <path d="M -5 6 A 20 20 0 0 0 -5 26" stroke={s} fill="none" strokeWidth="1.1" strokeLinecap="round"
          style={{ animation: `wifiWave 2.8s ease-in-out ${d1} infinite` }} />
        <path d="M -10 2 A 26 26 0 0 0 -10 30" stroke={s} fill="none" strokeWidth="0.85" strokeLinecap="round"
          style={{ animation: `wifiWave 2.8s ease-in-out ${d2} infinite` }} />
        <path d="M 36 10 A 14 14 0 0 1 36 22" stroke={s} fill="none" strokeWidth="1.4" strokeLinecap="round"
          style={{ animation: `wifiWave 2.8s ease-in-out ${d0} infinite` }} />
        <path d="M 41 6 A 20 20 0 0 1 41 26" stroke={s} fill="none" strokeWidth="1.1" strokeLinecap="round"
          style={{ animation: `wifiWave 2.8s ease-in-out ${d1} infinite` }} />
        <path d="M 46 2 A 26 26 0 0 1 46 30" stroke={s} fill="none" strokeWidth="0.85" strokeLinecap="round"
          style={{ animation: `wifiWave 2.8s ease-in-out ${d2} infinite` }} />
        <path d="M18 2 C10 2 4 8 4 16 C4 26 18 44 18 44 C18 44 32 26 32 16 C32 8 26 2 18 2 Z"
          stroke={s} strokeWidth="1.3" fill="none" />
        <circle cx={18} cy={16} r={5} stroke={s} strokeWidth="1.1" fill="none" />
        <circle cx={18} cy={16} r={2} fill={s}
          style={{ animation: `trackBlink 1.8s ease-in-out ${d0} infinite` }} />
      </g>
    );
  }
  
  function Truck({ x, y, s, op, animate: anim, sc = 1 }: AnimatedTruckProps) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}
        style={anim ? { animation: "truckRun 6s linear infinite" } : undefined}>
        <rect x={0} y={8} width={56} height={30} rx={2} {...ic(s)} />
        <rect x={56} y={14} width={26} height={24} rx={1} {...ic(s)} />
        <rect x={60} y={18} width={14} height={12} rx={1} stroke={s} strokeWidth="0.8" fill="none" />
        <circle cx={14} cy={42} r={7} {...ic(s)} />
        <circle cx={44} cy={42} r={7} {...ic(s)} />
        <circle cx={64} cy={42} r={7} {...ic(s)} />
        <line x1={-50} y1={22} x2={0} y2={22} stroke={s} strokeWidth="0.9" strokeDasharray="5 5"
          style={{ animation: "dashFwd 1.6s linear infinite" }} />
      </g>
    );
  }
  
  function BarcodeScanner({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        {["M0 14 L0 0 L14 0", "M76 0 L90 0 L90 14", "M0 52 L0 66 L14 66", "M76 66 L90 66 L90 52"].map((d, i) => (
          <path key={i} d={d} stroke={s} strokeWidth="1.7" fill="none" strokeLinecap="round"
            style={{ animation: "scanCorner 5s ease-in-out infinite" }} />
        ))}
        {[5, 9, 13, 17, 22, 25, 30, 34, 38, 43, 47, 51, 56, 60, 64, 68, 72].map((bx, i) => (
          <rect key={i} x={bx} y={8} width={i % 4 === 0 ? 2.6 : 1.5} height={44} fill={s} opacity="0.72" />
        ))}
        <rect x={6} y={56} width={72} height={7} rx={1} stroke={s} strokeWidth="0.6" fill="none" opacity="0.5" />
        <rect x={-3} y={0} width={96} height={5} fill="url(#abScanG)" rx={1}
          style={{ animation: "scanSlide 5s ease-in-out infinite" }} />
      </g>
    );
  }
  
  function Checklist({ x, y, s, op, delay = "0s", sc = 1 }: AnimatedIconWithDelay) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <rect x={0} y={10} width={112} height={126} rx={4} stroke={s} strokeWidth="1.3" fill="none" />
        <rect x={34} y={2} width={44} height={18} rx={5} stroke={s} strokeWidth="1.3" fill="none" />
        {[{ cl: "cl1", ck: "ck1", dy: 0 }, { cl: "cl2", ck: "ck2", dy: 26 }, { cl: "cl3", ck: "ck3", dy: 52 }, { cl: "cl4", ck: "ck4", dy: 78 }].map(({ cl, ck, dy }, i) => (
          <g key={i} style={{ animation: `${cl} 6s ease-out ${delay} infinite` }}>
            <rect x={10} y={28 + dy} width={12} height={12} rx={2} stroke={s} strokeWidth="1" fill="none" />
            <rect x={28} y={32 + dy} width={72} height={4} rx={1} fill={s} opacity="0.35" />
            <polyline points={`11,${34 + dy} 15,${38 + dy} 21,${28 + dy}`}
              stroke={s} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="22"
              style={{ animation: `${ck} 6s ease-out ${delay} infinite` }} />
          </g>
        ))}
      </g>
    );
  }
  
  function NfcTag({ x, y, s, op, delay = "0s", sc = 1 }: AnimatedIconWithDelay) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <rect x={10} y={20} width={52} height={36} rx={5} stroke={s} strokeWidth="1.3" fill="none" />
        <rect x={18} y={28} width={36} height={20} rx={2} stroke={s} strokeWidth="0.8" fill="none" />
        <text x={36} y={42} textAnchor="middle" fontSize="7" fill={s} fontFamily="monospace" stroke="none">NFC</text>
        {[{ d: "M8 38 Q3 28 10 20", k: "arc1" }, { d: "M2 45 Q-5 27 10 17", k: "arc2" }, { d: "M-4 52 Q-13 25 10 13", k: "arc3" }, { d: "M64 38 Q69 28 62 20", k: "arc1" }, { d: "M70 45 Q77 27 62 17", k: "arc2" }].map(({ d, k }, i) => (
          <path key={i} d={d} stroke={s} strokeWidth="1.4" fill="none"
            style={{ transformOrigin: "36px 38px", animation: `${k} 2.4s ease-out ${delay} infinite` }} />
        ))}
      </g>
    );
  }
  
  function QRCode({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}
        style={{ animation: "qrShimmer 3.5s ease-in-out infinite" }}>
        <rect x={0} y={0} width={76} height={76} rx={3} stroke={s} strokeWidth="1.3" fill="none" />
        {[[6, 6], [44, 6], [6, 44]].map(([cx, cy], i) => (
          <g key={i}>
            <rect x={cx} y={cy} width={22} height={22} rx={1.5} stroke={s} strokeWidth="1.2" fill="none" />
            <rect x={cx + 5} y={cy + 5} width={12} height={12} rx={0.5} fill={s} opacity="0.5" />
          </g>
        ))}
        {[44, 50, 56, 62, 68].map((cx) =>
          [44, 50, 56, 62, 68].map((cy) => (
            <rect key={`${cx}-${cy}`} x={cx} y={cy} width={4} height={4} fill={s}
              opacity={((cx + cy) / 10) % 2 > 0.9 ? 0.55 : 0.18} />
          ))
        )}
      </g>
    );
  }
  
  function CloudUpload({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <path d="M22 50 Q6 50 6 36 Q6 24 18 22 Q20 10 34 10 Q48 10 50 22 Q60 20 64 30 Q72 30 72 40 Q72 50 56 50 Z"
          stroke={s} strokeWidth="1.3" fill="none" />
        <line x1={36} y1={26} x2={36} y2={64} stroke={s} strokeWidth="1.1" strokeDasharray="4 4"
          style={{ animation: "dashRev 1.8s linear infinite" }} />
        <polyline points="28,34 36,26 44,34" stroke={s} strokeWidth="1.3" fill="none" strokeLinecap="round" />
        {[{ cy: 42, a: "cld1", d: "0s" }, { cy: 52, a: "cld2", d: "0.6s" }, { cy: 58, a: "cld3", d: "1.2s" }].map(({ cy, a, d }, i) => (
          <circle key={i} cx={36} cy={cy} r={2.2} fill={s}
            style={{ animation: `${a} 2s ease-in-out ${d} infinite` }} />
        ))}
      </g>
    );
  }
  
  function Database({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        {[0, 22, 44].map((dy, i) => (
          <g key={i}>
            <ellipse cx={36} cy={10 + dy} rx={30} ry={9} stroke={s} strokeWidth="1.3" fill="none" />
            {dy < 44 && <rect x={6} y={10 + dy} width={60} height={22} stroke={s} strokeWidth="1.3" fill="none" />}
            <circle cx={52} cy={10 + dy + 10} r={2} fill={s} opacity="0.55"
              style={{ animation: `pop 2s ease-in-out ${i * 0.5}s infinite` }} />
            <circle cx={58} cy={10 + dy + 10} r={2} fill={s} opacity="0.35"
              style={{ animation: `pop 2s ease-in-out ${i * 0.5 + 0.3}s infinite` }} />
          </g>
        ))}
      </g>
    );
  }
  
  function MagTracker({ x, y, s, op, delay = "0s", sc = 1 }: AnimatedIconWithDelay) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <g style={{ animation: `magPan 4.5s ease-in-out ${delay} infinite` }}>
          <circle cx={32} cy={32} r={25} stroke={s} strokeWidth="1.4" fill="none" />
          <line x1={50} y1={50} x2={68} y2={68} stroke={s} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M32 19 C27 19 23 23 23 29 C23 37 32 46 32 46 C32 46 41 37 41 29 C41 23 37 19 32 19 Z"
            stroke={s} strokeWidth="1.1" fill="none" />
          <circle cx={32} cy={29} r={4} stroke={s} strokeWidth="1" fill="none" />
          <circle cx={32} cy={29} r={1.8} fill={s}
            style={{ animation: `trackBlink 1.5s ease-in-out ${delay} infinite` }} />
          {[[32, 20, 32, 23], [32, 41, 32, 44], [21, 32, 24, 32], [40, 32, 43, 32]].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={s} strokeWidth="0.7" opacity="0.6" />
          ))}
        </g>
      </g>
    );
  }
  
  function AnalyticsChart({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <line x1={8} y1={74} x2={8} y2={6} stroke={s} strokeWidth="1.2" />
        <line x1={8} y1={74} x2={112} y2={74} stroke={s} strokeWidth="1.2" />
        {[20, 38, 56].map((yy, i) => (
          <line key={i} x1={8} y1={yy} x2={112} y2={yy} stroke={s} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        ))}
        {[[16, 40, 22], [38, 20, 22], [60, 52, 22], [82, 12, 22]].map(([bx, by, bw], i) => (
          <rect key={i} x={bx} y={by} width={bw} height={74 - by} stroke={s} strokeWidth="0.9" fill={s} fillOpacity={i === 3 ? 0.2 : 0.1} />
        ))}
        <polyline points="27,40 49,20 71,52 93,12" stroke={s} strokeWidth="1.7" fill="none" strokeDasharray="220"
          style={{ animation: "lineLoop 4.5s ease-in-out infinite" }} />
        {[[27, 40], [49, 20], [71, 52], [93, 12]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2.8} fill={s} opacity="0.7" />
        ))}
      </g>
    );
  }
  
  function MobilePhone({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <rect x={0} y={0} width={42} height={70} rx={6} stroke={s} strokeWidth="1.3" fill="none" />
        <rect x={5} y={9} width={32} height={46} rx={1} stroke={s} strokeWidth="0.8" fill="none" />
        <circle cx={21} cy={63} r={3} stroke={s} strokeWidth="0.8" fill="none" />
        <line x1={10} y1={17} x2={32} y2={17} stroke={s} strokeWidth="0.9" opacity="0.6" />
        <line x1={10} y1={24} x2={28} y2={24} stroke={s} strokeWidth="0.9" opacity="0.5" />
        <polyline points="9,46 16,38 23,44 32,30" stroke={s} strokeWidth="1.2" fill="none" strokeDasharray="50"
          style={{ animation: "lineLoop 3.5s ease-in-out infinite" }} />
        <circle cx={32} cy={30} r={2} fill={s} style={{ animation: "trackBlink 1.8s ease-in-out infinite" }} />
      </g>
    );
  }
  
  function Factory({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <rect x={0} y={32} width={100} height={62} rx={1} stroke={s} strokeWidth="1.3" fill="none" />
        <polyline points="0,32 0,10 20,22 40,10 60,22 80,10 100,22 100,32" stroke={s} strokeWidth="1.2" fill="none" />
        <rect x={8} y={12} width={10} height={22} stroke={s} strokeWidth="1" fill="none" />
        <rect x={28} y={4} width={10} height={30} stroke={s} strokeWidth="1" fill="none" />
        {[{ cx: 13, del: "0s" }, { cx: 33, del: "0.9s" }].map(({ cx, del }, i) => (
          <g key={i}>
            <circle cx={cx} cy={10} r={4} stroke={s} strokeWidth="0.8" fill="none"
              style={{ animation: `smoke 2.4s ease-out ${del} infinite` }} />
            <circle cx={cx + 2} cy={2} r={5} stroke={s} strokeWidth="0.7" fill="none"
              style={{ animation: `smoke 2.4s ease-out calc(${del} + 0.45s) infinite` }} />
          </g>
        ))}
        {[[10, 46], [36, 46], [62, 46], [10, 66], [36, 66], [62, 66]].map(([wx, wy], i) => (
          <rect key={i} x={wx} y={wy} width={14} height={12} rx={1} stroke={s} strokeWidth="0.8" fill="none" opacity="0.7" />
        ))}
        <rect x={42} y={70} width={16} height={24} rx={1} stroke={s} strokeWidth="0.9" fill="none" />
      </g>
    );
  }
  
  function Shelving({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <rect x={0} y={0} width={102} height={92} rx={2} stroke={s} strokeWidth="1.3" fill="none" />
        <line x1={0} y1={30} x2={102} y2={30} stroke={s} strokeWidth="1" />
        <line x1={0} y1={60} x2={102} y2={60} stroke={s} strokeWidth="1" />
        {[[[6, 8], [22, 8], [38, 8], [54, 8], [72, 8]], [[6, 36], [22, 36], [54, 36], [72, 36]], [[6, 66], [38, 66], [70, 66]]].map((row, ri) =>
          row.map(([bx, by], bi) => (
            <rect key={`${ri}-${bi}`} x={bx} y={by} width={12} height={18} rx={1} fill={s} opacity="0.2"
              stroke={s} strokeWidth="0.7"
              style={{ animation: `pop 3s ease-in-out ${(ri * 3 + bi) * 0.35}s infinite` }} />
          ))
        )}
      </g>
    );
  }
  
  function Drone({ x, y, s, op, delay = "0s", sc = 1 }: AnimatedIconWithDelay) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}
        style={{ animation: `droneFloat 5s ease-in-out ${delay} infinite` }}>
        <rect x={18} y={20} width={32} height={18} rx={4} stroke={s} strokeWidth="1.3" fill="none" />
        {[[18, 24, 4, 10], [50, 24, 64, 10], [18, 34, 4, 48], [50, 34, 64, 48]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={s} strokeWidth="1" />
        ))}
        {[[4, 10], [64, 10], [4, 48], [64, 48]].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={12} ry={3.5} stroke={s} strokeWidth="1" fill="none" />
        ))}
        <circle cx={34} cy={38} r={4} stroke={s} strokeWidth="0.9" fill="none" />
        <line x1={34} y1={42} x2={34} y2={62} stroke={s} strokeWidth="0.8" strokeDasharray="3 3"
          style={{ animation: "dashRev 1.6s linear infinite" }} />
        <circle cx={34} cy={64} r={3} stroke={s} strokeWidth="0.8" fill="none"
          style={{ animation: "trackBlink 1.5s ease-in-out infinite" }} />
      </g>
    );
  }
  
  function ConveyorBelt({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <rect x={0} y={28} width={168} height={20} rx={10} stroke={s} strokeWidth="1.3" fill="none" />
        {[10, 30, 50, 70, 90, 110, 130, 150].map((cx, i) => (
          <circle key={i} cx={cx} cy={38} r={4} stroke={s} strokeWidth="0.8" fill="none" />
        ))}
        <line x1={0} y1={38} x2={168} y2={38} stroke={s} strokeWidth="1" strokeDasharray="8 8" opacity="0.4"
          style={{ animation: "dashFwd 1.5s linear infinite" }} />
        {[[10, 8], [58, 8], [106, 8]].map(([bx, by], i) => (
          <g key={i} style={{ animation: `pop 3s ease-in-out ${i * 0.9}s infinite` }}>
            <rect x={bx} y={by} width={24} height={24} rx={2} stroke={s} strokeWidth="1.1" fill="none" opacity="0.8" />
            <line x1={bx} y1={by + 12} x2={bx + 24} y2={by + 12} stroke={s} strokeWidth="0.7" opacity="0.5" />
          </g>
        ))}
      </g>
    );
  }
  
  function RouteNetwork({ x, y, s, op, sc = 1 }: AnimatedIconBase) {
    const nodes = [[0, 42], [66, 4], [134, 52], [202, 20], [272, 50]];
    return (
      <g transform={`translate(${x},${y}) scale(${sc})`} opacity={op}>
        <polyline points={nodes.map(([nx, ny]) => `${nx},${ny}`).join(" ")}
          stroke={s} strokeWidth="1.1" fill="none" strokeDasharray="7 5"
          style={{ animation: "dashFwd 2.8s linear infinite" }} />
        {nodes.map(([nx, ny], i) => (
          <g key={i}>
            <circle cx={nx} cy={ny} r={6} stroke={s} strokeWidth="1.1" fill="none" />
            <circle cx={nx} cy={ny} r={6} stroke={s} strokeWidth="0" fill="none"
              style={{ transformOrigin: `${nx}px ${ny}px`, animation: `locW1 3.2s ease-out ${i * 0.6}s infinite` }} />
            <circle cx={nx} cy={ny} r={2} fill={s}
              style={{ animation: `trackBlink 2s ease-in-out ${i * 0.5}s infinite` }} />
          </g>
        ))}
      </g>
    );
  }
  
  export default AnimatedBackground;
