<script setup>
import ContactUsForm from '../components/ContactUsForm.vue';


</script>

<template>
  <section class="contact">
    <section class="content">
      <h2>Contact Us</h2>
      <p>Feel free to contact us regarding any queries or problems you may face!</p>
    </section>
    <ContactUsForm />
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  ;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
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
  .contact {
    padding: 50px 25px;
  }
}
</style>
