<template>
  <h1 class="nameQ1">What kind of website would you like?</h1>
  <br />
  <div class="radios">
    <div class="flex items-center mb-5">
      <input
        type="radio"
        value="blog"
        class="border-none w-[35px] h-[32px]"
        @input="onRadioChange('blog')"
        name="radio-answer"
      />
      <label class="ml-5" for="blog"> Blog</label>
    </div>

    <div class="flex items-center mb-5">
      <input
        type="radio"
        value="portfolio"
        class="border-none w-[35px] h-[32px]"
        name="radio-answer"
      />
      <label class="ml-5" for="portfolio"> Portfolio</label>
    </div>

    <div class="flex items-center mb-5">
      <input
        type="radio"
        value="restaurant"
        class="border-none w-[35px] h-[32px]"
        name="radio-answer"
      />
      <label class="ml-5" for="restaurant"> Restaurant</label>
    </div>

    <div class="flex items-center mb-5">
      <input
        type="radio"
        value="event"
        @input="onRadioChange('event')"
        class="border-none w-[35px] h-[32px]"
        name="radio-answer"
      />
      <label class="ml-5" for="event"> Event</label>
    </div>

    <div class="flex items-center mb-5">
      <input
        type="radio"
        value="e-commerce"
        class="border-none w-[35px] h-[32px]"
        name="radio-answer"
      />
      <label class="ml-5" for="e-commerce"> E-commerce</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['updateCategory'],
  methods: {
    onRadioChange(value) {
      this.$emit('onRadioChange', value)
    },
  },
}
</script>
