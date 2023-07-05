/* 
    1. type alias(별칭) 만드는 법
        - type을 쓰고 변수 선언하고 넣고싶은 타입 지정
    2. type 변수 작명 관슴
        - 영어 대문자로 시작! 뒤에 변수 뒤 Type붙혀도 좋음
    (참고)const 변수 잠깐 설명!
        - const 변수는 재할당을 불가! 단, 객체 안 내용은 자유롭게 수정이 가능
        - type script 안에서는 수정 안되게도 지정 가능
        - readonly 를 지정해주면 읽기만 가능! 수정 불가!
        - 단, 실제 변환된 js파일은 에러 없고, 타입스크립트 에러는 에디터 & 터미널에서만 존재함
    3. type 변수도 union type으로 합치기 가능!
    4. & 연산자로 object 타입 합치기 (안에 있는 속성들을 합치고 싶을 때)
    (주의) 같은 이름의 type 변수는 재정의가 불가능!
*/

// type Animal = string | number | undefined;
// let 동물 :string | number | undefined;
// let 동물 :Animal = 'kim'

// type Animal = {name:string, age:number}
// let 동물:{name:string, age:number} = {name:'kim', age:20}
// let 동물:Animal = {name:'kim', age:20}

// type Girlfriend = {
//     readonly name: string
// }
// const 여친 :Girlfriend = {
//     name : '엠버'
// }
// 에러 발생!
// 여친.name = 'ddd'

// type Name = string;
// type Age = number;
// type Person = Name | Age;

// type PositionX = {x : number};
// type PositionY = {y : number};
// type NewType = PositionX & PositionY //{x : number, y : number}
// let position :NewType = { x : 10, y : 20 };


// homework
// 1)
type PositionX = {x : number, y : number};
type PositionY = {y : number};
type NewType = PositionX & PositionY
let position :NewType = { x : 10, y : 20}; // 객체 리터럴은 이름이 같은 속성을 여러 개 가질 수 없음.

// 2)
type ObjType = {color?:string, size:number, readonly position:number[]}

// 3)
type ObjType2 = {name:string, phone:number, email:string, age:boolean}