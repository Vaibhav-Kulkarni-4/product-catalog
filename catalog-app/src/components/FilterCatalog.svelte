<script>
  export let categories;
  export let brands;
  export let selectedCategory = [];
  export let selectedBrand = [];
</script>

<div class="row">
  <div class="col-sm-6">
    Categories
    {#if categories && categories.length}
      {#each categories as category}
        <div class="form-check">
          <span>{category}</span>
          <input
            bind:group={selectedCategory}
            class="form-check-input"
            type="checkbox"
            value={category}
          />
        </div>
      {/each}
    {/if}
  </div>
  <div class="col-sm-6">
    Brands
    {#if brands && brands.length}
      {#each brands as brand}
        <div class="form-check">
          <span>{brand}</span>
          <input
            bind:group={selectedBrand}
            class="form-check-input"
            type="checkbox"
            value={brand}
            id="flexCheckDefault"
          />
        </div>
      {/each}
    {/if}
  </div>
</div>
