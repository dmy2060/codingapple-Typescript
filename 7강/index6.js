var func = function 함수(a) {
    return 1;
};
var 회원정보 = {
    name: 'kim',
    age: 3,
    plusOne: function () {
        return 1;
    },
    changeName: function () { }
};
회원정보.plusOne(3);
var cutZero = function (x) { return x[0] == '0' ? x.substring(1) : x; };
var removeDash = function (x) { return parseInt(x.replace(/-/g, "")); };
var 만들함수 = function (a, b, c) {
    var result = b(a);
    var result2 = c(result);
    return result2;
};
console.log(만들함수('010-1111-2222', cutZero, removeDash));
