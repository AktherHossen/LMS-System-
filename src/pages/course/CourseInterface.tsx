import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  BookOpen, 
  FileText, 
  ClipboardCheck, 
  Award, 
  Clock, 
  Users, 
  Star,
  ArrowLeft,
  Download,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AssignmentSubmission from '@/components/course/AssignmentSubmission';
import ExamInterface from '@/components/course/ExamInterface';

const CourseInterface: React.FC = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('tutorials');
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showExamModal, setShowExamModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const [selectedExam, setSelectedExam] = useState<any>(null);

  // Sample course data - in real app, this would come from API
  const courseData = {
    id: courseId,
    title: 'বাংলা ব্যাকরণ ও সাহিত্য',
    description: 'বাংলা ভাষার মৌলিক ব্যাকরণ এবং সাহিত্যের ইতিহাস নিয়ে বিস্তারিত আলোচনা',
    instructor: 'ড. রহমান আলী',
    duration: '৪ সপ্তাহ',
    students: 1250,
    rating: 4.8,
    progress: 75,
    thumbnail: '/api/placeholder/800/400',
    category: 'বাংলা'
  };

  const tutorials = [
    {
      id: 1,
      title: 'বাংলা ব্যাকরণের পরিচয়',
      duration: '১৫ মিনিট',
      isCompleted: true,
      videoUrl: '/api/placeholder/800/400',
      description: 'বাংলা ব্যাকরণের মৌলিক ধারণা এবং এর গুরুত্ব'
    },
    {
      id: 2,
      title: 'বিশেষ্য ও বিশেষণ',
      duration: '২০ মিনিট',
      isCompleted: true,
      videoUrl: '/api/placeholder/800/400',
      description: 'বিশেষ্য ও বিশেষণের পার্থক্য এবং ব্যবহার'
    },
    {
      id: 3,
      title: 'ক্রিয়া ও ক্রিয়াবিশেষণ',
      duration: '১৮ মিনিট',
      isCompleted: false,
      videoUrl: '/api/placeholder/800/400',
      description: 'ক্রিয়া এবং ক্রিয়াবিশেষণের ধারণা'
    },
    {
      id: 4,
      title: 'বাংলা সাহিত্যের ইতিহাস',
      duration: '২৫ মিনিট',
      isCompleted: false,
      videoUrl: '/api/placeholder/800/400',
      description: 'বাংলা সাহিত্যের প্রাচীন থেকে আধুনিক যুগ'
    }
  ];

  const assignments = [
    {
      id: 1,
      title: 'ব্যাকরণ অনুশীলন',
      description: 'বাংলা ব্যাকরণের বিভিন্ন নিয়ম নিয়ে অনুশীলনমূলক কাজ',
      dueDate: '২০২৪-০১-১৫',
      status: 'submitted',
      points: 100,
      submittedAt: '২০২৪-০১-১০'
    },
    {
      id: 2,
      title: 'সাহিত্য বিশ্লেষণ',
      description: 'কোনো একটি বাংলা কবিতা বা গল্পের বিশ্লেষণ',
      dueDate: '২০২৪-০১-২০',
      status: 'pending',
      points: 150
    }
  ];

  const exams = [
    {
      id: 1,
      title: 'মধ্যবর্তী পরীক্ষা',
      description: 'ব্যাকরণ অংশের মধ্যবর্তী মূল্যায়ন',
      duration: '৩০ মিনিট',
      questions: 20,
      status: 'completed',
      score: 85,
      maxScore: 100,
      completedAt: '২০২৪-০১-০৮'
    },
    {
      id: 2,
      title: 'চূড়ান্ত পরীক্ষা',
      description: 'সম্পূর্ণ কোর্সের চূড়ান্ত মূল্যায়ন',
      duration: '৬০ মিনিট',
      questions: 50,
      status: 'available',
      maxScore: 100
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">সম্পন্ন</Badge>;
      case 'submitted':
        return <Badge className="bg-blue-100 text-blue-800">জমা দেওয়া</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">অপেক্ষমান</Badge>;
      case 'available':
        return <Badge className="bg-green-100 text-green-800">উপলব্ধ</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                ড্যাশবোর্ডে ফিরুন
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{courseData.title}</h1>
              <p className="text-gray-600">{courseData.instructor}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">প্রগতি</p>
              <p className="text-lg font-semibold">{courseData.progress}%</p>
            </div>
            <Progress value={courseData.progress} className="w-24" />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="tutorials">টিউটোরিয়াল</TabsTrigger>
              <TabsTrigger value="assignments">অ্যাসাইনমেন্ট</TabsTrigger>
              <TabsTrigger value="exams">পরীক্ষা</TabsTrigger>
              <TabsTrigger value="resources">উপকরণ</TabsTrigger>
            </TabsList>

            {/* Tutorials Tab */}
            <TabsContent value="tutorials" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Video Player */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-gradient-to-br from-green-500 to-emerald-600">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                          >
                            <Play className="h-10 w-10 text-white ml-1" />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-white/90 text-gray-800">
                            {tutorials[2]?.duration}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{tutorials[2]?.title}</h3>
                        <p className="text-gray-600">{tutorials[2]?.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Tutorial List */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>টিউটোরিয়াল তালিকা</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {tutorials.map((tutorial, index) => (
                        <motion.div
                          key={tutorial.id}
                          whileHover={{ scale: 1.02 }}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            index === 2 ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              tutorial.isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {tutorial.isCompleted ? (
                                <Award className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{tutorial.title}</h4>
                              <p className="text-xs text-gray-500">{tutorial.duration}</p>
                            </div>
                            {tutorial.isCompleted && (
                              <Badge variant="secondary" className="text-xs">সম্পন্ন</Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {assignments.map((assignment) => (
                  <motion.div
                    key={assignment.id}
                    whileHover={{ y: -2 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                          {getStatusBadge(assignment.status)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600">{assignment.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>শেষ তারিখ: {assignment.dueDate}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4" />
                            <span>{assignment.points} পয়েন্ট</span>
                          </div>
                        </div>

                        {assignment.status === 'submitted' && (
                          <div className="p-3 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-800">
                              জমা দেওয়া হয়েছে: {assignment.submittedAt}
                            </p>
                          </div>
                        )}

                        <div className="flex space-x-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            ডাউনলোড
                          </Button>
                          {assignment.status === 'pending' && (
                            <Button 
                              size="sm" 
                              className="flex-1"
                              onClick={() => {
                                setSelectedAssignment(assignment);
                                setShowAssignmentModal(true);
                              }}
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              জমা দিন
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Exams Tab */}
            <TabsContent value="exams" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {exams.map((exam) => (
                  <motion.div
                    key={exam.id}
                    whileHover={{ y: -2 }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{exam.title}</CardTitle>
                          {getStatusBadge(exam.status)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600">{exam.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{exam.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <span>{exam.questions} প্রশ্ন</span>
                          </div>
                        </div>

                        {exam.status === 'completed' && (
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-green-800">স্কোর</span>
                              <span className="font-semibold text-green-800">
                                {exam.score}/{exam.maxScore}
                              </span>
                            </div>
                            <p className="text-xs text-green-600 mt-1">
                              সম্পন্ন: {exam.completedAt}
                            </p>
                          </div>
                        )}

                        <div className="flex space-x-3">
                          {exam.status === 'completed' ? (
                            <Button variant="outline" size="sm" className="flex-1">
                              <Award className="h-4 w-4 mr-2" />
                              ফলাফল দেখুন
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              className="flex-1"
                              onClick={() => {
                                setSelectedExam(exam);
                                setShowExamModal(true);
                              }}
                            >
                              <ClipboardCheck className="h-4 w-4 mr-2" />
                              পরীক্ষা শুরু করুন
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'ব্যাকরণ বই', type: 'PDF', size: '2.5 MB' },
                  { title: 'সাহিত্য সংকলন', type: 'PDF', size: '1.8 MB' },
                  { title: 'অনুশীলন প্রশ্ন', type: 'PDF', size: '1.2 MB' },
                  { title: 'ভিডিও লেকচার', type: 'MP4', size: '45 MB' },
                  { title: 'অডিও ফাইল', type: 'MP3', size: '12 MB' },
                  { title: 'প্রেজেন্টেশন', type: 'PPT', size: '8.5 MB' }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Download className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{resource.title}</h4>
                            <p className="text-sm text-gray-500">{resource.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{resource.size}</span>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <div className="space-y-6">
            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle>কোর্স তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{courseData.students} শিক্ষার্থী</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{courseData.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{courseData.rating} রেটিং</span>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>অগ্রগতি</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>সামগ্রিক</span>
                    <span>{courseData.progress}%</span>
                  </div>
                  <Progress value={courseData.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-green-600">২</p>
                    <p className="text-gray-600">সম্পন্ন</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-blue-600">২</p>
                    <p className="text-gray-600">অবশিষ্ট</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discussion */}
            <Card>
              <CardHeader>
                <CardTitle>আলোচনা</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  আলোচনায় যোগ দিন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Assignment Submission Modal */}
      {showAssignmentModal && selectedAssignment && (
        <AssignmentSubmission
          assignment={selectedAssignment}
          onClose={() => {
            setShowAssignmentModal(false);
            setSelectedAssignment(null);
          }}
        />
      )}

      {/* Exam Interface Modal */}
      {showExamModal && selectedExam && (
        <ExamInterface
          exam={selectedExam}
          onClose={() => {
            setShowExamModal(false);
            setSelectedExam(null);
          }}
        />
      )}
    </div>
  );
};

export default CourseInterface;
