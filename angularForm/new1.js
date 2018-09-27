
function f1()
            {
                var total=0;
                var list=document.getElementsByName("hobbies")
                
                for(var i=0;i<list.length;i++)
                {
                    if(list[i].checked==true)
                    {
                        total=total+1;
                    }
                }
                console.log(total);
                var prom=document.getElementById("promo").value;
                var subprom=prom.substring(3,5);
                var num=parseInt(subprom);
                console.log(num);
                if(total<2)
                {
                    
                    alert("select at least 2 hobbies");
                    return false;
                    
                }
                else
                {
                    if(num%7!=0)
                    {
                        alert("Last 3 digit of prompcode should be divisible by 7");
                        return false;
                    }
                    else
                    {
                    if(confirm("Are you would like to submit")) 
                    {
                        alert("Your form are submitted");
                    } 
                    else {
                        }
                    }
                }
            }
        function f2()
        {
            var prom=document.getElementById("promo").value;
            console.log(prom);
            var len=prom.length;

        }
        function fnameval()
        {
            var fname=document.getElementById("fname").value;
            console.log(fname);
            var len=fname.length;
            console.log(len);
            if(len>=1 && len<=10)
            {
                for(var i=0;i<fname.length;i++)
            {
                if((fname.charAt(i)>='a'&&fname.charAt(i)<='z')||(fname.charAt(i)>='A'&&fname.charAt(i)<='Z'))
                {
                
                }
               else
                {
                        document.getElementById("fname1").innerHTML="<p style='color:red'>Only charcter are allowed</p>";
                        document.getElementById("fname1").focus();
                        document.getElementById("fname1").innerHTML="";
                }
            }
            
            }
            else
            {
                document.getElementById("fname1").innerHTML="<p style='color:red'>name should be maximum of 10 charcter</p>";
            }
        }
        function lnameval()
        {
            var lname=document.getElementById("lname").value;
            console.log(lname);
            var len=lname.length;
            console.log(len);
            if(len>=1 && len<=10)
            {
                for(var i=0;i<lname.length;i++)
            {
                if((lname.charAt(i)>='a'&&lname.charAt(i)<='z')||(lname.charAt(i)>='A'&&lname.charAt(i)<='Z'))
                {
                
                }
               else
                {
                        document.getElementById("lname1").innerHTML="<p style='color:red'>Only charcter are allowed</p>";
                }
            }
            
            }
            else
            {
                document.getElementById("lname1").innerHTML="<p style='color:red'>name should be maximum of 10 charcter</p>";
            }
        }
        function ageval()
        {
            var age=document.getElementById("age").value;
            if(age>=18&&age<=60){}
            else
            {
                document.getElementById("age1").innerHTML="<p style='color:red'>Age should be between 18 and 60</p>";
            }
        }
        function emailval()
        {
            var email=document.getElementById("email").value;
            var len=email.search('@');
            console.log(len);
            if(len>0&&(email.search('.com')>len)||email.search('.in')>len){}
            else
            {
                document.getElementById("email1").innerHTML="<p style='color:red'>Not a valid mail</p>";
            }
        }
        function info1(x)
        {
            
            $.get(x,function(d,r){
                    
                    console.log(d);
                    document.getElementById("fname").value=d.fname;
                    document.getElementById("lname").value=d.lname;
                    document.getElementById("age").value=d.age;
                    document.getElementById("email").value=d.email;
                    //document.getElementById("gender").value=d.gender;
                    console.log(d.gender);
                    if(d.gender=='male')
                    {
                            document.getElementById("gender1").checked=true;
                    }
                    else
                    {
                        document.getElementById("gender2").checked=true;
                    }
                    
                    document.getElementById("promo").value=d.promo;
                    console.log(d.hobbies);
                    console.log(d.hobbies.length);
                    for(var i=0;i<d.hobbies.length;i++)
                    {
                    if(d.hobbies[i]=="singing")
                    {
                        document.getElementById("hobbies1").checked=true;
                    }
                    if(d.hobbies[i]=="instrument")
                    {
                        document.getElementById("hobbies2").checked=true;
                    }
                    if(d.hobbies[i]=="dancing")
                    {
                        document.getElementById("hobbies3").checked=true;
                    }
                    if(d.hobbies[i]=="traveling")
                    {
                        document.getElementById("hobbies4").checked=true;
                    }
                    }
                    
            });
                    
                }
            
        