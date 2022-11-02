<template>
  <h1 class="nameQ1">{{ question.question }}</h1>
  <br />
  <div
    class="text-black font-poppins font-normal text-3xl not-italic leading-loose ml-[7rem] mt-[35px]"
    v-for="(answerObj, i) in question.answers"
    :key="i"
  >
    <input
      class="mr-[10px] border-none w-[35px] h-[32px] shadow-none"
      type="radio"
      name="radio-answer"
      v-model="value"
      :value="answerObj.answer"
      :id="answerObj.answer"
    />
    <label class="radio" :for="answerObj.answer"> {{ answerObj.answer }}</label>
    <br />
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
