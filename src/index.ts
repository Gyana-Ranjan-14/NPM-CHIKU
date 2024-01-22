export class log{
    static success(msg:string){
        console.log(`%c ${msg}`,'color:green');
    }
    static danger(msg:string){
        console.log(`%c ${msg}`,'color:red');
    }
    static Info(msg:string){
        console.log(`%c ${msg}`,'color:black; background:yellow');
    }
}