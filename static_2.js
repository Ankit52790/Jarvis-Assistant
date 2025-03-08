// DOM Elements
const timeBtn = document.getElementById('timeBtn');
const dateBtn = document.getElementById('dateBtn');
const jokeBtn = document.getElementById('jokeBtn');
const emailBtn = document.getElementById('emailBtn');
const screenshotBtn = document.getElementById('screenshotBtn');
const cpuBtn = document.getElementById('cpuBtn');
const outputText = document.getElementById('outputText');

// Base URL for the Flask backend
const baseUrl = 'http://127.0.0.1:5000';

// Event Listeners
timeBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/time`)
        .then(response => response.json())
        .then(data => {
            outputText.textContent = `Current Time: ${data.time}`;
        })
        .catch(error => {
            outputText.textContent = 'Failed to fetch time.';
            console.error(error);
        });
});

dateBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/date`)
        .then(response => response.json())
        .then(data => {
            outputText.textContent = `Current Date: ${data.date}`;
        })
        .catch(error => {
            outputText.textContent = 'Failed to fetch date.';
            console.error(error);
        });
});

jokeBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/jokes`)
        .then(response => response.json())
        .then(data => {
            outputText.textContent = `Joke: ${data.joke}`;
        })
        .catch(error => {
            outputText.textContent = 'Failed to fetch joke.';
            console.error(error);
        });
});

emailBtn.addEventListener('click', () => {
    const to = prompt('Enter recipient email:');
    const content = prompt('Enter email content:');
    if (to && content) {
        fetch(`${baseUrl}/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to, content }),
        })
            .then(response => response.json())
            .then(data => {
                outputText.textContent = data.status;
            })
            .catch(error => {
                outputText.textContent = 'Failed to send email.';
                console.error(error);
            });
    } else {
        outputText.textContent = 'Email and content are required.';
    }
});

screenshotBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/screenshot`)
        .then(response => response.json())
        .then(data => {
            outputText.textContent = data.status;
        })
        .catch(error => {
            outputText.textContent = 'Failed to take screenshot.';
            console.error(error);
        });
});

cpuBtn.addEventListener('click', () => {
    fetch(`${baseUrl}/cpu`)
        .then(response => response.json())
        .then(data => {
            outputText.textContent = `CPU Usage: ${data.cpu_usage}%, Battery: ${data.battery || 'N/A'}%`;
        })
        .catch(error => {
            outputText.textContent = 'Failed to fetch CPU and battery info.';
            console.error(error);
        });
});
