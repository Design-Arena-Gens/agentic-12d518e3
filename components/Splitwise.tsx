'use client';

import { motion } from 'framer-motion';
import { Users, Plus, TrendingUp, TrendingDown, Bell, DollarSign } from 'lucide-react';

const groups = [
  {
    id: 1,
    name: 'Weekend Trip',
    members: 4,
    totalExpense: 12450,
    youOwe: 3200,
    owedToYou: 0,
    gradient: 'from-deep-cyan to-sapphire'
  },
  {
    id: 2,
    name: 'Roommates',
    members: 3,
    totalExpense: 8900,
    youOwe: 0,
    owedToYou: 2800,
    gradient: 'from-mint to-green-500'
  },
  {
    id: 3,
    name: 'Office Lunch',
    members: 6,
    totalExpense: 3450,
    youOwe: 575,
    owedToYou: 0,
    gradient: 'from-purple-500 to-pink-500'
  }
];

const recentExpenses = [
  { id: 1, description: 'Hotel Booking', paidBy: 'John', amount: 8000, group: 'Weekend Trip', date: '2025-10-28', split: 4 },
  { id: 2, description: 'Electricity Bill', paidBy: 'You', amount: 2800, group: 'Roommates', date: '2025-10-27', split: 3 },
  { id: 3, description: 'Lunch at Cafe', paidBy: 'Sarah', amount: 3450, group: 'Office Lunch', date: '2025-10-26', split: 6 },
  { id: 4, description: 'Uber Ride', paidBy: 'Mike', amount: 450, group: 'Weekend Trip', date: '2025-10-25', split: 4 },
];

const settlements = [
  { id: 1, name: 'John', amount: 3200, type: 'owe', avatar: 'JD' },
  { id: 2, name: 'Sarah', amount: 1400, type: 'owed', avatar: 'SK' },
  { id: 3, name: 'Mike', amount: 1400, type: 'owed', avatar: 'MJ' },
];

export default function Splitwise() {
  const totalYouOwe = groups.reduce((sum, g) => sum + g.youOwe, 0);
  const totalOwedToYou = groups.reduce((sum, g) => sum + g.owedToYou, 0);
  const netBalance = totalOwedToYou - totalYouOwe;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">
              Splitwise AI
            </span>
          </h2>
          <button className="px-6 py-3 bg-gradient-to-r from-deep-cyan to-sapphire text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Expense</span>
          </button>
        </div>

        {/* Balance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className={`glass-card p-6 rounded-2xl ${netBalance > 0 ? 'bg-gradient-to-br from-mint/20 to-green-500/20' : netBalance < 0 ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20' : ''}`}
          >
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Net Balance</h3>
            <p className={`text-3xl font-bold mb-2 ${netBalance > 0 ? 'text-mint' : netBalance < 0 ? 'text-red-500' : 'text-gray-800 dark:text-white'}`}>
              {netBalance > 0 ? '+' : ''}₹{netBalance.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {netBalance > 0 ? 'You are owed' : netBalance < 0 ? 'You owe' : 'All settled up!'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">You Owe</h3>
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">₹{totalYouOwe.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Across {groups.filter(g => g.youOwe > 0).length} groups</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Owed to You</h3>
              <TrendingUp className="w-5 h-5 text-mint" />
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">₹{totalOwedToYou.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Across {groups.filter(g => g.owedToYou > 0).length} groups</p>
          </motion.div>
        </div>

        {/* Groups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Your Groups</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">{group.name}</h4>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center`}>
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{group.members} members</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Total Expense</span>
                    <span className="font-medium text-gray-800 dark:text-white">₹{group.totalExpense.toLocaleString()}</span>
                  </div>
                  {group.youOwe > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-red-500">You owe</span>
                      <span className="font-bold text-red-500">₹{group.youOwe.toLocaleString()}</span>
                    </div>
                  )}
                  {group.owedToYou > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-mint">Owed to you</span>
                      <span className="font-bold text-mint">₹{group.owedToYou.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Settlement Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-6 rounded-2xl mb-8 bg-gradient-to-br from-deep-cyan/10 to-mint/10 border border-mint/20"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="w-5 h-5 text-mint" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">AI Smart Settlement</h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
            AI suggests optimizing settlements to reduce total transactions from 5 to 2:
          </p>
          <div className="space-y-2">
            {settlements.map((settlement) => (
              <div key={settlement.id} className="flex items-center justify-between p-3 glass-card rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-deep-cyan to-sapphire flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{settlement.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">{settlement.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {settlement.type === 'owe' ? 'You owe' : 'Owes you'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${settlement.type === 'owe' ? 'text-red-500' : 'text-mint'}`}>
                    ₹{settlement.amount.toLocaleString()}
                  </p>
                  <button className="text-xs text-deep-cyan dark:text-mint hover:underline">
                    {settlement.type === 'owe' ? 'Pay Now' : 'Remind'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Expenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Recent Group Expenses</h3>
          <div className="space-y-3">
            {recentExpenses.map((expense, index) => (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="flex items-center justify-between p-4 glass-card rounded-xl hover:bg-white/5 transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">{expense.description}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Paid by {expense.paidBy} • {expense.group}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800 dark:text-white">₹{expense.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Split {expense.split} ways</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
