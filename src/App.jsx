import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/ui/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { CustomersPage } from './components/customers/CustomersPage';
import { ConversationsPage } from './components/conversations/ConversationsPage';
import { CampaignsPage } from './components/campaigns/CampaignsPage';
import { ReportingPage } from './components/reporting/ReportingPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { SettingsPage } from './components/settings/SettingsPage';
import { PlateConsultationPage } from './components/plate-consultation/PlateConsultationPage';
import { MobileMenu } from './components/ui/MobileMenu';

/**
 * Main application component that handles routing and layout.
 * Manages the sidebar state and current page navigation.
 */
export default function App() {
  // State for mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Current active page/route
  const [currentPage, setCurrentPage] = useState('dashboard');

  /**
   * Handles navigation between pages and closes mobile sidebar
   * @param {string} page - The page identifier to navigate to
   */
  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  /**
   * Renders the appropriate page component based on current route
   * @returns {React.ReactNode} The page component to render
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'plate-consultation':
        return <PlateConsultationPage />;
      case 'customers':
        return <CustomersPage />;
      case 'conversations':
        return <ConversationsPage />;
      case 'campaigns':
        return <CampaignsPage />;
      case 'reporting':
        return <ReportingPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-lightblue dark:bg-dark-bg dark:text-gray-100 transition-colors duration-200">
      <Header 
        onMenuClick={() => setIsSidebarOpen(true)} 
        onNavigate={setCurrentPage}
      />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex">
          <Sidebar 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)}
            currentPage={currentPage}
            onMenuItemClick={handleMenuItemClick}
          />
          {renderPage()}
        </div>
      </div>
      <MobileMenu 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={handleMenuItemClick}
      />
      <Toaster position="top-right" />
    </div>
  );
}