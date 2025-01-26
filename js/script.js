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
            description: 'MstarTool Professional incluye herramientas de diagnóstico avanzadas para televisores con chips Mstar. Se incluye: Edición, exportación y remplazo de panel, edición de mirror, edición Completa de logo, exportación y remplazo de logo También incluye comunicación directa al TV por puerto Serie (COM). Edición de UART en los DUMP y por vía USB, Cambio de control Remoto, empaquetar una partición como por ejemplo tvconfig para usar por USB'
        },
        'MstarTool Basic': {
            image: 'images/mstartool-basic.jpg',
            description: 'MstarTool Basic proporciona herramientas sencillas para trabajar con firmwares Mstar. Se incluye: Edición de panel, edición de mirror, edición limitada de logo y exportación de logo. También incluye comunicación directa al TV por puerto Serie (COM)'
        },
        'MstarTool Ultimate': {
            image: 'images/mstartool-ultimate.jpg',
            description: 'MstarTool Ultimate permite la edición avanzada de firmwares de televisores con tecnología Mstar. Se incluye: Edición, exportación y remplazo de panel, edición de mirror, edición Completa de logo, exportación y remplazo de logo También incluye comunicación directa al TV por puerto Serie (COM)'
        },
        'MstarTool Packer/Unpacker': {
            image: 'images/mstartool-packer-unpacker.jpg',
            description: 'MstarTool Packer/Unpacker facilita el empaquetado y desempacado de firmwares Mstar (DUMP).'
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