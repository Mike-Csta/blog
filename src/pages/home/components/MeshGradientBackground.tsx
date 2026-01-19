//może do rozbudowy później
const MeshGradient = () => {
  return (
    <>
      <div className="z-1 bg-grid-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] bg-[size:60px_60px] opacity-70" />
      <div className="z-1 bg-glow-radial pointer-events-none absolute top-0 left-1/2 h-full w-full -translate-x-1/2 opacity-50" />
    </>
  );
};

export default MeshGradient;
