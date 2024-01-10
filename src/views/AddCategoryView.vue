<template>
  <body class="body body-extra">
    <h1>Add Category</h1>
    <v-text-field label="Category Name" v-model="categoryName"></v-text-field>
    <v-carousel height="300" show-arrows="hover" class="carousel" hide-delimiters>
      <v-carousel-item :key="index" v-for="(Question, index) in Questions"
        ><h2>Question {{ index + 1 }} {{ Question.value }} Points</h2>
        <v-text-field label="Question" v-model="Question.Question"></v-text-field>
        <div class="test">
          <v-text-field label="Answer 1" v-model="Question.answers[0].text"></v-text-field>
          <v-checkbox
            @click="swapRightAnswer(index, 0)"
            value="1"
            v-model="rightAnswer[index]"
          ></v-checkbox>
          <v-text-field label="Answer 2" v-model="Question.answers[1].text"></v-text-field>
          <v-checkbox
            @click="swapRightAnswer(index, 1)"
            value="2"
            v-model="rightAnswer[index]"
          ></v-checkbox>
        </div>
        <div class="test">
          <v-text-field label="Answer 3" v-model="Question.answers[2].text"></v-text-field>
          <v-checkbox
            @click="swapRightAnswer(index, 2)"
            value="3"
            v-model="rightAnswer[index]"
          ></v-checkbox>
          <v-text-field label="Answer 4" v-model="Question.answers[3].text"></v-text-field>
          <v-checkbox
            @click="swapRightAnswer(index, 3)"
            value="4"
            v-model="rightAnswer[index]"
          ></v-checkbox>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-btn @click="testCategory()" class="btn">Save</v-btn>
    <v-btn to="/quizdata" class="btn">Back</v-btn>
    <saveCategory v-if="showPopup" />
  </body>
</template>

<script>
import saveCategory from '@/components/saveCategory.vue'
import { API_URL } from '@/utils/config.js'

export default {
  components: {
    saveCategory
  },
  data() {
    return {
      Questions: [
        {
          Question: '',
          value: 200,
          answers: [
            {
              id: 1,
              text: '',
              isValid: false
            },
            {
              id: 2,
              text: '',
              isValid: false
            },
            {
              id: 3,
              text: '',
              isValid: false
            },
            {
              id: 4,
              text: '',
              isValid: false
            }
          ]
        },
        {
          Question: '',
          value: 400,
          answers: [
            {
              id: 1,
              text: '',
              isValid: false
            },
            {
              id: 2,
              text: '',
              isValid: false
            },
            {
              id: 3,
              text: '',
              isValid: false
            },
            {
              id: 4,
              text: '',
              isValid: false
            }
          ]
        },
        {
          Question: '',
          value: 600,
          answers: [
            {
              id: 1,
              text: '',
              isValid: false
            },
            {
              id: 2,
              text: '',
              isValid: false
            },
            {
              id: 3,
              text: '',
              isValid: false
            },
            {
              id: 4,
              text: '',
              isValid: false
            }
          ]
        },
        {
          Question: '',
          value: 800,
          answers: [
            {
              id: 1,
              text: '',
              isValid: false
            },
            {
              id: 2,
              text: '',
              isValid: false
            },
            {
              id: 3,
              text: '',
              isValid: false
            },
            {
              id: 4,
              text: '',
              isValid: false
            }
          ]
        },
        {
          Question: '',
          value: 1000,
          answers: [
            {
              id: 1,
              text: '',
              isValid: false
            },
            {
              id: 2,
              text: '',
              isValid: false
            },
            {
              id: 3,
              text: '',
              isValid: false
            },
            {
              id: 4,
              text: '',
              isValid: false
            }
          ]
        }
      ],
      rightAnswer: [5, 5, 5, 5, 5],
      categorytestOK: false,
      categoryName: '',
      showPopup: false
    }
  },
  methods: {
    swapRightAnswer(index, value) {
      for (let i = 0; i < this.Questions[Number(index)].answers.length; i++) {
        if (i !== value) {
          this.Questions[Number(index)].answers[i].isValid = false
        }
      }
      this.Questions[Number(index)].answers[value].isValid =
        !this.Questions[Number(index)].answers[value].isValid
    },
    testCategory() {
      if (this.categoryName.length <= 0) {
        alert('Your Category has no name')
        return
      }
      for (let i = 0; i < this.Questions.length; i++) {
        if (this.Questions[i].Question.length <= 0) {
          alert('In Question ' + (i + 1) + ' is a Question missing')
          return
        }
        let count = 0
        for (let j = 0; j < this.Questions[i].answers.length; j++) {
          if (this.Questions[i].answers[j].text.length <= 0) {
            alert('In Question ' + (i + 1) + ' is  answer ' + (j + 1) + ' missing')
            return
          }
          if (this.Questions[i].answers[j].isValid) {
            count++
          }
        }
        if (count !== 1) {
          alert('In Question ' + (i + 1) + ' is no answer marked as correct')
          return
        }
      }
      this.saveCategory()
    },
    saveCategory() {
      const category = { title: this.categoryName }
      fetch(API_URL + '/groups', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(category)
      })
        .then((res) => res.json())
        .then((jsondata) => {
          console.log(jsondata)

          this.postQuestions(jsondata.id)
        })
    },
    postQuestions(groupid) {
      for (const Question of this.Questions) {
        const test = {
          question: Question.Question,
          value: Question.value,
          answers: Question.answers,
          groupId: groupid
        }

        fetch(API_URL + '/questions', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(test)
        })
          .then((res) => {
            console.log(res)
            return res.json()
          })
          .then((jsondata) => {
            console.log(jsondata)
            this.showPopup = true
          })
      }
    }
  }
}
</script>

<style scoped>
.body-extra {
  display: flex;
  flex-direction: column;
}
.carousel {
  height: 5rem;
}
.test {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 60%;
}
</style>
