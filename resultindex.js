document.getElementById("name").innerHTML = localStorage.getItem("textvalue");
document.getElementById("email").innerHTML = localStorage.getItem("email");
document.getElementById("number").innerHTML = localStorage.getItem("number");
document.getElementById("place").innerHTML = localStorage.getItem("location");
document.getElementById("lang1").innerHTML = localStorage.getItem("lang1");
document.getElementById("lang2").innerHTML = localStorage.getItem("lang2");
document.getElementById("lang3").innerHTML = localStorage.getItem("lang3");
document.getElementById("ad1").innerHTML = localStorage.getItem("ad1");
document.getElementById("ad2").innerHTML = localStorage.getItem("ad2");
document.getElementById("hobby1").innerHTML = localStorage.getItem("hobby1");
document.getElementById("hobby2").innerHTML = localStorage.getItem("hobby2");
//document.getElementById("hobby3").innerHTML = localStorage.getItem("hobby3");
document.getElementById("edu1").innerHTML = localStorage.getItem("edu1");
document.getElementById("edu2").innerHTML = localStorage.getItem("edu2");
document.getElementById("Projects").innerHTML = localStorage.getItem("Projects");

const location_place = localStorage.getItem("location");
document.getElementById("SumPlace").innerHTML = location_place;
document.getElementById("ad3").innerHTML = location_place;

const Sum_Name = localStorage.getItem("textvalue");
document.getElementById("linked1").innerHTML = Sum_Name;
document.getElementById("SumName").innerHTML = Sum_Name;

const Sum_Lang1 = localStorage.getItem("lang1");
document.getElementById("SumLang1").innerHTML = Sum_Lang1;
document.getElementById("ExpLang1").innerHTML = Sum_Lang1;
document.getElementById("Exp2Lang1").innerHTML = Sum_Lang1;

const Sum_Lang2 = localStorage.getItem("lang2");
document.getElementById("SumLang2").innerHTML = Sum_Lang2;
document.getElementById("ExpLang2").innerHTML = Sum_Lang2;
document.getElementById("Exp2Lang2").innerHTML = Sum_Lang2;

const des = localStorage.getItem("Designation");
document.getElementById("designation").innerHTML = des;