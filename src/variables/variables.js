let numberA;

function functionA() {
    numberA = 1;
}

function functionB(numberB) {
    return numberA + numberB;
}

module.exports= {numberA, functionA, functionB};