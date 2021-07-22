<!-- <script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
//   import { catalogStore } from "../stores";

  const { page } = stores();
  const { params } = $page;

//   const { products } = catalogStore;
  const { category } = params;

  let currentCategoryProductList = [];

//   onMount(() => {
//     currentCategoryProductList = products.filter(
//       (prod) => prod.category === category
//     );
//   });

  $: console.log(category,currentCategoryProductList);
</script> -->
