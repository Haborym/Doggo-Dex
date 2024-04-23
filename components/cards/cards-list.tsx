import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CardListItem } from "./card-list-item";

import { Dialog } from "@/components/ui/dialog";
import { CardListDialog } from "@/components/cards/card-list-dialog";

export const CardsList = () => {
  const cardNumber = 10;
  return (
    <Dialog>
      <Card className="border-0 filter-none">
        <CardHeader>
          <CardTitle>Les cartes de la communauté</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[...Array(cardNumber)].map((e, i) => (
              <CardListItem key={"doggo_" + i} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-muted-foreground cursor-default">
            Il y a eu {cardNumber} cartes créées !
          </p>
        </CardFooter>
      </Card>
      <CardListDialog />
    </Dialog>
  );
};
