import BentoGrid from "./BentoGrid";
import DevLogRecent from "./DevLogRecent";
import Hero from "./Hero";
import QuoteSection from "./QuoteSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Hero />
      <BentoGrid />
      <DevLogRecent />
      <QuoteSection />
    </div>
  );
}
