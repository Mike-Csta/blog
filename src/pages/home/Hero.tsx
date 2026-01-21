import { Button } from "@/components/ui/button";
import MeshGradient from "./components/MeshGradientBackground";

const Hero = () => {
  return (
    <section className="w-full border-b ">
      <div className="items-center relative flex w-full justify-center overflow-hidden pb-7 max-w-6xl  m-auto ">
        <MeshGradient />
        <div className="flex w-300 flex-col items-center justify-center gap-8 md:gap-15 pt-9 md:py-20 text-center ">
          <div className="text-primary/60 flex items-center gap-2 rounded-full border px-2.5 py-1 ">
            <PulseCircle />
            <p className="hidden md:block">Research & Learning in progress</p>
            <p className="block md:hidden">Research in progress</p>
          </div>
          <h1 className="text-5xl font-bold lg:text-7xl mx-18">
            {/* Inżynieria, architektura i granice optymalizacji. */}
            Inżynieria, architektura i inne głupoty.
          </h1>
          <div className="text-primary/60  text-xl md:text-xl leading-7.5 md:px-23 px-8">
            {/* Zero marketingu, dużo kodu. Traktuję to miejsce jak inżynierski
          notatnik: bawię się C#, walczę o wydajność frontendu i weryfikuję
          podejście Full Cycle. */}
            Techniczny blog bez marketingu. Dokumentuję tu rozwiązania w C# i
            optymalizacje frontendu, nad którymi aktualnie pracuję. W tle
            testuję podejście Full Cycle w realnych projektach.
          </div>
          <div className="gap-2 space-x-2 space-y-4 md:flex w-full justify-center z-2 px-8">
            <Button asChild className="p-6 text-md w-full md:w-fit">
              <a href="#bento-grid">Zobacz nad czym pracuję</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-primary/60  w-full cursor-pointer gap-3 p-6 pl-5 text-sm md:w-fit"
            >
              <a
                href="https://github.com/Mike-Csta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GitHub_Invertocat_Black.svg"
                  alt="GitHub Logo"
                  className="h-6 w-6 dark:hidden"
                />
                <img
                  src="/GitHub_Invertocat_White.svg"
                  alt="GitHub Logo"
                  className="hidden h-6 w-6 dark:block"
                />
                Github
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const PulseCircle = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
    </span>
  );
};
