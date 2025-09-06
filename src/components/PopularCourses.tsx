import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Physics 1st Paper | HSC 2025",
    instructor: "রফিক স্যার",
    instructorTitle: "সাবেক শিক্ষক, ঢাকা কলেজ",
    rating: 4.9,
    students: 12000,
    duration: "৮০ ঘন্টা",
    price: "৪,৯৯৯",
    originalPrice: "৭,৯৯৯",
    image: "/api/placeholder/300/200",
    badge: "বেস্ট সেলার",
    level: "HSC"
  },
  {
    id: 2,
    title: "Chemistry 1st Paper | HSC 2025",
    instructor: "নাদিয়া ম্যাম",
    instructorTitle: "প্রভাষক, রাজশাহী কলেজ",
    rating: 4.8,
    students: 9500,
    duration: "৭৫ ঘন্টা",
    price: "৪,৪৯৯",
    originalPrice: "৬,৯৯৯",
    image: "/api/placeholder/300/200",
    badge: "জনপ্রিয়",
    level: "HSC"
  },
  {
    id: 3,
    title: "Higher Math | HSC 2025",
    instructor: "করিম স্যার",
    instructorTitle: "গণিত বিশেষজ্ঞ",
    rating: 4.9,
    students: 15000,
    duration: "১০০ ঘন্টা",
    price: "৫,৯৯৯",
    originalPrice: "৮,৯৯৯",
    image: "/api/placeholder/300/200",
    badge: "এক্সক্লুসিভ",
    level: "HSC"
  },
  {
    id: 4,
    title: "General Math | SSC 2025",
    instructor: "সালমা ম্যাম",
    instructorTitle: "প্রধান শিক্ষক",
    rating: 4.7,
    students: 8000,
    duration: "৬০ ঘন্টা",
    price: "৩,৯৯৯",
    originalPrice: "৫,৯৯৯",
    image: "/api/placeholder/300/200",
    badge: "নতুন",
    level: "SSC"
  }
];

const PopularCourses = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            জনপ্রিয় কোর্সসমূহ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            হাজারো শিক্ষার্থীর পছন্দের কোর্স গুলো এখনই এনরোল করুন
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-[var(--course-shadow)] transition-all duration-300 group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                  {course.badge}
                </Badge>
                <Badge variant="outline" className="absolute top-3 left-3 bg-card">
                  {course.level}
                </Badge>
              </div>
              
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">{course.instructor}</div>
                  <div>{course.instructorTitle}</div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">৳{course.price}</span>
                      <span className="text-sm text-muted-foreground line-through">৳{course.originalPrice}</span>
                    </div>
                  </div>
                  <Button variant="course" size="sm">
                    এনরোল করুন
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            সব কোর্স দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;