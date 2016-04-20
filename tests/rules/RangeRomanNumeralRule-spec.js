"use strict";

let should = require("should");
let RangeRomanNumeralRule = require("../../src/rules/RangeRomanNumeralRule");

describe("RangeRomanNumeralRule", function () {
    describe("applies", function () {
        let rule = null;

        beforeEach(function () {
            rule = new RangeRomanNumeralRule(40, "XL", 40, 50);
        });

        it("should return false if number is before range start", function () {
            rule.applies(39).should.equal(false);
        });

        it("should return false if number is after range end", function () {
            rule.applies(60).should.equal(false);
        });

        it("should return false if number is equal to range end", function () {
            rule.applies(50).should.equal(false);
        });

        it("should return true if number is equal to range start", function () {
            rule.applies(40).should.equal(true);
        });

        it("should return true if number is inside range", function () {
            rule.applies(45).should.equal(true);
        });
    });
});
