document.getElementById('love-meter-btn').addEventListener('click', function() {
    document.getElementById('love-meter-result').innerText = "❤️ Infinite Love for You, My Sweetest Babe ❤️";
});

document.getElementById('secret-message-btn').addEventListener('click', function() {
    document.getElementById('secret-message').classList.remove('hidden');
});

// Rose petal animation
const roseContainer = document.createElement('div');
roseContainer.classList.add('rose-animation');
document.body.appendChild(roseContainer);

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
    roseContainer.appendChild(petal);
    setTimeout(() => {
        petal.remove();
    }, 5000);
}

setInterval(createPetal, 300);

// Animated rose element
const animatedRose = document.createElement('img');
animatedRose.src = 'animated-rose.gif'; // Ensure you have an animated rose gif or CSS animation
animatedRose.alt = 'Romantic Animated Rose';
animatedRose.classList.add('animated-rose');
document.querySelector('.container').appendChild(animatedRose);

// Wave animation effect
document.body.insertAdjacentHTML('beforeend', `<div class="wave"></div>`);

// Responsive styles for mobile
document.addEventListener("DOMContentLoaded", function () {
    function adjustLayout() {
        if (window.innerWidth < 600) {
            animatedRose.style.width = '80px';
        } else {
            animatedRose.style.width = '120px';
        }
    }
    
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});

