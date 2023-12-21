<template>
  <h1>My Jeopardy</h1>
  <h2>{{ $route.query.category }}</h2>
  <h3>{{ Question[0].value }}</h3>
  <p>{{ Question[0].question }}</p>
  <div :key="answer.id" v-for="answer in Question[0].answers">
    <v-btn class="answer" block rounded="xl" size="x-large">{{ answer.text }}</v-btn>
  </div>
  <routeButton to="/quiztemplate" description="Back " size="large" class="noLink bottomleft" />
</template>

<script>
import routeButton from '@/components/routeButton.vue'
export default {
  created() {
    this.getQuestion(this.$route.query.id)
  },
  components: {
    routeButton
  },
  data() {
    return {
      Question: Object,
      questions: [
        {
          id: '1a3e4f5b-8c7d-4e6f-9a2b-3c1d2e4f5a6b',
          groupId: 'skubfiwsubfeiw',
          question: 'Who won the FIFA World Cup in 2018?',
          value: 200,
          answers: [
            {
              id: 1,
              text: 'Germany',
              isValid: false
            },
            {
              id: 2,
              text: 'Brazil',
              isValid: false
            },
            {
              id: 3,
              text: 'France',
              isValid: true
            },
            {
              id: 4,
              text: 'Argentina',
              isValid: false
            }
          ]
        },
        {
          id: '2a4c6d8a-1f3e-7b5c-9d2a-4e6f8a9c3d2e',
          groupId: 'skubfiwsubfeiw',
          question: 'Which country hosted the 2016 Summer Olympics?',
          value: 400,
          answers: [
            {
              id: 1,
              text: 'United States',
              isValid: false
            },
            {
              id: 2,
              text: 'Brazil',
              isValid: true
            },
            {
              id: 3,
              text: 'China',
              isValid: false
            },
            {
              id: 4,
              text: 'Russia',
              isValid: false
            }
          ]
        },
        {
          id: '3a2a1d9e-8f7b-4e5d-2a1f-9e8c7b3d5a6f',
          groupId: 'skubfiwsubfeiw',
          question: "Which sport is known as the 'king of sports'?",
          value: 600,
          answers: [
            {
              id: 1,
              text: 'Football (Soccer)',
              isValid: true
            },
            {
              id: 2,
              text: 'Basketball',
              isValid: false
            },
            {
              id: 3,
              text: 'Cricket',
              isValid: false
            },
            {
              id: 4,
              text: 'Tennis',
              isValid: false
            }
          ]
        },
        {
          id: '4a5e6f7a-1b2c3d4e-5f6a7b8c-9d0e1f2a3b4c',
          groupId: 'skubfiwsubfeiw',
          question: 'In which year did Usain Bolt set the world record for the 100 meters?',
          value: 800,
          answers: [
            {
              id: 1,
              text: '2008',
              isValid: false
            },
            {
              id: 2,
              text: '2011',
              isValid: false
            },
            {
              id: 3,
              text: '2009',
              isValid: true
            },
            {
              id: 4,
              text: '2010',
              isValid: false
            }
          ]
        },
        {
          id: '5a4d3c2b-1a9f8e7d-6c5b4a3d-2f1e9d8c7b6a',
          groupId: 'skubfiwsubfeiw',
          question: 'Which tennis player has won the most Grand Slam singles titles?',
          value: 1000,
          answers: [
            {
              id: 1,
              text: 'Rafael Nadal',
              isValid: false
            },
            {
              id: 2,
              text: 'Roger Federer',
              isValid: true
            },
            {
              id: 3,
              text: 'Novak Djokovic',
              isValid: false
            },
            {
              id: 4,
              text: 'Serena Williams',
              isValid: false
            }
          ]
        },
        {
          id: '1b3e4f5b-8c7d-4e6f-9a2b-3c1d2e4f5a6b',
          groupId: 'skubdfgdfiwhgfdgdsubfedgaiw',
          question: 'Which property is used to change the background color in CSS?',
          value: 200,
          answers: [
            {
              id: 1,
              text: 'color',
              isValid: false
            },
            {
              id: 2,
              text: 'background-color',
              isValid: true
            },
            {
              id: 3,
              text: 'text-color',
              isValid: false
            },
            {
              id: 4,
              text: 'font-color',
              isValid: false
            }
          ]
        },
        {
          id: '2b4c6d8a-1f3e-7b5c-9d2a-4e6f8a9c3d2e',
          groupId: 'skubdfgdfiwhgfdgdsubfedgaiw',
          question: 'What does CSS stand for?',
          value: 400,
          answers: [
            {
              id: 1,
              text: 'Computer Style Sheets',
              isValid: false
            },
            {
              id: 2,
              text: 'Cascading Style Sheets',
              isValid: true
            },
            {
              id: 3,
              text: 'Creative Style Sheets',
              isValid: false
            },
            {
              id: 4,
              text: 'Colorful Style Sheets',
              isValid: false
            }
          ]
        },
        {
          id: '3b2a1d9e-8f7b-4e5d-2a1f-9e8c7b3d5a6f',
          groupId: 'skubdfgdfiwhgfdgdsubfedgaiw',
          question: 'How can you link a CSS file to your HTML document?',
          value: 600,
          answers: [
            {
              id: 1,
              text: '&lt;style&gt; tag',
              isValid: false
            },
            {
              id: 2,
              text: "&lt;link&gt; tag with 'stylesheet' type",
              isValid: true
            },
            {
              id: 3,
              text: '&lt;css&gt; tag',
              isValid: false
            },
            {
              id: 4,
              text: '&lt;script&gt; tag',
              isValid: false
            }
          ]
        },
        {
          id: '4b5e6f7a-1b2c3d4e-5f6a7b8c-9d0e1f2a3b4c',
          groupId: 'skubdfgdfiwhgfdgdsubfedgaiw',
          question: 'What is the box model in CSS?',
          value: 800,
          answers: [
            {
              id: 1,
              text: 'A model for creating boxes in Photoshop',
              isValid: false
            },
            {
              id: 2,
              text: 'A layout model that consists of content, padding, border, and margin',
              isValid: true
            },
            {
              id: 3,
              text: 'A model for designing three-dimensional boxes',
              isValid: false
            },
            {
              id: 4,
              text: 'A model for creating alert boxes',
              isValid: false
            }
          ]
        },
        {
          id: '5b4d3c2b-1a9f8e7d-6c5b4a3d-2f1e9d8c7b6a',
          groupId: 'skubdfgdfiwhgfdgdsubfedgaiw',
          question: "What is the purpose of the 'z-index' property in CSS?",
          value: 1000,
          answers: [
            {
              id: 1,
              text: 'To set the background color',
              isValid: false
            },
            {
              id: 2,
              text: 'To control the stacking order of elements',
              isValid: true
            },
            {
              id: 3,
              text: 'To define the font size',
              isValid: false
            },
            {
              id: 4,
              text: 'To apply a shadow to an element',
              isValid: false
            }
          ]
        },
        {
          id: '1c3e4f5b-8c7d-4e6f-9a2b-3c1d2e4f5a6b',
          groupId: 'sksdufgsbfiwsubd#fm,aspfeiw',
          question: 'Which HTML tag is used for creating a hyperlink?',
          value: 200,
          answers: [
            {
              id: 1,
              text: '&lt;link&gt;',
              isValid: false
            },
            {
              id: 2,
              text: '&lt;url&gt;',
              isValid: false
            },
            {
              id: 3,
              text: '&lt;a&gt;',
              isValid: true
            },
            {
              id: 4,
              text: '&lt;hyperlink&gt;',
              isValid: false
            }
          ]
        },
        {
          id: '2c4e6d8a-1f3e-7b5c-9d2a-4e6f8a9c3d2e',
          groupId: 'sksdufgsbfiwsubd#fm,aspfeiw',
          question: "What is the purpose of the 'DOCTYPE' declaration in HTML?",
          value: 400,
          answers: [
            {
              id: 1,
              text: 'To create a new HTML document',
              isValid: false
            },
            {
              id: 2,
              text: 'To specify the version of HTML being used',
              isValid: true
            },
            {
              id: 3,
              text: 'To define a document type',
              isValid: false
            },
            {
              id: 4,
              text: 'To include external CSS stylesheets',
              isValid: false
            }
          ]
        },
        {
          id: '3c2a1d9e-8f7b-4e5d-2a1f-9e8c7b3d5a6f',
          groupId: 'sksdufgsbfiwsubd#fm,aspfeiw',
          question: 'Which HTML tag is used to define an unordered list?',
          value: 600,
          answers: [
            {
              id: 1,
              text: '&lt;ol&gt;',
              isValid: false
            },
            {
              id: 2,
              text: '&lt;li&gt;',
              isValid: false
            },
            {
              id: 3,
              text: '&lt;ul&gt;',
              isValid: true
            },
            {
              id: 4,
              text: '&lt;list&gt;',
              isValid: false
            }
          ]
        },
        {
          id: '4c5e6f7a-1b2c3d4e-5f6a7b8c-9d0e1f2a3b4c',
          groupId: 'sksdufgsbfiwsubd#fm,aspfeiw',
          question: "What does the HTML acronym 'W3C' stand for?",
          value: 800,
          answers: [
            {
              id: 1,
              text: 'World Wide Web Consortium',
              isValid: true
            },
            {
              id: 2,
              text: 'Web 3.0 Consortium',
              isValid: false
            },
            {
              id: 3,
              text: 'Web Content Creator',
              isValid: false
            },
            {
              id: 4,
              text: 'Web Coding Convention',
              isValid: false
            }
          ]
        },
        {
          id: '5c4d3c2b-1a9f8e7d-6c5b4a3d-2f1e9d8c7b6a',
          groupId: 'sksdufgsbfiwsubd#fm,aspfeiw',
          question: 'Which HTML tag is used to create a table?',
          value: 1000,
          answers: [
            {
              id: 1,
              text: '&lt;table&gt;',
              isValid: true
            },
            {
              id: 2,
              text: '&lt;tr&gt;',
              isValid: false
            },
            {
              id: 3,
              text: '&lt;td&gt;',
              isValid: false
            },
            {
              id: 4,
              text: '&lt;th&gt;',
              isValid: false
            }
          ]
        },
        {
          id: '4d5e6f7a-1b2c3d4e-5f6a7b8c-9d0e1f2a3b4c',
          groupId: 'skuagabfiwsubfjoöiergweiw',
          question: 'Which framework is known for its reactive data binding?',
          value: 200,
          answers: [
            {
              id: 1,
              text: 'Angular',
              isValid: false
            },
            {
              id: 2,
              text: 'React',
              isValid: false
            },
            {
              id: 3,
              text: 'Vue.js',
              isValid: true
            },
            {
              id: 4,
              text: 'Ember',
              isValid: false
            }
          ]
        },
        {
          id: '6a5b4c3d-2f1e9d8c7b6a',
          groupId: 'skuagabfiwsubfjoöiergweiw',
          question: 'Which Vue.js lifecycle hook is called after the component is destroyed?',
          value: 400,
          answers: [
            {
              id: 1,
              text: 'created',
              isValid: false
            },
            {
              id: 2,
              text: 'mounted',
              isValid: false
            },
            {
              id: 3,
              text: 'destroyed',
              isValid: true
            },
            {
              id: 4,
              text: 'updated',
              isValid: false
            }
          ]
        },
        {
          id: '8e7d6c5b-4a3d2f1e9d8c7b6a',
          groupId: 'skuagabfiwsubfjoöiergweiw',
          question: 'What is Vue.js used for?',
          value: 600,
          answers: [
            {
              id: 1,
              text: 'Server-side scripting',
              isValid: false
            },
            {
              id: 2,
              text: 'Database management',
              isValid: false
            },
            {
              id: 3,
              text: 'Building user interfaces',
              isValid: true
            },
            {
              id: 4,
              text: 'Machine learning',
              isValid: false
            }
          ]
        },
        {
          id: '7b8c9d0e-1f2a3b4c5d6e7f8a',
          groupId: 'skuagabfiwsubfjoöiergweiw',
          question: 'What is the Vue.js directive used for conditional rendering?',
          value: 800,
          answers: [
            {
              id: 1,
              text: 'v-show',
              isValid: false
            },
            {
              id: 2,
              text: 'v-if',
              isValid: true
            },
            {
              id: 3,
              text: 'v-bind',
              isValid: false
            },
            {
              id: 4,
              text: 'v-model',
              isValid: false
            }
          ]
        },
        {
          id: '9d8c7b6a-1f2a3b4c5d6e7f8a',
          groupId: 'skuagabfiwsubfjoöiergweiw',
          question: 'What is Vuex in Vue.js?',
          value: 1000,
          answers: [
            {
              id: 1,
              text: 'A built-in CSS preprocessor',
              isValid: false
            },
            {
              id: 2,
              text: 'A state management library',
              isValid: true
            },
            {
              id: 3,
              text: 'A routing solution',
              isValid: false
            },
            {
              id: 4,
              text: 'An animation library',
              isValid: false
            }
          ]
        },
        {
          id: '5e4d3c2b-1a9f8e7d-6c5b4a3d-2f1e9d8c7b6a',
          groupId: 'skwefweubfiwsubfeluluiw',
          question: "What is the purpose of the 'let' keyword in JavaScript?",
          value: 200,
          answers: [
            {
              id: 1,
              text: 'To declare a constant',
              isValid: false
            },
            {
              id: 2,
              text: 'To declare a variable with block scope',
              isValid: true
            },
            {
              id: 3,
              text: 'To declare a global variable',
              isValid: false
            },
            {
              id: 4,
              text: 'To declare a function',
              isValid: false
            }
          ]
        },
        {
          id: '7b8c9d0e-1f2a3b4c5d6e7f8a',
          groupId: 'skwefweubfiwsubfeluluiw',
          question: 'What is a closure in JavaScript?',
          value: 400,
          answers: [
            {
              id: 1,
              text: 'A way to lock a variable',
              isValid: false
            },
            {
              id: 2,
              text: 'A function with no parameters',
              isValid: false
            },
            {
              id: 3,
              text: 'A combination of a function and the lexical environment within which that function was declared',
              isValid: true
            },
            {
              id: 4,
              text: 'A built-in JavaScript method',
              isValid: false
            }
          ]
        },
        {
          id: '9d8c7b6a-1f2a3b4c5d6e7f8a',
          groupId: 'skwefweubfiwsubfeluluiw',
          question: "What is the 'this' keyword in JavaScript?",
          value: 600,
          answers: [
            {
              id: 1,
              text: 'A variable that always refers to the global object',
              isValid: false
            },
            {
              id: 2,
              text: 'A keyword for declaring variables',
              isValid: false
            },
            {
              id: 3,
              text: 'A reference to the current object',
              isValid: true
            },
            {
              id: 4,
              text: 'A data type in JavaScript',
              isValid: false
            }
          ]
        },
        {
          id: '6a5b4c3d-2f1e9d8c7b6a',
          groupId: 'skwefweubfiwsubfeluluiw',
          question: "What is the purpose of the 'async' keyword in JavaScript?",
          value: 800,
          answers: [
            {
              id: 1,
              text: 'To define a new function',
              isValid: false
            },
            {
              id: 2,
              text: 'To create an asynchronous function',
              isValid: true
            },
            {
              id: 3,
              text: 'To specify an array',
              isValid: false
            },
            {
              id: 4,
              text: 'To handle errors',
              isValid: false
            }
          ]
        },
        {
          id: '8e7d6c5b-4a3d2f1e9d8c7b6a',
          groupId: 'skwefweubfiwsubfeluluiw',
          question: 'What is a JavaScript promise?',
          value: 1000,
          answers: [
            {
              id: 1,
              text: 'A guarantee that the code will run without errors',
              isValid: false
            },
            {
              id: 2,
              text: 'A value that may be available now, or in the future, or never',
              isValid: true
            },
            {
              id: 3,
              text: 'A type of variable',
              isValid: false
            },
            {
              id: 4,
              text: 'A built-in JavaScript method',
              isValid: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    getQuestion(id) {
      this.Question = this.questions.filter((Object) => {
        if (Object.id === id) {
          return Object
        }
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 1rem;
  font-size: 2rem;
  text-align: center;
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}
.answer {
  margin: 1rem;
}
.bottomleft {
  position: absolute;
  bottom: 0.5rem;
}
</style>
