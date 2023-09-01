//메소드 (Method)

let greetings = {
  sayHello: function (name) {
    console.log(`Hello ${name}!`);
  },

  sayHi: function() {
    console.log('Hi!');
  },

  sayBye: function() {
    console.log('Bye!');
  }
}

greetings.sayHello('Codeit');
greetings['sayHello']('Codeit');

let rectAngle = {
  width: 30,
  height: 50,
  getArea: function () {
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function () {
    return triAngle.width * triAngle.height / 2;
  }
}



//
let myVoca = {
  // 코드를 작성해 주세요.
  addVoca : function (word, meaning){
    myVoca[word] = meaning;
  },
  
  deleteVoca : function(word){
    delete myVoca[word];
  },
  
  printVoca : function(word) {
    console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`)
  }
  
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');



// 한 가지 조심해야 될 부분은 파라미터로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용해 주어야 한다는 겁니다.

// 위 메소드에서 만약 점 표기법으로 key값에 접근을 하게 되면, 파라미터 key를 가리키는 것이 아니라,

// myVoca에 문자 그대로 key라는 프로퍼티 이름을 가진 프로퍼티 값에 접근하는 것과 같은 의미가 되기 때문이죠.