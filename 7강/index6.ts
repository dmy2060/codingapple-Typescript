/*
    type alias에 함수 type 저장해서 쓰는 법
    - 함수 타입 지정은 화살표 함수로 선언해야함
    - 부착하려면 함수표현식으로 써야함
*/
type funcType = (a:string) => number

let func:funcType = function 함수(a){
    return 1
}

type Member = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void
}

let 회원정보:Member = {
    name: 'kim',
    age:3,
    plusOne:()=>{
        return 1
    },
    changeName: () => {}
}
회원정보.plusOne(3)

type CutZero = (a:string)=>string
type RemoveDash = (a:string)=>number
let cutZero:CutZero = (x)=>x[0] == '0' ? x.substring(1) : x 
let removeDash:RemoveDash = (x)=>parseInt(x.replace(/-/g, ""))
let 만들함수 = (a:string, b:CutZero, c:RemoveDash)=>{
   let result = b(a)
   let result2 = c(result);
    return result2
}

console.log(만들함수('010-1111-2222', cutZero, removeDash))
