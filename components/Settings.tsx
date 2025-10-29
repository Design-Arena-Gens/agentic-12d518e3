'use client';

import { motion } from 'framer-motion';
import { User, Bell, Lock, Globe, Palette, Database, Shield, Download } from 'lucide-react';

const settingsSections = [
  {
    title: 'Profile',
    icon: User,
    items: [
      { label: 'Full Name', value: 'John Doe', type: 'text' },
      { label: 'Email', value: 'john.doe@example.com', type: 'text' },
      { label: 'Phone', value: '+91 98765 43210', type: 'text' },
    ]
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      { label: 'Transaction Alerts', value: true, type: 'toggle' },
      { label: 'Budget Warnings', value: true, type: 'toggle' },
      { label: 'AI Insights', value: true, type: 'toggle' },
      { label: 'Monthly Reports', value: false, type: 'toggle' },
    ]
  },
  {
    title: 'Security',
    icon: Lock,
    items: [
      { label: 'Two-Factor Authentication', value: true, type: 'toggle' },
      { label: 'Biometric Login', value: true, type: 'toggle' },
      { label: 'Auto-Lock', value: '5 minutes', type: 'select' },
    ]
  },
  {
    title: 'Preferences',
    icon: Palette,
    items: [
      { label: 'Language', value: 'English', type: 'select' },
      { label: 'Currency', value: 'INR (₹)', type: 'select' },
      { label: 'Date Format', value: 'DD/MM/YYYY', type: 'select' },
      { label: 'Theme', value: 'Dark', type: 'select' },
    ]
  }
];

export default function Settings() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">
            Settings
          </span>
        </h2>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-deep-cyan to-sapphire flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{section.title}</h3>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{item.label}</span>
                      {item.type === 'toggle' ? (
                        <button
                          className={`relative w-12 h-6 rounded-full transition-all ${
                            item.value ? 'bg-gradient-to-r from-deep-cyan to-mint' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              item.value ? 'translate-x-6' : ''
                            }`}
                          />
                        </button>
                      ) : item.type === 'select' ? (
                        <select className="px-4 py-2 glass-card rounded-lg text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-cyan">
                          <option>{item.value}</option>
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={item.value as string}
                          className="px-4 py-2 glass-card rounded-lg text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-deep-cyan"
                          readOnly
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Data & Privacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <Download className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Export Data</p>
            </button>
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <Database className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Backup</p>
            </button>
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <Shield className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Privacy Policy</p>
            </button>
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 rounded-2xl border border-red-500/30"
        >
          <h3 className="text-xl font-semibold text-red-500 mb-4">Danger Zone</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 glass-card rounded-xl text-left text-red-500 hover:bg-red-500/10 transition-all">
              Reset All Data
            </button>
            <button className="w-full px-4 py-3 glass-card rounded-xl text-left text-red-500 hover:bg-red-500/10 transition-all">
              Delete Account
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
