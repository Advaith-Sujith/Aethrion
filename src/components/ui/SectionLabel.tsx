interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 mb-4 ${className}`}
    >
      <span
        className={`inline-block w-5 h-px ${light ? "bg-accent-light" : "bg-accent"}`}
      />
      <span
        className={`text-xs font-semibold tracking-widest uppercase ${
          light ? "text-accent-light" : "text-accent"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
