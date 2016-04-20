"use strict";

let BaseRomanNumeralRule = require("./BaseRomanNumeralRule");

class GeneralRomanNumeralRule extends BaseRomanNumeralRule {
    constructor(arabicNumber, numeral) {
        super(arabicNumber, numeral);
    }

    applies(number) {
        return number > this._arabicNumber;
    }
}

module.exports = GeneralRomanNumeralRule;
