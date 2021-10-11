function home(){
    document.getElementById("home").style.display = "block";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
}
function about_me(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "block";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
}
function education(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "none";
}
function projects(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("experience").style.display = "none";
}
function experience(){
    document.getElementById("home").style.display = "none";
    document.getElementById("about_me").style.display = "none";
    document.getElementById("education").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("experience").style.display = "block";
}
function showtime()
{
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var day=date.getDay(),day1;
    if(day==0)
    day1="Sunday";
    if(day==1)
    day1="Monday";
    if(day==2)
    day1="Tuesday";
    if(day==3)
    day1="Wednesday";
    if(day==4)
    day1="Thursday";
    if(day==5)
    day1="Friday";
    if(day==6)
    day1="Saturday";
    var d=date.getDate()+"-"+(Number(date.getMonth())+1)+"-"+date.getFullYear()+" "+day1;
    h=(h<10)?"0"+h:h;
    min=(m<10)?"0"+m:m;
    sec=(s<10)?"0"+s:s;
    var time=h+" : "+min+" : "+sec;
    document.getElementById("time").innerHTML=d+" "+time;
    setTimeout(showtime,1000);
}
showtime();