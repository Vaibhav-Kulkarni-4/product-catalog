import { catalogParser } from "../helpers";
import { catalogStore } from "../stores";

export function getProductsCatalog() {
  const url = "https://demo7242716.mockable.io/products";
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, payload)
    .then((res) => res.json())
    .then((result) => {
      const parsedCatalog = catalogParser.parseCatalog(result.products);
      catalogStore.products.set(parsedCatalog);
      return result;
    });
}
