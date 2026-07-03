import ChatbotWidget from './components/ai/ChatbotWidget'; 
import PropertySearch from './components/properties/PropertySearch';
import PropertyCompare from './components/ai/PropertyCompare'; // Import remaining final task!

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F5F0EB', // Clean canvas background
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      padding: '20px 10px'
    }}>
      
      {/* 1. Advanced Property Search Filter Panel Component */}
      <PropertySearch />

      {/* 2. Side-by-Side Properties Specs Comparison Component */}
      <PropertyCompare />
      
      {/* 3. AI Floating Chat Bot Overlay Component */}
      <ChatbotWidget />
    </div>
  );
}

export default App;