const express = require('express');
const app = express();
const cors = require('cors');
const { todo } = require('./db.js')


const { createTodo, updateTodo } = require('./types.js')


app.use(cors());
app.use(express.json());


app.post('/todo', async (req, res) => {
  console.log("in the post request")
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload)
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs"
    })
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
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
  const updatedPayload = req.body;
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



app.listen(3000, () => {
  console.log("Server is running at port 3000")
});
