let array = [
  "2/29/2020",
  "29.02.21",
  "1/31/2020",
  "22/31/2020",
  "04/30/2234",
  "04/31/2234",
  "31.2.2020",
  "31.12.20",
  "30.4.2234",
  "25.01.22",
  "a1/12/2320",
  "1.a2.2320",
  "04/30/999a",
]
function validation(arr) {
  if(!Array.isArray(arr) || !arr.length){
    return "invalid array"
  }
  let february = 28
  const monthsMax = 12
  const daysMax = 31
  const daysMin = 30
  const monthsMin = [4, 6, 9, 11]

  const result = arr.map((a) => {
    if (a.includes(".")) {
      return a.split(".")
    }
    a = a.split("/")
    a[0] = [a[1], (a[1] = a[0])][0]
    return a
  })
  return result
    .filter((a) => 0 < Number(a[0]) && 0 < Number(a[1]) && 0 < Number(a[2]))
    .filter((a) => {
      const hasMonthsShort = monthsMin.includes(Number(a[1])) && a[0] <= daysMin
      const hasMonthsLong =
        !monthsMin.includes(Number(a[1])) && a[1] <= monthsMax && a[0] <= daysMax
      if (hasMonthsShort) {
        return a
      }
      if (hasMonthsLong) {
        return a
      }
    })
    .filter((a) => {
      february = a[2] % 4 === 0 ? 29 : 28
      if (!(a[1] == 2 && a[0] > february)) {
        return a
      }
    })
    .map((el) => {
      el[0].length < 2 ? (el[0] = `0${el[0]}`) : ""
      el[1].length < 2 ? (el[1] = `0${el[1]}`) : ""
      return el.join(".")
    })
}
console.log(validation(array))