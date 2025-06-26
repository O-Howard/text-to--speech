import './PlayButton.css'

function PlayButton({ text, voiceName, speed }) {

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();

        if (!text) {
        alert('Please enter text and select a voice.');
        return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        const selectedVoice = voices.find((voice) => voice.name === voiceName);

        if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.rate = speed || 1;
        synth.speak(utterance);
        } else {
        alert('Selected voice not available.');
        }
    };

    return (
        <button onClick={handlePlay} className="play-btn">
        Text to Speech
        </button>
    );
}

export default PlayButton;