const sum= 1000

function converter(original,target,sum=0) {
  const originalCur=original.toUpperCase()
  const targetCur=target.toUpperCase()
  switch(originalCur){
    case "USD":
      switch(targetCur){
        case "RUB":
          return sum*90
        case "EUR":
          return sum*1.1
        default:
          return null
        }
    case "RUB":
      switch(targetCur){
        case "USD":
          return sum/90
        case "EUR":
          return sum/100
        default:
          return null
        }
    case "EUR":
      switch(targetCur){
        case "USD":
          return sum*0.9
        case "RUB":
          return sum*100
        default:
          return null
        }
    default:
      return null
  }
}

/* console.log(converter("RUB","USD",1))
console.log(converter("RUB","EUR",1))
console.log(converter("USD","RUB",1))
console.log(converter("USD","EUR",1))
console.log(converter("EUR","RUB",1))
console.log(converter("EUR","USD",1)) */
console.log(converter("USD","EUR",100))
/* "RUB","USD" 
    "RUB","EUR"
  "USD","RUB"
  "USD","EUR"
   "EUR","USD"
    "EUR","RUB"
*/