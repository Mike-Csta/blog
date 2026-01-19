import BentoGrid from "./BentoGrid";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Hero />
      <BentoGrid />
    </div>
  );
}
