'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Download, Edit, Trash2, Sparkles, Calendar, DollarSign, Tag, CreditCard } from 'lucide-react';

interface ReceiptDetailProps {
  receipt: any;
  onBack: () => void;
}

export default function ReceiptDetail({ receipt, onBack }: ReceiptDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-deep-cyan transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Receipts</span>
        </button>
        <div className="flex space-x-3">
          <button className="px-4 py-2 glass-card rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all flex items-center space-x-2">
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </button>
          <button className="px-4 py-2 glass-card rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/10 transition-all flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
          <button className="px-4 py-2 glass-card rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all flex items-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Receipt Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Receipt Preview</h3>
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center">
            {receipt.type === 'pdf' ? (
              <div className="text-center">
                <FileText className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">PDF Receipt</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-deep-cyan to-sapphire text-white rounded-xl text-sm font-medium">
                  Open PDF
                </button>
              </div>
            ) : (
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{receipt.merchant}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Receipt #{receipt.id}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-300">Item 1</span>
                    <span className="font-medium text-gray-800 dark:text-white">₹{(receipt.amount * 0.6).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-300">Item 2</span>
                    <span className="font-medium text-gray-800 dark:text-white">₹{(receipt.amount * 0.3).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-300 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-300">Tax</span>
                    <span className="font-medium text-gray-800 dark:text-white">₹{(receipt.amount * 0.1).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between pt-4 text-lg font-bold">
                    <span className="text-gray-800 dark:text-white">Total</span>
                    <span className="text-deep-cyan dark:text-mint">₹{receipt.amount}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Extracted Information */}
        <div className="space-y-6">
          {/* AI Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl bg-gradient-to-br from-deep-cyan/10 to-mint/10 border border-mint/20"
          >
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-mint" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">AI Summary</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Receipt from <strong>{receipt.merchant}</strong> dated <strong>{receipt.date}</strong>.
              Transaction amount of <strong>₹{receipt.amount}</strong> was successfully categorized under <strong>{receipt.category}</strong>.
              This expense is within your monthly budget for this category. No action required.
            </p>
          </motion.div>

          {/* Extracted Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Extracted Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-deep-cyan to-sapphire flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Date</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{receipt.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mint to-green-500 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Amount</p>
                  <p className="font-semibold text-gray-800 dark:text-white">₹{receipt.amount.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Category</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{receipt.category}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Payment Method</p>
                  <p className="font-semibold text-gray-800 dark:text-white">Credit Card •••• 4242</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smart Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Smart Insights</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-mint mt-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Similar transaction detected at this merchant 3 times this month
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-deep-cyan mt-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Average spending at {receipt.merchant}: ₹{(receipt.amount * 0.85).toFixed(0)}
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  This expense increased your {receipt.category} budget usage to 78%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
