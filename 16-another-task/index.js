const tasks = {
  array: [],
  lastId: 1,

  add: function ({ title, priority, ...rest }) {
    if (typeof title !== "string") {
      console.log("Значение title передано не верно")
      return
    }
    if (typeof priority !== "number") {
      console.log("Значение priority передано не верно")
      return
    }
    this.array.push({
      title,
      id: this.lastId++,
      priority,
      ...rest,
    })
  },
  update: function ({ title, priority }, id) {
    if (typeof title !== "string") {
      console.log("Значение title передано не верно")
      return
    }
    if (typeof priority !== "number") {
      console.log("Значение priority передано не верно")
      return
    }
    const task = this.getTaskById(id)
    if (!task) {
      return
    }
    const newObject = {
      title: title ?? task.title,
      priority: (priority = priority ?? task.priority),
    }
    Object.assign(task, newObject)
    console.log(`Задача с id ${task.id} успешно обновлена.`)
    return this
  },
  delete: function (id) {
    const task = this.getTaskById(id)
    if (task) {
      this.array = this.array.filter((el) => el.id !== id)
      console.log(`Задача с id ${id} успешно удалена.`)
    }
    return this
  },
  sort(key, sortBy) {
    if (sortBy == "asc") {
      return this.array.sort((a, b) => a[key] - b[key])
    }
    this.array.sort((a, b) => b[key] - a[key])
  },
  getTaskById(taskId) {
    if (!taskId) {
      console.log(`Значение id не передано или передано некорректно`)
      return
    }
    const task = this.array?.find(({ id }) => id === taskId) ?? null
    if (!task) {
      console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`)
    }
    return task
  },
}
const newTasks = {
  array: [],
  lastId: 1,
}

newTasks.add = tasks.add.bind(newTasks)
newTasks.update = tasks.update.bind(newTasks)
newTasks.getTaskById = tasks.getTaskById.bind(newTasks)
newTasks.delete = tasks.delete.bind(newTasks)
newTasks.sort = tasks.sort.bind(newTasks)
//console.log(newTasks)

let arrObj = []
let c = 20
for (let i = 1; i < 10; i++) {
  const task = { title: `task №${i}`, priority: c + 2 }
  c--
  arrObj.push(task)
}
const taskUpdate = {
  title: "task update",
  priority: 100500,
}
arrObj.forEach((a) => newTasks.add(a))

newTasks.add({ title: 404, priority: "4" })
newTasks.add({ title: "priority is string", priority: "4" })
console.log(newTasks.array)
console.log(newTasks.array)
newTasks.delete(2)
newTasks.delete(20)
newTasks.update(taskUpdate, 5)
console.log(newTasks.array)
newTasks.sort("priority", "asc")
console.log("asc prior", newTasks.array)
newTasks.sort("priority", "des")
console.log("dec prior", newTasks.array)
newTasks.sort("id", "asc")
console.log("asc id", newTasks.array)
newTasks.sort("id", "des")
console.log("dec id", newTasks.array)
