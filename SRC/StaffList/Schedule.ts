export class Schedule{
    constructor(private dayWork:string,private dayOff:string,private time:string){}
    getDayWork(){
        return this.dayWork;
    }
    getDayOff(){
        return this.dayOff;
    }
    getTime(){
        return this.time;
    }
}