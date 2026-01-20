import BentoGrid from "./BentoGrid";
import DevLogRecent from "./DevLogRecent";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Hero />
      <BentoGrid />
      <DevLogRecent />
    </div>
  );
}
