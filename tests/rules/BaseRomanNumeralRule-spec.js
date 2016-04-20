"use strict";

let should = require("should");
let BaseRomanNumeralRule = require("../../src/rules/BaseRomanNumeralRule");

describe("BaseRomanNumeralRule", function () {
    let baseRule = null;

    beforeEach(function () {
        baseRule = new BaseRomanNumeralRule(10, "X");
    });

    describe("arabicNumber", function () {
        it("should return 10", function () {
            baseRule.arabicNumber.should.equal(10);
        });
    });

    describe("numeral", function () {
        it("should return X", function () {
            baseRule.numeral.should.equal("X");
        });
    });

    describe("applies", function () {
        it("should throw error", function () {
            baseRule.applies.should.throw();
        })
    });
});
