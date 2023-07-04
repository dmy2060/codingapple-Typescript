// // 간단한 변수 타입지정가능 (string, number, boolean, null, undefined, bigint, [], {})
// // let 이름 :string = 'kim';
// // let 이름 :string[] = ['kim', 'park'];
// // let 이름 :{ name : string } = { name:'kim' }
// // let 이름 :{ name? : string } = { } // ?는 들어와도 되고 안들어와도됨
// let 이름:string | number = "kim" // string 혹은 number! (union type) -> string[] 이런식으로도 사용가능

// // 타입지정하는게 길땐?
// // => 변수 지정!
// // => 대문자로 보통 지정함
// type 내타입 = string | number;
// let 이름2 :내타입 = 123;

// // 함수에 타입지정
// // -> 리턴값 타입지정은 함수 () 옆에다 적음
// function 함수(x:number) :number {
//     return x * 2
// }

// // array에 쓸 수 있는 tuple 타입
// type Member = [number, boolean]
// let john:Member = [123, true]

// // obj 타입지정해야할 속성이 너무 많으면 아래와 같이 작성 가능
// // => "글자로 된 모든 object 속성의 타입은 :string"
// // type Member1 = {
// //     [key:string]:string
// // }
// type Member1 = {
//     name:string
// }
// let john1 : Member1 = { name: 'kim' }

// // class 타입지정 가능
// class User {
//     name :string;
//     constructor(name :string) {
//         this.name = name
//     }
// }