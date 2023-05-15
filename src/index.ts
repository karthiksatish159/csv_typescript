import { CsvFileReader } from "./CsvFileReader";
const csvReader=new CsvFileReader('football.csv');
csvReader.read();
enum MatchResults
{
  HomeWin='H',
  AwayWin='A',
  Draw='D'
}
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