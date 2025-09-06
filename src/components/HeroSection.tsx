import { Button } from "@/components/ui/button";
import { Play, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              বাংলাদেশের সেরা 
              <span className="text-primary"> অনলাইন শিক্ষা</span> প্ল্যাটফর্ম
            </h1>
            <p className="text-lg text-muted-foreground">
              HSC, SSC এবং ভর্তি পরীক্ষার জন্য দেশের সেরা শিক্ষকদের কাছ থেকে মানসম্মত শিক্ষা নিন। 
              আপনার স্বপ্নের ভার্সিটিতে ভর্তির নিশ্চয়তা পান।
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg">
              <Play className="w-5 h-5 mr-2" />
              ফ্রি ক্লাস দেখুন
            </Button>
            <Button variant="outline" size="lg">
              কোর্স ব্রাউজ করুন
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span><strong>50,000+</strong> শিক্ষার্থী</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary" />
              <span><strong>4.9/5</strong> রেটিং</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              <span><strong>2000+</strong> ভিডিও লেকচার</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="অনলাইন শিক্ষা" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-lg border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">সফলতার হার</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;