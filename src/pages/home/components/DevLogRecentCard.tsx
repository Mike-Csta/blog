import React from "react";
import { cn } from "@/lib/utils";

interface DevLogRecentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string;
  title: string;
}

const DevLogRecentCard = ({
  className,
  children,
  date,
  title,
  ...props
}: DevLogRecentCardProps) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border p-4 shadow flex flex-col gap-2  hover:bg-card-foreground/10 transition-all group",
        className,
      )}
      {...props}
    >
      <div className="font-mono text-xs text-emerald-500">{date}</div>
      <h3 className="text-md font-semibold group-hover:underline">{title}</h3>

      <div className="text-muted-foreground mb-1 text-sm ">{children}</div>
    </div>
  );
};

export default DevLogRecentCard;
