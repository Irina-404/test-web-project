const button = document.getElementById('myButton');
const message = document.getElementById('message');

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    message.textContent = `Button clicked ${clickCount} time(s)!`;
    console.log(`Button was clicked! Total clicks: ${clickCount}`);
});

console.log('App initialized successfully');
