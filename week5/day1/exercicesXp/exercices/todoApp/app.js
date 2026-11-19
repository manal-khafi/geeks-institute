const TodoList = require("./todo");

const myTodos = new TodoList();
myTodos.addTask("Practice Node.js modules");
myTodos.addTask("Work with fs module");
myTodos.addTask("Push code to GitHub");

myTodos.markComplete(0);
myTodos.listTasks();