'use client';

import { LayoutDashboard, BarChart3, Receipt, CreditCard, Users, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'receipts', icon: Receipt, label: 'Receipts' },
  { id: 'cards', icon: CreditCard, label: 'Cards' },
  { id: 'splitwise', icon: Users, label: 'Splitwise' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 glass-card border-r border-white/10 p-4"
    >
      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-deep-cyan to-sapphire text-white shadow-lg shadow-cyan-500/30'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="mt-8 p-4 rounded-xl glass-card">
        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">Quick Stats</h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">This Month</p>
            <p className="text-lg font-bold text-gray-800 dark:text-white">₹45,234</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Saved</p>
            <p className="text-lg font-bold text-mint">₹12,500</p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
