const tasks = {
  array: [],
  add: function (title, priority) {
    if (typeof title !== "string") {
      return "invalid title"
    }
    if (typeof priority !== "number") {
      return "invalid priority"
    }
    const id = this.array.at(-1)?.id + 1 || 1
    this.array.push({
      title: titleString,
      id,
      priority,
    })
  },
  delete: function (id) {
    const taksIndex = this.array.findIndex((a) => a.id == id)
    this.array.splice(taksIndex, 1)
  },
  update: function (id, newTitle, newPriority) {
    if (typeof newTitle === "number" && newPriority === undefined) {
      newPriority = newTitle
      newTitle = undefined
    }
    this.array.forEach((obj) => {
      let { id: objId, title, priority } = obj
      if (objId == id) {
        title = newTitle || title
        priority = newPriority || priority
        Object.assign(obj, {
          title: title,
          id: objId,
          priority: priority,
        })
      }
    })
  },
  sort(key, sortBy) {
    if (sortBy == "asc") {
      return this.array.sort((a, b) => a[key] - b[key])
    }
    this.array.sort((a, b) => b[key] - a[key])
  },
}
tasks.add("task one", 1)
tasks.add("task two", 2)
tasks.add("task three", 3)
tasks.add("task four", 4)
tasks.add("task five", 5)
tasks.add({ a: 123 }, 6)
tasks.add([1, 2], 5)
tasks.add("priority is string", "4")
tasks.add(234, "string")
console.log(tasks.array)
tasks.update(1, "task six update", 6)
tasks.update(4, "task seven update")
tasks.update(2, 8)
console.log(tasks.array)
tasks.delete(3)
console.log(tasks.array)
tasks.sort("priority", "asc")
console.log("asc prior", tasks.array)
tasks.sort("priority", "des")
console.log("dec prior", tasks.array)
tasks.sort("id", "asc")
console.log("asc id", tasks.array)
tasks.sort("id", "des")
console.log("dec id", tasks.array)
