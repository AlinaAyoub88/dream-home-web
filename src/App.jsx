import ChatbotWidget from './components/ai/ChatbotWidget'; 
import PropertySearch from './components/properties/PropertySearch'; // Import your new search feature!

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F5F0EB', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center',
      paddingTop: '40px'
    }}>
      {/* Deep Navy text headings */}
      <h1 style={{ color: '#1A2A3A', fontFamily: 'sans-serif', fontSize: '2rem', fontWeight: 'bold' }}>
        Dream Home Project Live Testing
      </h1>
      <p style={{ color: '#7F8C8D', marginTop: '10px', marginBottom: '20px' }}>
        Alina Ayoub's Advanced Search & Filter Module
      </p>

      {/* RENDER PROPERTY SEARCH */}
      <PropertySearch />
      
      {/* RENDER CHATBOT WIDGET */}
      <ChatbotWidget />
    </div>
  );
}

export default App;