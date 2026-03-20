"use client";

// --- SectionGlow ---
const positionMap = {
  "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/4",
  "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4",
  "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
};

const sizeMap = {
  sm: "w-[300px] h-[200px]",
  md: "w-[500px] h-[400px]",
  lg: "w-[800px] h-[600px]",
  xl: "w-[1000px] h-[800px]",
};

export function SectionGlow({
  position = "top-center",
  size = "lg",
  intensity = 0.1,
  color = "primary",
}: {
  position?: keyof typeof positionMap;
  size?: keyof typeof sizeMap;
  intensity?: number;
  color?: "primary" | "purple" | "blue";
}) {
  const colorMap = {
    primary: `hsl(233 91% 66% / ${intensity})`,
    purple: `hsl(258 90% 66% / ${intensity})`,
    blue: `hsl(210 100% 60% / ${intensity})`,
  };

  return (
    <div
      className={`absolute ${positionMap[position]} ${sizeMap[size]} rounded-full blur-[120px] pointer-events-none`}
      style={{ backgroundColor: colorMap[color] }}
      aria-hidden="true"
    />
  );
}

// --- NoiseOverlay ---
export function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
    />
  );
}

// --- DotGrid ---
export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-[0.06] ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23fff'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "20px 20px",
      }}
    />
  );
}

// --- GradientDivider ---
export function GradientDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent, hsl(233 91% 66% / 0.4), transparent)",
      }}
      aria-hidden="true"
    />
  );
}

// --- AnimatedBorder ---
export function AnimatedBorder({
  children,
  className = "",
  borderRadius = "1rem",
}: {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Rotating gradient border */}
      <div
        className="absolute -inset-[1px] rounded-[inherit] animate-rotate-gradient opacity-70"
        style={{
          borderRadius,
          background:
            "conic-gradient(from var(--border-angle, 0deg), transparent 30%, hsl(233 91% 66% / 0.6) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Inner content */}
      <div
        className="relative bg-card h-full"
        style={{ borderRadius }}
      >
        {children}
      </div>
    </div>
  );
}
