document.querySelector("#project1").addEventListener("click", () => {
    var template1 = document.querySelector("#QR1");
    var templateClone1 = template1.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);

    });
document.querySelector("#project2").addEventListener("click", () => {
    var template2 = document.querySelector("#QR2");
    var templateClone1 = template2.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
    
    });
document.querySelector("#project3").addEventListener("click", () => {
    var template3 = document.querySelector("#QR3");
    var templateClone1 = template3.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
        
    });
document.querySelector("#project4").addEventListener("click", () => {
    var template4 = document.querySelector("#QR4");
    var templateClone1 = template4.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
            
    });

    