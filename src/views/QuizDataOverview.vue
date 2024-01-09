<template>
  <body class="body">
    <h1>Quiz Data</h1>
    <v-table v-if="Quiz.length > 0" class="test">
      <thead>
        <tr>
          <th>Category Name</th>
          <th>Question Count</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="list_item">
        <tr :key="category.id" v-for="category in Quiz" @click="detailPage()">
          <th>{{ category.title }}</th>
          <th>{{ category.questions.length }}</th>
          <th><v-btn class="btn">Edit</v-btn></th>
        </tr>
      </tbody>
    </v-table>
    <v-btn class="btn" to="/addcategory">Add Category</v-btn>
  </body>
</template>

<script>
export default {
  data() {
    return {
      Quiz: []
    }
  },
  created() {
    this.getQuizData()
  },
  methods: {
    getQuizData() {
      fetch('http://localhost:3000/groups?_embed=questions')
        .then((res) => res.json())
        .then((jsondata) => {
          this.Quiz = jsondata
        })
    },
    detailPage() {
      console.log('test')
    }
  }
}
</script>

<style scoped></style>
