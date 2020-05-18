var About_fb = /** @class */ (function () {
    function About_fb(work, place_you_have_lived, contac_info, Family, life_event, Detalis_abou) {
        var _this = this;
        this.work = work;
        this.place_you_have_lived = place_you_have_lived;
        this.contac_info = contac_info;
        this.Family = Family;
        this.life_event = life_event;
        this.Detalis_abou = Detalis_abou;
        this.GetWoekName = function () {
            return _this.work;
        };
        this.Getplace = function () {
            return _this.place_you_have_lived;
        };
        this.setPlace = function (name) {
            _this.place_you_have_lived = name;
        };
        this.GetContac = function () {
            return _this.contac_info;
        };
        this.GetDetalis = function () {
            return _this.Detalis_abou;
        };
        this.GetFamily = function () {
            return _this.Family;
        };
        this.work = work;
        this.place_you_have_lived = place_you_have_lived;
        this.life_event = life_event;
        this.contac_info = contac_info;
        this.Detalis_abou = Detalis_abou;
        this.Family = Family;
    }
    return About_fb;
}());
let My_About = new About_fb (["KANDAGATLA", "MAILN ROAD"],"KANDAGATLA HYDERABAD", [9666251994,"gaggenapallysandeep487@gmail.com","14/08/1995","male"] ,"single" ,["ZPHS KANDAGATLA" , " MK REDDY College"] )
console.log(My_About.GetWoekName() + "  wokr place ");
console.log(My_About.life_event + " life event ");
console.log(My_About.Getplace() + "   lived place before change ");
My_About.setPlace("vadodar");
console.log(My_About.Getplace() + "   lived place after change ");
console.log(My_About.GetFamily() + " about family","Dayaker Reddy","RamaDevi","Santhosh");
console.log(My_About.GetDetalis() + " detalis","(m):Athumakur(s)","(D):Suryapet","(vill):Kandagatla","H-NO:2/104/A");
console.log(My_About.GetContac() + "  contac" ,"Mobile Number :9666251994","Email:gaggenapallysandeep487@gmail.com");
function myFunction(){
    var a = document.getElementById("em").value;
    var b = document.getElementById("ps").value;
    var c = document.getElementById("fname").value;
    var d = document.getElementById("lname").value;
    var e = document.getElementById("mobile").value;
    var f = document.getElementById("pw").value;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}