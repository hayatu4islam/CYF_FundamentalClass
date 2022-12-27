// print numbers whose digits sum up to 10
function printAll(n, k){
    let minm = 10**(k-1);
    let maxm = (10**k)-1;
    let result = [];
    for(let i = minm; i <= maxm; i++){
        if(sumDigits(i) === n){
            result.push(i);
        }
    }
    return result;
}

function sumDigits(num){
    let strNum = num.toString();
    let sum = 0;
    for(let i = 0; i < strNum.length; i++){
        sum += parseInt(strNum[i]);
    }
    return sum;
}

function ascending(num){
    let strNum = num.toString();
    let result = true;
    for(let i = 0; i < strNum.length-1; i++){
        if(parseInt(strNum[i]) > parseInt(strNum[i+1])){
            result = false;
        }
    }
    return result;
}
console.log(ascending( 432))