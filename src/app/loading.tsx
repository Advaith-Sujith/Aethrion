import BrandLogo from "@/components/ui/BrandLogo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-16 h-16 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/20 p-2.5 shadow-2xl flex items-center justify-center animate-pulse">
          <BrandLogo className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="text-lg font-bold text-white tracking-tight mb-1">Aethrion CX</div>
      <div className="text-xs text-white/50 mb-4">AthenaServ Infotech</div>
      <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full w-1/2 animate-pulse" />
      </div>
    </div>
  );
}
