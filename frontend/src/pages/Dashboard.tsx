import React from 'react';
import { 
  BanknotesIcon, 
  DocumentTextIcon, 
  CreditCardIcon,
  ExclamationTriangleIcon 
} from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'VAT Due This Month', value: 'KES 14,500', icon: BanknotesIcon, color: 'text-red-600' },
    { name: 'Total Sales', value: 'KES 125,000', icon: DocumentTextIcon, color: 'text-green-600' },
    { name: 'Business Expenses', value: 'KES 45,200', icon: CreditCardIcon, color: 'text-blue-600' },
    { name: 'Pending Invoices', value: '8', icon: ExclamationTriangleIcon, color: 'text-yellow-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your tax obligations and business metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Tax Deadlines</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium">VAT Return</span>
              <span className="text-sm text-red-600">Due: 20th Dec 2024</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium">PAYE Return</span>
              <span className="text-sm text-yellow-600">Due: 9th Jan 2025</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-primary-700">Calculate VAT</span>
            </button>
            <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-green-700">Create Invoice</span>
            </button>
            <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <span className="text-sm font-medium text-blue-700">Add Expense</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;