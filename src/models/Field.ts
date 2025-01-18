export class Field {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    fieldSize: string;
    fieldImage1: string | null; // URL or Base64 string
    fieldImage2: string | null; // URL or Base64 string

    constructor(fieldCode: string, fieldName: string, fieldLocation: string, fieldSize: string, fieldImage1: string | null, fieldImage2: string | null) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldSize = fieldSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }
}
