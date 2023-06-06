"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const csvReader = new MatchReader_1.MatchReader('football.csv');
csvReader.read();
let manUnitedWinsCount = 0;
for (let value of csvReader.data) {
    if (value[1] === 'Man United' && value[5] === MatchResult_1.MatchResults.HomeWin) {
        manUnitedWinsCount++;
    }
    else if (value[2] === 'Man United' && value[5] === MatchResult_1.MatchResults.AwayWin) {
        manUnitedWinsCount++;
    }
}
console.log(manUnitedWinsCount);
