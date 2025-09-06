import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen, Award } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "ড. আবুল কালাম আজাদ",
      designation: "প্রাক্তন অধ্যাপক, ঢাকা বিশ্ববিদ্যালয়",
      subject: "পদার্থবিজ্ঞান",
      experience: "১৫ বছর",
      students: "৫০,০০০+",
      courses: 25,
      rating: 4.9,
      image: "/placeholder.svg",
      bio: "পদার্থবিজ্ঞানে পিএইচডি এবং ১৫ বছরের শিক্ষাদান অভিজ্ঞতা। বিশ্ববিদ্যালয় ভর্তি প্রস্তুতিতে বিশেষজ্ঞ।",
      specialties: ["HSC পদার্থবিজ্ঞান", "ভর্তি প্রস্তুতি", "অলিম্পিয়াড"]
    },
    {
      id: 2,
      name: "প্রফেসর রহিমা বেগম",
      designation: "প্রাক্তন বিভাগীয় প্রধান, চট্টগ্রাম বিশ্ববিদ্যালয়",
      subject: "গণিত",
      experience: "২০ বছর",
      students: "৭৫,০০০+",
      courses: 35,
      rating: 4.8,
      image: "/placeholder.svg",
      bio: "গণিতে এমএসসি এবং ২০ বছরের অভিজ্ঞতা। SSC ও HSC গণিতে অসংখ্য শিক্ষার্থীর সাফল্যের গর্বিত শিক্ষক।",
      specialties: ["SSC গণিত", "HSC গণিত", "উচ্চতর গণিত"]
    },
    {
      id: 3,
      name: "ড. সালমা আক্তার",
      designation: "প্রাক্তন অধ্যাপক, বারডেম হাসপাতাল",
      subject: "জীববিজ্ঞান",
      experience: "১২ বছর",
      students: "৩০,০০০+",
      courses: 18,
      rating: 4.9,
      image: "/placeholder.svg",
      bio: "এমবিবিএস, এমডি এবং মেডিকেল ভর্তি প্রস্তুতিতে বিশেষজ্ঞ। শত শত শিক্ষার্থী তার গাইডেন্সে মেডিকেলে ভর্তি হয়েছে।",
      specialties: ["জীববিজ্ঞান", "মেডিকেল ভর্তি", "এনাটমি"]
    },
    {
      id: 4,
      name: "প্রফেসর আনিসুর রহমান",
      designation: "প্রাক্তন অধ্যাপক, বুয়েট",
      subject: "গণিত ও পদার্থবিজ্ঞান",
      experience: "১৮ বছর",
      students: "৬০,০০০+",
      courses: 30,
      rating: 4.7,
      image: "/placeholder.svg",
      bio: "ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতিতে বিশেষজ্ঞ। বুয়েট, কুয়েট সহ সব ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয়ে ভর্তির গাইড।",
      specialties: ["ইঞ্জিনিয়ারিং ভর্তি", "উচ্চতর গণিত", "পদার্থবিজ্ঞান"]
    },
    {
      id: 5,
      name: "ড. নাসির উদ্দিন",
      designation: "প্রাক্তন অধ্যাপক, জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
      subject: "রসায়ন",
      experience: "১৬ বছর",
      students: "৪৫,০০০+",
      courses: 22,
      rating: 4.6,
      image: "/placeholder.svg",
      bio: "রসায়নে পিএইচডি এবং গবেষণায় বিশেষ অভিজ্ঞতা। HSC রসায়নে শিক্ষার্থীদের দুর্বলতা দূর করতে পারদর্শী।",
      specialties: ["HSC রসায়ন", "অর্গানিক রসায়ন", "ল্যাব ওয়ার্ক"]
    },
    {
      id: 6,
      name: "জনাব করিম উল্লাহ",
      designation: "প্রাক্তন জয়েন্ট সেক্রেটারি",
      subject: "বাংলা ও সাধারণ জ্ঞান",
      experience: "১০ বছর",
      students: "৮০,০০০+",
      courses: 15,
      rating: 4.8,
      image: "/placeholder.svg",
      bio: "বিসিএস ক্যাডার এবং সরকারি চাকরি প্রস্তুতিতে বিশেষজ্ঞ। প্রিলি থেকে ভাইভা পর্যন্ত সম্পূর্ণ গাইডেন্স।",
      specialties: ["বিসিএস প্রস্তুতি", "সাধারণ জ্ঞান", "বাংলা সাহিত্য"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            আমাদের শিক্ষকমন্ডলী
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            দেশের সেরা ও অভিজ্ঞ শিক্ষকদের নিয়ে গঠিত আমাদের টিম। প্রতিটি শিক্ষক তাদের 
            বিষয়ে বিশেষজ্ঞ এবং শিক্ষার্থীদের সাফল্যের জন্য নিবেদিতপ্রাণ।
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">অভিজ্ঞ শিক্ষক</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3,00,000+</div>
              <div className="text-muted-foreground">মোট শিক্ষার্থী</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">সক্রিয় কোর্স</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-muted-foreground">গড় রেটিং</div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden hover:shadow-[var(--course-shadow)] transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">
                        {teacher.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-primary mb-2 line-clamp-2">
                        {teacher.designation}
                      </p>
                      <Badge variant="secondary">{teacher.subject}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {teacher.bio}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap gap-1">
                      {teacher.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center mb-6">
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-secondary fill-current" />
                        <span className="font-bold text-foreground">{teacher.rating}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">রেটিং</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">{teacher.students}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">শিক্ষার্থী</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">{teacher.courses}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">কোর্স</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-bold text-foreground">{teacher.experience}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">অভিজ্ঞতা</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" size="sm">
                      প্রোফাইল দেখুন
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      কোর্স দেখুন
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Teacher CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            শিক্ষক হিসেবে যোগ দিন
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            আপনি কি একজন অভিজ্ঞ শিক্ষক? আমাদের সাথে যোগ দিয়ে হাজার হাজার শিক্ষার্থীর 
            জীবনে ইতিবাচক পরিবর্তন আনুন।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              শিক্ষক হিসেবে আবেদন করুন
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              আরো জানুন
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;