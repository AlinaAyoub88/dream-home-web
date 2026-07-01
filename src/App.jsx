
import ChatbotWidget from './components/ai/ChatbotWidget'; 

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F5F0EB', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      {/* Deep Navy text color from your project details */}
      <h1 style={{ color: '#1A2A3A', fontFamily: 'sans-serif', fontSize: '2rem' }}>
        Dream Home Project Live Testing
      </h1>
      <p style={{ color: '#7F8C8D', marginTop: '10px' }}>
        Alina Ayoub's AI Chatbot Module
      </p>
      
      {/* Your Chatbot Floating Button */}
      <ChatbotWidget />
    </div>
  );
}

export default App;