import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$locale")({
  component: LocaleLayout,
  loader: ({ params }) => {
    const supportedLocales = ["pl", "en"];
    if (!supportedLocales.includes(params.locale)) {
      throw notFound();
    }
  },
});

function LocaleLayout() {
  const { locale } = Route.useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
