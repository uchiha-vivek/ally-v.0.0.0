// InputSection.tsx
import React from 'react';
import { Mic, MessageCircleMore } from 'lucide-react';

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  isListening: boolean;
  handleVoiceInput: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({ input, setInput, isListening, handleVoiceInput }) => {
  return (
    <div className="w-full max-w-md md:min-w-[500px] min-h-[200px] bg-surface-a10 shadow-lg rounded-lg flex items-center justify-center mt-6 p-4 sm:p-6">
      <div className="flex items-center w-full px-2 sm:px-4">
        <button className="mr-3 text-white">
          <MessageCircleMore size={20} />
        </button>
        <input
          type="text"
          className="flex-1 border border-surface-a30 rounded-full px-3 py-2 sm:py-3 text-center focus:outline-none focus:ring-2 focus:ring-primary-a30 placeholder-surface-a40 text-primary bg-transparent"
          placeholder="Tap mic to speak"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleVoiceInput}
          className="ml-3 bg-primary-a10 hover:bg-primary-a20 text-white rounded-full p-2 sm:p-3 focus:outline-none"
        >
          <Mic size={20} className={isListening ? 'animate-pulse' : ''} />
        </button>
      </div>
    </div>
  );
};

export default InputSection;
