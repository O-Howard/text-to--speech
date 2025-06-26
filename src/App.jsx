import { useState } from 'react'
import './App.css'
import robot from './assets/hero-image-text-to-speech.jpg'
import logo from './assets/audio-waves.png'
import VoiceSelector from './components/VoiceSelector.jsx'
import SpeedSelector from './components/SpeedSelector.jsx'
import PlayButton from './components/PlayButton.jsx';

function App() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
  const [language, setLanguage] = useState('');
  const [voiceName, setVoiceName] = useState('');
      
  const handleChange = (e)=>{
    setText(e.target.value);
  }
  
  return (
    <>
      <div className='container'>
        <div className='left'>
          <img src={robot} alt="robot" />
        </div>
        <div className='right'>
          <div className='title'>
            <p>Speechbot</p>
            <img src={logo} alt="sound logo" />
          </div> 
          <div className='text-input'>
            <textarea value={text} onChange={handleChange} placeholder="Enter your text"></textarea>
            <p>Enter your text above and hit 'play.' You can choose a different voice by selecting an option from the dropdown menu.</p>
          </div>
          <div className='settings'>
            <p>Settings</p>
          </div>
          <div>
            <VoiceSelector 
              voiceName={voiceName}
              setVoiceName={setVoiceName}
              language={language}
              setLanguage={setLanguage}
            />
            <SpeedSelector 
              speed={speed} setSpeed={setSpeed}
            />
            <PlayButton text={text} voiceName={voiceName} speed={speed}/>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default App
