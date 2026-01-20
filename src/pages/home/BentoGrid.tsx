import { AppWindow, Database, Settings } from "lucide-react";
import BentoCard from "./components/BentoCard";

const content = [
  {
    title: "Full Cycle Engineering",
    description: (
      <div className="flex flex-col gap-3 max-w-md text-[16px]">
        <div>
          Czy programista powinien dotykać infrastruktury? Moim zdaniem tak.
          Eksperymentuję z automatyzacją wszystkiego, co da się zautomatyzować w
          cyklu SDLC.
        </div>
        <div className="[&_span]:text-emerald-500 [&_span]:text-sm  [&_span]:font-semibold font-mono text-[13px] leading-5.5 ">
          <p>
            <span>{">"} </span>Docker & Orchestration
          </p>
          <p>
            <span>{">"} </span>GitHub Actions / CI/CD Pipelines
          </p>
          <p>
            <span>{">"} </span>Monitoring & Observability
          </p>
        </div>
      </div>
    ),
    tags: ["DevOps", "Architecture"],
    icon: <Settings />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Frontend Performance",
    description:
      "Porzuciłem Next.js. Testuję TanStack Router w czystym React (SPA), by odzyskać pełną kontrolę nad routingiem.",
    tags: ["React 19", "TanStack"],
    icon: <AppWindow />,
    className: "",
  },
  {
    title: "Backend Core",
    description:
      "Optymalizacja zapytań w PostgreSQL i czysty, testowalny kod w C# .NET 10.",
    tags: [".NET", "Postgres"],
    icon: <Database />,
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
    <div className="md:flex w-full items-end justify-between gap-10  py-10 mb-3 md:mb-0">
      <div>
        <h2 className="text-xl font-semibold">Obszary badań</h2>
        <p className="text-primary/60 text-md leading-5 md:leading-10 ">
          Gdzie aktualnie szukam lepszych rozwiązań niż &quot;standard
          rynkowy&quot;.
        </p>
      </div>
      <div className="font-mono text-xs font-semibold text-emerald-600 float-end ">
        STATUS: AKTYWNY ROZWÓJ
      </div>
    </div>
  );
};

const BentoContent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pb-7 mb-7 border-b">
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
