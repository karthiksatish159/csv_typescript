import fs from 'fs';
const matches=fs.readFileSync('football.csv',
{
    encoding:'utf-8'
}).split('\n')
  .map((row:string):string[]=>
  {
    return row.split(',');
  });
let manUnitedWinsCount:number=0;
for(let value of matches)
{
    if(value[1]==='Man United'&&value[5]==='H')
    {
        manUnitedWinsCount++;
    }
    else if(value[2]==='Man United'&&value[5]==='A'){manUnitedWinsCount++}
}
console.log(manUnitedWinsCount);