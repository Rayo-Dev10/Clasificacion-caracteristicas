document.addEventListener("DOMContentLoaded", () => {
    const data = [
        {
            type: "root-node",
            content: "Características de SQL"
        },
        {
            type: "category",
            title: "Almacenamiento y Estructura",
            content: [
                "- Permite escoger múltiples motores de almacenamiento para cada tabla.",
                "- Tablas hash en memorias temporales.",
                "- Uso de tablas en disco b-tree para búsquedas rápidas con compresión de índice.",
                "- En las últimas versiones, se permiten hasta 64 índices por tablas. Cada índice puede consistir desde 1 a 16 columnas o partes de columnas. El máximo ancho de límite es de 1.000 bytes."
            ]
        },
        {
            type: "category",
            title: "Rendimiento y Escalabilidad",
            content: [
                "- Agrupación de transacciones, pudiendo reunirlas de forma múltiple desde varias conexiones con el fin de incrementar el número de transacciones por segundo.",
                "- Soporta gran cantidad de datos, incluso con más de 50 millones de registros.",
                "- Uso de multihilos mediante hilos de Kernel."
            ]
        },
        {
            type: "category",
            title: "Seguridad",
            content: [
                "- Conectividad segura.",
                "- Ofrece un sistema de contraseñas y privilegios seguros de verificación basado en el host y tráfico de contraseñas encriptado al conectarse a un servidor."
            ]
        },
        {
            type: "category",
            title: "Funcionalidades Avanzadas",
            content: [
                "- Ejecución de transacciones y uso de claves foráneas.",
                "- Presenta un amplio subconjunto del lenguaje SQL.",
                "- Replicación.",
                "- Búsqueda e indexación de campos de texto."
            ]
        },
        {
            type: "category",
            title: "Compatibilidad y Portabilidad",
            content: [
                "- Disponible en casi todas las plataformas o sistemas.",
                "- Utiliza varias herramientas para portabilidad."
            ]
        }
    ];

    const mindmapElement = document.getElementById("mindmap");

    data.forEach(item => {
        const nodeElement = document.createElement("div");
        nodeElement.classList.add("node");

        if (item.type === "root-node") {
            nodeElement.classList.add("root-node");
            nodeElement.textContent = item.content;
        } else if (item.type === "category") {
            nodeElement.classList.add("category");

            const titleElement = document.createElement("h2");
            titleElement.textContent = item.title;
            nodeElement.appendChild(titleElement);

            item.content.forEach(paragraph => {
                const paragraphElement = document.createElement("p");
                paragraphElement.textContent = paragraph;
                nodeElement.appendChild(paragraphElement);
            });
        }

        mindmapElement.appendChild(nodeElement);
    });
});
