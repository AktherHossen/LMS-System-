import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "আমাদের লক্ষ্য",
      description: "প্রতিটি শিক্ষার্থীর স্বপ্ন পূরণে সহায়তা করা এবং মানসম্মত শিক্ষার মাধ্যমে তাদের ভবিষ্যৎ গড়তে সাহায্য করা।"
    },
    {
      icon: Heart,
      title: "আমাদের প্রতিশ্রুতি",
      description: "শিক্ষার্থীদের জন্য সর্বোত্তম শিক্ষার পরিবেশ তৈরি করা এবং তাদের সাফল্যের জন্য নিরলস পরিশ্রম করা।"
    },
    {
      icon: Award,
      title: "আমাদের মান",
      description: "উন্নত শিক্ষা পদ্ধতি, অভিজ্ঞ শিক্ষকমন্ডলী এবং আধুনিক প্রযুক্তির মাধ্যমে শিক্ষার মান নিশ্চিত করা।"
    },
    {
      icon: Users,
      title: "আমাদের দল",
      description: "দেশের সেরা শিক্ষক ও বিশেষজ্ঞদের নিয়ে গঠিত আমাদের টিম শিক্ষার্থীদের সেবায় নিয়োজিত।"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EduBangla হলো বাংলাদেশের অগ্রণী অনলাইন শিক্ষা প্ল্যাটফর্ম যা ২০১৮ সাল থেকে 
            হাজার হাজার শিক্ষার্থীর স্বপ্ন পূরণে কাজ করে যাচ্ছে।
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">আমাদের দৃষ্টিভঙ্গি</h2>
              <p className="text-muted-foreground mb-6">
                আমাদের স্বপ্ন হলো বাংলাদেশের প্রতিটি শিক্ষার্থীর কাছে মানসম্মত শিক্ষা পৌঁছে দেওয়া। 
                আমরা বিশ্বাস করি যে, সঠিক দিকনির্দেশনা ও উন্নত শিক্ষা পদ্ধতির মাধ্যমে প্রতিটি শিক্ষার্থী 
                তার লক্ষ্য অর্জন করতে পারে।
              </p>
              <p className="text-muted-foreground">
                আমাদের অভিজ্ঞ শিক্ষকমন্ডলী ও আধুনিক প্রযুক্তির সমন্বয়ে আমরা এমন একটি শিক্ষার পরিবেশ 
                তৈরি করেছি যা শিক্ষার্থীদের জন্য সহজ, কার্যকর এবং আনন্দদায়ক।
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">বছরের অভিজ্ঞতা</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">সফল শিক্ষার্থী</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">কোর্স</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">সফলতার হার</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              আমাদের মূল্যবোধ
            </h2>
            <p className="text-lg text-muted-foreground">
              যে নীতিমালা আমাদের পথ প্রদর্শন করে
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              আমাদের নেতৃত্ব
            </h2>
            <p className="text-lg text-muted-foreground">
              অভিজ্ঞ ও দক্ষ নেতৃত্বে এগিয়ে চলেছে EduBangla
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">এম</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">মোহাম্মদ রহিম</h3>
              <p className="text-primary mb-2">প্রতিষ্ঠাতা ও সিইও</p>
              <p className="text-muted-foreground text-sm">
                ঢাকা বিশ্ববিদ্যালয়ের প্রাক্তন শিক্ষক এবং শিক্ষা ক্ষেত্রে ১৫ বছরের অভিজ্ঞতা।
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">ফা</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">ড. ফাতেমা খাতুন</h3>
              <p className="text-primary mb-2">একাডেমিক ডিরেক্টর</p>
              <p className="text-muted-foreground text-sm">
                বুয়েটের প্রাক্তন অধ্যাপক এবং কারিকুলাম ডেভেলপমেন্ট বিশেষজ্ঞ।
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">ক</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">করিম উদ্দিন</h3>
              <p className="text-primary mb-2">টেকনোলজি ডিরেক্টর</p>
              <p className="text-muted-foreground text-sm">
                আইটি ইন্ডাস্ট্রিতে ১২ বছরের অভিজ্ঞতা এবং এডটেক প্ল্যাটফর্ম বিশেষজ্ঞ।
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;