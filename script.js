function showDetails(softwareName) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const image = document.getElementById('modal-image');

    const softwareDetails = {
        "Console TVFix Pro": {
            description: "Software avanzado para reparar Smart TVs mediante puertos seriales.",
            image: "images/console-tvfix-pro.jpg"
        },
        "MstarTool Basic": {
            description: "Herramientas básicas para la reparación de Smart TVs con procesadores Mstar.",
            image: "images/mstartool-basic.jpg"
        },
        "MstarTool Ultimate": {
            description: "Versión completa de MstarTool con funciones avanzadas de reparación.",
            image: "images/mstartool-ultimate.jpg"
        },
        "MstarTool Professional": {
            description: "Software profesional para modificaciones en TVs con procesadores Mstar.",
            image: "images/mstartool-professional.jpg"
        },
        "MstarTool Packer/Unpacker": {
            description: "Empaque y desempaque de firmwares de TVs Mstar.",
            image: "images/mstartool-packer-unpacker.jpg"
        },
        "RealtekTool Ultimate": {
            description: "Software especializado para TVs con procesadores Realtek.",
            image: "images/realtektool-ultimate.jpg"
        },
        "Mediatek Bootloader Tool": {
            description: "Herramienta de extracción de bootloaders en TVs Mediatek.",
            image: "images/mediatek-bootloader-tool.jpg"
        }
    };

    // Asignar los detalles
    title.textContent = softwareName;
    description.textContent = softwareDetails[softwareName].description;
    image.src = softwareDetails[softwareName].image;

    // Mostrar modal con animación
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
