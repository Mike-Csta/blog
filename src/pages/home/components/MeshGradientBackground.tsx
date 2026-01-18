//może do rozbudowy później
const MeshGradient = () => {
  return (
    <>
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_72%,transparent_100%)] bg-[size:60px_60px] opacity-20" />
      <div className="bg-glow-radial pointer-events-none absolute top-0 left-1/2 h-[700px] w-[1500px] -translate-x-1/2 opacity-50" />
    </>
  );
};

export default MeshGradient;
