// Your code here
function saturdayFun(something ="roller-skate") {
    return(`This Saturday, I want to ${something}!`);
}

  
function mondayWork(something ="go to the office") {
    return(`This Monday, I will ${something}.`);
}

function wrapAdjective(flair = "*") {
    return function(something ="special" ){
        return(`You are ${flair}${something}${flair}!`);
    }
}
  
const Calculator = { 
    add: function(a,b){ 
        return a+b;
    }, 
    subtract: function(a,b){
        return a-b;
    }, 
    multiply: function(a,b){
        return a*b;
    }, 
    divide: function(a,b){
        return a/b;
    }
}

function actionApplyer(start, finish){
    for (let i = 0; i < finish.length; i++){
        start = finish[i](start);
    }
    return start;
}