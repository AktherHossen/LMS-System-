import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Clock, CheckCircle, AlertCircle, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Assignments: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const assignments = [
    {
      id: '1',
      title: 'বাংলা ব্যাকরণের অনুশীলন',
      course: 'বাংলা ব্যাকরণ ও সাহিত্য',
      description: 'বাংলা ব্যাকরণের বিভিন্ন নিয়ম নিয়ে অনুশীলনমূলক কাজ',
      dueDate: '2024-01-15',
      status: 'pending',
      priority: 'high',
      progress: 0,
      points: 100
    },
    {
      id: '2',
      title: 'গণিতের সমস্যা সমাধান',
      course: 'গণিতের মৌলিক ধারণা',
      description: 'বীজগণিত এবং জ্যামিতির সমস্যা সমাধান',
      dueDate: '2024-01-18',
      status: 'in-progress',
      priority: 'medium',
      progress: 60,
      points: 150
    },
    {
      id: '3',
      title: 'ইংরেজি রচনা লেখা',
      course: 'ইংরেজি ভাষা শিক্ষা',
      description: 'ইংরেজিতে একটি প্রবন্ধ রচনা করুন',
      dueDate: '2024-01-20',
      status: 'completed',
      priority: 'low',
      progress: 100,
      points: 80
    },
    {
      id: '4',
      title: 'বিজ্ঞানের প্রকল্প',
      course: 'বিজ্ঞান ও প্রযুক্তি',
      description: 'বিজ্ঞানের কোনো বিষয়ে একটি ছোট প্রকল্প তৈরি করুন',
      dueDate: '2024-01-25',
      status: 'pending',
      priority: 'high',
      progress: 0,
      points: 200
    },
    {
      id: '5',
      title: 'ইতিহাসের উপস্থাপনা',
      course: 'ইতিহাস ও সংস্কৃতি',
      description: 'বাংলাদেশের ইতিহাস নিয়ে একটি উপস্থাপনা তৈরি করুন',
      dueDate: '2024-01-22',
      status: 'in-progress',
      priority: 'medium',
      progress: 30,
      points: 120
    },
    {
      id: '6',
      title: 'প্রোগ্রামিং অ্যাসাইনমেন্ট',
      course: 'কম্পিউটার প্রোগ্রামিং',
      description: 'জাভাস্ক্রিপ্ট দিয়ে একটি ছোট প্রজেক্ট তৈরি করুন',
      dueDate: '2024-01-28',
      status: 'pending',
      priority: 'high',
      progress: 0,
      points: 250
    }
  ];

  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         assignment.course.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || assignment.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">সম্পন্ন</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">চলমান</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">অপেক্ষমান</Badge>;
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">উচ্চ</Badge>;
      case 'medium':
        return <Badge className="bg-orange-100 text-orange-800">মধ্যম</Badge>;
      case 'low':
        return <Badge className="bg-gray-100 text-gray-800">নিম্ন</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bn-BD');
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && !assignments.find(a => a.dueDate === dueDate)?.status === 'completed';
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">অ্যাসাইনমেন্ট</h1>
        <p className="text-gray-600 text-lg">
          আপনার অ্যাসাইনমেন্টসমূহ এবং অগ্রগতি দেখুন
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
              placeholder="অ্যাসাইনমেন্ট বা কোর্সের নাম দিয়ে খুঁজুন..."
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
              variant={selectedFilter === 'pending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('pending')}
            >
              অপেক্ষমান
            </Button>
            <Button
              variant={selectedFilter === 'in-progress' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('in-progress')}
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

      {/* Assignment Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">মোট অ্যাসাইনমেন্ট</p>
                <p className="text-2xl font-bold text-gray-900">{assignments.length}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">সম্পন্ন</p>
                <p className="text-2xl font-bold text-gray-900">
                  {assignments.filter(a => a.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">চলমান</p>
                <p className="text-2xl font-bold text-gray-900">
                  {assignments.filter(a => a.status === 'in-progress').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">অপেক্ষমান</p>
                <p className="text-2xl font-bold text-gray-900">
                  {assignments.filter(a => a.status === 'pending').length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Assignments List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-6"
      >
        {filteredAssignments.map((assignment, index) => (
          <motion.div
            key={assignment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <Card className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 ${
              isOverdue(assignment.dueDate) ? 'border-l-4 border-l-red-500' : ''
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getStatusIcon(assignment.status)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {assignment.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        কোর্স: {assignment.course}
                      </p>
                      <p className="text-gray-700 mb-3">
                        {assignment.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {getStatusBadge(assignment.status)}
                    {getPriorityBadge(assignment.priority)}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        শেষ তারিখ: {formatDate(assignment.dueDate)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {assignment.points} পয়েন্ট
                      </span>
                    </div>
                  </div>
                </div>

                {assignment.status !== 'completed' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">অগ্রগতি</span>
                      <span className="font-medium text-gray-900">{assignment.progress}%</span>
                    </div>
                    <Progress value={assignment.progress} className="h-2" />
                  </div>
                )}

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" size="sm">
                    বিস্তারিত দেখুন
                  </Button>
                  {assignment.status !== 'completed' && (
                    <Button size="sm">
                      {assignment.status === 'pending' ? 'শুরু করুন' : 'চালিয়ে যান'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredAssignments.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">কোন অ্যাসাইনমেন্ট পাওয়া যায়নি</h3>
          <p className="text-gray-600">আপনার অনুসন্ধানের সাথে মিলে যাওয়া অ্যাসাইনমেন্ট নেই</p>
        </motion.div>
      )}
    </div>
  );
};

export default Assignments;
