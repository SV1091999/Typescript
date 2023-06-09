var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
// In-memory data store for simplicity
//var todos = [];
// Get all todos
app.get('/', function (req, res) {
    res.json(todos);
});
// Create a new todo
app.post('/todos', function (req, res) {
    var newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
// Update a todo
app.put('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var updatedTodo = req.body;
    var todoIndex = -1;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) {
            todoIndex = i;
            break;
        }
    }
    if (todoIndex !== -1) {
        todos[todoIndex] = __assign(__assign({}, todos[todoIndex]), updatedTodo);
        res.json(todos[todoIndex]);
    }
    else {
        res.status(404).json({ message: "Todo not found" });
    }
});
// Delete a todo
app.delete('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    todos = todos.filter(function (todo) { return todo.id !== todoId; });
    res.sendStatus(204);
});
// Start the server
app.listen(3001, function () {
    console.log('Server is running on port 3001');
});
