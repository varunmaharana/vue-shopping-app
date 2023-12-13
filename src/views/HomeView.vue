<script setup>
import ContactUsForm from '../components/ContactUsForm.vue';
import { RouterLink } from 'vue-router';
import hero_section_banner from "../assets/hero-section-banner.jpg";
import dp_img from "../assets/dp.jpg"

</script>

<template>
  <!-- HERO SECTION -->
  <section class="hero">
    <section class="content">
      <h1>ShopKaro</h1>
      <p>Welcome to the best "everything available, nothing buyable" online marketplace!</p>
      <RouterLink to="/products">
        <button>Browse Products <i class="fa-solid fa-arrow-right"></i></button>
      </RouterLink>
    </section>

    <section class="backdrop"></section>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about">
    <section class="content">
      <h2>About Us</h2>
      <p>We are a one man team, who are motivated enough to bring you the best products that you won't be able to buy!</p>
      <img :src="dp_img" alt="">
      <p>Varun Maharana</p>
    </section>
  </section>

  <!-- CONTACT SECTION -->
  <section class="contact">
    <section class="content">
      <h2>Contact Us</h2>
      <p>Feel free to contact us regarding any queries or problems you may face!</p>
    </section>
    <ContactUsForm />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  background-image: url(../assets/hero-section-banner.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero .backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}

.hero .content {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: white;
  padding: 100px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.hero .content h1 {
  font-size: 4rem;
}

.hero .content p {
  font-size: 1.3rem;
}

.hero .content button {
  font-size: 1.3rem;
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;

}

.hero .content button i {
  margin-left: 10px;
  transition: 0.3s;
}

.hero .content button:hover {
  background-color: #1f77c7;
}

.hero .content button:hover i {
  transform: translateX(10px);
}

.about {
  display: flex;
  justify-content: center;
  ;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
}

.about .content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.about .content img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-top: 30px;
}

.about .content h2 {
  display: inline-block;
  /* padding-bottom: 2px; */

  border-bottom: 3px solid var(--highlight-color);
}


.contact {
  display: flex;
  justify-content: center;
  ;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 50px 50px;
}

.contact .content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.contact .content h2 {
  display: inline-block;
  /* padding-bottom: 2px; */

  border-bottom: 3px solid var(--highlight-color);
}

@media screen and (max-width: 768px) {
  .hero .content {
    padding: 10px 20px;
  }

  .hero .content h1 {
    font-size: 3rem;
  }

  .hero .content p {
    font-size: 0.9rem;
  }

  .hero .content button {
    font-size: 1.3rem;
    background-color: var(--primary-color);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  .about {
    padding: 50px 25px;
  }

  .contact {
    padding: 0 25px 50px;
  }
}
</style>