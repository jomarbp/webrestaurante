# Azul Bistro - Web de Restaurante

Este repositorio contiene el proyecto web para "Azul Bistro", un sitio web moderno y responsive para un restaurante.

## Estructura del Proyecto

```
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
```

## Diseño y Paleta de Colores

- **#0a39e6 (Azul)**: Color principal (--primary) para elementos destacados como header, botones, títulos y secciones importantes.
- **#fff (Blanco)**: Usado para texto sobre fondos oscuros, áreas de contenido y para crear contraste.
- **Combinaciones adicionales**:
  - **#3c61f0 (Azul claro)**: Variación más clara del azul principal para estados hover.
  - **#072bb8 (Azul oscuro)**: Variación más oscura para footer y elementos de énfasis.
  - **#f5f7ff (Gris muy claro)**: Para fondos alternos, creando un diseño limpio.

## Estructura y Secciones

El sitio está organizado en las siguientes secciones:

1. **Header**: Barra de navegación fija con menú responsive.
2. **Hero Section**: Imagen impactante con llamadas a la acción (CTA).
3. **Sobre Nosotros**: Presentación del restaurante con imagen y texto.
4. **Menú**: Categorías de platillos con sistema de tabs interactivo.
5. **Testimonios**: Opiniones de clientes en un formato rotativo.
6. **Reservaciones**: Formulario de contacto para reservar mesa.
7. **Contacto**: Información de ubicación, teléfono y mapa.
8. **Footer**: Enlaces útiles, redes sociales y formulario de suscripción.

## Características Técnicas

- **Diseño Responsive**: El sitio se adapta perfectamente a dispositivos móviles, tablets y escritorio.
- **Menú Interactivo**: Usa JavaScript para cambiar entre categorías de alimentos.
- **Navegación Suave**: Implementa scroll suave hacia las secciones al hacer clic en los enlaces.
- **Efectos Visuales**: Animaciones sutiles en hover, transiciones fluidas y efectos de scroll.
- **Validación de Formularios**: Comprueba los datos antes de enviar.
- **Contenido Dinámico**: Testimonios que cambian aleatoriamente.

## Mejores Prácticas Implementadas

- **Semántica HTML5**: Uso de etiquetas semánticas como `<header>`, `<section>`, `<footer>`.
- **CSS Variables**: Facilitan la consistencia del diseño y potenciales cambios.
- **Accesibilidad**: Alto contraste entre texto y fondo, etiquetas adecuadas.
- **Optimización de Rendimiento**: CSS y JS estructurados eficientemente.
- **Mobile-First**: Diseño pensado primero para móviles y luego adaptado a pantallas más grandes.

## Funcionalidad JavaScript

El código JavaScript proporciona:

- Sistema de tabs para navegar por las categorías del menú
- Navegación suave al hacer clic en los enlaces internos
- Validación básica de formularios
- Efecto de cambio en el header al hacer scroll
- Carga aleatoria de testimonios
- Menú hamburguesa para dispositivos móviles
