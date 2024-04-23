import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Image from "next/image";
import referencePicture from "@/public/images/card_polo.png";
// import { DialogTrigger } from "@/components/ui/dialog";

interface CardListItemProps {
  key: string;
}

// TODO add the dialog when clicking on the picture
export const CardListItem = ({ key }: CardListItemProps) => {
  return (
    <Card className="shadow-sm m-2 md:m-4" key={key}>
      <CardHeader>
        <CardTitle>Polochon</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={referencePicture}
          alt="Picture of the author"
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
        />
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">Carte créée le 12/04/2024</p>
      </CardFooter>
    </Card>
  );
};
