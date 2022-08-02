document.querySelector("#project1").addEventListener("click", () => {
    var template = document.querySelector("#QR1");
    var templateClone1 = template.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);

    });
document.querySelector("#project2").addEventListener("click", () => {
    var template = document.querySelector("#QR2");
    var templateClone1 = template.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
    
    });
document.querySelector("#project3").addEventListener("click", () => {
    var template = document.querySelector("#QR3");
    var templateClone1 = template.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
        
    });
document.querySelector("#project4").addEventListener("click", () => {
    var template = document.querySelector("#QR4");
    var templateClone1 = template.content.cloneNode(true);
    document.querySelector("#template-qr").append(templateClone1);
            
    });

    