// Відкрити QR за допомогою шаблонізатора

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

//Змінні до першого і другого варіантів коду 
//let email = document.querySelector("#Email");
//let actualEmail = "sheludkovira@gmail.com";
//let password = document.querySelector("#password");
//let actualPassword = "0707viraSh";
//let button = document.querySelector("#button");
//let mass = document.querySelectorAll(".opinion");
//let non = document.querySelector("#read");
//let blocforauthorization = document.querySelector("#blocforauthorization");

/* Перший варіант
button.addEventListener("click", () => {
if (email === actualEmail && password === actualPassword){
    mass.style.display = "block";
    blocforauthorization.style.display = "none";
} else { non.style.display = "block";
}
});
*/
/* Другий варіант коду
button.addEventListener("click", () => {
    if (email === actualEmail && password === actualPassword){
        for (const m of mass){
            m.style.display = "block";
}
        blocforauthorization.style.display = "none";
    } 
    else { non.style.display = "block"; 
    }
});
*/

/* Ще один код, який не працює

let email = document.querySelector("#Email");
const actualEmail = "sheludkovira@gmail.com";
let password = document.querySelector("#password");
const actualPassword = "0707viraSh";
let button = document.querySelector("#button");
let mass = document.querySelector("#opinion");
let non = document.querySelector("#read");
let blocforauthorization = document.querySelector("#blocforauthorization");

button.addEventListener("click", () => {
    if (email === actualEmail && password === actualPassword){
        mass.innerHTML ("beforeend", `<h3>Привіт! Розкажи, про що ти думаєш!</h3><br />`);
        blocforauthorization.style.display = "none";
    }
    else { non.style.display = "block"; 
}   

});
*/

var user = {
email = "sheludkovira@gmail.com";
password = "0707viraSh";

showForm: function (element) {
    element.innerHTML ("beforeend", `<h3>Привіт! Розкажи, про що ти думаєш!</h3><br />`)
}
}

let blocforauthorization = document.querySelector("#blocforauthorization");

document.querySelector("#button").addEventListener("click", ()=>{
    if(document.querySelector("#Email") === this.email && document.querySelector("#password") === this.password){
    showForm()
    }
})