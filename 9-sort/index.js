let array=[1,2,3]
let array2=[9,8,7]
function sort(arr,par) {
  for(let i=0;i<arr.length-1;i++){
    for(let c=1;c<arr.length;c++){
      if(par=="Ascending"){
        if(arr[i]<arr[c]){
        arr[c]=[arr[i],arr[i]=arr[c]][0]
      }
    }
    arr[i]=[arr[c],arr[c]=arr[i]][0]
    }
  }
  return arr
}
console.log(sort(array,"Ascending"))
console.log(sort(array,"descending"))
console.log(sort(array2,"Ascending"))
console.log(sort(array2,"descending"))