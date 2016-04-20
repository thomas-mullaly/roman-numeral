"use strict";

let BaseRomanNumeralRule = require("./BaseRomanNumeralRule");

class ExactRomanNumeralRule extends BaseRomanNumeralRule {
    constructor(arabicNumber, numeral) {
        super(arabicNumber, numeral);
    }

    applies(number) {
        return this._arabicNumber === number;
    }
}

module.exports = ExactRomanNumeralRule;
