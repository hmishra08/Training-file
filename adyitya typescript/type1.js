var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.setName = function (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    };
    ;
    employee.prototype.getName = function () {
        console.log(this.fname + " " + this.lname);
    };
    ;
    employee.prototype.setAge = function (age) {
        this.age = age;
    };
    ;
    employee.prototype.getAge = function () {
        console.log("Age=" + this.age);
    };
    ;
    return employee;
}());
;
var obj = new employee();
obj.setName("Himanshu", "Mishra");
obj.getName();
obj.setAge(22);
obj.getAge();
