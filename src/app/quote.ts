export class Quote {
         showDescription: boolean;
        constructor(public id: number,public name: string,public description: string, publishedDate: Date){
          this.showDescription=false;
        }
      }
