"use strict";

let BaseRomanNumeralRule = require("./BaseRomanNumeralRule");

class RangeRomanNumeralRule extends BaseRomanNumeralRule {
    constructor(arabicNumber, numeral) {
        super(arabicNumber, numeral);
    }

    applies() {

    }
}

module.exports = RangeRomanNumeralRule;
