document.querySelector("#project1").addEventListener("click", () => {
    var template = document.querySelector("#QR1");
    var templateClone1 = template.content.cloneNode(true);
    document.querySelector("#template-qr1").append(templateClone1);

    });

    