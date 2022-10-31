function onClick() {
var kol=document.getElementById("kol").value;
var price=document.getElementById("price").value;
var result=document.getElementById("result");
var a;
var b;
 result.innerHTML = "";
a = kol;
b = price;
if (a>0 && a!=NaN && b>0 && b!=NaN)
result.innerHTML=a*b;    
else result.innerText="Данные введены неверно";    
}

window.document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("btn");
    b.addEventListener("click", onClick);
});
