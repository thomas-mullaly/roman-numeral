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

        it("should return IX for 9", function () {
            let result = converter.convertToRomanNumerals(9);

            result.should.equal("IX");
        });

        it("should return XV for 15", function () {
            let result = converter.convertToRomanNumerals(15);

            result.should.equal("XV");
        });

        it("should return XIV for 14", function () {
            let result = converter.convertToRomanNumerals(14);

            result.should.equal("XIV");
        });

        it("should return XIX for 19", function () {
            let result = converter.convertToRomanNumerals(19);

            result.should.equal("XIX");
        });

        it("should return XVII for 17", function () {
            let result = converter.convertToRomanNumerals(17);

            result.should.equal("XVII");
        });

        it("should return XXXI for 31", function () {
            let result = converter.convertToRomanNumerals(31);

            result.should.equal("XXXI");
        });

        it("should return XL for 40", function () {
            let result = converter.convertToRomanNumerals(40);

            result.should.equal("XL");
        });

        it("should return XLIV for 44", function () {
            let result = converter.convertToRomanNumerals(44);

            result.should.equal("XLIV");
        });

        it("should return XLIX for 49", function () {
            let result = converter.convertToRomanNumerals(49);

            result.should.equal("XLIX");
        });

        it("should return L for 50", function () {
            let result = converter.convertToRomanNumerals(50);

            result.should.equal("L");
        });

        it("should return LXXV for 75", function () {
            let result = converter.convertToRomanNumerals(75);

            result.should.equal("LXXV");
        });

        it("should return LXXXIX for 89", function () {
            let result = converter.convertToRomanNumerals(89);

            result.should.equal("LXXXIX");
        });

        it("should return XC for 90", function () {
            let result = converter.convertToRomanNumerals(90);

            result.should.equal("XC");
        });

        it("should return XCIX for 99", function () {
            let result = converter.convertToRomanNumerals(99);

            result.should.equal("XCIX");
        });

        it("should return C for 100", function () {
            let result = converter.convertToRomanNumerals(100);

            result.should.equal("C");
        });
    });
});
