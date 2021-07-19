var name_of_people=[];
function submit(){
    var guestname=document.getElementById("name").value;
name_of_people.push(guestname);
console.log(guestname);
console.log(name_of_people);
var length_of_name=name_of_people.length;
console.log(length_of_name);
document.getElementById("display_name").innerHTML=name_of_people.toString();
}
function sorting(){
    name_of_people.sort();
    var i=name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("p1").innerHTML=name_of_people.toString();

}
function searching(){
var s=document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<number_of_people.length;j++)
{
if(s==name_of_people[j]){
    found=found+1;
}
}
document.getElementById("p1").innerHTML="name_found"+found+"time/s";
console.log("name_found"+found+"time/s");
}
function show() { var i= name_of_people.join("<br>");
 console.log(name_of_people);
 document.getElementById("p1").innerHTML=i.toString(); 
 document.getElementById("sort_button").style.display="block"; }