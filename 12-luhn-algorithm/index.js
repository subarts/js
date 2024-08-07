const string1 = "4561-1213-4367-2612"
const string2 = "5100000000112332"
const string3 = "4561261212345464"
const string4 = "4561-2612-1234-5467"
const str5 = "dsf"

function lunhAlgoritm(str) {
  if (str.length === 0) {
    return "empty string"
  }
  let arr = str.split("").filter((a) => Number(a))
  if (arr.length === 0) {
    return "invalid string"
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i] * 2 > 9 ? arr[i] * 2 - 9 : arr[i] * 2
    } else {
      arr[i] *= 1
    }
  }
  return arr.reduce((acc, el) => (acc += el)) % 10 == 0 ? true : false
}

console.log(lunhAlgoritm(string1))
console.log(lunhAlgoritm(string2))
console.log(lunhAlgoritm(string3))
console.log(lunhAlgoritm(string4))
console.log(lunhAlgoritm(""))
console.log(lunhAlgoritm("sd"))
