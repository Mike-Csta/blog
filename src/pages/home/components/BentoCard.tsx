import React from "react";
import { cn } from "@/lib/utils";
import { Braces } from "lucide-react";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
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
        "bg-card text-card-foreground rounded-xl border p-7 shadow flex flex-col gap-2 hover:border-primary/20 hover:bg-card/60 transition-all group relative",
        className,
      )}
      {...props}
    >
      <div className="absolute  top-0 right-0 p-7 opacity-5 hidden group-first:block group-hover:opacity-10 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-in-out">
        <Braces strokeWidth={1.75} size={170} />
      </div>
      <div className="rounded mb-3.5 flex items-center gap-2 bg-background border-2 aspect-square w-10 justify-center [&_svg]:size-4 [&_svg]:stroke-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold group-first:text-3xl ">{title}</h3>

      <div className="text-muted-foreground mb-1 text-sm group-first:leading-6.5">
        {children}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-secondary rounded-md px-2 py-1 text-xs text-primary/90 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BentoCard;
