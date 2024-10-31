import React from 'react';
import { FoodRecommender } from './components/FoodRecommender';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <FoodRecommender />
      </div>
    </div>
  );
}

export default App;