import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const SignIn: React.FC = () => {
  const [mode, setMode] = React.useState<'signin' | 'signup'>('signin');

  const handleToggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              হোমে ফিরুন
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {mode === 'signin' ? 'লগইন করুন' : 'নিবন্ধন করুন'}
          </h1>
          <p className="text-gray-600">
            {mode === 'signin' 
              ? 'আপনার অ্যাকাউন্টে প্রবেশ করুন' 
              : 'একটি নতুন অ্যাকাউন্ট তৈরি করুন'
            }
          </p>
        </div>
        
        <AuthForm 
          mode={mode} 
          onToggleMode={handleToggleMode}
        />
      </div>
    </div>
  );
};

export default SignIn;
