// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 700); // Adjust timing as needed
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
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(erase, 1000); // Pause before erasing
    }
}

function erase() {
    if (currentCharIndex > 0) {
        dynamicTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(type, 500); // Pause before typing the next phrase
    }
}

// Start the typewriter effect with a delay
setTimeout(type, 2000); // Delay before the typing starts (2000 milliseconds = 2 seconds)

