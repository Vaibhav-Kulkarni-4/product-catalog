<script>
  import ItemCard from "../components/ItemCard.svelte";
  import FilterCatalog from "../components/FilterCatalog.svelte";
  import { catalogStore } from "../stores";

  const { products } = catalogStore;

  $: productList = $products.products;
  $: categories = $products.categories;
  $: brands = $products.brands;
  $: selectedCategory = [];
  $: selectedBrand = [];
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<FilterCatalog {categories} {brands} bind:selectedCategory bind:selectedBrand />

<ItemCard {productList} {selectedCategory} {selectedBrand} />
