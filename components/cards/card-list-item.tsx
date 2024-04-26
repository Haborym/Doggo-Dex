import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";

interface CardListItemProps {
  url: string;
}

// TODO add the dialog when clicking on the picture
export const CardListItem = ({ url }: CardListItemProps) => {
  return (
    <Card className="shadow-sm m-2 md:m-4 py-4">
      <CardContent>
        <Image
          src={url}
          alt="Picture of the author"
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8v4ahnoEIwDiqkL4KAfAvFa+uwpmFAAAAAElFTkSuQmCC"
        />
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground">Carte créée le 12/04/2024</p>
      </CardFooter>
    </Card>
  );
};
