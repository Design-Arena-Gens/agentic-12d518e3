'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, AlertCircle, Lightbulb, Wallet, Plus, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const aiInsights = [
  {
    icon: AlertCircle,
    title: 'Overspending Alert',
    description: "You're 23% over budget on Food this week",
    color: 'from-red-500 to-orange-500',
    action: 'View Details'
  },
  {
    icon: Lightbulb,
    title: 'Smart Savings Tip',
    description: 'Save ₹3,200/month by switching subscriptions',
    color: 'from-mint to-green-500',
    action: 'Optimize'
  },
  {
    icon: TrendingUp,
    title: 'Top Category',
    description: 'Entertainment: ₹12,450 (35% of spending)',
    color: 'from-deep-cyan to-sapphire',
    action: 'Analyze'
  },
  {
    icon: TrendingDown,
    title: 'Great Progress!',
    description: 'Transport costs reduced by 18% this month',
    color: 'from-purple-500 to-pink-500',
    action: 'Continue'
  }
];

const overviewCards = [
  { title: 'Total Balance', amount: '₹1,24,567', change: '+12.5%', trend: 'up', gradient: 'from-deep-cyan to-sapphire' },
  { title: 'Monthly Spending', amount: '₹45,234', change: '-8.2%', trend: 'down', gradient: 'from-mint to-green-500' },
  { title: 'AI-Predicted Next Month', amount: '₹42,100', change: 'Forecast', trend: 'neutral', gradient: 'from-purple-500 to-pink-500' },
];

const spendingData = [
  { month: 'Jan', amount: 42000 },
  { month: 'Feb', amount: 38000 },
  { month: 'Mar', amount: 45000 },
  { month: 'Apr', amount: 41000 },
  { month: 'May', amount: 48000 },
  { month: 'Jun', amount: 45234 },
];

const categoryData = [
  { name: 'Entertainment', value: 12450, color: '#0891b2' },
  { name: 'Food', value: 10200, color: '#1e40af' },
  { name: 'Transport', value: 8500, color: '#6ee7b7' },
  { name: 'Shopping', value: 7834, color: '#a855f7' },
  { name: 'Bills', value: 6250, color: '#ec4899' },
];

const recentTransactions = [
  { id: 1, date: '2025-10-28', description: 'Netflix Subscription', category: 'Entertainment', amount: -799, method: 'Credit Card' },
  { id: 2, date: '2025-10-28', description: 'Salary Credit', category: 'Income', amount: 85000, method: 'Bank Transfer' },
  { id: 3, date: '2025-10-27', description: 'Uber Ride', category: 'Transport', amount: -245, method: 'Wallet' },
  { id: 4, date: '2025-10-27', description: 'Grocery Shopping', category: 'Food', amount: -2340, method: 'Debit Card' },
  { id: 5, date: '2025-10-26', description: 'Electricity Bill', category: 'Bills', amount: -1850, method: 'UPI' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* AI Insights Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
          <span className="bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">AI Insights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{insight.description}</p>
                <button className="text-xs font-medium text-deep-cyan dark:text-mint hover:underline">
                  {insight.action} →
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {overviewCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className={`glass-card p-6 rounded-2xl bg-gradient-to-br ${card.gradient} text-white`}
          >
            <h3 className="text-sm font-medium opacity-90 mb-2">{card.title}</h3>
            <p className="text-3xl font-bold mb-2">{card.amount}</p>
            <div className="flex items-center text-sm">
              {card.trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
              {card.trend === 'down' && <TrendingDown className="w-4 h-4 mr-1" />}
              <span>{card.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Wallet Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Wallet Balance</h3>
            <p className="text-3xl font-bold text-deep-cyan dark:text-mint mt-1">₹8,450</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-deep-cyan to-sapphire text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Money</span>
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="flex-1 py-2 glass-card rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all">
            Send
          </button>
          <button className="flex-1 py-2 glass-card rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all">
            Request
          </button>
          <button className="flex-1 py-2 glass-card rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all">
            History
          </button>
        </div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#6ee7b7" />
              <YAxis stroke="#6ee7b7" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(19, 24, 52, 0.9)',
                  border: '1px solid rgba(110, 231, 183, 0.2)',
                  borderRadius: '12px'
                }}
              />
              <Bar dataKey="amount" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Spending by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(19, 24, 52, 0.9)',
                  border: '1px solid rgba(110, 231, 183, 0.2)',
                  borderRadius: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Transactions</h3>
          <button className="text-sm text-deep-cyan dark:text-mint hover:underline">View All →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Description</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Category</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Method</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer"
                >
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">{transaction.date}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-800 dark:text-white">{transaction.description}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium glass-card">
                      {transaction.category}
                    </span>
                  </td>
                  <td className={`py-4 px-4 text-sm font-bold text-right ${transaction.amount > 0 ? 'text-mint' : 'text-gray-800 dark:text-white'}`}>
                    {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">{transaction.method}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
