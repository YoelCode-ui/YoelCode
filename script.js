// Diccionario de traducciones
const translations = {
    en: {
		software_title: "Our Softwares",
        nav_home: "Home",
        nav_software: "Software",
        nav_contact: "Contact",
        banner_title: "Professional Solutions for Smart TV Repair",
        banner_desc: "Advanced software to diagnose and fix smart TV issues.",
        software_console_tvfix: "Console TVFix Pro",
        software_mstartool_pro: "MstarTool Professional",
        software_mstartool_basic: "MstarTool Basic",
        software_mstartool_ultimate: "MstarTool Ultimate",
        software_packer_unpacker: "MstarTool Packer/Unpacker",
        software_realtek_ultimate: "RealtekTool Ultimate",
        software_mediatek_bootloader: "Mediatek Bootloader Tool",
        desc_console_tvfix: "Console TVFix Pro is an advanced application designed to diagnose and repair Smart TVs via serial ports.",
		desc_mstartool_basic: "MstarTool Basic provides simple tools to work with Mstar firmwares. It includes: Panel editing, mirror editing, limited logo editing, and logo export. It also includes direct communication with the TV through the Serial (COM) port.",
		desc_mstartool_ultimate: "MstarTool Ultimate allows advanced editing of firmwares for TVs with Mstar technology. It includes: Panel editing, panel export and replacement, mirror editing, complete logo editing, logo export and replacement. It also includes direct communication with the TV through the Serial (COM) port.",
		desc_mstartool_pro: "MstarTool Professional includes advanced diagnostic tools for TVs with Mstar chips. It includes: Panel editing, panel export and replacement, mirror editing, complete logo editing, logo export and replacement. It also includes direct communication with the TV through the Serial (COM) port. UART editing in DUMPs and via USB, remote control change, and packaging of a partition like tvconfig to use via USB.",
		desc_packer_unpacker: "MstarTool Packer/Unpacker makes it easier to pack and unpack Mstar firmwares (DUMPs).",
		desc_realtek_ultimate: "RealtekTool Ultimate specializes in modifying Realtek firmwares for Smart TVs.",
		desc_mediatek_bootloader: "Mediatek Bootloader Tool helps extract bootloaders from Mediatek devices.",
        btn_view_more: "View More",
        contact_title: "Contact",
        contact_desc: "For more information and support, you can contact us through the following channels:",
        contact_youtube: "YouTube Channel",
        contact_telegram: "Telegram Group: Smart TV Mods Community",
        contact_whatsapp: "WhatsApp: +5356113984",
        contact_phone: "Phone: +5356113984",
        contact_payment: "Payments via: <strong>PayPal</strong>",
        footer: "&copy; 2024 TV Repair Software. All rights reserved."
    },
    es: {
		software_title: "Nuestros Softwares",
        nav_home: "Inicio",
        nav_software: "Software",
        nav_contact: "Contacto",
        banner_title: "Soluciones Profesionales para la Reparación de Smart TVs",
        banner_desc: "Software avanzado para diagnosticar y solucionar problemas de televisores inteligentes.",
        software_console_tvfix: "Console TVFix Pro",
        software_mstartool_pro: "MstarTool Professional",
        software_mstartool_basic: "MstarTool Basic",
        software_mstartool_ultimate: "MstarTool Ultimate",
        software_packer_unpacker: "MstarTool Packer/Unpacker",
        software_realtek_ultimate: "RealtekTool Ultimate",
        software_mediatek_bootloader: "Mediatek Bootloader Tool",
        desc_console_tvfix: "Console TVFix Pro es una aplicación avanzada diseñada para diagnosticar y reparar Smart TVs a través de puertos seriales.",
        desc_mstartool_basic: "MstarTool Basic proporciona herramientas sencillas para trabajar con firmwares Mstar. Se incluye: Edición de panel, edición de mirror, edición limitada de logo y exportación de logo. También incluye comunicación directa al TV por puerto Serie (COM)",
        desc_mstartool_ultimate: "MstarTool Ultimate permite la edición avanzada de firmwares de televisores con tecnología Mstar. Se incluye: Edición, exportación y remplazo de panel, edición de mirror, edición Completa de logo, exportación y remplazo de logo También incluye comunicación directa al TV por puerto Serie (COM)",
        desc_mstartool_pro: "MstarTool Professional incluye herramientas de diagnóstico avanzadas para televisores con chips Mstar. Se incluye: Edición, exportación y remplazo de panel, edición de mirror, edición Completa de logo, exportación y remplazo de logo También incluye comunicación directa al TV por puerto Serie (COM). Edición de UART en los DUMP y por vía USB, Cambio de control Remoto, empaquetar una partición como por ejemplo tvconfig para usar por USB",
        desc_packer_unpacker: "MstarTool Packer/Unpacker facilita el empaquetado y desempacado de firmwares Mstar (DUMP).",
        desc_realtek_ultimate: "RealtekTool Ultimate se especializa en la modificación de firmwares Realtek para Smart TVs.",
        desc_mediatek_bootloader: "Mediatek Bootloader Tool ayuda a extraer bootloaders de dispositivos Mediatek.",
        btn_view_more: "Ver más",
        contact_title: "Contacto",
        contact_desc: "Para más información y soporte, puedes contactarnos a través de los siguientes canales:",
        contact_youtube: "Canal de YouTube",
        contact_telegram: "Grupo de Telegram: Smart TV Mods Community",
        contact_whatsapp: "WhatsApp: +5356113984",
        contact_phone: "Teléfono: +5356113984",
        contact_payment: "Pagos a través de: <strong>PayPal</strong>",
        footer: "&copy; 2024 TV Repair Software. Todos los derechos reservados."
    }
};

// Cambiar idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerHTML = translations[lang][key];
    });
}

// Mostrar secciones
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
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
            description: translations[document.getElementById('language-select').value]['desc_console_tvfix']
        },
        'MstarTool Professional': {
            image: 'images/mstartool-professional.jpg',
            description: translations[document.getElementById('language-select').value]['desc_mstartool_pro']
        },
        'MstarTool Basic': {
            image: 'images/mstartool-basic.jpg',
            description: translations[document.getElementById('language-select').value]['desc_mstartool_basic']
        },
        'MstarTool Ultimate': {
            image: 'images/mstartool-ultimate.jpg',
            description: translations[document.getElementById('language-select').value]['desc_mstartool_ultimate']
        },
        'MstarTool Packer/Unpacker': {
            image: 'images/mstartool-packer-unpacker.jpg',
            description: translations[document.getElementById('language-select').value]['desc_packer_unpacker']
        },
        'RealtekTool Ultimate': {
            image: 'images/realtektool-ultimate.jpg',
            description: translations[document.getElementById('language-select').value]['desc_realtek_ultimate']
        },
        'Mediatek Bootloader Tool': {
            image: 'images/mediatek-bootloader-tool.jpg',
            description: translations[document.getElementById('language-select').value]['desc_mediatek_bootloader']
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
