"use strict";

class BaseRomanNumeralRule {
    constructor(arabicNumber) {
        this._arabicNumber = arabicNumber;
    }

    get arabicNumber() {
        return this._arabicNumber;
    }
}

module.exports = BaseRomanNumeralRule;
