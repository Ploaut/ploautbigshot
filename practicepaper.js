const age = parseInt( prompt ("How old are you?"));

console.log(isNaN(age));

if(isNaN(age)|| age < 0){
    console.log("please write a real positive number");
}else if (age < 18){
    console.log("you are too yonung");
}else if ( age >= 18 && age <= 50){
    console.log("you can drink")
}else if ( age > 50 && age <=80){
    console.log("I think you should cut down on your drinking.")
}else if ( age > 80 && age <= 100){
    console.log("you can anything what you want")
}else if ( age > 100){
    console.log("Is this really your age?")
}


// ||= or in javascript,한곳이라도 true가 나오면 그 문장은 true 로 처리
//and = && in javascript, 한곳이라도 false 가 나오면 그 문장은 false 로 처리
// condition 은 boolean 이어야 한다, true or false 여야 한다
//isNaN() = return boolean, not a number = true/ a number = false
//javascript 는 이곳에서 사용자가 값을 넣기를 기다린다
//parseInt() = string to number
//prompt 는 사용자에게 메세지를 보여주고 값을 넣으라고 한다.
//else 는 선택사항
// !== = 그 숫자가 아닌 것
//javascript 는 작은 괄호에서 큰 괄호로 넘어가는 특징이 있다

//true || true = true
//false || true = true 
//false || false = false
//true || false = true 

//true && true = true
//false && true = false
//true && false = false 
//false && false = false 