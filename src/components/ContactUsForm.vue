<script setup>
import { ref } from 'vue';

let name = ref("");
let email = ref("");
let subject = ref("");
let message = ref("");

const onSubmit = (e) => {
  e.preventDefault();

  const reqObject = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  console.log(reqObject);
}


</script>

<template>
  <section class="contact-form">

    <form id="contact-us-form" @submit="onSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" required v-model="name"
          @change="(e) => name = e.target.value">
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required v-model="email"
          @change="(e) => email = e.target.value">
      </div>

      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" required v-model="subject"
          @change="(e) => subject = e.target.value">
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required v-model="message" placeholder="Message"
          @change="(e) => message = e.target.value"></textarea>
      </div>

      <button type="submit" class="submit-button">SEND</button>
    </form>
  </section>
</template>

<style scoped>
.contact-form {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  min-width: 50%;
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
</style>