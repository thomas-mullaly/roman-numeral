"use strict";

let should = require("should");
let GeneralRomanNumeralRule = require("../../src/rules/GeneralRomanNumeralRule");

describe("GeneralRomanNumeralRule", function () {
    describe("applies", function () {
        let rule = null;

        beforeEach(function () {
            rule = new GeneralRomanNumeralRule(10, "X");
        });

        it("should return false if number is less than arabicNumber", function () {
            rule.applies(6).should.equal(false);
        });

        it("should return true if number is greater than arabicNumber", function () {
            rule.applies(11).should.equal(true);
        });

        it("should return true if number is equal to arabicNumber", function () {
            rule.applies(10).should.equal(true);
        });
    });
});
