<template>
  <div id="overlay"></div>
  <body class="bg-[#013565] pt-[5rem] pb-[5rem]">
    <div class="template-background">
      <div class="w-[100%] h-[85%]">
        <StartQuestionnaire v-if="qIndex == 0" />
        <TextBox v-else-if="qIndex == 1" @input="updateDomain" />

        <RadioQuestion
          v-if="currentQuestion.type === 'radio' && qIndex > 1"
          @input="updateRadio"
          :question="currentQuestion"
          :index="index"
        />

        <CheckBoxQuestion
          v-if="currentQuestion.type === 'checkbox' && qIndex > 1"
          :question="currentQuestion"
          :index="index"
        />
      </div>
      <div class="buttons">
        <button class="backButton" @click="qIndex--" v-if="qIndex >= 2">
          Back
        </button>

        <button @click="qIndex++" v-if="qIndex == 1" class="startButton">
          Start
        </button>
        <button
          @click="getData"
          v-else-if="qIndex != paths[category]?.length + 3"
          class="nextButton"
          :disabled="qIndex === 3 && !category"
        >
          Next
        </button>

        <button
          @click="openModal()"
          v-if="qIndex == paths[category]?.length + 3"
          class="nextButton"
        >
          Submit
        </button>
      </div>
    </div>
  </body>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import StartQuestionnaire from '@/components/QuestionnaireComponents/StartQuestionnaire.vue'
import TextBox from '@/components/QuestionnaireComponents/TextBox.vue'
import RadioButtonsTemplate from '@/components/QuestionnaireComponents/RadioButtonsTemplate.vue'
import CheckBoxesTemplate from '@/components/QuestionnaireComponents/CheckBoxesTemplate.vue'
import data from './data'

export default {
  data() {
    return {
      text: '',

      paths: {
        event: [0, 1, 2, 3, 4],
        blog: [0, 1, 2, 3],
      },
      category: '',
      data: data,
      currentQuestion: data[0],
      answers: [
        { question: 'What would you like to call your website?', answer: '' },
        { question: data[0].question, answer: '' },
      ],
      qIndex: 0,
    }
  },

  methods: {
    getData() {
      if (this.qIndex > 1) {
        if (this.answers[this.answers.length - 1].answer === '') {
          return
        }

        const chosenAnswer = this.currentQuestion.answers.find(
          (answerObj) =>
            answerObj.answer === this.answers[this.answers.length - 1].answer
        )

        if (this.currentQuestion && chosenAnswer.next) {
          this.currentQuestion = chosenAnswer.next
          this.answers.push({
            question: chosenAnswer.next.question,
            answer: '',
          })
        } else {
          this.currentQuestion = this.data[this.qIndex - 1]
          this.qIndex++
        }

        return
      }

      this.qIndex++
    },
    updateDomain(event) {
      this.answers[0].answer = event
    },

    updateRadio(event) {
      this.answers[this.answers.length - 1].answer = event
    },

    mounted() {
      if (
        localStorage.getItem('user') ||
        localStorage.getItem('access_token')
      ) {
        this.$router.push({ name: 'signin' })
      }
    },
  },
  components: {
    Navbar,
    StartQuestionnaire,
    TextBox,
    RadioQuestion: RadioButtonsTemplate,
    CheckBoxQuestion: CheckBoxesTemplate,
  },
}
</script>
