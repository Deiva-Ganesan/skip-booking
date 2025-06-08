import "../index.css";

import SkipSelector from '../components/skipSelector';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-800">We Want Waste</h1>
        <p className="text-gray-600 mt-2">Choose your skip size and book today</p>
      </div>
      <SkipSelector />
    </main>
  );
}