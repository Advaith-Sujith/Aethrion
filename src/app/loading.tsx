export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-14 h-14 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-white/20 p-2.5 shadow-2xl flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="32" height="32" rx="6" fill="#0ea5e9" />
            <path
              d="M8 22L14 10L20 18L24 14"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="14" r="2.5" fill="white" />
          </svg>
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
