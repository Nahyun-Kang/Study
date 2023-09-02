//기본형(Primitive Type)
// Number / Null / String / Undefined / Boolean

//기본형 값을 변수에 할당하면 해당 변수 이름 상자에 기본형 값을 넣어주는 것과 같다. 

//주솟값을 참고하는 참조형 (Reference Type)
// 변수 x 에 객체를 할당하면, 객체는 어딘가에 따로 만들어지고, x가 객체에 접근 가능한 주소값을 가지게 되는 것이다.
// 마찬가지로 y에 x를 할당하면 y 또한 x와 똑같은 주솟값이 만들어진다. 그러므로, y를 통해 객체를 수정했으면 x도 동일한 객체에 대한 주솟값을 가지고 있으므로
// 똑같이 수정된 객체에 접근할 수 있다. 결과적으로 한 쪽을 수정하면 다른 한 쪽도 수정된다.

//배열도 객체

//참조형 복사하기 (Refefence Type Copy)
let numbers1 = [1,2,3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1); // [1, 2, 3, 4]
console.log(numbers2); //  [1, 2, 3, 4]

//slice를 쓰면 된다.
let numbers3 = [1,2,3];
let numbers4 = numbers3.slice();

numbers4.push(4);



//객체 복사하기

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python'
};

let course2 = Object.assign({}, course1);

//for (let key in course1) {
//   course2[key] = course1[key];
// };

course2.title = '알고리즘의 정석'


//는 아래와 같다.


function cloneObject(Object) {
  let temp = {};

  for (let key in object) {
    temp[key] = object[key]
  }
}

// 아래 코드중 잘못된 부분을 수정해 주세요
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');


// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);