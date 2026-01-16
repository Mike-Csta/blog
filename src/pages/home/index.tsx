import Lottie from "lottie-react";
import anim from "../../../public/anim.json";
import { ThemeSwitch } from "@/components/ThemeSwitch";
export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="h-400 w-full">
        <Lottie
          animationData={anim}
          loop={true}
          className="absolute top-0 h-full opacity-50"
        />
      </div>
      <ThemeSwitch />
    </div>
  );
}
