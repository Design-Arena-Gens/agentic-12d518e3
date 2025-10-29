'use client';

import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Lock, Plus, ChevronRight } from 'lucide-react';

const creditCards = [
  {
    id: 1,
    name: 'Sapphire Premium',
    number: '4242',
    balance: 45230,
    limit: 100000,
    gradient: 'from-deep-cyan via-sapphire to-blue-900',
    usage: 45.23
  },
  {
    id: 2,
    name: 'Mint Cashback',
    number: '8888',
    balance: 12450,
    limit: 50000,
    gradient: 'from-mint via-green-500 to-emerald-600',
    usage: 24.9
  },
  {
    id: 3,
    name: 'Purple Platinum',
    number: '5555',
    balance: 78900,
    limit: 200000,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    usage: 39.45
  }
];

const transactions = [
  { id: 1, merchant: 'Amazon', amount: -2340, date: '2025-10-28', card: 'Sapphire Premium' },
  { id: 2, merchant: 'Netflix', amount: -799, date: '2025-10-27', card: 'Mint Cashback' },
  { id: 3, merchant: 'Uber', amount: -245, date: '2025-10-27', card: 'Sapphire Premium' },
  { id: 4, merchant: 'Swiggy', amount: -680, date: '2025-10-26', card: 'Mint Cashback' },
];

const rewards = [
  { icon: '🎁', title: 'Cashback Earned', value: '₹2,340', color: 'from-mint to-green-500' },
  { icon: '⭐', title: 'Reward Points', value: '12,450', color: 'from-deep-cyan to-sapphire' },
  { icon: '🎯', title: 'Miles Earned', value: '8,900', color: 'from-purple-500 to-pink-500' },
];

export default function Cards() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">
              Credit Cards
            </span>
          </h2>
          <button className="px-6 py-3 bg-gradient-to-r from-deep-cyan to-sapphire text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add New Card</span>
          </button>
        </div>

        {/* Cards Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {creditCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-all cursor-pointer overflow-hidden group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                  <CreditCard className="w-8 h-8" />
                </div>

                <div className="mb-6">
                  <p className="text-sm opacity-80 mb-1">Card Number</p>
                  <p className="text-xl font-mono">•••• •••• •••• {card.number}</p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Balance</span>
                    <span>Limit</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-2">
                    <span>₹{card.balance.toLocaleString()}</span>
                    <span>₹{card.limit.toLocaleString()}</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${card.usage}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                  <p className="text-xs mt-1 opacity-80">{card.usage}% utilized</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Rewards & Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`glass-card p-6 rounded-2xl bg-gradient-to-br ${reward.color} text-white`}
              >
                <div className="text-4xl mb-2">{reward.icon}</div>
                <h4 className="text-sm opacity-90 mb-1">{reward.title}</h4>
                <p className="text-2xl font-bold">{reward.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Card Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Card Transactions</h3>
            <button className="text-sm text-deep-cyan dark:text-mint hover:underline flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="flex items-center justify-between p-4 glass-card rounded-xl hover:bg-white/5 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-cyan to-sapphire flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{transaction.merchant}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{transaction.card}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 dark:text-white">{transaction.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{transaction.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Card Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <Lock className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Block Card</p>
            </button>
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <TrendingUp className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Increase Limit</p>
            </button>
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <CreditCard className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Pay Bill</p>
            </button>
            <button className="p-4 glass-card rounded-xl hover:bg-white/5 transition-all text-center">
              <ChevronRight className="w-8 h-8 text-deep-cyan dark:text-mint mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Statements</p>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
