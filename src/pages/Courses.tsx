import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "HSC পদার্থবিজ্ঞান সম্পূর্ণ কোর্স",
      instructor: "ড. আবুল কালাম আজাদ",
      price: 2500,
      originalPrice: 3500,
      rating: 4.9,
      students: 1250,
      duration: "120 ঘন্টা",
      category: "HSC",
      level: "উন্নত",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "SSC গণিত সমাধান কৌশল",
      instructor: "প্রফেসর রহিমা বেগম",
      price: 1800,
      originalPrice: 2500,
      rating: 4.8,
      students: 2100,
      duration: "80 ঘন্টা",
      category: "SSC",
      level: "মাধ্যমিক",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "ডাক্তারি ভর্তি প্রস্তুতি",
      instructor: "ড. সালমা আক্তার",
      price: 4500,
      originalPrice: 6000,
      rating: 4.9,
      students: 850,
      duration: "200 ঘন্টা",
      category: "ভর্তি",
      level: "উন্নত",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "ইঞ্জিনিয়ারিং ভর্তি গণিত",
      instructor: "প্রফেসর আনিসুর রহমান",
      price: 3500,
      originalPrice: 4500,
      rating: 4.7,
      students: 950,
      duration: "150 ঘন্টা",
      category: "ভর্তি",
      level: "উন্নত",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "HSC রসায়ন ল্যাব ওয়ার্ক",
      instructor: "ড. নাসির উদ্দিন",
      price: 2200,
      originalPrice: 3000,
      rating: 4.6,
      students: 720,
      duration: "90 ঘন্টা",
      category: "HSC",
      level: "মাধ্যমিক",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "বিসিএস প্রিলিমিনারি প্রস্তুতি",
      instructor: "জনাব করিম উল্লাহ",
      price: 3200,
      originalPrice: 4200,
      rating: 4.8,
      students: 1850,
      duration: "180 ঘন্টা",
      category: "চাকরি",
      level: "উন্নত",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["সব", "HSC", "SSC", "ভর্তি", "চাকরি", "প্রযুক্তি"];
  const levels = ["সব", "প্রাথমিক", "মাধ্যমিক", "উন্নত"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            সব কোর্স
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আপনার প্রয়োজন অনুযায়ী সেরা কোর্স খুঁজে নিন। HSC, SSC থেকে শুরু করে 
            ভর্তি প্রস্তুতি এবং চাকরির প্রস্তুতি - সব কিছুই এক জায়গায়।
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="কোর্স খুঁজুন..."
                  className="pl-10 w-64"
                />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="ক্যাটাগরি" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="লেভেল" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{courses.length} টি কোর্স পাওয়া গেছে</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-[var(--course-shadow)] transition-all duration-300">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.instructor}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-secondary fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ৳{course.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ৳{course.originalPrice}
                      </span>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% ছাড়
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Link to={`/course/${course.id}`}>
                      <Button className="w-full">
                        বিস্তারিত দেখুন
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              আরো কোর্স লোড করুন
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;