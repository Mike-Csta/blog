//może do rozbudowy później
const MeshGradient = () => {
  return (
    <>
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 z-1 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] bg-[size:60px_60px] opacity-70" />
      <div className="bg-glow-radial pointer-events-none absolute top-0 left-1/2 z-1 h-full w-full -translate-x-1/2 opacity-25" />
    </>
  );
};

export default MeshGradient;
