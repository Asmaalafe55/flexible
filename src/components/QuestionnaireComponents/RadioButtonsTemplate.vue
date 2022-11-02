<template>
  <h1 class="nameQ1">{{ question.question }}</h1>
  <br />
  <div
    class="text-black font-normal text-xl lg:text-3xl not-italic leading-loose ml-8 lg:ml-[3rem] mt-[35px]"
    v-for="(answerObj, i) in question.answers"
    :key="i"
  >
    <input
      class="mr-[10px] border-none w-[35px] h-[35px] shadow-none"
      type="radio"
      name="radio-answer"
      v-model="value"
      :checked="value === answerObj.answer"
      :value="answerObj.answer"
      :id="answerObj.answer"
    />
    <label class="radio select-none" :for="answerObj.answer">
      {{ answerObj.answer }}</label
    >
  </div>
</template>
<script>
export default {
  props: ['question'],
  data() {
    return {
      value: '',
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value)
    },
  },
}
</script>
