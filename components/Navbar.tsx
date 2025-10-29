'use client';

import { Search, Bell, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 glass-card border-b border-white/10"
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-deep-cyan via-sapphire to-mint flex items-center justify-center">
            <span className="text-white font-bold text-xl">Ai</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">
            FinanceAI
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search transactions, cards, or ask AI..."
              className="w-full pl-12 pr-4 py-2.5 rounded-xl glass-card focus:outline-none focus:ring-2 focus:ring-deep-cyan text-gray-800 dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl glass-card hover:bg-white/10 transition-all"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-mint" />
            ) : (
              <Moon className="w-5 h-5 text-sapphire" />
            )}
          </button>

          {/* Notifications */}
          <button className="p-2.5 rounded-xl glass-card hover:bg-white/10 transition-all relative">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-mint rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3 pl-3 pr-4 py-2 rounded-xl glass-card cursor-pointer hover:bg-white/10 transition-all">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-deep-cyan to-mint flex items-center justify-center">
              <span className="text-white font-semibold text-sm">JD</span>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
