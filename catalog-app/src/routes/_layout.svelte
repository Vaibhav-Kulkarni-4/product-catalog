<script>
  import { onMount } from "svelte";
  import Nav from "../components/Nav.svelte";
  import { catalogService } from "../services";

  // Get product catalog service call
  onMount(() => {
    catalogService
      .getProductsCatalog()
      .then((products) => products)
      .catch((error) => console.log("error", error));
  });

  export let segment;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
