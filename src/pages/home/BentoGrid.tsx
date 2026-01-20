import { AppWindow, Database, Settings } from "lucide-react";
import BentoCard from "./components/BentoCard";

const content = [
  {
    title: "Full Cycle Engineering",
    description: (
      <div>
        Czy programista powinien dotykać infrastruktury? Moim zdaniem tak.
        Eksperymentuję z automatyzacją wszystkiego, co da się zautomatyzować w
        cyklu SDLC.
      </div>
    ),
    tags: ["DevOps", "Architecture"],
    icon: <Settings className="h-6 w-6" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Frontend Performance",
    description:
      "Porzuciłem Next.js. Testuję TanStack Router w czystym React (SPA), by odzyskać pełną kontrolę nad routingiem.",
    tags: ["React 19", "TanStack"],
    icon: <AppWindow className="h-6 w-6" />,
    className: "",
  },
  {
    title: "Backend Core",
    description:
      "Optymalizacja zapytań w PostgreSQL i czysty, testowalny kod w C# .NET 10.",
    tags: [".NET", "Postgres"],
    icon: <Database className="h-6 w-6" />,
    className: "",
  },
];
const BentoGrid = () => {
  return (
    <section className="w-full">
      <BentoHeader />
      <BentoContent />
    </section>
  );
};
export default BentoGrid;

const BentoHeader = () => {
  return (
    <div className="flex w-full items-end justify-between gap-10 py-20">
      <div>
        <h2 className="text-3xl font-semibold">Obszary badań</h2>
        <p className="text-primary/60 text-2xl leading-15">
          Gdzie aktualnie szukam lepszych rozwiązań niż &quot;standard
          rynkowy&quot;.
        </p>
      </div>
      <div className="font-mono text-xl text-emerald-600">
        STATUS: AKTYWNY ROZWÓJ
      </div>
    </div>
  );
};

const BentoContent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {content.map((item, index) => (
        <BentoCard
          key={index}
          title={item.title}
          icon={item.icon}
          tags={item.tags}
          className={item.className}
        >
          {item.description}
        </BentoCard>
      ))}
    </div>
  );
};
