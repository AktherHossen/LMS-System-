import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  User, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const { signOut } = useAuth();

  const navigationItems = [
    {
      name: 'ড্যাশবোর্ড',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'আমার কোর্স',
      href: '/dashboard/courses',
      icon: BookOpen,
    },
    {
      name: 'অ্যাসাইনমেন্ট',
      href: '/dashboard/assignments',
      icon: FileText,
    },
    {
      name: 'প্রোফাইল',
      href: '/dashboard/profile',
      icon: User,
    },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-white border-r border-gray-200 shadow-lg",
          "lg:relative lg:translate-x-0 lg:z-auto lg:shadow-none lg:flex-shrink-0",
          "flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-sm">E</span>
            </div>
            <span className="text-xl font-bold text-gray-900">EduBangla</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:scale-105",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={handleSignOut}
            className="w-full justify-start space-x-3 text-red-600 hover:text-red-700 hover:bg-red-50 hover:scale-105 transition-transform"
          >
            <LogOut className="h-5 w-5" />
            <span>লগআউট</span>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
