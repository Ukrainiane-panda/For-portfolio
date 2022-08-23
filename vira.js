

let goo = document.querySelector("#google");
let writing = document.querySelector("#project1");
let emova = document.querySelector("#emova");
let teach = document.querySelector("#project2");
let edit = document.querySelector("#edit");
let editing = document.querySelector("#project3");
let code = document.querySelector("#github");
let coding = document.querySelector("#project4");



writing.addEventListener ("click", () => {
    if (goo.style.display != "block") {
        goo.style.display = "block";
        edit.style.display = "none";
        code.style.display = "none";
        emova.style.display = "none"; 
     } else {
        goo.style.display = "none";
     }
})
teach.addEventListener ("click", () => {
    if (emova.style.display != "block") {
        emova.style.display = "block";
        edit.style.display = "none"
        code.style.display = "none";
        goo.style.display = "none";
     } else {
        emova.style.display = "none";
     }
})
editing.addEventListener ("click", () => {
    if (edit.style.display != "block") {
        edit.style.display = "block"; 
        emova.style.display = "none";
        code.style.display = "none";
        goo.style.display = "none"; 
     } else {
        edit.style.display = "none";
     }
})
coding.addEventListener ("click", () => {
    if (code.style.display != "block") {
        code.style.display = "block";
        emova.style.display = "none";
        edit.style.display = "none";
        goo.style.display = "none";
     } else {
        code.style.display = "none";
     }
})

// Відкрити QR за допомогою шаблонізатора

/*
    

document.querySelector("#project1").addEventListener("click", function (event) {
    var template1 = document.querySelector("#QR1");
    var templateClone1 = template1.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
    });


document.querySelector("#project2").addEventListener("click", (event) => {
    var template2 = document.querySelector("#QR2");
    var templateClone1 = template2.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
    
    });
document.querySelector("#project3").addEventListener("click", (event) => {
    var template3 = document.querySelector("#QR3");
    var templateClone1 = template3.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
        
    });
document.querySelector("#project4").addEventListener("click", (event) => {
    var template4 = document.querySelector("#QR4");
    var templateClone1 = template4.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
            
    });

*/