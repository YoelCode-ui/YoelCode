function showDetails(softwareName) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const image = document.getElementById("modal-image");

    // Aquí puedes agregar más detalles sobre cada software
    const softwareDetails = {
        "Console TVFix Pro": {
            description: "Aplicación avanzada diseñada para la comunicación con Smart TVs a través de puertos seriales.",
            image: "images/console-tvfix-pro.jpg"
        },
        "MstarTool Basic": {
            description: "Herramientas intuitivas para manejar firmwares de microprocesadores Mstar.",
            image: "images/mstartool-basic.jpg"
        }
        // Agrega más software aquí
    };

    const details = softwareDetails[softwareName];
    title.textContent = softwareName;
    description.textContent = details.description;
    image.src = details.image;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
