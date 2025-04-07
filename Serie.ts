export class Serie{
    position: number;
    name: String;
    channel: String
    amountOfSeasons: number;
    description: String;
    linkSerie: String;
    linkImg: String;

    constructor(position: number, name: String, channel: String, amountOfSeasons: number, description: String, linkSerie: String, linkImg: String){
        this.position = position;
        this.name = name;
        this.channel = channel;
        this.amountOfSeasons = amountOfSeasons;
        this.description = description;
        this.linkSerie = linkSerie;
        this.linkImg = linkImg;
    }

}