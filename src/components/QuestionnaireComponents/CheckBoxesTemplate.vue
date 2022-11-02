<template>
  <h1 class="nameQ1">{{ question.question }}</h1>
  <br />
  <div class="flex flex-wrap ml-[3rem]">
    <div
      class="text-black text-3xl not-italic leading-loose mt-[35px] flex items-center w-1/2"
      v-for="(answerObj, i) in question.answers"
      :key="i"
    >
      <input
        class="mr-[10px] w-[35px] h-[32px] shadow-none"
        type="checkbox"
        :value="answerObj.answer"
      />
      <label class="shadow-none" :for="answerObj.answer">
        {{ answerObj.answer }}</label
      >
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: ['question'],
}
</script>
