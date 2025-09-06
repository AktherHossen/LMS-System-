import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Calendar, Award, BookOpen, Clock, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.user_metadata?.full_name || '',
    email: user?.email || '',
    phone: '',
    bio: 'আমি একজন শিক্ষার্থী যিনি নতুন নতুন বিষয় শিখতে পছন্দ করি।',
    location: 'ঢাকা, বাংলাদেশ'
  });

  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSave = () => {
    // Here you would typically save the data to your backend
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      fullName: user?.user_metadata?.full_name || '',
      email: user?.email || '',
      phone: '',
      bio: 'আমি একজন শিক্ষার্থী যিনি নতুন নতুন বিষয় শিখতে পছন্দ করি।',
      location: 'ঢাকা, বাংলাদেশ'
    });
    setIsEditing(false);
  };

  const achievements = [
    { title: 'প্রথম কোর্স সম্পন্ন', description: 'বাংলা ব্যাকরণ কোর্স সম্পন্ন', date: '২০২৪-০১-১০', icon: Award },
    { title: '১০০% অ্যাসাইনমেন্ট', description: 'সকল অ্যাসাইনমেন্ট সম্পন্ন', date: '২০২৪-০১-০৮', icon: BookOpen },
    { title: '৫০ ঘণ্টা শেখা', description: 'মোট ৫০ ঘণ্টা শেখার সময়', date: '২০২৪-০১-০৫', icon: Clock }
  ];

  const stats = [
    { label: 'সম্পন্ন কোর্স', value: '12', color: 'text-green-600' },
    { label: 'চলমান কোর্স', value: '6', color: 'text-blue-600' },
    { label: 'মোট পয়েন্ট', value: '2,450', color: 'text-purple-600' },
    { label: 'শেখার সময়', value: '৪৮ ঘণ্টা', color: 'text-orange-600' }
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">প্রোফাইল</h1>
        <p className="text-gray-600 text-lg">
          আপনার ব্যক্তিগত তথ্য এবং অগ্রগতি দেখুন
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>ব্যক্তিগত তথ্য</CardTitle>
                <Button
                  variant={isEditing ? "outline" : "default"}
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? (
                    <>
                      <X className="h-4 w-4 mr-2" />
                      বাতিল
                    </>
                  ) : (
                    <>
                      <Edit className="h-4 w-4 mr-2" />
                      সম্পাদনা
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {getInitials(displayName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{displayName}</h3>
                  <p className="text-gray-600">সদস্যতা: {user?.created_at ? new Date(user.created_at).toLocaleDateString('bn-BD') : 'N/A'}</p>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-2">
                      ছবি পরিবর্তন করুন
                    </Button>
                  )}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">পূর্ণ নাম</Label>
                  {isEditing ? (
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{formData.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">ইমেইল</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{formData.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">ফোন নম্বর</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{formData.phone || 'নির্ধারিত হয়নি'}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">অবস্থান</Label>
                  {isEditing ? (
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{formData.location}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">আমার সম্পর্কে</Label>
                {isEditing ? (
                  <textarea
                    id="bio"
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                ) : (
                  <p className="text-gray-900 py-2">{formData.bio}</p>
                )}
              </div>

              {isEditing && (
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={handleCancel}>
                    বাতিল
                  </Button>
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    সংরক্ষণ করুন
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>পরিসংখ্যান</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>অর্জনসমূহ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Learning Progress */}
          <Card>
            <CardHeader>
              <CardTitle>শেখার অগ্রগতি</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">এই মাসে</span>
                  <span className="font-medium">৭৮%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">এই সপ্তাহে</span>
                  <span className="font-medium">৪৫%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">সর্বমোট</span>
                  <span className="font-medium">৬৫%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
