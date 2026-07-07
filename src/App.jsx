import ChatbotWidget from './components/ai/ChatbotWidget'; 
import PropertySearch from './components/properties/PropertySearch';
import PropertyCompare from './components/ai/PropertyCompare';
import AIPropertyMatch from './components/ai/AIPropertyMatch'; // Added your missing component!

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F5F0EB', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      padding: '20px 10px'
    }}>
      
      {/* 1. Advanced Property Search Filter Panel Component */}
      <PropertySearch />

      {/* 2. Intelligent AI Property Match Analytics Panel */}
      <AIPropertyMatch />

      {/* 3. Side-by-Side Properties Specs Comparison Component */}
      <PropertyCompare />
      
      {/* 4. AI Floating Chat Bot Overlay Component */}
      <ChatbotWidget />
    </div>
  );
}

export default App;