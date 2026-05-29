export function MeshBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute -right-32 -top-32 h-[640px] w-[640px] rounded-full opacity-[0.32] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,137,58,0.55), transparent 70%)",
        }}
      />
      <div
        className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-[0.26] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,148,108,0.45), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 right-10 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(15,26,46,0.6), transparent 70%)",
        }}
      />
    </div>
  );
}
