import { useState } from 'react'; // To this!
import { MessageSquare, X } from 'lucide-react';
// This path looks inside the same folder for ChatWindow.jsx
import ChatWindow from './ChatWindow'; 

/**
 * ChatbotWidget Component
 * Serves as the primary floating entry point button for the AI assistant widget.
 */
const ChatbotWidget = () => {
  // Toggle state to open/close chat window
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FLOATING ACTION TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#C9A84C] text-[#1A2A3A] hover:bg-[#1A2A3A] hover:text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50 transform hover:scale-110 flex items-center justify-center border-2 border-white"
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* RENDER THE ACTIVE WINDOW VIEW */}
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotWidget;