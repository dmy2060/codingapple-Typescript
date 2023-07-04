// // union type => 타입 2개 이상 합친 새로운 타입 만들기! => ()는 자유
// // let 회원 :(number | string) = 123;
// // 회원 = 39043;
// let 회원들 :(number | string)[] = ['1',2,3]
// let 오브젝트 :{a : string | number} = { a : '123' }
// // any 타입 => 타입실드 해제문법임
// let 이름1 :any;
// 이름1 = 123;
// 이름1 = []
// // unknown 타입 => any보다 안전함 
// // why?? 
// // let 변수1 :string = 이름3; -> unknown 은 다른 변수에 대입도 안됨!
// // 이름3 - 1 도 안됨 unknown 타입이라서
// // => any 보다 좀 더 안전함
// let 이름3 :unknown;
// 이름3 = 123;
// 이름3 = {};
// // 간단한 연산에도 타입이 같아야함(엄격)
// // union type은 연산 안됨!(새로운 타입이기 때문에) 따로따로는 가능! 나이 + 1;(x)
// // let 나이 :string|number;
// // 숫자 타입이 아니면 절대 연산이 안됨 unknown도 안됨 number 아니라서! 나이 - 1;
// let 나이 :unknown = 1;
// // homework
// // 1)
// let user:string = 'kim';
// let age:undefined | number = undefined;
// let married:boolean = false; 
// let 철수:(string | undefined | number | boolean)[] = [user, age, married];
// // 2)
// let 학교 : {
//     score : (number|boolean)[],
//     teacher : string,
//     friend : string | string[]
// }
// = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
