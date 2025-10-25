import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-900">TaxEase Kenya</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <BellIcon className="h-6 w-6" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <UserCircleIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;