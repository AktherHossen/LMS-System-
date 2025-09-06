import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Youtube, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-bold text-secondary-foreground">E</span>
              </div>
              <span className="text-xl font-bold">EduBangla</span>
            </div>
            <p className="text-primary-foreground/80">
              বাংলাদেশের শিক্ষার্থীদের জন্য সেরা অনলাইন শিক্ষা প্ল্যাটফর্ম। 
              মানসম্মত শিক্ষা ও সাফল্যের নিশ্চয়তা।
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">কুইক লিংক</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">হোম</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">সব কোর্স</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">শিক্ষকমন্ডলী</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">কোর্স</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-secondary transition-colors">HSC কোর্স</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">SSC কোর্স</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">ভর্তি প্রস্তুতি</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">চাকরি প্রস্তুতি</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">স্কিল ডেভেলপমেন্ট</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">নিউজলেটার</h3>
            <p className="text-primary-foreground/80 mb-4">
              সর্বশেষ কোর্স আপডেট ও অফার পেতে সাবস্ক্রাইব করুন
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="আপনার ইমেইল"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                সাবস্ক্রাইব করুন
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © ২০২৪ EduBangla. সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/80 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">প্রাইভেসি পলিসি</a>
              <a href="#" className="hover:text-secondary transition-colors">শর্তাবলী</a>
              <a href="#" className="hover:text-secondary transition-colors">সাপোর্ট</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;