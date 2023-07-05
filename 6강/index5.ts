// /* 
//     literal types
//     1. 변수에 뭐가 들어올지 더 엄격한 타입 지정 가능
//     2. 자동완성 힌트 굿

// */

// let 이름 :'kim';
// let 접니다 :'대머리' | '솔로'
// 접니다 = '대머리';

// function 함수(a :'hello') :1 | 0{
//     return 1
// }
// 함수('hello')

// // 연습문제
// function 가위바위보(a: '가위' | '바위' | '보') :('가위' | '바위' | '보')[] {
//     console.log([a])
//     return [a]
// }
// 가위바위보('가위')


// /*
//     const 변수의 한계
//     - const 변수는 변하지 않은 변수를 하나만 저장이 가능함,
//       단 literal type은 자료를 여러개 저장이 가능함
//       => const 변수 업글 버전
// */

// let 접니다 :'대머리' | '솔로'
// const 변수 = 'kim'


/*
    literal type의 문제점 해결방법
    1. object 만들 때 타입 지정 확실히 하면 딤
    2. as 문법으로 타입을 덮어도됨
    3. as const 사용 -> 이 object는 literal type 지정 알아서 해주세요 
       - 효과1. object value 값을 그대로 타입으로 지정해줌
       - 효과2. object 속성들에 모두 readonly 붙여줌
       => objce 자료를 완전히 잠가놓고 싶으면 as const 사용
*/

let 자료 = {
    name :'kim' 
} as const
function 내함수(a:'kim') {}
내함수(자료.name as 'kim') // type이 kim이 아니기 때문에 에러발생