const testNumbers = require('./testNumbers');
const { assert } = require('chai').assert;
// ------------------------ only this part below in judge for testing------------------------------------------
describe("Test Numbers", () => {
    describe("sumNumber tests", () => {
        it("Shoud return udefined wen given non numbers", function () {
            assert.equal(testNumbers.sumNumbers("asd", 4), undefined)
            assert.equal(testNumbers.sumNumbers(4, "asd"), undefined)
            assert.equal(testNumbers.sumNumbers(4, {}), undefined)
            assert.equal(testNumbers.sumNumbers({}, {}), undefined)
            assert.equal(testNumbers.sumNumbers("asd", "asd"), undefined)
        });
        
        it('Should return true when num2 is number2', function () {
            assert.equal(testNumbers.sumNumbers(4, 4), 8.00)
            assert.equal(testNumbers.sumNumbers(2, 3.3), 5.30)
            assert.equal(testNumbers.sumNumbers(-2, 5.3), 3.30)
        });
    });
    
    describe("numberChecker tests", () => {        
        it("Shoud trow Error wen given non numbers", function () {
            assert.throw(() => { testNumbers.numberChecker("string") }, 'The input is not a number!')
            assert.throw(() => { testNumbers.numberChecker([2, 4]) }, 'The input is not a number!')
            assert.throw(() => { testNumbers.numberChecker({}) }, 'The input is not a number!')
        });

        it("Shoud return number is even wen given even number", function () {
            assert.equal(testNumbers.numberChecker(4), 'The number is even!')
            assert.equal(testNumbers.numberChecker(4 * 4), 'The number is even!')
            assert.equal(testNumbers.numberChecker(-16), 'The number is even!')
        });
        it("Shoud return number is even wen given even number", function () {
            assert.equal(testNumbers.numberChecker(5), 'The number is odd!')
            assert.equal(testNumbers.numberChecker(5 * 5), 'The number is odd!')
            assert.equal(testNumbers.numberChecker(-25), 'The number is odd!')
        });
    });

    describe("averageSumArray tests", () => {
        it("Shoud return proper value  wen given [1, 2, 3, 4, 5]", function () {
            let input = [1, 2, 3, 4, 5]

            assert.equal(testNumbers.averageSumArray(input), 3)
 
        });

        it("Shoud trow Error wen given non numbers", function () {
            let input = [1, 2,-3, 4, 5]
 
            assert.equal(testNumbers.averageSumArray(input), 5)
 
        });       
    });
    
});