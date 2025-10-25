import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TaxCalculator from './pages/TaxCalculator';
import InvoiceManagement from './pages/InvoiceManagement';
import ExpenseTracking from './pages/ExpenseTracking';
import TaxChatbot from './pages/TaxChatbot';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

// Components
import Layout from './components/common/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Toaster position="top-right" />
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="calculator" element={<TaxCalculator />} />
              <Route path="invoices" element={<InvoiceManagement />} />
              <Route path="expenses" element={<ExpenseTracking />} />
              <Route path="chatbot" element={<TaxChatbot />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
