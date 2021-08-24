export class Quote {
    public showDescription: boolean;
    constructor(public id:number,
      public name:string,
      public quote:string,
      public author:string, 
      public datePosted: Date,
      public likes:number, 
      public dislikes:number){
        this.showDescription=false;}
}
