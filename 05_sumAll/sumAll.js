const sumAll = function(x,y) {
    if(!isNaN(x) || !isNaN(y))
        return 'ERROR';
    let num = 0;
    while(x <= y){
        num = num + y;
        y--;
    }
    return num;
};

// Do not edit below this line
module.exports = sumAll;
