export class Pets{

    id : number;
    title : string;
    type : string;
    called : string;
    description : string;

    constructor(id : number, title : string, type : string,  called : string,  description : string){
        this.id = id;
        this.title = title;
        this.type = type;
        this.called = called;
        this.description = description;
    }

    
}