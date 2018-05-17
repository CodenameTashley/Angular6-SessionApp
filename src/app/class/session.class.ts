export class Session {
    title = '';
    date = new Date();
    time = new Date().getTime();
    speakers = [];
    level = 1;
    tags = [];
    location = '';

    constructor(title: string, date: any, time: any, speakers: string[], level: number, tags: string[], location: string) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.speakers = speakers;
        this.level = level;
        this.tags = tags;
        this.location = location;
    }

}
