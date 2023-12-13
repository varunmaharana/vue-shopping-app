<script setup>
import dp_img from "../assets/dp.jpg"

</script>

<template>
  <section class="about">
    <section class="content">
      <h2>About Us</h2>
      <p>We are a one man team, who are motivated enough to bring you the best products that you won't be able to buy!</p>
      <img :src="dp_img" alt="">
      <p>Varun Maharana</p>
    </section>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
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

@media screen and (max-width: 768px) {

  .about {
    padding: 50px 25px;
  }

  .contact {
    padding: 0 25px 50px;
  }
}
</style>
