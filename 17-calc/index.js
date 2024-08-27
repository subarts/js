const buttonPlus = document.querySelector(".plus")
const buttonMinus = document.querySelector(".minus")
const buttonMulti = document.querySelector(".multi")
const buttonDivision = document.querySelector(".divide")

function elems() {
  const first = document.querySelector(".input__first").value
  const second = document.querySelector(".input__second").value
  return { first: Number(first), second: Number(second) }
}

function print(result) {
  const res = document.querySelector(".result")
  if (res.childNodes.length > 1) {
    res.removeChild(res.lastChild)
  }
  const resulTag = document.createElement("span")
  resulTag.innerHTML = `${result}`
  res.appendChild(resulTag)
  clearInputs()
}

function clearInputs() {
  document.querySelector(".input__first").value = ""
  document.querySelector(".input__second").value = ""
}

function addition() {
  const result = elems().first + elems().second
  print(result)
}
function subtraction() {
  const result = elems().first - elems().second
  print(result)
}
function multiplication() {
  const result = elems().first * elems().second
  print(result)
}
function division() {
  if (elems().second == 0) {
    return print("нельзя делить на 0")
  }
  const result = elems().first / elems().second
  print(result)
}

buttonPlus.addEventListener("click", addition)
buttonMinus.addEventListener("click", subtraction)
buttonMulti.addEventListener("click", multiplication)
buttonDivision.addEventListener("click", division)
document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "+":
      addition()
      break
    case "-":
      subtraction()
      break
    case "*":
      multiplication()
      break
    case "/":
      division()
    default:
      break
  }
})
