import { AuroraBackground } from "@/components/ui/aurora-background";
import "animate.css";
import Link from "next/link";

export default function Home() {
  return (
    <AuroraBackground>
      <p className="animate__animated animate__fadeInUp animate__delay-1s text-2xl md:text-4xl font-bold">
        On rajoute son chien au Doggo Dex ?
      </p>
      <div className="z-50 md:text-xl">
        <Link
          href="/creation"
          className="animate__animated animate__fadeIn animate__delay-2s underline"
        >
          Je crée ma carte
        </Link>
      </div>
    </AuroraBackground>
  );
}
