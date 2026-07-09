import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, DollarSign, Home } from 'lucide-react';


const PropertySearch = () => {
  // State for search query and expanding the advanced panel
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // States for advanced filter selections matching database schemas
  const [filters, setFilters] = useState({
    city: '',
    type: '',
    priceRange: '',
    bedrooms: ''
  });

  // Handle inputs for basic and advanced selection state updates
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Form submission handler for query processing
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Executing search with data:', { searchQuery, ...filters });

  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 my-8">
      {/* SEARCH CONTAINER BAR */}
      <form 
        onSubmit={handleSearchSubmit}
        className="bg-white rounded-2xl shadow-xl p-4 border border-[#F5F0EB] transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row gap-3 items-center">
          
          {/* Main Keyword Search Input Box */}
          <div className="relative w-full flex-1">
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by area, society, or specific keywords..."
              className="w-full bg-gray-50 text-sm text-gray-800 pl-12 pr-4 py-3.5 rounded-xl border border-gray-100 focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
          </div>

          {/* Action Interface Buttons */}
          <div className="flex gap-2 w-full md:w-auto justify-end">
            {/* Toggle Button for Advanced Filters Panel */}
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                showAdvanced 
                  ? 'bg-[#1A2A3A] text-white border-[#1A2A3A]' 
                  : 'bg-white text-[#1A2A3A] border-gray-200 hover:bg-gray-50'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            {/* Primary Submit Action */}
            <button
              type="submit"
              className="bg-[#C9A84C] text-[#1A2A3A] hover:bg-[#1A2A3A] hover:text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Search Now
            </button>
          </div>
        </div>

        {/* EXPANDABLE ADVANCED FILTERS PANEL */}
        {showAdvanced && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-100 animate-fade-in">
            
            {/* 1. City / Target Location Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#1A2A3A] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                Location / Region
              </label>
              <select
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                className="w-full bg-gray-50 text-xs text-gray-700 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C]"
              >
                <option value="">All Locations</option>
                <option value="lahore">Lahore, PK</option>
                <option value="karachi">Karachi, PK</option>
                <option value="dubai">Dubai, UAE</option>
                <option value="london">London, UK</option>
              </select>
            </div>

            {/* 2. Property Categories Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#1A2A3A] flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#C9A84C]" />
                Property Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full bg-gray-50 text-xs text-gray-700 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C]"
              >
                <option value="">All Types</option>
                <option value="villa">Luxury Villa</option>
                <option value="house">Modern House</option>
                <option value="apartment">Apartment</option>
                <option value="smart-home">Smart Home</option>
              </select>
            </div>

            {/* 3. Budget & Pricing Brackets */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#1A2A3A] flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#C9A84C]" />
                Budget Scope
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full bg-gray-50 text-xs text-gray-700 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C]"
              >
                <option value="">Any Budget</option>
                <option value="0-50k">Under $50,000</option>
                <option value="50k-150k">$50,000 - $150,000</option>
                <option value="150k-300k">$150,000 - $300,000</option>
                <option value="300k+">$300,000+</option>
              </select>
            </div>

            {/* 4. Room Configuration / Sizing Layout */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#1A2A3A] flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#C9A84C]" />
                Bedrooms Count
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="w-full bg-gray-50 text-xs text-gray-700 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A84C]"
              >
                <option value="">Any Count</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
              </select>
            </div>

          </div>
        )}
      </form>
    </div>
  );
};

export default PropertySearch;