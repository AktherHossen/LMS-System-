import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">{title}</p>
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-green-600 font-medium">{change}</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
            >
              <Icon className="h-6 w-6 text-white" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatsCard;
