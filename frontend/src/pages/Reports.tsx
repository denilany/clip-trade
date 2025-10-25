import React from 'react';
import { DocumentArrowDownIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Reports: React.FC = () => {
  const reports = [
    {
      name: 'VAT Return',
      description: 'Monthly VAT return for KRA submission',
      period: 'November 2024',
      status: 'Ready',
      dueDate: '20th December 2024'
    },
    {
      name: 'PAYE Return',
      description: 'Employee tax deductions report',
      period: 'November 2024',
      status: 'Pending',
      dueDate: '9th January 2025'
    },
    {
      name: 'Profit & Loss',
      description: 'Business performance summary',
      period: 'Q4 2024',
      status: 'Draft',
      dueDate: 'N/A'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600">Generate and download tax reports and financial statements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ChartBarIcon className="h-8 w-8 text-primary-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Tax Summary</h3>
              <p className="text-sm text-gray-500">Current period overview</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-primary-600">KES 14,500</p>
            <p className="text-sm text-gray-500">Total tax due</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <DocumentArrowDownIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Ready Reports</h3>
              <p className="text-sm text-gray-500">Available for download</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-green-600">2</p>
            <p className="text-sm text-gray-500">Reports ready</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ChartBarIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Compliance</h3>
              <p className="text-sm text-gray-500">Filing status</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-yellow-600">85%</p>
            <p className="text-sm text-gray-500">On track</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Available Reports</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-sm text-gray-600">
                        <strong>Period:</strong> {report.period}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                      {report.dueDate !== 'N/A' && (
                        <span className="text-sm text-red-600">
                          <strong>Due:</strong> {report.dueDate}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 flex items-center">
                      <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
                      Download
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-blue-900 mb-2">KRA iTax Integration</h3>
        <p className="text-blue-700 mb-4">
          Export your reports in KRA-compatible formats for easy submission to iTax portal.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Export for iTax
        </button>
      </div>
    </div>
  );
};

export default Reports;