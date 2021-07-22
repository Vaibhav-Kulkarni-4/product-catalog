export function parseCatalog(products) {
  let categories = [];
  let brands = [];
  for (const product of products) {
    // curated categories and brands from products
    categories = [...new Set(categories), product.category];
    brands = [...new Set(brands), product.brand];
  }
  return { products, categories, brands };
}
