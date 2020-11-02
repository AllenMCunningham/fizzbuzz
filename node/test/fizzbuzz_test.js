
var fb = require('../fizzbuzz.js');
var expect = require('chai').expect;

describe('#isFizz', function () {

    context('fizz is true', function () {
        it('should return true', function () {
            expect(fb.isFizz(3)).to.equal(true)
        })
    })

    context('fizz is false', function () {
        it('should return false', function () {
            expect(fb.isFizz(4)).to.equal(false)
        })
    })
})


describe('#isBuzz', function () {

    context('buzz is true', function () {
        it('should return true', function () {
            expect(fb.isBuzz(5)).to.equal(true)
        })
    })

    context('buzz is false', function () {
        it('should return false', function () {
            expect(fb.isBuzz(6)).to.equal(false)
        })
    })
})


describe('#fizzbuzz', function () {


    context('fizz is true', function () {
        it('should return fizz', function () {
            expect(fb.fizzbuzz(3)).to.equal('Fizz')
        })
    })

    context('buzz is true', function () {
        it('should return buzz', function () {
            expect(fb.fizzbuzz(5)).to.equal('Buzz')
        })
    })


    context('FizzBuzz is true', function () {
        it('should return FizzBuzz', function () {
            expect(fb.fizzbuzz(15)).to.equal('FizzBuzz')
        })
    })

    context('Not fizz or buzz', function () {
        it('should return input', function () {
            expect(fb.fizzbuzz(7)).to.equal('7')
        })
    })

})
