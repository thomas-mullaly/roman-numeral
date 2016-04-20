"use strict";

let BaseRomanNumeralRule = require("./BaseRomanNumeralRule");

class RangeRomanNumeralRule extends BaseRomanNumeralRule {
    constructor(arabicNumber, numeral, rangeStart, rangeEnd) {
        super(arabicNumber, numeral);

        this._rangeStart = rangeStart;
        this._rangeEnd = rangeEnd;
    }

    applies(number) {
        return number >= this._rangeStart && number < this._rangeEnd;
    }
}

module.exports = RangeRomanNumeralRule;
