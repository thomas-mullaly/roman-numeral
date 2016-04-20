"use strict";

let GeneralRomanNumeralRule = require("./rules/GeneralRomanNumeralRule");
let ExactRomanNumeralRule = require("./rules/ExactRomanNumeralRule");
let RangeRomanNumeralRule = require("./rules/RangeRomanNumeralRule");

const romanNumeralRules = [
    new GeneralRomanNumeralRule(1000, "M"),
    new RangeRomanNumeralRule(900, "CM", 900, 1000),
    new GeneralRomanNumeralRule(500, "D"),
    new RangeRomanNumeralRule(400, "CD", 400, 500),
    new GeneralRomanNumeralRule(100, "C"),
    new RangeRomanNumeralRule(90, "XC", 90, 100),
    new GeneralRomanNumeralRule(50, "L"),
    new RangeRomanNumeralRule(40, "XL", 40, 50),
    new GeneralRomanNumeralRule(10, "X"),
    new ExactRomanNumeralRule(9, "IX"),
    new GeneralRomanNumeralRule(5, "V"),
    new ExactRomanNumeralRule(4, "IV"),
    new GeneralRomanNumeralRule(1, "I")
];

class RomanNumeralConverter {
    convertToRomanNumerals(number) {
        let i = number;
        let result = "";

        while (i > 0) {
            for (var rule of romanNumeralRules) {
                if (!rule.applies(i)) {
                    continue;
                }

                result += rule.numeral;
                i -= rule.arabicNumber;
                break;
            }
        }

        return result;
    }
};

module.exports = RomanNumeralConverter;
