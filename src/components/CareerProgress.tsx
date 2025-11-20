import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CareerProgress() {
  const [count, setCount] = useState(0);
  const targetProgress = 78;

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = targetProgress / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetProgress) {
        setCount(targetProgress);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const milestones = [
    { label: 'Publications', completed: true, value: '82/80' },
    { label: 'FDPs', completed: true, value: '12/10' },
    { label: 'Skills', completed: false, value: '8/12' },
    { label: 'Teaching', completed: true, value: '4.8/4.5' },
  ];

  const circumference = 2 * Math.PI * 120;
  const offset = circumference - (count / 100) * circumference;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Progress Circle */}
      <div className="relative w-64 h-64">
        <svg className="transform -rotate-90 w-64 h-64">
          {/* Background circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            stroke="url(#gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="100%" stopColor="#9D4EDD" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="text-5xl font-mono bg-gradient-to-br from-[#00D9FF] to-[#9D4EDD] bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            {count}%
          </motion.div>
          <div className="text-sm text-[#A0A0A0] mt-2">Overall Progress</div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#9D4EDD] opacity-20 blur-2xl"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Milestones */}
      <div className="flex-1 space-y-4 w-full">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              milestone.completed 
                ? 'bg-gradient-to-br from-[#00D9FF] to-[#00E5CC]' 
                : 'bg-white/10 border-2 border-white/20'
            }`}>
              {milestone.completed && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.3333 4L6 11.3333L2.66667 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={milestone.completed ? 'text-[#F0F0F0]' : 'text-[#A0A0A0]'}>
                  {milestone.label}
                </span>
                <span className="text-sm font-mono text-[#A0A0A0]">{milestone.value}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
