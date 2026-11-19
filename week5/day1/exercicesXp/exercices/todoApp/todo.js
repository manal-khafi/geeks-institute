class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    this.tasks.push({ title, completed: false });
  }

  markComplete(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
    }
  }

  listTasks() {
    this.tasks.forEach((task, idx) => {
      const status = task.completed ? "[x]" : "[ ]";
      console.log(`${idx + 1}. ${status} ${task.title}`);
    });
  }
}

module.exports = TodoList;