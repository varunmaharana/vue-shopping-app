<script setup>
import router from '@/router';
import { useOrderDetailsStore } from '@/stores/orderDetails';
import { useSelectedProductStore } from '@/stores/selectProduct';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';


const orderDetailsStore = useOrderDetailsStore();
const { orderDetails } = storeToRefs(orderDetailsStore);
const { setOrderDetails } = orderDetailsStore;

function roundOffTwoDecimalPlaces(num) {
    return Math.round((num) * 100) / 100
}

const discountFlat = roundOffTwoDecimalPlaces(orderDetails.value.product.discountPercentage / 100) * orderDetails.value.product.price;
const gstFlat = roundOffTwoDecimalPlaces(18 / 100 * (orderDetails.value.product.price - discountFlat));
const grandTotal = roundOffTwoDecimalPlaces(orderDetails.value.product.price - discountFlat + gstFlat);


watchEffect(() => {
    if (orderDetails.value.product.id === undefined) {
        router.push("/products");
    }
});

const onSubmit = (e) => {
    e.preventDefault();



}

</script>

<template>
    <section id="order">
        <section class="content">
            <section class="billing-details">
                <h1>Billing Details</h1>
                <section class="content">
                    <section>
                        <span class="product-name">Item Total</span>
                        <span class="product-quantity">x1</span>
                        <span class="product-price">${{ orderDetails.product.price }}</span>
                    </section>

                    <section>
                        <span class="discount">Discount</span>
                        <span class="discount-percentage">-{{ orderDetails.product.discountPercentage }}%</span>
                        <span class="discount-flat">-${{ discountFlat }}</span>
                    </section>

                    <section>
                        <span class="gst">GST</span>
                        <span class="gst-percentage">18%</span>
                        <span class="gst-flat">${{ gstFlat }}</span>
                    </section>

                    <section>
                        <span class="grand-total">Grand Total</span>
                        <span class=""></span>
                        <span class="grand-total">${{ grandTotal }}</span>
                    </section>
                </section>
            </section>

            <section class="delivery-details">
                <h1>Delivery Details</h1>
                <section class="content">
                    <p>To,</p>
                    <p class="customer-name"><i class="fa-solid fa-user"></i>{{ orderDetails.customerDetails.name }}</p>
                    <p class="customer-address"><i class="fa-solid fa-location-dot"></i>{{
                        orderDetails.customerDetails.address }}</p>
                </section>
            </section>

            <section class="delivery-details">
                <h1>Contact Details</h1>
                <section class="content">
                    <p class="customer-name"><i class="fa-solid fa-user"></i>{{ orderDetails.customerDetails.name }}</p>
                    <p class="customer-contact"><i class="fa-solid fa-phone"></i>{{ orderDetails.customerDetails.phone }}
                    </p>
                    <p class="customer-contact"><i class="fa-solid fa-envelope"></i>{{ orderDetails.customerDetails.email }}
                    </p>
                </section>
            </section>


            <form @submit="onSubmit">
                <button class="cancel-button" @click="router.push('/products')">CANCEL</button>
                <button type="submit" class="submit-button">PROCEED TO PAY</button>
            </form>

        </section>
        <section class="product-detail">
            <h1><i class="fa-solid fa-cart-shopping"></i><span>Product in cart</span></h1>
            <section v-if="orderDetails.product.id">
                <img :src="orderDetails.product.thumbnail" :alt="orderDetails.product.title">
                <section class="product-info">
                    <h3 class="product-title">{{ orderDetails.product.title }}</h3>
                    <!-- <p class="product-price">{{ "$" + orderDetails.product.price }}</p> -->
                </section>
            </section>
            <section v-else="orderDetails.product.id">
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

#order {
    padding: 50px 100px;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    gap: 50px;
}

#order .content {
    min-width: 50%;
}

#order .content h1 {
    border-bottom: 3px solid var(--highlight-color);
    display: inline-block;
}

#order .content .billing-details .content {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 40px;
    width: 90%;
}

#order .content .billing-details .content section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

#order .content .billing-details .content section:nth-child(2) {
    color: rgb(39, 123, 39);
}

#order .content .billing-details .content section:nth-child(4) {
    font-weight: 700;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed #c0c0c0;
}

#order .content .billing-details .content section span {
    width: 33.33%;
}

#order .content .billing-details .content section span:nth-child(2),
#order .content .billing-details .content section span:nth-child(3) {
    text-align: right;
}

#order .content .delivery-details .content {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 40px;
    width: 90%;
}

#order .content .delivery-details .content p i {
    color: var(--highlight-color);
    margin-right: 10px;
}

#order .content .delivery-details .content section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

#order .product-detail h1 i {
    margin-right: 10px;
    color: var(--highlight-color);
}

#order .product-detail h1 span {
    border-bottom: 3px solid var(--highlight-color);
}

#order .product-detail>section {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
}

#order .product-detail img {
    width: auto;
    height: 200px;
}

#order .product-detail .product-info .product-title {
    font-size: 18px;
    color: var(--text-color);
    margin-bottom: 5px;
}


#order .product-detail .product-info .product-price {
    font-size: 16px;
    color: var(--secondary-color);
    margin-bottom: 10px;
}


.submit-button {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
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

    #order {
        padding: 20px;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 10px;
    }

    #order .content .billing-details .content {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px 40px;
        width: 100%;
    }

    #order .content {
        width: 100%;
    }

    #order .product-detail img {
        width: auto;
        height: auto;
    }

    #order .content .delivery-details .content {
        padding: 10px;
        width: 100%;
    }

}

@media screen and (max-width: 425px) {
    #order .product-detail img {
        width: auto;
        height: auto;
        max-height: 300px;
    }

    #order .content .billing-details .content {
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        width: 100%;
    }

    #order .content .billing-details .content section {
        font-size: 14px;
    }

    #order .content .billing-details .content section:nth-child(4) {
        font-size: 16px;
    }

    #order .content .delivery-details .content {
        font-size: 14px;
    }

}
</style>