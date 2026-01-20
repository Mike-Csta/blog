import DevLogRecentCard from "./components/DevLogRecentCard";

const content = [
  {
    title: "Migracja na TanStack Router",
    date: "2026-01-12",
    tags: ["React", "TanStack"],
    description:
      "Dlaczego type-safe routing zmienia wszystko i dlaczego Next.js przestał być domyślnym wyborem w moich projektach.",
    className: "",
  },
  {
    title: "Odchudzanie Dockera",
    date: "2025-12-05",
    tags: ["Docker", ".NET 10"],
    description:
      "Case study: Jak AOT w .NET 10 pozwoliło zejść z rozmiarem obrazu o 60% bez utraty wydajności.",
    className: "",
  },
  {
    title: "Event Sourcing",
    date: "2025-11-20",
    tags: ["Architecture", ".NET"],
    description:
      "Kiedy Kafka to armata na wróble? Eksperymenty z MartenDb w środowisku .NET.",
    className: "",
  },
];

const DevLogRecent = () => {
  return (
    <div className="w-full">
      <DevLogRecentHeader />
      <DevLogRecentContent />
    </div>
  );
};

export default DevLogRecent;

const DevLogRecentHeader = () => {
  return (
    <div className="md:flex w-full items-end justify-between gap-10  py-10 mb-3 md:mb-0">
      <div>
        <h2 className="text-xl font-semibold">Devlog i projekty</h2>
        <p className="text-primary/60 text-md leading-5 md:leading-10 ">
          Wnioski po nieudanych deployach i udanych refactorach.
        </p>
      </div>
      <div className="font-mono text-xs   float-end underline">
        Wszystkie wpisy {`->`}
      </div>
    </div>
  );
};

const DevLogRecentContent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 pb-7 mb-7 border-b">
      {content.map((item, index) => (
        <DevLogRecentCard
          key={index}
          title={item.title}
          date={item.date}
          className={item.className}
        >
          {item.description}
        </DevLogRecentCard>
      ))}
    </div>
  );
};
