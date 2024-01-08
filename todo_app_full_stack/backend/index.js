const express = require('express');
const app = express();

const { createTodo, updateTodo } = require('./types.js')

app.use(express.json());


app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload)
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong inputs"
    })
    return;
  }
  await todo.creat({
    title: createTodo.title,
    description: createTodo.description,
    conmpleted: false
  });
  res.json({
    msg: "Todo created"
  })
})

app.get('/todos', async (req, res) => {
  const todos = await todo.find()
  res.json({
    todos
  })
})


app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatedPayload);
  if (!parsedPayload) {
    res.status(411).json({
      msg: "You sent the wrong inputs"
    })
    return;
  }
  await todo.updata(
    { _id: req.body.id },
    { completed: true })

  res.json({
    msg: "Todo updated succesfully"
  })
})



app.listen(3000);
