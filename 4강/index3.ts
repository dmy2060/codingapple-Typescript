// // Narrowing 함수
// // 아래와 같이 type이 하나로 확정되지 않았을 경우 type narrowing 사용해야함
// // function 내함수(x :number|string) {
// //     return x + 1
// // }
// // 내함수(123);

// // 대표적인 방법 = typeof 연산자
// // == 다른 방법들은 속성명 in 오브젝트 자료 , 인스턴스 instanceof 부모
// // 어떤 변수가 타입이 아직 불확실하면 if문 등으로 narrowing 해줘야 조작가능
// // 📌(주의) if문 썼으면 끝까지 써야 안전함. else, else if 안쓰면 에러로 잡아줄 수도

// function 내함수(x :number|string) {
//     if(typeof x === 'number') {
//         return x + 1
//     } else {
//         return x + '1'
//     }
// }
// 내함수(123);


// function 내함수1(x :number|string) {
//    let array :number[] = [];
//    if(typeof x === 'number') {
//        array[0] = x;
//    }
// }

// // 좀 더 쉽게 하고 싶을 땐 assertion 문법 (타입 덮어쓰기)
// // 남발하면 안됨! 문법의 용도!
// // 1. Narrowing 할 때 사용. 단, 타입을 a에서 b로 변경 X
// // 2. 무슨 타입이 들어올지 100% 확실할 때 써야함! ass문법은 문자넣어도 아무일이 없음 버그 캐치가 불가함!(타입스크립트 안쓸거야 할 때!!)
// //    => 보통 if문 거의 사용 (정말 필요할 때! 사용 남의 코드 수정할 때 비상용으로 사용)


// function 내함수2(x :number|string) {
//     let array :number[] = [];
//     array[0] = x as number;
// }

// homework
// 1)
function 클리닝함수(arr:(number | string)[]) {
    let arr2 :number[] = [];
    arr2 = arr.map((x) => {
        if(typeof x === 'string') {
            return x = parseInt(x);
        }else {
            return x = x
        }
    })
    return arr2
}
console.log(클리닝함수( ['1', 2, '3', 2, '3', 2, '3', 2, '3', 2, '3'] ))

// 2)
function 만들함수(x:{subject :string | string[]}) {
    if(typeof x.subject === 'string') {
        return x.subject
    } else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1]
    } else {
        return 'nono'
    }
}
console.log(만들함수( { subject : 'math' } ) )
console.log(만들함수( { subject : ['science', 'art', 'korean'] } ))
만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
