"use strict";

const romanNumeralRules = [
    {
        arabicNumber: 900,
        numeral: "CM",
        applies: (number) => {
            return number >= 900 && number < 1000;
        }
    },
    {
        arabicNumber: 500,
        numeral: "D",
        applies: (number) => {
            return number >= 500;
        }
    },
    {
        arabicNumber: 400,
        numeral: "CD",
        applies: (number) => {
            return number >= 400 && number < 500;
        }
    },
    {
        arabicNumber: 100,
        numeral: "C",
        applies: (number) => {
            return number >= 100;
        }
    },
    {
        arabicNumber: 90,
        numeral: "XC",
        applies: (number) => {
            return number >= 90 && number < 100;
        }
    },
    {
        arabicNumber: 50,
        numeral: "L",
        applies: (number) => {
            return number >= 50;
        }
    },
    {
        arabicNumber: 40,
        numeral: "XL",
        applies: (number) => {
            return number >= 40 && number < 50;
        }
    },
    {
        arabicNumber: 10,
        numeral: "X",
        applies: (number) => {
            return number >= 10;
        }
    },
    {
        arabicNumber: 9,
        numeral: "IX",
        applies: (number) => {
            return number === 9;
        }
    },
    {
        arabicNumber: 5,
        numeral: "V",
        applies: (number) => {
            return number >= 5;
        }
    },
    {
        arabicNumber: 4,
        numeral: "IV",
        applies: (number) => {
            return number === 4;
        }
    },
    {
        arabicNumber: 1,
        numeral: "I",
        applies: (number) => {
            return true;
        }
    }
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
