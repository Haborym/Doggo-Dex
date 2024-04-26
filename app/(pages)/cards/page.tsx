import { fetchListOfImages } from "@/app/actions/actions";
import { CardsList } from "@/components/cards/cards-list";

export default async function Page() {
  const cards = await fetchListOfImages();

  return <CardsList cards={cards} />;
}
