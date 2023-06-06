import { dateStringToDate } from "./utils"
import { MatchResults } from "./MatchResult"
import { CsvFileReader } from "./CsvFileReader"
type MatchData=[Date,string,string,number,number,MatchResults,string];
export class MatchReader extends CsvFileReader<MatchData>
{
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