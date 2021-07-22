<script>
  export let productList = [];
  export let selectedCategory = [];
  export let selectedBrand = [];

  $: if (selectedBrand?.length || selectedCategory?.length) {
    productList = productList.filter((product) => {
      if (selectedCategory.length) {
        return selectedCategory.includes(product.category);
      }
      if (selectedBrand.length) {
        return selectedBrand.includes(product.brand);
      }
    });
  }
</script>

<h2>Filtered Products {productList?.length}</h2>
<div class="row">
  {#if productList && productList.length}
    {#each productList as product}
      <div class="col-sm-4 mt-3">
        <div class="card" style="width: 18rem;">
          <img src={product.searchImage} class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{product.product}</h5>
            <p class="card-text">{product.additionalInfo}</p>
            <p>
              MRP &#8377{product.price} <strike>{product.mrp}</strike>
              <em>{product.discountDisplayLabel}</em>
            </p>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
