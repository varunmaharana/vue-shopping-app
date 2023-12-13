import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSelectedProductStore = defineStore("selectedProduct", () => {
  const selectedProduct = ref({});
  function selectProduct(item) {
    selectedProduct.value = item;
  }

  return { selectedProduct, selectProduct };
});
