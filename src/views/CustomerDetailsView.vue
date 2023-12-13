<script setup>
import router from '@/router';
import { useOrderDetailsStore } from '@/stores/orderDetails';
import { useSelectedProductStore } from '@/stores/selectProduct';
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';

// Selected Product Details
const selectedProductStore = useSelectedProductStore();
const { selectedProduct } = storeToRefs(selectedProductStore);
const { selectProduct } = selectedProductStore;


const orderDetailsStore = useOrderDetailsStore();
const { orderDetails } = storeToRefs(orderDetailsStore);
const { setOrderDetails } = orderDetailsStore;

watchEffect(() => {
    if (selectedProduct.value.id === undefined) {
        router.push("/products");
    }
});

let name = ref("");
let email = ref("");
let phone = ref("");
let address = ref("");

const onSubmit = (e) => {
    e.preventDefault();

    const currentOrderDetails = {
        product: selectedProduct.value,
        customerDetails: {
            name: name,
            email: email,
            phone: phone,
            address: address,
        }
    }

    setOrderDetails(currentOrderDetails);
    console.log(orderDetails.value);
    router.push("/order");

}

</script>

<template>
    <section id="customer-details">
        <section class="content">
            <h1>Fill in your details</h1>
            <form id="contact-us-form" @submit="onSubmit">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required v-model="name" placeholder="Name"
                        @change="(e) => name = e.target.value">
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required v-model="email" placeholder="Email"
                        @change="(e) => email = e.target.value">
                </div>

                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required v-model="phone" pattern="[0-9]{10}"
                        placeholder="Phone Number" @change="(e) => phone = e.target.value">
                </div>

                <div class="form-group">
                    <label for="address">Delivery Address:</label>
                    <textarea id="address" name="address" rows="4" required v-model="address" placeholder="Delivery Address"
                        @change="(e) => address = e.target.value">
                    </textarea>
                </div>

                <button class="cancel-button" @click="router.push('/products')">CANCEL</button>
                <button type="submit" class="submit-button" v-if="selectedProduct.id">PROCEED</button>
                <button class="submit-button" @click="router.push('/products')" v-else="selectedProduct.id">SELECT
                    PRODUCT</button>
            </form>
        </section>
        <section class="product-detail">
            <h1><i class="fa-solid fa-cart-shopping"></i><span>Product in cart</span></h1>
            <section v-if="selectedProduct.id">
                <img :src="selectedProduct.thumbnail" :alt="selectedProduct.title">
                <section class="product-info">
                    <h3 class="product-title">{{ selectedProduct.title }}</h3>
                    <p class="product-price">{{ "$" + selectedProduct.price }}</p>
                </section>
            </section>
            <section v-else="selectedProduct.id">
                <p>Select Product First!!</p>
            </section>
        </section>
    </section>
</template>

<style scoped>
h1 {
    margin: 20px 0;
    font-size: 1.5rem;
}

#customer-details {
    padding: 50px 100px;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    gap: 50px;
}

#customer-details .content {
    min-width: 50%;
}

#customer-details .content h1 {
    border-bottom: 3px solid var(--highlight-color);
    display: inline-block;
}

#customer-details .product-detail h1 i {
    margin-right: 10px;
    color: var(--highlight-color);
}

#customer-details .product-detail h1 span {
    border-bottom: 3px solid var(--highlight-color);
}

#customer-details .product-detail>section {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}

#customer-details .product-detail img {
    width: auto;
    height: 200px;
}

#customer-details .product-detail .product-info .product-title {
    font-size: 18px;
    color: var(--text-color);
    margin-bottom: 5px;
}


#customer-details .product-detail .product-info .product-price {
    font-size: 16px;
    color: var(--secondary-color);
    margin-bottom: 10px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: var(--text-color);
}

input,
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    /* resize: vertical; */
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.submit-button {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
}

.submit-button:hover {
    background-color: #1f77c7;
}

.cancel-button {
    background-color: transparent;
    color: var(--primary-color);
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    margin-right: 20px;
}


@media screen and (max-width: 768px) {
    h1 {
        font-size: 1.2rem;
    }

    #customer-details {
        padding: 20px;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 10px;
    }

    #customer-details .content {
        width: 100%;
    }

    #customer-details .product-detail img {
        width: auto;
        height: auto;
    }

}

@media screen and (max-width: 425px) {
    #customer-details .product-detail img {
        width: auto;
        height: auto;
        max-height: 300px;
    }

}
</style>