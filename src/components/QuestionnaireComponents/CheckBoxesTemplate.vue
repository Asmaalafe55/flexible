<template>
  <h1 class="nameQ1">{{ question.question }}</h1>
  <br />
  <div class="flex flex-wrap ml-6 lg:ml-[3rem]">
    <div
      class="text-black text-lg lg:text-3xl not-italic leading-loose mt-[35px] flex items-center w-1/2"
      v-for="(answerObj, i) in question.answers"
      :key="i"
    >
      <input
        class="mr-2 lg:mr-[10px] w-[35px] h-[32px] shadow-none select-none focus:ring-offset-0 active:ring-offset-0"
        type="checkbox"
        v-model="value"
        :id="answerObj.answer"
        :value="answerObj.answer"
      />
      <label class="shadow-none select-none" :for="answerObj.answer">
        {{ answerObj.answer }}</label
      >
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: ['question'],
  data() {
    return {
      value: [],
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value)
    },
  },
}
</script>
