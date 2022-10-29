<template>
  <div class="parallax">
    <div class="contact-card">
      <div class="card-title">Contact Us</div>
      <form class="flex flex-col mt-10" @submit.prevent @submit="openModal">
        <div class="mb-6 mx-10">
          <label for="first_name" class="formLabel"> Name </label>
          <input
            type="text"
            id="first_name"
            class="formInput"
            placeholder="John"
            required
            v-model="name"
          />
        </div>

        <!-- move lable and input classes to global -->
        <div class="mb-6 mx-10">
          <label for="email" class="formLabel"> Email address </label>
          <input
            type="email"
            id="email"
            class="formInput"
            placeholder="john.doe@company.com"
            required
            v-model="email"
          />
        </div>
        <div class="mb-6 mx-10">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="formInput min-h-[100px]"
            placeholder="Your message..."
            required
            v-model="message"
          >
          </textarea>
        </div>
        <div class="flex justify-center">
          <button type="button" class="primaryButton">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    openModal: function () {},
    closeModal: function () {},
  },
}
</script>
