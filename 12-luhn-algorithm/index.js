const string1= "4561-1213-4367-2612"

const string2="5536-9139-5463-7993"
const string3="4561261212345464"
const string4="4561-2612-1234-5467"

function moon(str) {
    let arr=str.split("").filter(a=>Number(a))
    for(let i=0;i<arr.length;i++){
      if(i%2===0){
        arr[i]=(arr[i]*2)>9?arr[i]*2-9:arr[i]*2
      }else{
      arr[i]*=1
      }
    }
 
    return arr.reduce((acc,el)=>acc+=el)%10==0?true:false
  }

console.log(moon(string1))
console.log(moon(string2))
console.log(moon(string3))
console.log(moon(string4))