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
    });
});
