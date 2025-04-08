document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.querySelector('.chat-button');
    const chatContainer = document.querySelector('.chat-container');
    const closeChat = document.querySelector('.close-chat');
    const chatOptions = document.querySelectorAll('.chat-option');
    const chatInput = document.querySelector('.chat-input input');
    const sendButton = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    // Toggle chat container
    chatButton.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });

    // Chat options functionality
    chatOptions.forEach(option => {
        option.addEventListener('click', () => {
            const optionType = option.dataset.option;
            let response = '';
            
            switch(optionType) {
                case 'menu':
                    response = 'Puedes ver nuestro menú completo en la sección de "Menú" de nuestra página web. ¿Te gustaría que te ayude a encontrar algo específico? 🍽️';
                    break;
                case 'reservation':
                    response = 'Para hacer una reservación, puedes usar nuestro formulario en la sección "Reservaciones" o contactarnos directamente por WhatsApp. ¿En qué fecha te gustaría reservar? 📅';
                    break;
                case 'hours':
                    response = 'Nuestro horario de atención es: Lunes a Jueves: 13:00 - 23:00, Viernes a Domingo: 13:00 - 00:00 ⏰';
                    break;
                case 'location':
                    response = 'Nos ubicamos en Av. Principal #123, Col. Centro, Ciudad de México. ¿Te gustaría ver nuestra ubicación en el mapa? 📍';
                    break;
            }

            addMessage(response, 'bot');
        });
    });

    // Send message functionality
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        
        messageDiv.appendChild(messageText);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                addMessage('Gracias por tu mensaje. ¿Te gustaría que te ayude con algo más? 😊', 'bot');
            }, 1000);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
}); 