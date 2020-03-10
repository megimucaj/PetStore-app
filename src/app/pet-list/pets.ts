export interface IPets{
    petid : number;
    title : string;
    type : string;
    called : string;
    description : string;
}
export class Pets implements IPets{

    constructor( public petid : number, public title : string, public type : string, public called : string, public description : string){    
    }
    
}