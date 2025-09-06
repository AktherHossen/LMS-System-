import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Calculator, Users, Trophy, Microscope } from "lucide-react";

const categories = [
  {
    title: "এইচএসসি কোর্স",
    icon: BookOpen,
    description: "সকল বিষয়ের সম্পূর্ণ সিলেবাস",
    students: "25,000+",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "এসএসসি কোর্স", 
    icon: Calculator,
    description: "গণিত, বিজ্ঞান ও অন্যান্য বিষয়",
    students: "20,000+",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "ভর্তি প্রস্তুতি",
    icon: Trophy,
    description: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষা",
    students: "15,000+",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "চাকরি প্রস্তুতি",
    icon: Users,
    description: "বিসিএস ও ব্যাংক জব প্রস্তুতি",
    students: "10,000+",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "প্রযুক্তি কোর্স",
    icon: Microscope,
    description: "প্রোগ্রামিং ও ডিজিটাল স্কিল",
    students: "8,000+",
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

const CourseCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমাদের কোর্স ক্যাটাগরিসমূহ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            বিভিন্ন পর্যায়ের শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা কোর্স
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-[var(--course-shadow)] transition-all duration-300 cursor-pointer border-border">
                <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <div className="text-sm text-primary font-medium mb-4">
                  {category.students} শিক্ষার্থী
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  দেখুন
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;