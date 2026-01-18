import MeshGradient from "./components/MeshGradientBackground";

const Hero = () => {
  return (
    <section className="relative h-250 w-full overflow-hidden">
      <MeshGradient />
      <div className="relative z-10 pt-32 text-center text-white">
        <h1>Tu jest Twój nagłówek</h1>
      </div>
    </section>
  );
};

export default Hero;
