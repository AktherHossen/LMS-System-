import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Star, BookOpen, Award, Play, Download, Check } from "lucide-react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - in real app, fetch based on ID
  const course = {
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
    image: "/placeholder.svg",
    description: "HSC পদার্থবিজ্ঞানের সম্পূর্ণ সিলেবাস কভার করে এই কোর্সটি তৈরি করা হয়েছে। অভিজ্ঞ শিক্ষকের গাইডেন্সে প্রতিটি টপিক বিস্তারিতভাবে আলোচনা করা হবে।",
    features: [
      "১২০+ ভিডিও লেকচার",
      "১০০+ প্র্যাকটিস প্রশ্ন",
      "মডেল টেস্ট ও সল্যুশন",
      "লাইভ ক্লাস সাপোর্ট",
      "সার্টিফিকেট প্রদান",
      "লাইফটাইম এক্সেস"
    ],
    curriculum: [
      {
        title: "Chapter 1: ভেক্টর",
        lectures: 8,
        duration: "12 ঘন্টা",
        topics: [
          "ভেক্টর পরিচিতি",
          "ভেক্টর যোগ ও বিয়োগ",
          "ভেক্টর গুণ",
          "ভেক্টর সমস্যা সমাধান"
        ]
      },
      {
        title: "Chapter 2: গতিবিদ্যা",
        lectures: 12,
        duration: "18 ঘন্টা",
        topics: [
          "সরল রৈখিক গতি",
          "বৃত্তাকার গতি",
          "প্রক্ষেপণ গতি",
          "আপেক্ষিক গতি"
        ]
      },
      {
        title: "Chapter 3: বলবিদ্যা",
        lectures: 10,
        duration: "15 ঘন্টা",
        topics: [
          "নিউটনের গতি সূত্র",
          "ঘর্ষণ বল",
          "কাজ ও শক্তি",
          "ভরবেগ সংরক্ষণ"
        ]
      }
    ],
    instructor_info: {
      name: "ড. আবুল কালাম আজাদ",
      designation: "প্রাক্তন অধ্যাপক, ঢাকা বিশ্ববিদ্যালয়",
      experience: "১৫ বছর",
      students: "৫০,০০০+",
      courses: "২৫টি",
      bio: "পদার্থবিজ্ঞানে পিএইচডি এবং ১৫ বছরের শিক্ষাদান অভিজ্ঞতা। হাজার হাজার শিক্ষার্থী তার গাইডেন্সে সফল হয়েছে।"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary fill-current" />
                  <span><strong>{course.rating}</strong> ({course.students} রিভিউ)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span><strong>{course.students}</strong> শিক্ষার্থী</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span><strong>{course.duration}</strong> কন্টেন্ট</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span><strong>{course.level}</strong> লেভেল</span>
                </div>
              </div>

              <div className="text-sm text-muted-foreground mb-6">
                শিক্ষক: <span className="text-foreground font-medium">{course.instructor}</span>
              </div>
            </div>

            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <div className="aspect-video bg-muted rounded-lg mb-6 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary">
                      ৳{course.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ৳{course.originalPrice}
                    </span>
                  </div>
                  <Badge variant="destructive">
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% ছাড়
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    এখনই কিনুন
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    ফ্রি ট্রায়াল
                  </Button>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="font-semibold text-foreground">এই কোর্সে যা পাবেন:</h4>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="curriculum">সিলেবাস</TabsTrigger>
                  <TabsTrigger value="instructor">শিক্ষক</TabsTrigger>
                  <TabsTrigger value="reviews">রিভিউ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6">কোর্স কারিকুলাম</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {course.curriculum.map((chapter, index) => (
                        <AccordionItem key={index} value={`chapter-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center justify-between w-full mr-4">
                              <span className="font-medium">{chapter.title}</span>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{chapter.lectures} লেকচার</span>
                                <span>{chapter.duration}</span>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pl-4">
                              {chapter.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center gap-3 py-2">
                                  <Play className="w-4 h-4 text-primary" />
                                  <span className="text-sm">{topic}</span>
                                  <div className="flex items-center gap-1 ml-auto text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    <span>২৫ মিনিট</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">ড</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {course.instructor_info.name}
                        </h3>
                        <p className="text-primary mb-4">{course.instructor_info.designation}</p>
                        <p className="text-muted-foreground mb-6">{course.instructor_info.bio}</p>
                        
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{course.instructor_info.experience}</div>
                            <div className="text-sm text-muted-foreground">অভিজ্ঞতা</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{course.instructor_info.students}</div>
                            <div className="text-sm text-muted-foreground">শিক্ষার্থী</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{course.instructor_info.courses}</div>
                            <div className="text-sm text-muted-foreground">কোর্স</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6">শিক্ষার্থীদের রিভিউ</h3>
                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b border-border pb-6 last:border-b-0">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="font-bold text-primary text-sm">র</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">রাহুল আহমেদ</span>
                                <div className="flex items-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-secondary fill-current" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground">
                                চমৎকার কোর্স! শিক্ষক অত্যন্ত দক্ষ এবং প্রতিটি টপিক খুব সহজভাবে বুঝিয়ে দিয়েছেন। 
                                পদার্থবিজ্ঞানে আমার ভয় এখন আর নেই।
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Related Courses */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-6">সম্পর্কিত কোর্স</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((related) => (
                    <div key={related} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-16 h-12 bg-muted rounded flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">
                          HSC রসায়ন সম্পূর্ণ কোর্স
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">ড. নাসির উদ্দিন</p>
                        <p className="text-sm font-bold text-primary">৳২,২০০</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;