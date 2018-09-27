var tv = /** @class */ (function () {
    function tv(manuf, size, Maxchannels, Price, Display) {
        this.Manufacturer = manuf;
        this.Size = size;
        this.MaxChannels = Maxchannels;
        this.Price = Price;
        this.DisplayType = Display;
    }
    tv.prototype.On = function () {
        console.log("ON");
    };
    ;
    tv.prototype.Off = function () {
        console.log("Off");
    };
    ;
    tv.prototype.ChangeChannel = function (ChannelNumber) {
        console.log("New channel is " + ChannelNumber);
    };
    ;
    tv.prototype.IncreaseVolume = function () {
        console.log("Volume increased");
    };
    ;
    tv.prototype.DecreaseVolume = function () {
        console.log("Volume Decreased");
    };
    ;
    return tv;
}());
var obj = new tv("LG", 22, 200, 15000, "HD");
function f1() {
    obj.On();
}
function f2() {
    obj.Off();
}
function f3() {
    obj.ChangeChannel(155);
}
var calc = function (num) {
    var sum = num.reduce(function (a, b) { return a + b; });
};
calc([2, 3, 4, 5]);
