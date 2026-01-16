import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
export function ThemeSwitch() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="text-foreground bg-background hover:bg-accent rounded-md border p-2"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
