"use strict";

let should = require("should");
let BaseRomanNumeralRule = require("../../src/rules/BaseRomanNumeralRule");

describe("BaseRomanNumeralRule", function () {
    let baseRule = null;

    beforeEach(function () {
        baseRule = new BaseRomanNumeralRule(10);
    });

    describe("arabicNumber", function () {
        it("should return 10", function () {
            baseRule.arabicNumber.should.equal(10);
        });
    });
});
