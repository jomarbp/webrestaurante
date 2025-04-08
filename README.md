# webrestaurante

Estructura del Proyecto
Aquí te presento la estructura recomendada para organizar los archivos del proyecto:

azul-bistro/
├── index.html        # Archivo HTML principal
├── css/
│   └── style.css     # Estilos extraídos del HTML en un archivo separado
├── js/
│   └── main.js       # JavaScript principal con la funcionalidad del sitio
├── img/
│   ├── hero-bg.jpg             # Imagen de fondo para el hero section
│   ├── about.jpg               # Imagen sección "Sobre Nosotros"
│   ├── reservation-bg.jpg      # Imagen de fondo para reservaciones
│   ├── menu/                   # Carpeta para imágenes de platillos
│   │   ├── appetizer-1.jpg
│   │   ├── appetizer-2.jpg
│   │   ├── ...
│   │   ├── main-1.jpg
│   │   ├── ...
│   │   ├── dessert-1.jpg
│   │   └── ...
│   └── testimonials/           # Carpeta para fotos de clientes
│       ├── client-1.jpg
│       ├── client-2.jpg
│       └── client-3.jpg
└── favicon.ico                 # Ícono del sitio

Explicación detallada del resultado
1. Diseño y Paleta de Colores
He utilizado las paletas de colores proporcionadas:

#0a39e6 (Azul): Este color se usa como color principal (--primary) para elementos destacados como el header, botones, títulos y secciones importantes.
#fff (Blanco): Usado para el texto sobre fondos oscuros, áreas de contenido y para crear contraste.
Combinaciones adicionales:

#3c61f0 (Azul claro): Variación más clara del azul principal para hover states.
#072bb8 (Azul oscuro): Variación más oscura para el footer y elementos de énfasis.
#f5f7ff (Gris muy claro): Para fondos alternos, creando un diseño limpio.



2. Estructura y Secciones
La web está estructurada en secciones bien definidas:

Header: Barra de navegación fija con menú responsive.
Hero Section: Una imagen impactante con llamadas a la acción (CTA).
Sobre Nosotros: Presentación del restaurante con imagen y texto.
Menú: Categorías de platillos con sistema de tabs interactivo.
Testimonios: Opiniones de clientes en un formato rotativo.
Reservaciones: Formulario de contacto para reservar mesa.
Contacto: Información de ubicación, teléfono y mapa.
Footer: Enlaces útiles, redes sociales y formulario de suscripción.

3. Características Técnicas

Diseño Responsive: El sitio se adapta perfectamente a dispositivos móviles, tablets y escritorio.
Menú Interactivo: Usa JavaScript para cambiar entre categorías de alimentos.
Navegación Suave: Implementa scroll suave hacia las secciones al hacer clic en los enlaces.
Efectos Visuales: Animaciones sutiles en hover, transiciones fluidas y efectos de scroll.
Validación de Formularios: Comprueba los datos antes de enviar.
Contenido Dinámico: Testimonios que cambian aleatoriamente.

4. Mejores Prácticas Implementadas

Semántica HTML5: Uso de etiquetas semánticas como <header>, <section>, <footer>.
CSS Variables: Facilitan la consistencia del diseño y potenciales cambios.
Accesibilidad: Alto contraste entre texto y fondo, etiquetas adecuadas.
Optimización de Rendimiento: CSS y JS estructurados eficientemente.
Mobile-First: Diseño pensado primero para móviles y luego adaptado a pantallas más grandes.

5. Funcionalidad JavaScript
El código JavaScript proporciona:

Sistema de tabs para navegar por las categorías del menú
Navegación suave al hacer clic en los enlaces internos
Validación básica de formularios
Efecto de cambio en el header al hacer scroll
Carga aleatoria de testimonios
Menú hamburguesa para dispositivos móviles
