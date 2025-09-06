import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="font-bold text-secondary-foreground">E</span>
            </div>
            <span className="text-xl font-bold">EduBangla</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-secondary transition-colors">হোম</a>
          <a href="#" className="hover:text-secondary transition-colors">কোর্স</a>
          <a href="#" className="hover:text-secondary transition-colors">HSC</a>
          <a href="#" className="hover:text-secondary transition-colors">SSC</a>
          <a href="#" className="hover:text-secondary transition-colors">ভর্তি প্রস্তুতি</a>
          <a href="#" className="hover:text-secondary transition-colors">যোগাযোগ</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="secondary" size="sm" className="hidden md:flex">
            <Search className="w-4 h-4 mr-1" />
            সার্চ করুন
          </Button>
          <Button variant="hero" size="sm">
            <User className="w-4 h-4 mr-1" />
            লগইন
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;