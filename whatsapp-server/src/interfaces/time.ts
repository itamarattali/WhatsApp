export class Time {
    time: string;

    constructor() {
        this.time = new Date().toTimeString().split(' ')[0].slice(6);
    }
}