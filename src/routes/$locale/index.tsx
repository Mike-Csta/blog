import { createFileRoute } from "@tanstack/react-router";
import "../../App.css";
import "../../lib/i18n";
import Home from "@/pages/home";

export const Route = createFileRoute("/$locale/")({
  component: Home,
});
