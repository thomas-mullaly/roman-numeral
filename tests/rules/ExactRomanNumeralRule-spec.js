"use strict";

let should = require("should");
let ExactRomanNumeralRule = require("../../src/rules/ExactRomanNumeralRule");

describe("ExactRomanNumeralRule", function () {
    describe("applies", function () {
        let rule = null;

        beforeEach(function () {
            rule = new ExactRomanNumeralRule(9, "IX");
        });

        it("should return false if number does not match arabicNumber", function () {
            rule.applies(10).should.equal(false);
        });
    });
})
