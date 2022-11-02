<template>
  <h1 class="nameQ1">What would you like to call your website?</h1>
  <br /><br /><br /><br /><br />
  <div class="domain">
    <input
      required
      v-model="text"
      class="text"
      type="text"
      placeholder="e.g. munchies"
    />
    <h1 class="com">.flexible.com</h1>
  </div>
  <br /><br />
  <br /><br />
  <br />
  <br />
  <br /><br /><br />
</template>
<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  watch: {
    text() {
      this.$emit('input', this.text)
    },
  },
}
</script>
