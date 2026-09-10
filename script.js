let peppa = document.querySelector("#peppa");
let peppatekst = document.querySelector("#peppatekst");
let article2 = document.querySelector("#article2");

peppa.onclick = function () {

    if (peppa.style.transform === "scale(1.2)") {
        peppa.style.transform = "scale(1)";
        peppatekst.innerHTML = "Klik op Peppa!";
        article2.style.backgroundColor = "#00b4eb";
        article2.style.color = "white";
    } else {
        peppa.style.transform = "scale(1.2)";
        peppatekst.innerHTML = "Peppa is blij!";
        article2.style.backgroundColor = "#f288b8";
        article2.style.color = "yellow";
    }

};

let george = document.querySelector("#george");

george.onclick = function () {

    if (george.style.transform === "scale(1.2)") {
        george.style.transform = "scale(1)";
    } else {
        george.style.transform = "scale(1.2)";
    }

};