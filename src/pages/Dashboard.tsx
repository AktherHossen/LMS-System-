import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, Award, Clock, TrendingUp } from 'lucide-react';
import CourseCard from '@/components/dashboard/CourseCard';
import StatsCard from '@/components/dashboard/StatsCard';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  // Sample course data
  const courses = [
    {
      id: '1',
      title: 'বাংলা ব্যাকরণ ও সাহিত্য',
      description: 'বাংলা ভাষার মৌলিক ব্যাকরণ এবং সাহিত্যের ইতিহাস নিয়ে বিস্তারিত আলোচনা',
      thumbnail: '/api/placeholder/400/200',
      progress: 75,
      duration: '৪ সপ্তাহ',
      students: 1250,
      rating: 4.8,
      instructor: 'ড. রহমান আলী',
      category: 'বাংলা'
    },
    {
      id: '2',
      title: 'গণিতের মৌলিক ধারণা',
      description: 'প্রাথমিক থেকে উচ্চ মাধ্যমিক পর্যন্ত গণিতের সকল গুরুত্বপূর্ণ বিষয়',
      thumbnail: '/api/placeholder/400/200',
      progress: 60,
      duration: '৬ সপ্তাহ',
      students: 980,
      rating: 4.6,
      instructor: 'প্রফেসর করিম উদ্দিন',
      category: 'গণিত'
    },
    {
      id: '3',
      title: 'ইংরেজি ভাষা শিক্ষা',
      description: 'ইংরেজি ভাষার দক্ষতা উন্নয়নের জন্য প্র্যাকটিক্যাল কোর্স',
      thumbnail: '/api/placeholder/400/200',
      progress: 45,
      duration: '৮ সপ্তাহ',
      students: 2100,
      rating: 4.9,
      instructor: 'মিসেস সারা আহমেদ',
      category: 'ইংরেজি'
    },
    {
      id: '4',
      title: 'বিজ্ঞান ও প্রযুক্তি',
      description: 'আধুনিক বিজ্ঞান এবং প্রযুক্তির বিভিন্ন দিক নিয়ে আলোচনা',
      thumbnail: '/api/placeholder/400/200',
      progress: 30,
      duration: '১০ সপ্তাহ',
      students: 750,
      rating: 4.7,
      instructor: 'ড. ফারহানা খান',
      category: 'বিজ্ঞান'
    },
    {
      id: '5',
      title: 'ইতিহাস ও সংস্কৃতি',
      description: 'বাংলাদেশের ইতিহাস এবং সমৃদ্ধ সংস্কৃতি নিয়ে বিস্তারিত আলোচনা',
      thumbnail: '/api/placeholder/400/200',
      progress: 0,
      duration: '৫ সপ্তাহ',
      students: 650,
      rating: 4.5,
      instructor: 'ড. আবুল কালাম',
      category: 'ইতিহাস'
    },
    {
      id: '6',
      title: 'কম্পিউটার প্রোগ্রামিং',
      description: 'প্রোগ্রামিং ভাষা এবং সফটওয়্যার ডেভেলপমেন্টের মৌলিক ধারণা',
      thumbnail: '/api/placeholder/400/200',
      progress: 90,
      duration: '১২ সপ্তাহ',
      students: 1800,
      rating: 4.8,
      instructor: 'ইঞ্জিনিয়ার রাকিব হাসান',
      category: 'প্রযুক্তি'
    }
  ];

  const stats = [
    {
      title: 'সক্রিয় কোর্স',
      value: '6',
      change: '+2 নতুন এই সপ্তাহে',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'সম্পন্ন কোর্স',
      value: '12',
      change: '+1 এই মাসে',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      title: 'শেখার সময়',
      value: '৪৮ ঘণ্টা',
      change: '+৫ ঘণ্টা এই সপ্তাহে',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'প্রগতি হার',
      value: '৭৮%',
      change: '+১২% এই মাসে',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="p-4 lg:p-6">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              স্বাগতম, {displayName}! 👋
            </h1>
            <p className="text-gray-600 text-lg">
              আপনার শিক্ষার যাত্রা চালিয়ে যান এবং নতুন দক্ষতা অর্জন করুন।
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                color={stat.color}
                index={index}
              />
            ))}
          </div>

          {/* Courses Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">আমার কোর্সসমূহ</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary hover:text-primary/80 font-medium"
              >
                সব দেখুন →
              </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">দ্রুত কাজ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">নতুন কোর্স খুঁজুন</p>
                    <p className="text-sm text-gray-600">আপনার আগ্রহের বিষয় খুঁজুন</p>
                  </div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">সার্টিফিকেট দেখুন</p>
                    <p className="text-sm text-gray-600">আপনার অর্জনসমূহ</p>
                  </div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">প্রগতি রিপোর্ট</p>
                    <p className="text-sm text-gray-600">আপনার উন্নতি দেখুন</p>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>
    </div>
  );
};

export default Dashboard;
