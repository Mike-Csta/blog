import { Link, useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const params = useParams({ strict: false });

  return (
    <div className="flex gap-2">
      <Button asChild variant="outline">
        <Link
          from="/$locale"
          to="."
          params={{ ...params, locale: "pl" }}
          search={(prev) => prev}
        >
          PL
        </Link>
      </Button>

      <Button asChild variant="outline">
        <Link
          from="/$locale"
          to="."
          params={{ ...params, locale: "en" }}
          search={(prev) => prev}
        >
          EN
        </Link>
      </Button>
    </div>
  );
}
