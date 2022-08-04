// Відкрити QR за допомогою шаблонызатора

let goo = document.querySelector("#google");
let writing = document.querySelector("#project1");


writing.addEventListener("click", write(),);

function write (event) {
    goo.style.display = "bloc";
    
}


/*
do {
    

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

} while (condition);
*/
