"use strict";

let should = require("should");
let RomanNumeralConverter = require("../src/RomanNumeralConverter");

describe("RomanNumeralConverter", function () {
    let converter = null;

    beforeEach(function () {
        converter = new RomanNumeralConverter();
    });

    describe("convertToRomanNumerals", function () {
        it("should return I for 1", function () {
            let result = converter.convertToRomanNumerals(1);

            result.should.equal("I");
        });

        it("should return II for 2", function () {
            let result = converter.convertToRomanNumerals(2);

            result.should.equal("II");
        });

        it ("should return III for 3", function () {
            let result = converter.convertToRomanNumerals(3);

            result.should.equal("III");
        });

        it("should return IV for 4", function () {
            let result = converter.convertToRomanNumerals(4);

            result.should.equal("IV");
        });

        it("should return V for 5", function () {
            let result = converter.convertToRomanNumerals(5);

            result.should.equal("V");
        });

        it("should return VIII for 8", function () {
            let result = converter.convertToRomanNumerals(8);

            result.should.equal("VIII");
        });

        it("should return X for 10", function () {
            let result = converter.convertToRomanNumerals(10);

            result.should.equal("X");
        });
    });
});
