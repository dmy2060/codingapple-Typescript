// // // 변수만 만들면 :any 자동 할당
// // function 함수(x :number) :number {
// //     return x * 2
// // }
// // 함수(6)

// // // 함수에서는 void 타입 활용 가능
// // // => 리턴할 경우가 없을 때! 비워둬도 되지만! 엄격하게 하고 싶을때! 
// // // => 실수로 return 나오는 걸 막아줌
// // function 함수1(x :number) :void {
// //     1 + 1
// // }

// // // 자바스크립터와 다른 점
// // // 타입 지정된 파라미터는 필수임! 함수1(6)
// // // 단! 파라미터가 옵션일 경우에는 ?:타입 사용하면 파라미터 안넣어도됨!
// // // ?는 | undefined 가 포함된 union type임


// // // 이럴 경우 union type이라 연산 불가
// // // 아래와 같이 if문으로 타입을 한 번 더 체크해주면 됨
// // function 함수2(x:number | string) {
// //     if(x의 타입이 숫자면) {
// //         console.log(x + 3)
// //     }
// // }

// // homework
// // 1)
// function Name(x? :string) :void{
//     if(x) {
//         console.log('안녕하세요' + x)
//     } else {
//         console.log('이름이 없습니다')
//     }
// }
// Name('홍길동')

// // 2)
// function NumberFunction(x:string | number) :number{
//     return (x + '').split('').length
// }

// // 3)
// function 결혼가능하냐(x:number, y:boolean, z:string) :string|void {
//     let yy = y ? 500 : 0;
//     let zz = 0;
//     let sum = x + yy + zz;
//    if(z == '상') { zz = 100 }

//     if(sum > 600) {
//         return '결혼가능'
//     } else {
//         return;
//     }
// }


// function 결혼가능하냐(money :number, house :boolean, charm :string) :string|void{
//   let score :number = 0;
//   score += money;
//   if (house === true){
//     score += 500
//   }
//   if (charm === '상'){
//     score += 100
//   }
//   if (score >= 600){
//     return '결혼가능'
//   } 
// }
// console.log(결혼가능하냐(100,true,'상')) 