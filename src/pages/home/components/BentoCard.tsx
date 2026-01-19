import React from "react";
import { cn } from "@/lib/utils";

// 1. Rozszerzamy interfejs o Twoje nowe pola
interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode; // Przyjmuje komponent ikony (np. <Rocket />)
  title: string;
  tags: string[];
}

const BentoCard = ({
  className,
  children,
  icon,
  title,
  tags,
  ...props
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border p-4 shadow", // Dodałem p-4 dla czytelności
        className,
      )}
      {...props}
    >
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="text-muted-foreground mb-4 text-sm">{children}</div>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-secondary rounded-md px-2 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BentoCard;
