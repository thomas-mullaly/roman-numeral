"use strict";

class RomanNumeralConverter {
    convertToRomanNumerals(number) {
        let i = number;
        let result = "";

        while (i > 0) {
            if (i >= 10) {
                result += "X";
                i -= 10;
            } else if (i >= 5) {
                result += "V";
                i -= 5;
            } else if (i === 4) {
                result += "IV";
                i -= 4;
            } else {
                result += "I";
                i -= 1;
            }
        }

        return result;
    }
};

module.exports = RomanNumeralConverter;
