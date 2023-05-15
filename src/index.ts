import fs from 'fs';
const matches=fs.readFileSync('football.csv',
{
    encoding:'utf-8'
}).split('\n')
  .map((row:string):string[]=>
  {
    return row.split(',');
  });
enum MatchResults
{
  HomeWin='H',
  AwayWin='A',
  Draw='D'
}
let manUnitedWinsCount:number=0;
for(let value of matches)
{
    if(value[1]==='Man United'&&value[5]===MatchResults.HomeWin)
    {
        manUnitedWinsCount++;
    }
    else if(value[2]==='Man United'&&value[5]===MatchResults.AwayWin){manUnitedWinsCount++}
}
console.log(manUnitedWinsCount);