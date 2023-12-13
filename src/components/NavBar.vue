<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

let toggleMenu = ref(false);
function setToggleMenu(value) {
    toggleMenu.value = value;
}
</script>

<template>
    <nav class="navbar">
        <section class="navbar-main">
            <section class="logo">
                <h1>ShopKaro</h1>
            </section>
            <section class="menu-icon">
                <i class="fa-solid fa-bars" @click="setToggleMenu(true)" v-if="!toggleMenu"></i>
                <i class="fa-solid fa-xmark" @click="setToggleMenu(false)" v-if="toggleMenu"></i>
            </section>
        </section>
        <section class="navlinks" :class="{ 'res-menu': toggleMenu }">
            <RouterLink to="/" exact @click="setToggleMenu(false)">Home</RouterLink>
            <RouterLink to="/about" @click="setToggleMenu(false)">About</RouterLink>
            <RouterLink to="/products" @click="setToggleMenu(false)">Products</RouterLink>
            <RouterLink to="/contactus" @click="setToggleMenu(false)">Contact Us</RouterLink>
        </section>
    </nav>
</template>

<style scoped>
nav {
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .navbar-main {
    background-color: var(--primary-color);

    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
}

nav .navbar-main .logo {
    background-color: var(--highlight-color);
    padding: 2px 5px;
    border-radius: 5px;

}

nav .navbar-main .logo h1 {
    width: fit-content;
    height: auto;
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
}

nav .navlinks {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    text-transform: uppercase;
    transition: 0.4s ease-out;
    /* margin: 25px 0; */
}

nav .navlinks a {
    color: #fff;
    border-bottom: 3px solid transparent;
    transition: border-bottom 0.3s ease;
    font-weight: 500;
}

nav .navlinks a:hover {
    border-bottom: 3px solid var(--highlight-color);
}

nav .navlinks .router-link-active {
    border-bottom: 3px solid var(--highlight-color);
}

nav .menu-icon {
    font-size: 1.5rem;
    font-weight: 900;
    display: none;
    color: #fff;
}

.res-menu {
    /* height: 0; */
    visibility: visible !important;
    /* display: flex !important; */
    transform: translateY(100%);
}

@media screen and (max-width: 768px) {
    nav {
        flex-direction: column;
    }

    nav .navbar-main {
        width: 100%;
    }

    nav .navlinks {
        /* transform: translateY(-100%); */
        /* display: none; */
        /* height: max-content; */
        visibility: hidden;
        width: 100%;
        padding: 0px 40px 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        background-color: var(--primary-color);
    }

    nav .menu-icon {
        display: block;
    }
}

@media screen and (max-width: 600px) {
    nav {
        padding: 0 20px;
    }

    nav .navbar-main {
        padding: 20px 0;
    }

    nav .navlinks {
        flex-direction: column;
        /* align-items: end; */
        gap: 15px;
    }
}
</style>