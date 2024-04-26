import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CardListItem } from "./card-list-item";

import { Dialog } from "@/components/ui/dialog";
import { CardListDialog } from "@/components/cards/card-list-dialog";

interface CardListProps {
  cards: { url: string; age: number }[];
}

export const CardsList = ({ cards }: CardListProps) => {
  return (
    <Dialog>
      <Card className="border-0 filter-none">
        <CardHeader>
          <CardTitle>Les cartes de la communauté</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards &&
              cards.map((card, i) => (
                <CardListItem key={"doggo_" + i} url={card.url} />
              ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-muted-foreground cursor-default">
            Le Doggo Dex contient {cards.length} cartes !
          </p>
        </CardFooter>
      </Card>
      <CardListDialog />
    </Dialog>
  );
};
