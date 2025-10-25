import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface TaxForm {
  taxType: string;
  amount: number;
  period: string;
}

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const { register, handleSubmit, watch } = useForm<TaxForm>();

  const taxType = watch('taxType');

  const onSubmit = (data: TaxForm) => {
    let taxAmount = 0;
    
    switch (data.taxType) {
      case 'vat':
        taxAmount = data.amount * 0.16;
        break;
      case 'paye':
        // Simplified PAYE calculation
        if (data.amount <= 24000) taxAmount = 0;
        else if (data.amount <= 32333) taxAmount = (data.amount - 24000) * 0.1;
        else taxAmount = 833.3 + (data.amount - 32333) * 0.25;
        break;
      case 'turnover':
        taxAmount = data.amount * 0.03;
        break;
      case 'withholding':
        taxAmount = data.amount * 0.05;
        break;
      default:
        taxAmount = 0;
    }
    
    setResult(taxAmount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tax Calculator</h1>
        <p className="text-gray-600">Calculate your tax obligations accurately</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Calculate Tax</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax Type
              </label>
              <select
                {...register('taxType', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select tax type</option>
                <option value="vat">VAT (16%)</option>
                <option value="paye">PAYE</option>
                <option value="turnover">Turnover Tax (3%)</option>
                <option value="withholding">Withholding Tax (5%)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (KES)
              </label>
              <input
                type="number"
                {...register('amount', { required: true, min: 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Period
              </label>
              <select
                {...register('period', { required: true })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Calculate Tax
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Tax Calculation Result</h2>
          
          {result !== null ? (
            <div className="space-y-4">
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-sm text-primary-600 mb-1">Tax Amount Due</p>
                <p className="text-3xl font-bold text-primary-700">
                  KES {result.toLocaleString('en-KE', { minimumFractionDigits: 2 })}
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Tax Type:</strong> {taxType?.toUpperCase()}</p>
                <p><strong>Due Date:</strong> 20th of next month</p>
                <p><strong>Payment Method:</strong> KRA iTax Portal</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 <strong>Tip:</strong> Set up automatic reminders to avoid late payment penalties
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>Enter your details and click "Calculate Tax" to see results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;