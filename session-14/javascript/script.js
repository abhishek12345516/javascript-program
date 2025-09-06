const menuToggle = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav_wrapper');

menuToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
});


const chatIcon = document.querySelector('.chat-icon');
const chatWidget = document.querySelector('.chat-widget');
const closeChat = document.querySelector('.close-chat');
const sendBtn = document.querySelector('#sendBtn');
const userInput = document.querySelector('#userInput');
const messagesContainer = document.querySelector('.messages');

// Show/Hide Chat
chatIcon.addEventListener('click', () => {
    chatWidget.style.display = 'flex';
    chatIcon.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none';
    chatIcon.style.display = 'block';
});

// Send Message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.classList.add('user-message');
    userMsg.textContent = message;
    messagesContainer.appendChild(userMsg);

    userInput.value = '';

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Bot reply after 1 sec
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.classList.add('bot-message');
        botMsg.textContent = getBotReply(message);
        messagesContainer.appendChild(botMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

// Simple bot replies
function getBotReply(userText) {
    const lower = userText.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) {
        return 'Hello! How can I help you today?';
    } else if (lower.includes('price') || lower.includes('cost')) {
        return 'Our pricing depends on the service you choose.';
    } else if (lower.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else {
        return 'Sorry, I didn’t understand that. Can you rephrase?';
    }
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // chart type: bar, line, pie, doughnut
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 80, 75, 60, 70],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
