import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResult";
const csvReader=new MatchReader('football.csv');
csvReader.read()
let manUnitedWinsCount:number=0;
for(let value of csvReader.data)
{
    if(value[1]==='Man United'&&value[5]===MatchResults.HomeWin)
    {
        manUnitedWinsCount++;
    }
    else if(value[2]==='Man United'&&value[5]===MatchResults.AwayWin){manUnitedWinsCount++}
}
console.log(manUnitedWinsCount);