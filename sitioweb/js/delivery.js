document.addEventListener('DOMContentLoaded', function() {
    const deliveryForm = document.getElementById('deliveryOrderForm');
    const deliveryTime = document.getElementById('deliveryTime');

    // Update delivery time options based on current time
    function updateDeliveryTimes() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        // Clear existing options except the first one
        while (deliveryTime.options.length > 1) {
            deliveryTime.remove(1);
        }

        // Add "Lo más pronto posible" option
        const asapOption = document.createElement('option');
        asapOption.value = 'asap';
        asapOption.textContent = 'Lo más pronto posible';
        deliveryTime.appendChild(asapOption);

        // Add time slots starting from the next hour
        let startHour = currentHour + 1;
        if (currentMinute > 30) {
            startHour++;
        }

        for (let hour = startHour; hour <= 22; hour++) {
            const option = document.createElement('option');
            option.value = `${hour}:00`;
            option.textContent = `${hour}:00`;
            deliveryTime.appendChild(option);
        }
    }

    // Update delivery times when the page loads
    updateDeliveryTimes();

    // Handle form submission
    deliveryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('deliveryName').value,
            phone: document.getElementById('deliveryPhone').value,
            address: document.getElementById('deliveryAddress').value,
            notes: document.getElementById('deliveryNotes').value,
            deliveryTime: deliveryTime.value
        };

        // Validate phone number
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            alert('Por favor, ingresa un número de teléfono válido de 10 dígitos');
            return;
        }

        // Show success message
        alert('¡Gracias por tu pedido! Nos pondremos en contacto contigo para confirmar los detalles. 🍽️');

        // Reset form
        deliveryForm.reset();
        updateDeliveryTimes();
    });

    // Add input mask for phone number
    const phoneInput = document.getElementById('deliveryPhone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    });
}); 