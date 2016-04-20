"use strict";

class BaseRomanNumeralRule {
    constructor(arabicNumber, numeral) {
        this._arabicNumber = arabicNumber;
        this._numeral = numeral;
    }

    get arabicNumber() {
        return this._arabicNumber;
    }

    get numeral() {
        return this._numeral;
    }

    applies(number) {
    }
}

module.exports = BaseRomanNumeralRule;
