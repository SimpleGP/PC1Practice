/**
*@sumary Entity class for TV show
*@author SimpleGP
*/

export class Show{
    constructor({name,url, language, status, summary, image}){
        this.name=name;
        this.url=url;
        this.language=language;
        this.status=status;
        this.summary=summary;
        this.image=image;
    }

}