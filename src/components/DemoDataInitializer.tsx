import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Database, Check, X } from 'lucide-react';
import { apiClient } from '../utils/api';

interface DemoDataInitializerProps {
  onClose: () => void;
}

export default function DemoDataInitializer({ onClose }: DemoDataInitializerProps) {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkInitialization();
  }, []);

  const checkInitialization = async () => {
    try {
      const publications = await apiClient.getPublications();
      if (publications && publications.length > 0) {
        setInitialized(true);
        setTimeout(() => onClose(), 2000);
      }
    } catch (err) {
      console.log('Data check:', err);
    }
  };

  const handleInitialize = async () => {
    try {
      setLoading(true);
      setError(null);
      await apiClient.seedDemoData();
      setInitialized(true);
      setTimeout(() => onClose(), 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to initialize data');
      console.error('Initialization error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (initialized) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-20 right-6 z-50"
      >
        <div className="px-4 py-2 bg-[#00B894]/20 border border-[#00B894]/40 text-[#00B894] rounded-lg flex items-center gap-2 backdrop-blur-xl">
          <Check size={16} />
          <span className="text-sm">Data Loaded</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1419]/90 backdrop-blur-md"
    >
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-[#16213E]/80 border border-white/10 rounded-3xl p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9FF] to-[#9D4EDD] flex items-center justify-center">
              <Database size={32} className="text-white" />
            </div>
          </div>

          <h2 className="text-2xl text-center mb-2">Welcome to Faculty Pro Track</h2>
          <p className="text-[#A0A0A0] text-center mb-6">
            Initialize your dashboard with demo data to get started
          </p>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-[#FFA500]/20 border border-[#FFA500]/40 text-[#FFA500] rounded-xl flex items-center gap-2"
            >
              <X size={16} />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          <button
            onClick={handleInitialize}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#00D9FF] to-[#00E5CC] text-[#0F1419] rounded-xl hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0F1419]/30 border-t-[#0F1419] rounded-full animate-spin" />
                <span>Initializing...</span>
              </>
            ) : (
              <>
                <Database size={18} />
                <span>Load Demo Data</span>
              </>
            )}
          </button>

          <p className="text-xs text-[#A0A0A0] text-center mt-4">
            This will populate your dashboard with sample publications, skills, and FDP data
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}