
function crypto(pass){
  let arr=pass.split("").slice(0,pass.length/2).reverse()
  let arr2=pass.split("").slice(pass.length/2).reverse()
  return arr.concat(arr2).join("")
  
}

function check(passOne,passTwo){
  let arr=passOne.split("").slice(0,passOne.length/2).reverse()
  let arr2=passOne.split("").slice(passOne.length/2).reverse()
  return arr.concat(arr2).join("")==passTwo
}
console.log(crypto("a"),check("a","a"))


