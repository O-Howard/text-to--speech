import { useState, useEffect } from 'react';
import './VoiceSelector.css'

function VoiceSelector({ voiceName, setVoiceName, language, setLanguage }) {
    const [voices, setVoices] = useState([]);
    useEffect(() => {
        function updateVoices() {
            const allVoices = window.speechSynthesis.getVoices();
            console.log('All voices:', allVoices);
            const allowedLangs = ['en', 'he', 'fr', 'es'];
            const filtered = allVoices.filter(voice =>
            allowedLangs.some(lang => voice.lang.startsWith(lang))
            );
            console.log('Filtered voices:', filtered);

            setVoices(filtered);
            if (filtered.length > 0 && !language) {
            const defaultLang = filtered.find(v => v.lang.startsWith('en'));
            if (defaultLang) {
                setLanguage(defaultLang.lang);
                setVoiceName(defaultLang.name);
            }
            }
        }


    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
    } else {
        updateVoices();
    }

    return () => {
        window.speechSynthesis.onvoiceschanged = null;
    };
    }, [language, setLanguage, setVoiceName]);


    const availableLanguages = Array.from(
        new Set(voices.map(voice => voice.lang))
    );

    const filteredVoices = voices.filter(
        (voice) => voice.lang === language
    );

    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);

        const firstVoice = voices.find((v) => v.lang === selectedLang);
        setVoiceName(firstVoice ? firstVoice.name : '');
    };

    const handleVoiceChange = (e) => {
        setVoiceName(e.target.value);
    };

  return (
    <div>
        <div className='voice'>
            <p>Voice</p>
            <div className='separator'></div>
            <select value={language} onChange={handleLanguageChange}>
            {availableLanguages.map((lang, i) => (
                <option key={i} value={lang}>
                {lang}
                </option>
            ))}
            </select>
            <div className='separator'></div>
            <select
            value={voiceName}
            onChange={handleVoiceChange}
            disabled={!filteredVoices.length}
            >
            {filteredVoices.map((voice, i) => (
                <option key={i} value={voice.name}>
                {voice.name.includes(' - ') ? voice.name.split(' - ')[0] : voice.name}
                </option>
            ))}
            </select>
        </div>
        <div>

        </div>

    </div>
  );
}

export default VoiceSelector;
