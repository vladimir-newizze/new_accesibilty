window.addEventListener('load', function () {
        let labels = {
            menuTitle: 'title (in my language)',
            increaseText: 'increase text size (in my language)',
            decreaseText: 'decrease text size (in my language)',
            increaseTextSpacing: 'increase text spacing (in my language)',
            decreaseTextSpacing: 'decrease text spacing (in my language)',
            invertColors: 'invert colors (in my language)',
            grayHues: 'gray hues (in my language)',
            underlineLinks: 'underline links (in my language)',
            bigCursor: 'big cursor (in my language)',
            readingGuide: 'reading guide (in my language)',
            textToSpeech: 'text to speech (in my language)',
            speechToText: 'speech to text (in my language)'
        };
        let options = {
            labels: labels,
            hotkeys: {
                enabled: true
            }
        };
        options.textToSpeechLang = 'en-US';
        options.speechToTextLang = 'en-US';

        new Accessibility({textPixelMode: true});
    },
    false
);