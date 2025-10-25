import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">🇰🇪 TaxEase Kenya</h1>
        <p className="text-gray-600">Your comprehensive tax management solution</p>
        <div className="mt-8 space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Tax Calculator</h2>
            <p className="text-gray-600">Calculate your taxes accurately</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Invoice Management</h2>
            <p className="text-gray-600">Manage invoices efficiently</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;