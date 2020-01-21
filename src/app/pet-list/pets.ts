export interface IPets{
    petid : number;
    title : string;
    type : string;
    called : string;
    description : string;
}
export class Pets implements IPets{

    public petid : number;
    public title : string;
    public type : string;
    public called : string;
    public description : string;

    constructor(petid : number, title : string, type : string,  called : string,  description : string){
        this.petid = petid;
        this.title = title;
        this.type = type;
        this.called = called;
        this.description = description;
    }
    

    
}