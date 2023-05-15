"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map((row) => {
    return row.split(',');
});
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
let manUnitedWinsCount = 0;
for (let value of matches) {
    if (value[1] === 'Man United' && value[5] === MatchResults.HomeWin) {
        manUnitedWinsCount++;
    }
    else if (value[2] === 'Man United' && value[5] === MatchResults.AwayWin) {
        manUnitedWinsCount++;
    }
}
console.log(manUnitedWinsCount);
