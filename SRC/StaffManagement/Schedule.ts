export enum Weeks{
MONDAY='Monday',
TUESDAY='Tuesday',
WEDNESDAY='Wednesday',
THURSDAY='Thursday',
FRIDAY='Friday',
SATURDAY='Saturday',
SUNDAY='Sunday'
}
export class Schedule{
    private dayWork:Weeks[]=[];
    constructor(private time:string){}
    setDayWork(...day:Weeks[]){
        this.dayWork=this.dayWork.concat(day)
    }
    getDayWork(){
        return this.dayWork;
    }
    getTime(){
        return this.time;
    }
}