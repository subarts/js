let object = { search: "Вася", take: 10 }

function query(obj) {
  if (obj.length >= 0 || Number(obj)) {
    return "invalid object"
  }
  return Object.entries(obj)
    .map((el) => el.join("="))
    .join("&")
}
console.log(query(object))
console.log(query(1))
console.log(query(["asd"]))
console.log(query("sadf"))
console.log(query([]))
console.log(query(true))
