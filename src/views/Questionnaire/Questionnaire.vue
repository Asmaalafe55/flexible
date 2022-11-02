<template>
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
          @input="updateCheckbox"
          :question="currentQuestion"
          :index="index"
        />
      </div>
      <div class="buttons">
        <button class="backButton" @click="goBack" v-if="qIndex > 1">
          Back
        </button>

        <button @click="qIndex++" v-if="qIndex === 0" class="startButton">
          Start
        </button>
        <button
          @click="getData"
          v-else-if="!isLastQuestion && qIndex > 0"
          class="nextButton"
        >
          Next
        </button>

        <button
          @click="openModal()"
          v-else-if="isLastQuestion"
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
      data: data,
      currentQuestion: data[0],
      // for history mainly
      questionsAsked: [],
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
        const currentAnswer = this.answers.find(this.findCondition)

        // stop the user from continuing if they haven't answered the question
        if (currentAnswer.answer === '') {
          return
        }

        const chosenAnswer = this.currentQuestion.answers.find(
          (answerObj) =>
            answerObj.answer === this.answers.find(this.findCondition).answer
        )

        if (this.currentQuestion && chosenAnswer?.next) {
          this.questionsAsked.push(this.currentQuestion)
          this.currentQuestion = chosenAnswer.next
          this.answers.push({
            question: chosenAnswer.next.question,
            answer: '',
          })
        } else {
          this.questionsAsked.push(this.currentQuestion)
          this.currentQuestion = this.data[this.qIndex - 1]
          this.answers.push({
            question: this.data[this.qIndex - 1].question,
            answer: '',
          })

          this.qIndex++
        }

        return
      }

      this.qIndex++
    },
    goBack() {
      if (this.qIndex > 1 && this.questionsAsked.length > 0) {
        // this.previousQuestion = previousQuestion
        this.currentQuestion = this.questionsAsked.pop()

        // check if the last question was connected to the current question
        if (!this.currentQuestion.answers.find((answerObj) => answerObj.next)) {
          this.qIndex--
        }

        return
      }

      this.qIndex--
    },
    updateDomain(event) {
      this.answers[0].answer = event
    },

    updateRadio(event) {
      this.answers.find(this.findCondition).answer = event
    },

    updateCheckbox(event) {
      this.answers.find(this.findCondition).answer = event
    },

    findCondition(obj) {
      return obj.question === this.currentQuestion.question
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
  computed: {
    isLastQuestion() {
      return !this.data[this.qIndex - 1]
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
