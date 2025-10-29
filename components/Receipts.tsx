'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Image as ImageIcon, X, Sparkles, Filter } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface ReceiptsProps {
  onSelectReceipt: (receipt: any) => void;
}

const mockReceipts = [
  {
    id: 1,
    date: '2025-10-28',
    merchant: 'Starbucks Coffee',
    amount: 450,
    category: 'Food',
    type: 'image',
    status: 'processed',
    fileUrl: '/receipt1.jpg'
  },
  {
    id: 2,
    date: '2025-10-27',
    merchant: 'Amazon India',
    amount: 2340,
    category: 'Shopping',
    type: 'pdf',
    status: 'processed',
    fileUrl: '/receipt2.pdf'
  },
  {
    id: 3,
    date: '2025-10-26',
    merchant: 'Uber',
    amount: 245,
    category: 'Transport',
    type: 'image',
    status: 'processed',
    fileUrl: '/receipt3.jpg'
  },
  {
    id: 4,
    date: '2025-10-25',
    merchant: 'Big Bazaar',
    amount: 3450,
    category: 'Grocery',
    type: 'image',
    status: 'processing',
    fileUrl: '/receipt4.jpg'
  },
];

export default function Receipts({ onSelectReceipt }: ReceiptsProps) {
  const [showUpload, setShowUpload] = useState(false);
  const [receipts, setReceipts] = useState(mockReceipts);
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState('all');

  const onDrop = (acceptedFiles: File[]) => {
    setUploading(true);
    // Simulate AI processing
    setTimeout(() => {
      const newReceipts = acceptedFiles.map((file, index) => ({
        id: receipts.length + index + 1,
        date: new Date().toISOString().split('T')[0],
        merchant: 'AI Processing...',
        amount: 0,
        category: 'Uncategorized',
        type: file.type.includes('pdf') ? 'pdf' : 'image',
        status: 'processing',
        fileUrl: URL.createObjectURL(file)
      }));
      setReceipts([...newReceipts, ...receipts]);
      setUploading(false);
      setShowUpload(false);

      // Simulate AI extraction completion
      setTimeout(() => {
        setReceipts(prev => prev.map(r =>
          r.status === 'processing' ? {
            ...r,
            merchant: 'Local Store',
            amount: Math.floor(Math.random() * 5000) + 100,
            category: ['Food', 'Shopping', 'Transport', 'Entertainment'][Math.floor(Math.random() * 4)],
            status: 'processed'
          } : r
        ));
      }, 3000);
    }, 1500);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/pdf': ['.pdf']
    },
    multiple: true
  });

  const filteredReceipts = filter === 'all'
    ? receipts
    : receipts.filter(r => r.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-deep-cyan to-mint bg-clip-text text-transparent">
              AI Receipt Scanner
            </span>
          </h2>
          <button
            onClick={() => setShowUpload(true)}
            className="px-6 py-3 bg-gradient-to-r from-deep-cyan to-sapphire text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center space-x-2"
          >
            <Upload className="w-5 h-5" />
            <span>Upload Receipt</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center space-x-3 mb-6">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          {['all', 'food', 'shopping', 'transport', 'entertainment'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-deep-cyan to-sapphire text-white'
                  : 'glass-card text-gray-700 dark:text-gray-200 hover:bg-white/10'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Receipts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredReceipts.map((receipt, index) => (
            <motion.div
              key={receipt.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => receipt.status === 'processed' && onSelectReceipt(receipt)}
              className="glass-card p-5 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                  receipt.type === 'pdf' ? 'from-red-500 to-orange-500' : 'from-deep-cyan to-sapphire'
                } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {receipt.type === 'pdf' ? (
                    <FileText className="w-6 h-6 text-white" />
                  ) : (
                    <ImageIcon className="w-6 h-6 text-white" />
                  )}
                </div>
                {receipt.status === 'processing' && (
                  <div className="flex items-center space-x-1 text-xs text-mint">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>Processing...</span>
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{receipt.merchant}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{receipt.date}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-medium glass-card">
                  {receipt.category}
                </span>
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  ₹{receipt.amount.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredReceipts.length === 0 && (
          <div className="glass-card p-12 rounded-2xl text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">No receipts found in this category</p>
          </div>
        )}
      </motion.div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUpload && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowUpload(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 rounded-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Upload Receipt</h3>
                <button
                  onClick={() => setShowUpload(false)}
                  className="p-2 glass-card rounded-lg hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
                  isDragActive
                    ? 'border-mint bg-mint/10'
                    : 'border-gray-300 dark:border-gray-600 hover:border-deep-cyan'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                {uploading ? (
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                      AI is processing your receipts...
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-mint">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                      <span>Extracting data</span>
                    </div>
                  </div>
                ) : isDragActive ? (
                  <p className="text-lg font-medium text-gray-800 dark:text-white">
                    Drop your receipts here...
                  </p>
                ) : (
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                      Drag & drop receipts here
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      or click to browse (PDF, JPG, PNG)
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 glass-card rounded-xl">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">AI-Powered Extraction</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Our AI automatically extracts date, merchant name, amount, and categorizes your receipts
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
