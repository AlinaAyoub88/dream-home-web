import { useState, useRef, useEffect } from 'react';
import { Send, X, Bot } from 'lucide-react';

/**
 * ChatWindow Component
 * Renders the interactive AI chat box matching the Dream Home design system.
 * * @param {Function} onClose - Function to close the chat window
 */
const ChatWindow = ({ onClose }) => {
  // State to manage user input message
  const [inputMessage, setInputMessage] = useState('');
  
  // State to store conversation log with a friendly initial message
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! Welcome to Dream Home AI Assistant. How can I help you find your dream property today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  // State to show loading/thinking animation when AI is processing (< 4s target)
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref to automatically scroll chat to the latest message
  const messagesEndRef = useRef(null);

  // Auto-scroll effect whenever message history changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /**
   * Handles sending message to the chat layout
   */
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // 1. Capture user message object
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // 2. Clear input fields and update UI state
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    // 3. Mocking API Response framework matching backend schema
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        text: `Thank you for asking about "${currentInput}". Our AI systems are currently mapping premium property choices for you.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500); // Responds cleanly well within the 4-second requirement
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-[#F5F0EB] overflow-hidden animate-fade-in">
      
      {}
      <div className="bg-[#1A2A3A] text-white p-4 flex justify-between items-center border-b border-[#C9A84C]">
        <div className="flex items-center gap-3">
          <div className="bg-[#C9A84C] p-2 rounded-full text-[#1A2A3A]">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-sm tracking-wide">Dream Home AI</h3>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Online Assistant
            </p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X size={20} />
        </button>
      </div>

      {/* CHAT MESSAGES CONTAINER */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#F5F0EB] space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-[#C9A84C] text-[#1A2A3A] rounded-tr-none' // User theme
                  : 'bg-[#1A2A3A] text-white rounded-tl-none'     // Agency theme
              }`}
            >
              <p>{msg.text}</p>
            </div>
            <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.time}</span>
          </div>
        ))}
        
        {/* LOADING STATE INDICATOR (< 4 seconds requirement UI) */}
        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="bg-[#1A2A3A] text-white p-2 rounded-full rounded-tl-none">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* FOOTER INPUT SYSTEM */}
      <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200 flex gap-2 items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about price, location, size..."
          className="flex-1 bg-gray-50 text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#C9A84C] text-gray-800"
        />
        <button
          type="submit"
          className="bg-[#C9A84C] text-[#1A2A3A] hover:bg-[#1A2A3A] hover:text-white transition-all duration-300 p-2.5 rounded-xl flex items-center justify-center shadow-md"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;