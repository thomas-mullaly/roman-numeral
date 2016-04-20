"use strict";

let BaseRomanNumeralRule = require("./BaseRomanNumeralRule");

class RangeRomanNumeralRule extends BaseRomanNumeralRule {
    constructor(arabicNumber, numeral, rangeStart) {
        super(arabicNumber, numeral);

        this._rangeStart = rangeStart;
    }

    applies(number) {
        return number >= this._rangeStart;
    }
}

module.exports = RangeRomanNumeralRule;
