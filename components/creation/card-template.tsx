import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import Image from "next/image";
import referencePicture from "@/public/images/card_polo.png";
import { CanvasCard } from "./canvas-card";

interface CardTemplateProps {
  dogName: string;
  race: string;
  age: string;
  imageSrc: any;
  exportCard: boolean;
}

export const CardTemplate = ({
  dogName,
  race,
  age,
  imageSrc,
  exportCard,
}: CardTemplateProps) => {
  return (
    <Card className="shadow-sm md:ml-3">
      <CardHeader>
        <CardTitle>Rendu de la carte</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <CanvasCard
          dogName={dogName}
          race={race}
          age={age}
          imageSrc={imageSrc}
          exportCard={exportCard}
        />
        {/* {imageSrc && <Image src={imageSrc} alt={""} width="500" height="500" />} */}
      </CardContent>
    </Card>
  );
};
