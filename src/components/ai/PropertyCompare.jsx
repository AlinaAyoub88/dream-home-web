import { useState } from 'react';
import { X, Check, Shield, Maximize, Bed, Bath, DollarSign } from 'lucide-react';

/**
 * PropertyCompare Component
 * Provides a responsive side-by-side comparison matrix for premium listings.
 * Strictly follows the Dream Home design standards (Deep Navy #1A2A3A & Royal Gold #C9A84C).
 */
const PropertyCompare = () => {
  // Safe mock data array matching the database schemas and required criteria
  const [comparedProperties, setComparedProperties] = useState([
    {
      id: 'prop-lux-01', // Strict unique string keys for React rendering safety
      propertyId: 'P001',
      title: 'Luxury Villa - 77m²',
      price: 150000,
      size: 77,
      bedrooms: 3,
      bathrooms: 2,
      location: 'Lahore, Pakistan',
      type: 'villa',
      features: ['Pool', 'Garden', 'Parking'],
      insurance: 'Guaranteed'
    },
    {
      id: 'prop-smart-02', // Strict unique string keys for React rendering safety
      propertyId: 'P002',
      title: 'Smart Home - 60m²',
      price: 132000,
      size: 60,
      bedrooms: 2,
      bathrooms: 2,
      location: 'Dubai, UAE',
      type: 'smart-home',
      features: ['Smart Automation', 'Parking', 'Security System'],
      insurance: 'Premium Covered'
    }
  ]);

  /**
   * Helper to remove a property card from the active comparison state array
   */
  const handleRemoveProperty = (id) => {
    setComparedProperties(prev => prev.filter(item => item.propertyId !== id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-12 animate-fade-in">
      {/* SECTION HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2A3A] tracking-tight">
          Compare Dream Properties
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Analyze technical specifications side-by-side to choose your ideal home.
        </p>
      </div>

      {/* CONDITIONAL CONTENT VIEW CONTROL */}
      {comparedProperties.length === 0 ? (
        <div className="text-center p-12 bg-white rounded-2xl shadow-md border border-gray-100">
          <p className="text-sm text-gray-500">No properties selected for comparison.</p>
        </div>
      ) : (
        /* RESPONSIVE SCROLLABLE COMPARISON TABLE CARD */
        <div className="bg-white rounded-2xl shadow-xl border border-[#F5F0EB] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              
              {/* TABLE HEADER */}
              <thead>
                <tr className="bg-[#1A2A3A] text-white">
                  <th className="p-4 text-sm font-semibold w-1/4 border-b border-[#C9A84C]">Specifications</th>
                  {comparedProperties.map((item) => (
                    <th key={item.id} className="p-4 text-sm font-semibold w-1/3 border-b border-[#C9A84C] relative">
                      <div className="pr-6">
                        <div className="text-xs text-[#C9A84C] font-mono uppercase tracking-wider mb-1">{item.type}</div>
                        <div className="font-bold truncate text-white">{item.title}</div>
                      </div>
                      <button 
                        onClick={() => handleRemoveProperty(item.propertyId)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                
                {/* 1. Price Comparison Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A] flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#C9A84C]" /> Price Valuation
                  </td>
                  {comparedProperties.map((item) => (
                    <td key={`price-${item.id}`} className="p-4 font-bold text-[#1A2A3A] text-base">
                      ${item.price.toLocaleString()}
                    </td>
                  ))}
                </tr>

                {/* 2. Area Dimension Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A] flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-[#C9A84C]" /> Covered Area
                  </td>
                  {comparedProperties.map((item) => (
                    <td key={`size-${item.id}`} className="p-4">
                      {item.size} m²
                    </td>
                  ))}
                </tr>

                {/* 3. Bedroom Configuration Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A] flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#C9A84C]" /> Bedrooms
                  </td>
                  {comparedProperties.map((item) => (
                    <td key={`beds-${item.id}`} className="p-4 font-medium">
                      {item.bedrooms} Bed Spaces
                    </td>
                  ))}
                </tr>

                {/* 4. Washroom Layout Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A] flex items-center gap-2">
                    <Bath className="w-4 h-4 text-[#C9A84C]" /> Bathrooms
                  </td>
                  {comparedProperties.map((item) => (
                    <td key={`baths-${item.id}`} className="p-4">
                      {item.bathrooms} Luxury Baths
                    </td>
                  ))}
                </tr>

                {/* 5. Geographic Location Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A]">Geographic Area</td>
                  {comparedProperties.map((item) => (
                    <td key={`loc-${item.id}`} className="p-4 text-xs text-gray-600">
                      {item.location}
                    </td>
                  ))}
                </tr>

                {/* 6. Integrated Special Features Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A]">Premium Features</td>
                  {comparedProperties.map((item) => (
                    <td key={`feat-${item.id}`} className="p-4">
                      <div className="flex flex-wrap gap-1.5">
                        {item.features.map((feat, idx) => (
                          <span key={`${item.id}-feat-${idx}`} className="bg-[#F5F0EB] text-[#1A2A3A] text-xs px-2.5 py-1 rounded-md font-medium border border-gray-200/60">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 7. Insurance Protection Support Row */}
                <tr className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-4 font-semibold text-[#1A2A3A] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#C9A84C]" /> Property Insurance
                  </td>
                  {comparedProperties.map((item) => (
                    <td key={`ins-${item.id}`} className="p-4 text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> {item.insurance}
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCompare;