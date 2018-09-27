class tv
{
    Manufacturer:string;
    Size:number;
    MaxChannels:number;
    Price:number;
    DisplayType:string;
    On(){
        console.log("ON");
    };
    Off(){
        console.log("Off");
    };
    ChangeChannel(ChannelNumber){
        console.log("New channel is "+ChannelNumber);
    };
    IncreaseVolume(){
        console.log("Volume increased");
    };
    DecreaseVolume(){
        console.log("Volume Decreased");
    };
    
    constructor(manuf:string,size:number,Maxchannels:number,Price:number,Display:string)
    {
        this.Manufacturer=manuf;
        this.Size=size;
        this.MaxChannels=Maxchannels;
        this.Price=Price;
        this.DisplayType=Display;
    }
}
var obj=new tv("LG",22,200,15000,"HD");
console.log(obj.Size);
function f1()
{
    obj.On();
    console.log(obj.Size);
}
function f2()
{
    obj.Off();
}
function f3()
{
    obj.ChangeChannel(155);
}
var calc=function(num:number[]):void{
    var sum=num.reduce((a,b)=>a+b);
}
calc([2,3,4,5]);