"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const csvReader = new CsvFileReader_1.CsvFileReader('football.csv');
csvReader.read();
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
let manUnitedWinsCount = 0;
for (let value of csvReader.data) {
    if (value[1] === 'Man United' && value[5] === MatchResults.HomeWin) {
        manUnitedWinsCount++;
    }
    else if (value[2] === 'Man United' && value[5] === MatchResults.AwayWin) {
        manUnitedWinsCount++;
    }
}
console.log(manUnitedWinsCount);
