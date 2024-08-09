

let array=[1,2,3,4,5,6]
function del(a){
  if(a===3){
    return true
  }
  return false
}
  function filter(fn,arr) {
    let result=[]
    for(let i=0;i<arr.length;i++){
      if(!fn(arr[i])){
        result.push(arr[i])
      }
    }
    return result
  }
console.log(filter(del,array)) 
