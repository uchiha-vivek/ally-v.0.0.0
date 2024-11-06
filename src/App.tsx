
import React, { useState } from 'react';
import './dark-theme.css'; 
import Hero from './components/Hero'; 
import InputSection from './components/Input';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.start();
    } else {
      alert("Sorry, your browser doesn't support voice recognition.");
    }
  };

  return (
    <div className="flex flex-col  bg-surface text-primary">
      
       
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 bg-surface-a0">
       
        <Hero />
        <InputSection
          input={input}
          setInput={setInput}
          isListening={isListening}
          handleVoiceInput={handleVoiceInput}
        />
        
         
      </div>
    </div>
  );
};

export default App;
