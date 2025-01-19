export class Log{
    logCode:string;
    logDate:string;
    logDetails:string;
    logImage:string | null;

    constructor(logCode: string, logDate: string, logDetails: string,logImage: string | null) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.logImage = logImage;
    }
}