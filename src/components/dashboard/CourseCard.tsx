import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import CourseThumbnail from './CourseThumbnail';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    progress: number;
    duration: string;
    students: number;
    rating: number;
    instructor: string;
    category: string;
  };
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <motion.div
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
          {/* Course Info */}
          <div className="space-y-3">
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
                    <Link to={`/course/${course.id}`}>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        size="sm"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        {course.progress > 0 ? 'শেখা চালিয়ে যান' : 'শেখা শুরু করুন'}
                      </Button>
                    </Link>
                  </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
