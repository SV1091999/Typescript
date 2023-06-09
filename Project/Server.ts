const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

// In-memory data store for simplicity
let todos: Todo[] = [];

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const updatedTodo = req.body;
  
    let todoIndex = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoId) {
        todoIndex = i;
        break;
      }
    }
  
    if (todoIndex !== -1) {
      todos[todoIndex] = {
        ...todos[todoIndex],
        ...updatedTodo,
      };
      res.json(todos[todoIndex]);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  });
  

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);

  todos = todos.filter((todo) => todo.id !== todoId);

  res.sendStatus(204);
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

