export class Crop {
    cropCode:string;
    cropCommonName:string;
    cropScientificName:string;
    cropImage: string | null;
    cropCategory: string;
    season: string;
    fieldCode:string;

    constructor(cropCode: string, cropCommonName: string, cropScientificName: string, cropImage: string | null, cropCategory: string, season: string,fieldCode: string) {
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropImage = cropImage;
        this.cropCategory = cropCategory;
        this.season = season;
        this.fieldCode = fieldCode;
    }
}