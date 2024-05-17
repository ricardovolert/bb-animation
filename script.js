const fonts = ['font-1', 'font-2', 'font-3', 'font-4', 'font-5', 'font-6', 'font-7'];
const styles = ['normal', 'bold', 'italic'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeStyles() {
    const spans = document.querySelectorAll('#bb-animacao span');
    spans.forEach(span => {
        const randomFont = getRandomElement(fonts);
        const randomStyle = getRandomElement(styles);
        
        span.className = `${randomFont} ${randomStyle}`;
    });
}

// Initial randomization
randomizeStyles();

// Change styles every second
setInterval(randomizeStyles, 1000);
