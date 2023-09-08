const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1.5;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);

}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak('Good Morning Boss...')
    }
    else if (hour >= 12 && hour < 17) {
        speak('Good Afternoon sir...')
    }
    else {
        speak('Good Evening Master...')
    }
}

window.addEventListener('load', () => {
    speak('Initializing...')
    wishMe();
    speak('My name is OMAR I am the first Virtual Arab Assistant in the middle east  , How may i help you?')

})


/// take text automaticaly

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase())

}
btn.addEventListener('click', () => {
    content.textContent = 'Listening...'
    recognition.start();
})

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak('Hello sir ,How May I Help You?');
    }
    else if (message.includes('what is your name') || message.includes('whats your name') || message.includes(' your name')) {
        speak('My Name is Omar');
    }

    else if (message.includes('where are you from') || ('Omar where are you from')) {
        speak('I am from Egypt The most powerful and oldest civilization in the world');
    }
    else if (message.includes('open google') || ('Omar open google') || ('Omar go to google')) {
        window.open("https://www.google.com", '_blank')
    }
    else if (message.includes('open youtube') || (' go to youtube')) {
        window.open("https://www.youtube.com", '_blank')
    }
    else if (message.includes('open facebook') || ('Omar open facebook') || ('Omar go to facebook')) {
        window.open("https://www.facebook.com", '_blank')
    }
    else if (message.includes('open linkedin') || ('Omar open linkedin') || ('Omar go to linkedin')) {
        window.open("https://www.linkedin.com", '_blank')
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('why is') || message.includes('i want') || message.includes('where is')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = "this is what i found on the internet regarding " + message;
        speak(finalText)
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, '_blank')
        const finalText = "this is what i found on the wikipedia regarding " + message;
        speak(finalText)
    }

    else if (message.includes('time')) {
        const time = new Data().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText)
    }
    else if (message.includes('date')) {
        const date = new Data().toLocaleString(undefined, { mounth: "short", day: "numeric" })
        const finalText = date;
        speak(finalText)
    }
    else if (message.includes('calculator')) {
        window.open("Calculator:///", '_blank')
        const finalText = "Opning Calculator";
        speak(finalText)
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
        const finalText = " i found some information for " + message + "on google";
        speak(finalText)
    }
}