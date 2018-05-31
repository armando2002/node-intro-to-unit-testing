const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should raise an error if the arg is not a number', function() {
        const notNumber = 'horse';
        expect(notNumber).to.be.a('number');
    });

    it('The number is divisible by 15, 5, and 3', function() {
        const normalCases = [15, 30, 45];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input);
            expect(answer).to.be.equal('fizz-buzz' || 'fizz' || 'buzz');
        });
    });

});