<script setup>
import { ref, watchEffect } from 'vue';
import ProductCard from "../components/ProductCard.vue";
import Loader from '@/components/Loader.vue';

let products = ref([]);
function setProducts(newVal) {
    products.value = newVal;
}

let loader = ref(true);
function toggleLoader() {
    loader.value = !loader.value;
}

watchEffect(async () => {
    try {

        // CALLING API TO FETCH ALL PRODUCTS
        await fetch("https://dummyjson.com/products")
            .then((data) => data.json())
            .then((info) => {
                setProducts(info.products);
                toggleLoader();
            });

    } catch (error) {
        console.error(error);
    }
});

</script>

<template>
    <h1>All Products</h1>
    <section id="products">
        <Loader v-if="loader" />

        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
</template>

<style scoped>
h1 {
    margin: 20px 100px;
    font-size: 1.5rem;
    text-align: center;
}

#products {
    padding: 0 100px;
    background-color: var(--background-color);
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 20px;
}

@media screen and (max-width: 600px) {
    h1 {
        margin: 20px;
        font-size: 1.2rem;
    }

    #products {
        padding: 20px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
</style>
