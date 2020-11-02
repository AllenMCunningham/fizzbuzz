
function isFizz(num) {
    if (num % 3 == 0) {
        return true
    }
    else {
        return false
    }
};


function isBuzz(num) {
    if (num % 5 == 0) {
        return true
    }
    else {
        return false
    }
};

function fizzbuzz(num) {
    var fizz = isFizz(num)
    var buzz = isBuzz(num)
    if (fizz && buzz) {
        return 'FizzBuzz'
    }
    if (fizz) {
        return 'Fizz'
    }
    if (buzz) {
        return 'Buzz'
    }
    else {
        return num.toString()
    }
};

function runfizzbuzz() {
    for (var i = 1; i < 100; i++) {
        console.log(fizzbuzz(i))
    }
};

exports.isFizz = isFizz
exports.isBuzz = isBuzz
exports.fizzbuzz = fizzbuzz