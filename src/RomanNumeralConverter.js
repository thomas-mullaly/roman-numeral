"use strict";

class RomanNumeralConverter {
    convertToRomanNumerals(number) {
        let i = number;
        let result = "";

        while (i > 0) {
            result += "I";

            i -= 1;
        }

        return result;
    }
};

module.exports = RomanNumeralConverter;
