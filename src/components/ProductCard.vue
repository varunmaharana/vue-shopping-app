<script setup>
import { storeToRefs } from "pinia";
import { useSelectedProductStore } from "../stores/selectProduct"
import router from "@/router";

const props = defineProps({
  product: Object,
})

const selectedProductStore = useSelectedProductStore();
const { selectedProduct } = storeToRefs(selectedProductStore);
const { selectProduct } = selectedProductStore;

const chooseProduct = (product) => {
  selectProduct(product);
  router.push("/customerDetails");
}

</script>

<template>
  <section class="product-card">
    <img class="product-image" :src="product.thumbnail" :alt="product.title">
    <section class="product-details">
      <p class="product-brand">{{ product.brand }}</p>
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ "$" + product.price }}</p>
      <!-- <RouterLink to="/customerDetails"> -->
      <button class="buy-button" @click="() => chooseProduct(product)">BUY</button>
      <!-- </RouterLink> -->
    </section>
  </section>
</template>

<style scoped>
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-details {
  padding: 15px;
}

.product-brand {
  font-size: 12px;
  color: var(--highlight-color);
  /* margin-bottom: 5px; */
}

.product-title {
  font-size: 18px;
  color: var(--text-color);
  margin-bottom: 5px;
}

.product-description {
  font-size: 12px;
  color: var(--text-color);
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  color: var(--highlight-color);
  /* color: var(--secondary-color); */
  margin-bottom: 10px;
}

.buy-button {
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.buy-button:hover {
  background-color: #27ae60;
  /* Darker shade for hover effect, adjust as needed */
}

@media screen and (max-width: 600px) {
  .product-card {
    width: 100%;
  }
}
</style>