import { Button } from "@/components/ui/button";
import MeshGradient from "./components/MeshGradientBackground";

const Hero = () => {
  return (
    <section className="items-center relative flex w-full justify-center overflow-hidden border-b">
      <MeshGradient />
      <div className="flex w-300 flex-col items-center justify-center gap-15 py-20 text-center">
        <div className="text-primary/60 flex items-center gap-3 rounded-full border px-2.5 py-1">
          <PulseCircle />
          Research & Learning in progress
        </div>
        <h1 className="px-4 text-5xl font-bold lg:text-8xl">
          {/* Inżynieria, architektura i granice optymalizacji. */}
          Inżynieria, architektura i inne głupoty.
        </h1>
        <div className="text-primary/60 px-7 text-2xl leading-9 md:px-30">
          {/* Zero marketingu, dużo kodu. Traktuję to miejsce jak inżynierski
          notatnik: bawię się C#, walczę o wydajność frontendu i weryfikuję
          podejście Full Cycle. */}
          Techniczny blog bez marketingu. Dokumentuję tu rozwiązania w C# i
          optymalizacje frontendu, nad którymi aktualnie pracuję. W tle testuję
          podejście Full Cycle w realnych projektach.
        </div>
        <div className="gap-2 space-x-2 space-y-4 md:flex w-full p-7 justify-center">
          <Button className="p-6 py-7 text-lg w-full md:w-fit ">
            Zobacz nad czym pracuję
          </Button>
          <Button
            asChild
            variant="outline"
            className="text-primary/60  w-full cursor-pointer gap-3 !bg-transparent p-6 py-7 text-lg md:w-fit"
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
