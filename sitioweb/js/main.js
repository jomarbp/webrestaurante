        // Toggle Mobile Menu
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });
        
// Menu Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Aquí se añadiría la lógica para cambiar el contenido de los menús
        // Por ejemplo, podrías tener diferentes arrays de platillos y actualizarlos según la categoría
        const category = btn.textContent.trim();
        updateMenuItems(category);
    });
});

// Función para actualizar los ítems del menú según la categoría seleccionada
function updateMenuItems(category) {
    // Datos de ejemplo para cada categoría
    const menuData = {
        'Entradas': [
            {
                img: 'img/menu/appetizer-1.jpg',
                title: 'Carpaccio de res',
                price: '$18.50',
                desc: 'Finas láminas de res, rúcula fresca, queso parmesano y aderezo de limón con aceite de oliva extra virgen.'
            },
            {
                img: 'img/menu/appetizer-2.jpg',
                title: 'Tabla de quesos',
                price: '$24.00',
                desc: 'Selección de quesos artesanales acompañados de frutos secos, mermeladas caseras y pan recién horneado.'
            },
            {
                img: 'img/menu/appetizer-3.jpg',
                title: 'Camarones al ajillo',
                price: '$22.00',
                desc: 'Camarones frescos salteados en aceite de oliva con ajo, chile guajillo y un toque de vino blanco.'
            },
            {
                img: 'img/menu/appetizer-4.jpg',
                title: 'Ensalada mediterránea',
                price: '$16.50',
                desc: 'Mix de lechugas, tomate cherry, pepino, aceitunas kalamata, queso feta y aderezo balsámico.'
            }
        ],
        'Platos Principales': [
            {
                img: 'img/menu/main-1.jpg',
                title: 'Risotto de hongos',
                price: '$26.00',
                desc: 'Arroz arborio cocinado lentamente con hongos silvestres, vino blanco y queso parmesano.'
            },
            {
                img: 'img/menu/main-2.jpg',
                title: 'Salmón a la parrilla',
                price: '$32.50',
                desc: 'Filete de salmón a la parrilla con salsa de eneldo, servido con espárragos y puré de papa.'
            },
            {
                img: 'img/menu/main-3.jpg',
                title: 'Filete mignon',
                price: '$38.00',
                desc: 'Corte premium de res cocinado a tu gusto, con salsa de vino tinto y guarnición de vegetales asados.'
            },
            {
                img: 'img/menu/main-4.jpg',
                title: 'Pasta al pesto',
                price: '$22.00',
                desc: 'Fetuccine fresco con salsa pesto de albahaca, nueces, queso parmesano y un toque de limón.'
            }
        ],
        'Postres': [
            {
                img: 'img/menu/dessert-1.jpg',
                title: 'Tiramisú',
                price: '$12.00',
                desc: 'Clásico postre italiano con capas de bizcocho empapado en café, crema de mascarpone y cacao.'
            },
            {
                img: 'img/menu/dessert-2.jpg',
                title: 'Crème brûlée',
                price: '$14.00',
                desc: 'Suave crema de vainilla con una capa crujiente de azúcar caramelizado.'
            },
            {
                img: 'img/menu/dessert-3.jpg',
                title: 'Tarta de chocolate',
                price: '$13.50',
                desc: 'Tarta de chocolate semi-amargo con ganache y frutos rojos.'
            },
            {
                img: 'img/menu/dessert-4.jpg',
                title: 'Helado artesanal',
                price: '$9.00',
                desc: 'Selección de helados artesanales elaborados con ingredientes naturales.'
            }
        ],
        'Bebidas': [
            {
                img: 'img/menu/drink-1.jpg',
                title: 'Sangría azul',
                price: '$16.00',
                desc: 'Nuestra sangría especial con vino tinto, frutas frescas y un toque de licor azul.'
            },
            {
                img: 'img/menu/drink-2.jpg',
                title: 'Margarita clásica',
                price: '$14.00',
                desc: 'Tequila, licor de naranja y limón fresco con borde escarchado.'
            },
            {
                img: 'img/menu/drink-3.jpg',
                title: 'Selección de vinos',
                price: 'Desde $12.00',
                desc: 'Amplia carta de vinos nacionales e importados por copa o botella.'
            },
            {
                img: 'img/menu/drink-4.jpg',
                title: 'Café especial',
                price: '$8.50',
                desc: 'Café de especialidad con opciones de preparación: prensa francesa, chemex o espresso.'
            }
        ]
    };

    // Obtener los platillos de la categoría seleccionada
    const items = menuData[category] || menuData['Entradas'];
    
    // Obtener el contenedor de los platillos
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor actual
    menuContainer.innerHTML = '';
    
    // Crear y añadir los nuevos platillos
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="item-info">
                <div class="item-header">
                    <h3 class="item-title">${item.title}</h3>
                    <span class="item-price">${item.price}</span>
                </div>
                <p class="item-desc">${item.desc}</p>
                <a href="#" class="order-btn">Ordenar ahora</a>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Navegación suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Ajustar por la altura del header fijo
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Si está en móvil, cerrar el menú desplegable
            if (document.querySelector('.nav-menu').classList.contains('active')) {
                document.querySelector('.nav-menu').classList.remove('active');
            }
        }
    });
});

// Añadir efecto de scroll para cambiar el estilo del header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(10, 57, 230, 0.95)';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.backgroundColor = 'var(--primary)';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Validación simple del formulario de reservaciones
document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí se podría añadir la validación del formulario
    // y la lógica para enviar los datos
    
    alert('¡Gracias! Tu reservación ha sido recibida. Te contactaremos pronto para confirmarla.');
    this.reset();
});

// Cargar un testimonio aleatorio al inicio
const testimonials = [
    {
        img: 'img/testimonials/client-1.jpg',
        comment: '"Una experiencia culinaria extraordinaria. Los sabores son únicos y el servicio impecable. Volveré una y otra vez."',
        name: 'María Rodríguez',
        role: 'Crítica gastronómica'
    },
    {
        img: 'img/testimonials/client-2.jpg',
        comment: '"El ambiente es tan acogedor como deliciosa es la comida. El risotto de hongos es simplemente espectacular."',
        name: 'Carlos Méndez',
        role: 'Chef profesional'
    },
    {
        img: 'img/testimonials/client-3.jpg',
        comment: '"Celebramos nuestro aniversario aquí y fue perfecto. La atención personalizada y los detalles hicieron la diferencia."',
        name: 'Laura y Juan',
        role: 'Clientes frecuentes'
    }
];

function loadRandomTestimonial() {
    const random = Math.floor(Math.random() * testimonials.length);
    const testimonial = testimonials[random];
    
    document.querySelector('.testimonial-item').innerHTML = `
        <div class="client-img">
            <img src="${testimonial.img}" alt="Cliente">
        </div>
        <p class="client-comment">${testimonial.comment}</p>
        <h4 class="client-name">${testimonial.name}</h4>
        <span class="client-role">${testimonial.role}</span>
    `;
}

// Inicializar la página
window.addEventListener('DOMContentLoaded', function() {
    // Cargar el menú inicial (Entradas por defecto)
    updateMenuItems('Entradas');
    
    // Cargar un testimonio aleatorio
    loadRandomTestimonial();
});