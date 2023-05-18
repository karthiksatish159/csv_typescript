import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from "./MatchResult";
type MatchData=[Date,string,string,number,number,MatchResults,string];
export class CsvFileReader
{
    data:MatchData[]=[];
    constructor(public filename:string){}
    read():void
    {
       this.data=fs.readFileSync(this.filename,
        {
            encoding:'utf-8'
        }).split('\n')
        .map((row:string):string[]=>
        {
            return row.split(',');
        })
        .map(this.mapReader)
    }
    mapReader(row:string[]):MatchData
    {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResults, //* type asseration so now onwards typescript know which values should accept,here we have more clarity then typescript on data type i.e reason we used type asseration
            row[6]
            ]
    }
}