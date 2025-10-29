'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Analytics from '@/components/Analytics';
import Receipts from '@/components/Receipts';
import Cards from '@/components/Cards';
import Splitwise from '@/components/Splitwise';
import Settings from '@/components/Settings';
import ReceiptDetail from '@/components/ReceiptDetail';
import VoiceAssistant from '@/components/VoiceAssistant';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedReceipt, setSelectedReceipt] = useState<any>(null);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-dark-bg dark:via-slate-900 dark:to-dark-bg transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <main className="flex-1 ml-64 mt-16 p-8">
            {selectedReceipt ? (
              <ReceiptDetail receipt={selectedReceipt} onBack={() => setSelectedReceipt(null)} />
            ) : (
              <>
                {activeTab === 'dashboard' && <Dashboard />}
                {activeTab === 'analytics' && <Analytics />}
                {activeTab === 'receipts' && <Receipts onSelectReceipt={setSelectedReceipt} />}
                {activeTab === 'cards' && <Cards />}
                {activeTab === 'splitwise' && <Splitwise />}
                {activeTab === 'settings' && <Settings />}
              </>
            )}
          </main>
        </div>

        <VoiceAssistant darkMode={darkMode} />
      </div>
    </div>
  );
}
