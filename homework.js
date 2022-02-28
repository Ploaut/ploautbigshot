//qualification
// 1+1 1-1 a+b a-b a/b a**b
// objectcodename: calculator 
//my code in last part 
//calculator.add(1,2)
//calculator.powerof(1,2)


const calculator = { 
    add :function(a,b){
        return a + b;
    },
    minus:function(a,b){
        return a - b;
    },
    divide:function(a,b){
        return a / b;
    },
    powerof:function(a,b){
        return a ** b;
    },
    mulit:function(a,b){
        return a * b;
    },
};

const addresult = calculator.add(2,3);
// addresult 라는 varialbe 은 calculator.add 라는 function 의 return velue 를 가지게 된다.
const minusresult = calculator.minus(addresult, 10);
const divideresult = calculator.divide(100, minusresult);
const powerofresult = calculator.powerof(divideresult, 2);
const multiresult = calculator.mulit(addresult,minusresult);

//plusresult = 5 , minusresult = -5 , divideresult = -20 ,powerofresult = 400
// multiresult = -25
//한번 return 하면 결과값을 return 해주고 그 function 은 끝난다.
//function 은 실행되고 나면 사라지고,마지막엔 결과를 남긴다.
