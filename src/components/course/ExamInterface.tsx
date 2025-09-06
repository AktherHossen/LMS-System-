import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ExamInterfaceProps {
  exam: {
    id: number;
    title: string;
    description: string;
    duration: string;
    questions: number;
    maxScore: number;
  };
  onClose: () => void;
}

const ExamInterface: React.FC<ExamInterfaceProps> = ({ exam, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(parseInt(exam.duration) * 60); // Convert minutes to seconds
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Sample questions - in real app, this would come from API
  const questions = [
    {
      id: 1,
      question: 'বাংলা ব্যাকরণে "বিশেষ্য" কী?',
      options: [
        'যে শব্দ দ্বারা নাম বোঝায়',
        'যে শব্দ দ্বারা গুণ বোঝায়',
        'যে শব্দ দ্বারা কাজ বোঝায়',
        'যে শব্দ দ্বারা সংখ্যা বোঝায়'
      ],
      correctAnswer: 'যে শব্দ দ্বারা নাম বোঝায়'
    },
    {
      id: 2,
      question: 'বাংলা ভাষায় কতটি স্বরবর্ণ আছে?',
      options: ['১১টি', '১২টি', '১৩টি', '১৪টি'],
      correctAnswer: '১১টি'
    },
    {
      id: 3,
      question: '"রবীন্দ্রনাথ ঠাকুর" কোন যুগের কবি?',
      options: ['মধ্যযুগ', 'আধুনিক যুগ', 'রোমান্টিক যুগ', 'বাংলা নবজাগরণ যুগ'],
      correctAnswer: 'বাংলা নবজাগরণ যুগ'
    }
  ];

  useEffect(() => {
    if (isExamStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmitExam();
    }
  }, [timeLeft, isExamStarted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const calculatedScore = Math.round((correctAnswers / questions.length) * exam.maxScore);
    setScore(calculatedScore);
    setIsExamCompleted(true);
  };

  const startExam = () => {
    setIsExamStarted(true);
  };

  if (!isExamStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{exam.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">{exam.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">সময়</span>
                <span className="font-medium">{exam.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">প্রশ্ন সংখ্যা</span>
                <span className="font-medium">{exam.questions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">সর্বোচ্চ নম্বর</span>
                <span className="font-medium">{exam.maxScore}</span>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                পরীক্ষা শুরু করার পর সময় গণনা শুরু হবে। সময় শেষ হলে স্বয়ংক্রিয়ভাবে জমা দেওয়া হবে।
              </AlertDescription>
            </Alert>

            <div className="flex space-x-3">
              <Button variant="outline" onClick={onClose} className="flex-1">
                বাতিল
              </Button>
              <Button onClick={startExam} className="flex-1">
                পরীক্ষা শুরু করুন
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (isExamCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">পরীক্ষা সম্পন্ন!</h3>
            <div className="space-y-2 mb-4">
              <p className="text-2xl font-bold text-primary">{score}/{exam.maxScore}</p>
              <p className="text-gray-600">
                আপনি {questions.length}টি প্রশ্নের মধ্যে {Object.keys(answers).length}টির উত্তর দিয়েছেন
              </p>
            </div>
            <Button onClick={onClose} className="w-full">
              বন্ধ করুন
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{exam.title}</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span className={`font-mono ${timeLeft < 300 ? 'text-red-500' : 'text-gray-700'}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  ✕
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>প্রশ্ন {currentQuestion + 1} / {questions.length}</span>
              <span>{Object.keys(answers).length} উত্তর দেওয়া হয়েছে</span>
            </div>
            <Progress 
              value={((currentQuestion + 1) / questions.length) * 100} 
              className="h-2" 
            />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Question */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup
                value={answers[questions[currentQuestion].id] || ''}
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                পূর্ববর্তী
              </Button>
              
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <Button
                    key={index}
                    variant={index === currentQuestion ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentQuestion(index)}
                    className="w-8 h-8 p-0"
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>

              {currentQuestion === questions.length - 1 ? (
                <Button onClick={handleSubmitExam}>
                  জমা দিন
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  পরবর্তী
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ExamInterface;
