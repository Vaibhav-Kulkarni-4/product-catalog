import { writable } from "svelte/store";

// Intitally, store will be uninitialized.
export const products = writable({
  __initialized: false,
});
