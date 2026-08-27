interface BrandLogoProps {
  className?: string;
  size?: number | string;
}

export default function BrandLogo({ className = "w-8 h-8", size }: BrandLogoProps) {
  return (
    <svg
      viewBox="35 65 612 836"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Aethrion CX Logo"
    >
      {/* Back half of orbiting ring (behind the top cone) */}
      <path
        d="M 43 502 A 298.5 38.5 0 0 1 640 502 L 605 502 A 264 27 0 0 0 77 502 Z"
        fill="#001b5a"
      />

      {/* Diamond Body */}
      {/* Top-Left Face (Vibrant Electric Blue) */}
      <polygon points="341,77 142,495 341,495" fill="#004dfc" />
      {/* Top-Right Face (Deep Midnight Navy) */}
      <polygon points="341,77 341,495 540,495" fill="#001b5a" />
      {/* Bottom-Left Face (Vibrant Electric Blue) */}
      <polygon points="142,495 341,891 341,495" fill="#004dfc" />
      {/* Bottom-Right Face (Deep Midnight Navy) */}
      <polygon points="341,495 341,891 540,495" fill="#001b5a" />

      {/* Front half of orbiting ring (in front of the bottom cone) */}
      <path
        d="M 43 502 A 298.5 38.5 0 0 0 640 502 L 605 502 A 264 27 0 0 1 77 502 Z"
        fill="#001b5a"
      />
    </svg>
  );
}
