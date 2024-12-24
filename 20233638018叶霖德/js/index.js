document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var images = [
            "images/001.jpg",
            "images/002.jpg",
            "images/003.jpg",
            "images/004.jpg"
        ]; 
        var i = 0; 
        var obj = document.getElementById("LB"); 

        function lunbo() {
            if (!obj) {
                console.error("Element with ID 'LB' not found.");
                return;
            }

            obj.src = images[i]; 
            i = (i + 1) % images.length; 
        }

        setInterval(lunbo, 2000); 
    })();
});


function updateCurrentTime() {
    const now = new Date();
    const formattedTime = now.toLocaleString(); 
    const timeElement = document.getElementById('currentTime');
    timeElement.textContent = `当前时间：${formattedTime}`; 
}

setInterval(updateCurrentTime, 1000);

updateCurrentTime();

const quotes = [
    "旅行的意义在于发现未知的美好。",
    "不要等到老了才去看世界。",
    "人生就像旅行，不在乎目的地，而在乎沿途的风景。",
    "旅行让人心胸开阔，视野更加广阔。",
    "一个真正的旅行者从不停止探索。",
    "世界那么大，我想去看看。",
    "人生最好的教育来源于旅程。",
    "旅行让你了解真正的自己。",
    "你从未真正了解一个地方，直到你用脚步丈量它。",
    "记住，旅程的终点并不重要，重要的是过程。"
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('randomQuote');
    if (quoteElement) {
        quoteElement.textContent = quotes[randomIndex];
    }
}

displayRandomQuote();


window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});

const typingText = "欢迎来到我的网站，旅游摄影小空间！探索世界，感受自由的气息。";
let typingIndex = 0;

function typeWriter() {
    const typingElement = document.getElementById("typingEffect");
    if (typingIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(typingIndex); 
        typingIndex++;
        setTimeout(typeWriter, 100); 
    }
}


window.onload = typeWriter;


window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100; 

    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%'; 
});




const counters = [
    { element: document.getElementById('counterVisitors'), target: 666666 },
    { element: document.getElementById('counterUsers'), target: 6666 },
];

counters.forEach(({ element, target }) => {
    let current = 0;
    const increment = target / (2000 / 16); 

    function updateCounter() {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
        } else {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        }
    }

    setTimeout(updateCounter, 5000); 
});
const searchSuggestions = [
    "九寨沟",
    "北京",
    "杭州",
    "佛山",
    "苏州",
    "武汉",
    "成都"
];
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase(); 
    suggestionsBox.innerHTML = ''; 

    if (query) {
        const filteredSuggestions = searchSuggestions.filter((item) =>
            item.toLowerCase().includes(query) 
        );

        if (filteredSuggestions.length > 0) {
            suggestionsBox.style.display = 'block'; 
            filteredSuggestions.forEach((suggestion) => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = suggestion;
                suggestionDiv.addEventListener('click', () => {
                    searchInput.value = suggestion; 
                    suggestionsBox.style.display = 'none'; 
                });
                suggestionsBox.appendChild(suggestionDiv);
            });
        } else {
            suggestionsBox.style.display = 'none'; 
        }
    } else {
        suggestionsBox.style.display = 'none'; 
    }
});

document.addEventListener('click', (e) => {
    if (!suggestionsBox.contains(e.target) && e.target !== searchInput) {
        suggestionsBox.style.display = 'none';
    }
});
