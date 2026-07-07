import { useState } from 'react';
import { Sparkles, CheckCircle, Percent, Home, MapPin } from 'lucide-react';

/**
 * AIPropertyMatch Component
 * Calculates and displays AI-driven property matching scores based on user preferences.
 * Adheres strictly to Deep Navy #1A2A3A and Royal Gold #C9A84C theme palettes.
 */
const AIPropertyMatch = () => {
  // State for tracking AI processing animation trigger
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(true);

  // Mock array containing calculated AI matching scores for premium listings
  const [matchedListings] = useState([
    {
      id: 'match-01',
      title: 'Luxury Villa - 77m²',
      location: 'Lahore, Pakistan',
      matchScore: 96,
      reason: 'Matches 100% of your budget scope and preferred room layout configurations.',
      type: 'villa'
    },
    {
      id: 'match-02',
      title: 'Smart Home - 60m²',
      location: 'Dubai, UAE',
      matchScore: 88,
      reason: 'Excellent geographic fit, but pricing sits at the top margin of your budget.',
      type: 'smart-home'
    }
  ]);

  const triggerAiAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-8 animate-fade-in">
      {/* CARD MAIN CONTAINER */}
      <div className="bg-white rounded-2xl shadow-xl border border-[#F5F0EB] p-6 overflow-hidden">
        
        {/* ACTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-[#1A2A3A] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C9A84C]" />
              Smart AI Property Matcher
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Engineered matching matrices checking your real-time criteria setup.
            </p>
          </div>
          <button
            onClick={triggerAiAnalysis}
            disabled={isAnalyzing}
            className="w-full sm:w-auto bg-[#1A2A3A] text-white hover:bg-[#C9A84C] hover:text-[#1A2A3A] text-xs font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
          >
            {isAnalyzing ? 'Processing Engine...' : 'Re-Calculate Matches'}
          </button>
        </div>

        {/* CONDITIONAL RENDER VIEWS */}
        {showResults && !isAnalyzing && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {matchedListings.map((item) => (
              /* INDIVIDUAL MATCH CARD */
              <div 
                key={item.id} 
                className="relative bg-[#F5F0EB]/40 rounded-xl p-5 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                {/* Score Floating Badge (Royal Gold theme) */}
                <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#1A2A3A] px-2.5 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1">
                  <Percent className="w-3 h-3" />
                  <span>{item.matchScore} Match</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#1A2A3A] text-white px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  
                  <h4 className="font-bold text-[#1A2A3A] text-base mt-2 flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate pr-16">{item.title}</span>
                  </h4>

                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {item.location}
                  </p>

                  {/* AI Reasoning Feedback */}
                  <div className="mt-4 bg-white/80 rounded-lg p-3 border border-gray-200/50 text-xs text-gray-700 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPropertyMatch;