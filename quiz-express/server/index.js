const express = require('express')
const app = express()
app.use(express.json())

const questions = require('./questions.json')

/* API Routes */
app.get('/questions', (req, res) => {
  res.send({ questions: questions.questions })
})

app.post('/answer', (req, res) => {
  const { id, answer } = req.body
  let result = false
  if (questions.answers[id] && questions.answers[id] === answer) {
    result = true
  }

  res.send({
    result
  })
})

app.listen(4000, () => {
  console.log('App listening on port 4000')
})
