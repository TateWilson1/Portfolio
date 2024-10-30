// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 700); 
    });
});

const phrases = ["College Student", "Cybersecurity Enthusiast", "Technologically Advanced"];
const dynamicTextElement = document.getElementById('dynamic-text');
let currentPhraseIndex = 0;
let currentCharIndex = 0;

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        dynamicTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100); 
    } else {
        setTimeout(erase, 1000); 
    }
}

function erase() {
    if (currentCharIndex > 0) {
        dynamicTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50); 
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; 
        setTimeout(type, 500); 
    }
}


setTimeout(type, 2000); 

