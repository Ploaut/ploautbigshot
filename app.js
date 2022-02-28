var a = 5;
const b = 2;
let c =10;
//let const 는 변수 선언할 때 사용(let 은 새로운것을 생성할 때 사용)
//var 는 규칙이 없고 언제나 업데이트 될 수 있다.
//항상 const, 가끔 let ,절대 안됨 var

let myName = "ploaut";
const veryLongVariableName = 0;
//변수값에 공백이 필요할때는 띄어쓰기 전 글자를 대문자로 작성

console.log(a + b);
console.log(a * b);
console.log(a / b);
//console.log 는 console 창에 결과값을 띄워줌

myName =" king";
console.log("your new name is" + myName);
//한번 let 이 생성되면 다음에는 필요없다.
//let은 생성할 때 최초 1번만 사용


const dayofweek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//get Item from array 
console.log(dayofweek[4]); //인덱스는 0부터 시작
//add one more day to the array
dayofweek.push("sun");
console.log(dayofweek);
//array 는 리스트를 만들 때 사용, 값을 리스트로 정리

const player = {
    name:"ploaut",
    points:10,
    fat:false,
};
console.log(player);
console.log(player.name);

//another way
console.log(player["points"]);

console.log(player);
player.lastname = "aing";
player.points = 15;
console.log(player);

const pan ={
    first:"pineapple",
    second:"penpineapple",
    third:"penpineappleapplepen",
};

console.log(pan);
console.log(pan.first);
console.log(pan.second)
console.log(pan.third);
console.log(pan.first + "afsj")

//function 은 계속 반복해서 사용할 수 있는 코드 조각
//() = function 을 실행하는 방법

function sayHello(nameofperson, age){      //인수를 받음
    console.log("Hello my name is " + nameofperson + " and I'm " + age + " years old" );
}

sayHello("nico", 10);  //인수를 보냄
sayHello("ploaut", 23 );
sayHello("john",29);

function plus(a,b){
    console.log(a + b);
}

plus(8,60);

//fistnum 은 함수 밖에서 실행되면 에러가 발생, 블록 밖에서 존재할 수 없기 때문
function divide(firstnum, secondnum){
    console.log(firstnum/secondnum);
}
divide(10,5);
divide(20,10);
divide(9,3);
divide(10,3);

const player2 = { 
    name: "ploaut",
    myfunction :function(otherpersonsname){
        console.log("hello! " + otherpersonsname + " nice to meet you");
    }
}
console.log(player2,name);
player2.myfunction("jin");

// 1+1 1-1 a+b a-b a/b a**b
// objectcodename: calculator 
//my code in last part 
//calculator.add(1,2)
//calculator.powerof(1,2)