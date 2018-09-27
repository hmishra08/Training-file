class employee
{
 fname:string;
 lname:string;
 age:number;
 setName(fname:string,lname:string)
 {
    this.fname=fname;
    this.lname=lname;
 };
 getName()
 {
    console.log(this.fname+" "+this.lname)
 };
 setAge(age:number)
 {
     this.age=age;
 };
 getAge()
 {
     console.log("Age="+this.age);
 };
};
var obj=new employee();
obj.setName("Himanshu","Mishra");
obj.getName();
obj.setAge(22);
obj.getAge();