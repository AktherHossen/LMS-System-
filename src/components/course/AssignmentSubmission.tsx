import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AssignmentSubmissionProps {
  assignment: {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    points: number;
  };
  onClose: () => void;
}

const AssignmentSubmission: React.FC<AssignmentSubmissionProps> = ({ assignment, onClose }) => {
  const [submissionText, setSubmissionText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">অ্যাসাইনমেন্ট জমা দেওয়া হয়েছে!</h3>
            <p className="text-gray-600 mb-4">
              আপনার অ্যাসাইনমেন্ট সফলভাবে জমা দেওয়া হয়েছে। ফলাফল শীঘ্রই জানানো হবে।
            </p>
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
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{assignment.title}</CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Assignment Details */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">অ্যাসাইনমেন্ট বিবরণ</h4>
              <p className="text-gray-600 mb-3">{assignment.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>শেষ তারিখ: {assignment.dueDate}</span>
                <span>{assignment.points} পয়েন্ট</span>
              </div>
            </div>

            {/* Text Submission */}
            <div className="space-y-2">
              <label className="text-sm font-medium">আপনার উত্তর লিখুন</label>
              <Textarea
                placeholder="এখানে আপনার উত্তর লিখুন..."
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
                rows={8}
                className="resize-none"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium">ফাইল আপলোড করুন</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  ফাইল এখানে টেনে আনুন অথবা ক্লিক করুন
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button variant="outline" size="sm" asChild>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    ফাইল নির্বাচন করুন
                  </label>
                </Button>
              </div>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium">আপলোড করা ফাইল</label>
                <div className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructions */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                দয়া করে নিশ্চিত করুন যে আপনার উত্তর সম্পূর্ণ এবং প্রয়োজনীয় ফাইলসমূহ আপলোড করা হয়েছে।
                জমা দেওয়ার পর আর সম্পাদনা করা যাবে না।
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button variant="outline" onClick={onClose} className="flex-1">
                বাতিল
              </Button>
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting || (!submissionText.trim() && uploadedFiles.length === 0)}
                className="flex-1"
              >
                {isSubmitting ? 'জমা দেওয়া হচ্ছে...' : 'জমা দিন'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AssignmentSubmission;
