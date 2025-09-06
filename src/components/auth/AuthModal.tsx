import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AuthForm from './AuthForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultMode = 'signin' }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);

  const handleToggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin');
  };

  const handleSuccess = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {mode === 'signin' ? 'লগইন করুন' : 'নিবন্ধন করুন'}
          </DialogTitle>
        </DialogHeader>
        <AuthForm 
          mode={mode} 
          onToggleMode={handleToggleMode}
          onSuccess={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
