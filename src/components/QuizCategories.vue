<template>
  <h2 class="category-name">{{ category }}</h2>

  <div class="Question" v-for="question in questionArray" :key="question.id">
    <routeButton
      class="singleQuestion"
      :route="{ name: 'question', query: { id: question.id, category: category } }"
      :description="String(question.value)"
      rounded="xl"
      size="x-large"
      block="block"
      height="6rem"
    />
  </div>
</template>
<script>
import routeButton from '@/components/routeButton.vue'
import { useQuestionStore } from '@/stores/questions.js'
export default {
  components: {
    routeButton
  },
  setup() {
    const questionStore = useQuestionStore()
    return { questionStore }
  },

  props: {
    category: String,
    Questions: String
  },
  data() {
    return {
      disabled: false,
      block: true
    }
  },
  computed: {
    questionArray() {
      const result = this.questionStore.questions.data.filter((question) => {
        return question.groupName === this.category
      })
      return result
    }
  },
  methods: {
    disableButton() {
      this.disabled = !this.disabled
    }
  }
}
</script>

<style scoped>
.category-name {
  text-align: center;
}
.Question {
  margin: 1rem;
}
</style>
