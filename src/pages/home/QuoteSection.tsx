import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className=" bg-foreground/4 w-full">
      <div className="gap-7 mt-20 mb-21 flex flex-col items-center max-w-6xl m-auto">
        <Quote size={34} className="opacity-40" />
        <div className=" text-xl md:text-3xl font-semibold px-7 md:px-46 text-center leading-8 md:leading-11">
          &quot;Język jest wtórny, liczy się panowanie nad chaosem. Każda linia
          to wzrost entropii układu. Każda abstrakcja to iluzja porządku.&quot;
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <div className="text-xs p-2 py-2.5 rounded-full bg-foreground/7  ">
            MC
          </div>
          <div className="text-sm font-semibold">
            <p>Mikołaj Chlasta</p>
            <p className="text-xs text-primary/50">Engineering Log</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
