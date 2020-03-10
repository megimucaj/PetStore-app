export interface IPetsInfo{
    infoId: number;
    petinformation: string;
}
export class PetsInfo{

//short form
    constructor( public infoId : number, public petinformation : string ){
    }
}