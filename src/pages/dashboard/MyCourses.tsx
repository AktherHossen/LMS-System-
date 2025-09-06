import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import CourseThumbnail from '@/components/dashboard/CourseThumbnail';

const MyCourses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const courses = [
    {
      id: '1',
      title: 'বাংলা ব্যাকরণ ও সাহিত্য',
      description: 'বাংলা ভাষার মৌলিক ব্যাকরণ এবং সাহিত্যের ইতিহাস নিয়ে বিস্তারিত আলোচনা',
      progress: 75,
      duration: '৪ সপ্তাহ',
      students: 1250,
      rating: 4.8,
      instructor: 'ড. রহমান আলী',
      category: 'বাংলা',
      status: 'ongoing'
    },
    {
      id: '2',
      title: 'গণিতের মৌলিক ধারণা',
      description: 'প্রাথমিক থেকে উচ্চ মাধ্যমিক পর্যন্ত গণিতের সকল গুরুত্বপূর্ণ বিষয়',
      progress: 60,
      duration: '৬ সপ্তাহ',
      students: 980,
      rating: 4.6,
      instructor: 'প্রফেসর করিম উদ্দিন',
      category: 'গণিত',
      status: 'ongoing'
    },
    {
      id: '3',
      title: 'ইংরেজি ভাষা শিক্ষা',
      description: 'ইংরেজি ভাষার দক্ষতা উন্নয়নের জন্য প্র্যাকটিক্যাল কোর্স',
      progress: 45,
      duration: '৮ সপ্তাহ',
      students: 2100,
      rating: 4.9,
      instructor: 'মিসেস সারা আহমেদ',
      category: 'ইংরেজি',
      status: 'ongoing'
    },
    {
      id: '4',
      title: 'বিজ্ঞান ও প্রযুক্তি',
      description: 'আধুনিক বিজ্ঞান এবং প্রযুক্তির বিভিন্ন দিক নিয়ে আলোচনা',
      progress: 100,
      duration: '১০ সপ্তাহ',
      students: 750,
      rating: 4.7,
      instructor: 'ড. ফারহানা খান',
      category: 'বিজ্ঞান',
      status: 'completed'
    },
    {
      id: '5',
      title: 'ইতিহাস ও সংস্কৃতি',
      description: 'বাংলাদেশের ইতিহাস এবং সমৃদ্ধ সংস্কৃতি নিয়ে বিস্তারিত আলোচনা',
      progress: 0,
      duration: '৫ সপ্তাহ',
      students: 650,
      rating: 4.5,
      instructor: 'ড. আবুল কালাম',
      category: 'ইতিহাস',
      status: 'not-started'
    },
    {
      id: '6',
      title: 'কম্পিউটার প্রোগ্রামিং',
      description: 'প্রোগ্রামিং ভাষা এবং সফটওয়্যার ডেভেলপমেন্টের মৌলিক ধারণা',
      progress: 90,
      duration: '১২ সপ্তাহ',
      students: 1800,
      rating: 4.8,
      instructor: 'ইঞ্জিনিয়ার রাকিব হাসান',
      category: 'প্রযুক্তি',
      status: 'ongoing'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || course.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">সম্পন্ন</Badge>;
      case 'ongoing':
        return <Badge className="bg-blue-100 text-blue-800">চলমান</Badge>;
      case 'not-started':
        return <Badge className="bg-gray-100 text-gray-800">শুরু হয়নি</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">আমার কোর্সসমূহ</h1>
        <p className="text-gray-600 text-lg">
          আপনার নিবন্ধিত কোর্সসমূহ এবং অগ্রগতি দেখুন
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="কোর্স বা শিক্ষকের নাম দিয়ে খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('all')}
            >
              সব
            </Button>
            <Button
              variant={selectedFilter === 'ongoing' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('ongoing')}
            >
              চলমান
            </Button>
            <Button
              variant={selectedFilter === 'completed' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('completed')}
            >
              সম্পন্ন
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Course Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">মোট কোর্স</p>
                <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
              </div>
              <BookOpen className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">সম্পন্ন</p>
                <p className="text-2xl font-bold text-gray-900">
                  {courses.filter(c => c.status === 'completed').length}
                </p>
              </div>
              <Star className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">চলমান</p>
                <p className="text-2xl font-bold text-gray-900">
                  {courses.filter(c => c.status === 'ongoing').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Courses Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              {/* Thumbnail */}
              <CourseThumbnail category={course.category} progress={course.progress} />

              <CardContent className="p-6">
                <div className="space-y-3">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start">
                    <div>{getStatusBadge(course.status)}</div>
                  </div>

                  {/* Course Info */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {course.description}
                    </p>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">
                        {course.instructor.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">প্রগতি</span>
                      <span className="font-medium text-gray-900">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      size="sm"
                    >
                      {course.progress > 0 ? 'শেখা চালিয়ে যান' : 'শেখা শুরু করুন'}
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">কোন কোর্স পাওয়া যায়নি</h3>
          <p className="text-gray-600">আপনার অনুসন্ধানের সাথে মিলে যাওয়া কোর্স নেই</p>
        </motion.div>
      )}
    </div>
  );
};

export default MyCourses;
