// Mostrar la sección correspondiente
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Mostrar detalles del software en un modal
function showDetails(softwareName) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');

    const softwareDetails = {
        'Console TVFix Pro': {
            image: 'images/console-tvfix-pro.jpg',
            description: 'Console TVFix Pro es una aplicación avanzada diseñada para diagnosticar y reparar Smart TVs a través de puertos seriales.'
        },
        'MstarTool Professional': {
            image: 'images/mstartool-professional.jpg',
            description: 'MstarTool Professional incluye herramientas de diagnóstico avanzadas para televisores con chips Mstar.'
        },
        'MstarTool Basic': {
            image: 'images/mstartool-basic.jpg',
            description: 'MstarTool Basic proporciona herramientas sencillas para trabajar con firmwares Mstar.'
        },
        'MstarTool Ultimate': {
            image: 'images/mstartool-ultimate.jpg',
            description: 'MstarTool Ultimate permite la edición avanzada de firmwares de televisores con tecnología Mstar.'
        },
        'MstarTool Packer/Unpacker': {
            image: 'images/mstartool-packer-unpacker.jpg',
            description: 'MstarTool Packer/Unpacker facilita el empaquetado y desempacado de firmwares Mstar.'
        },
        'RealtekTool Ultimate': {
            image: 'images/realtektool-ultimate.jpg',
            description: 'RealtekTool Ultimate se especializa en la modificación de firmwares Realtek para Smart TVs.'
        },
        'Mediatek Bootloader Tool': {
            image: 'images/mediatek-bootloader-tool.jpg',
            description: 'Mediatek Bootloader Tool ayuda a extraer bootloaders de dispositivos Mediatek.'
        }
    };

    modalTitle.innerText = softwareName;
    modalImage.src = softwareDetails[softwareName].image;
    modalDescription.innerText = softwareDetails[softwareName].description;

    modal.style.display = 'block';
}

// Cerrar el modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
