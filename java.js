function onClick() {
    let a = document.getElementById("kol").value;
    let b = document.getElementById("price").value;
    let r = document.getElementById("result");
    a = parseInt(a);
    b = parseInt(b);
    r.innerHTML = a * b;
    return false;
}

function prov() {
    let clear = document.getElementById("result");
    clear.innerHTML = "";
    let x = document.getElementById("kol").value;
    let y = document.getElementById("price").value;
    if ((/\D/.test(x)) || (/\D/.test(y))) {
        alert("Некорректные данные!");
    } 
  else {
        onClick();
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let c = document.getElementById("my-button");
    c.addEventListener("click", prov);
});
