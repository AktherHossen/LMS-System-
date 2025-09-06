import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface CourseThumbnailProps {
  category: string;
  progress: number;
}

const CourseThumbnail: React.FC<CourseThumbnailProps> = ({ category, progress }) => {
  const getGradient = (category: string) => {
    switch (category) {
      case 'বাংলা':
        return 'from-green-500 to-emerald-600';
      case 'গণিত':
        return 'from-blue-500 to-cyan-600';
      case 'ইংরেজি':
        return 'from-purple-500 to-violet-600';
      case 'বিজ্ঞান':
        return 'from-orange-500 to-red-600';
      case 'ইতিহাস':
        return 'from-amber-500 to-yellow-600';
      case 'প্রযুক্তি':
        return 'from-indigo-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`relative h-48 bg-gradient-to-br ${getGradient(category)} overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <Play className="h-8 w-8 text-white ml-1" />
        </motion.div>
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <div className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      
      {/* Progress Badge */}
      <div className="absolute top-4 right-4">
        <div className="px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-medium">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default CourseThumbnail;
