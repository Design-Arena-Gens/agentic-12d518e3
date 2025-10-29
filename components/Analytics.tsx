'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, DollarSign, Calendar, Download } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', income: 85000, expense: 42000, savings: 43000 },
  { month: 'Feb', income: 85000, expense: 38000, savings: 47000 },
  { month: 'Mar', income: 90000, expense: 45000, savings: 45000 },
  { month: 'Apr', income: 85000, expense: 41000, savings: 44000 },
  { month: 'May', income: 88000, expense: 48000, savings: 40000 },
  { month: 'Jun', income: 85000, expense: 45234, savings: 39766 },
];

const categoryTrends = [
  { month: 'Jan', Food: 9500, Transport: 7200, Entertainment: 11000, Shopping: 8500 },
  { month: 'Feb', Food: 8900, Transport: 6800, Entertainment: 10500, Shopping: 7200 },
  { month: 'Mar', Food: 10200, Transport: 8500, Entertainment: 12000, Shopping: 9000 },
  { month: 'Apr', Food: 9800, Transport: 7900, Entertainment: 11200, Shopping: 8100 },
  { month: 'May', Food: 11000, Transport: 9200, Entertainment: 13500, Shopping: 9500 },
  { month: 'Jun', Food: 10200, Transport: 8500, Entertainment: 12450, Shopping: 7834 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">
              Advanced Analytics
            </span>
          </h2>
          <div className="flex space-x-3">
            <button className="px-4 py-2 glass-card rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last 6 Months</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-deep-cyan to-sapphire text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Average Monthly Income</h3>
              <DollarSign className="w-5 h-5 text-mint" />
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">₹86,333</p>
            <p className="text-sm text-mint mt-1">+3.2% from last quarter</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Average Monthly Expense</h3>
              <TrendingUp className="w-5 h-5 text-deep-cyan" />
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">₹43,206</p>
            <p className="text-sm text-deep-cyan mt-1">-5.1% from last quarter</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Savings Rate</h3>
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">49.8%</p>
            <p className="text-sm text-purple-500 mt-1">Above target (45%)</p>
          </motion.div>
        </div>

        {/* Income vs Expense Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 rounded-2xl mb-6"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Income vs Expense Overview</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6ee7b7" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6ee7b7" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0891b2" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0891b2" stopOpacity={0}/>
                </linearGradient>
              </defs>
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
              <Legend />
              <Area type="monotone" dataKey="income" stroke="#6ee7b7" fillOpacity={1} fill="url(#colorIncome)" />
              <Area type="monotone" dataKey="expense" stroke="#0891b2" fillOpacity={1} fill="url(#colorExpense)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Category Spending Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={categoryTrends}>
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
              <Legend />
              <Line type="monotone" dataKey="Food" stroke="#0891b2" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Transport" stroke="#1e40af" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Entertainment" stroke="#6ee7b7" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Shopping" stroke="#a855f7" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* AI Predictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">AI Financial Predictions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 glass-card rounded-xl">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Next Month Forecast</h4>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-1">₹42,100</p>
              <p className="text-sm text-mint">Expected expense (7% lower than this month)</p>
            </div>
            <div className="p-4 glass-card rounded-xl">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Year-End Savings Goal</h4>
              <p className="text-2xl font-bold text-gray-800 dark:text-white mb-1">₹5,20,000</p>
              <p className="text-sm text-deep-cyan">On track to achieve by Dec 2025</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
