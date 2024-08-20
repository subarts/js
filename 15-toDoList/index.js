const tasks = {
  array: [],
  lastId: 1,

  add: function ({ title, priority }) {
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
// для тестов
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
arrObj.forEach((a) => tasks.add(a))

tasks.add({ title: 404, priority: "4" })
tasks.add({ title: "priority is string", priority: "4" })
console.log(tasks.array)
console.log(tasks.array)
tasks.delete(2)
tasks.delete(20)
tasks.update(taskUpdate, 5)
console.log(tasks.array)
tasks.sort("priority", "asc")
console.log("asc prior", tasks.array)
tasks.sort("priority", "des")
console.log("dec prior", tasks.array)
tasks.sort("id", "asc")
console.log("asc id", tasks.array)
tasks.sort("id", "des")
console.log("dec id", tasks.array)
