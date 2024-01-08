const express = require('express');
const app = express();

const { createTodo, updateTodo } = require('./types.js')

app.use(express.json());


app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload)
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong inputs"
    })
  }
})

app.get('/todos', (req, res) => {

})


app.put('/completed', (req, res) => {

})



app.listen(3000);
