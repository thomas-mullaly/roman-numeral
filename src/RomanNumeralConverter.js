"use strict";

class RomanNumeralConverter {
    convertToRomanNumerals(number) {
        if (number === 1) {
            return "I";
        } else if (number === 2) {
            return "II";
        } else if (number === 3) {
            return "III";
        }
    }
};

module.exports = RomanNumeralConverter;
