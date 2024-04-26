"use server";

/**
 * Get the list of all of the images
 */
export async function fetchListOfImages() {
  const res: {
    name:string,
    type: string,
    mtime: string,
    size: number
  }[] = await fetch(String(process.env.NGINX_URL)).then(data => {
    return data.json();
  });

  return res.map(card => {
    return {
      url: `${process.env.NGINX_URL}/${card.name}`,
      age: new Date(card.mtime).valueOf()
    }
  });
}