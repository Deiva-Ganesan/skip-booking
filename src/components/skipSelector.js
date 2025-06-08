
import "../index.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SkipSelector() {
  const [skips, setSkips] = useState([]);
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    axios
      .get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => setSkips(res.data))
      .catch((err) => console.error('Failed to fetch skip data', err));
  }, []);

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

  return (
    <div className="bg-white shadow-xl rounded-2xl max-w-5xl w-full mx-auto p-6 space-y-6">
      {skips.map((skip) => {
        const isSelected = skip.id === selectedSkipId;
        return (
          <div
            key={skip.id}
            onClick={() => setSelectedSkipId(prev => (prev === skip.id ? null : skip.id))}
            className={`flex flex-col md:flex-row items-center gap-6 border rounded-lg p-5 cursor-pointer transition ${
              isSelected
                ? 'border-indigo-600 bg-indigo-50 shadow-lg'
                : 'border-gray-200 hover:shadow-md hover:border-indigo-300'
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-56 flex-shrink-0">
              <img
                src={`/${skip.size}-yarder-skip.jpg`}
                alt="Skip bin"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
              <div className="flex justify-between items-center flex-wrap mb-2">
                <h2 className="text-2xl font-semibold text-indigo-700">
                  {skip.size} Yard Skip
                </h2>
                <span className="text-xl font-bold text-indigo-900">
                  £{skip.price_before_vat}{' '}
                  <span className="text-sm text-gray-500 font-normal">+ VAT</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Hire Period: {skip.hire_period_days} days
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    skip.allowed_on_road
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {skip.allowed_on_road
                    ? '✔️ On-road allowed'
                    : '❌ On-road not allowed'}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    skip.allows_heavy_waste
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-rose-100 text-rose-700'
                  }`}
                >
                  {skip.allows_heavy_waste
                    ? '✔️ Heavy waste allowed'
                    : '❌ No heavy waste'}
                </span>
              </div>
              <button
                className={`w-full md:w-40 text-white font-semibold py-2 rounded-md transition ${
                  isSelected
                    ? 'bg-indigo-800 hover:bg-indigo-900'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isSelected ? 'Selected' : 'Select'}
              </button>
            </div>
          </div>
        );
      })}

      {/* Footer Summary */}
{selectedSkip && (
  <div className="fixed bottom-0 left-0 w-full bg-gray-900 border-t border-gray-700 text-white px-6 py-4 z-50">
    {/* Top Info Line */}
    <p className="text-xs text-gray-400 mb-4">
      Imagery and information shown throughout this website may not reflect the exact shape or size specification.
      Colours may vary. Options and/or accessories may be featured at additional cost.
    </p>

    {/* Bottom Row */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="text-sm sm:text-base">
        <strong>{selectedSkip.size} Yard Skip</strong>{' '}
        <span className="text-blue-400 font-bold">£{selectedSkip.price_before_vat}</span>{' '}
        <span className="text-gray-400">({selectedSkip.hire_period_days} day hire)</span>
      </div>
      <div className="flex gap-3">
        <button
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
          onClick={() => setSelectedSkipId(null)}
        >
          Back
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium"
          onClick={() => setOrderPlaced(true)}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
)}

      {/* Order Placed Dialog */}
      {orderPlaced && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-6 shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-2">Order Placed Successfully</h2>
            <p className="mb-4">Your skip has been booked. We'll be in touch soon.</p>
            <button
              onClick={() => {
                setOrderPlaced(false);
                setSelectedSkipId(null);
              }}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
