import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "আমাদের ঠিকানা",
      details: [
        "EduBangla প্রধান অফিস",
        "ধানমন্ডি, ঢাকা-১২০৫",
        "বাংলাদেশ"
      ]
    },
    {
      icon: Phone,
      title: "ফোন নম্বর",
      details: [
        "+৮৮০ ১৭০০ ০০০ ০০০",
        "+৮৮০ ১৮০০ ০০০ ০০০",
        "হটলাইন: ১৬২৪৭"
      ]
    },
    {
      icon: Mail,
      title: "ইমেইল ঠিকানা",
      details: [
        "info@edubangla.com",
        "support@edubangla.com",
        "admission@edubangla.com"
      ]
    },
    {
      icon: Clock,
      title: "অফিস সময়",
      details: [
        "সকাল ৯:০০ - রাত ৯:০০",
        "রবিবার থেকে বৃহস্পতিবার",
        "শুক্রবার: সকাল ৯:০০ - বিকাল ৫:০০"
      ]
    }
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "লাইভ চ্যাট",
      description: "তাৎক্ষণিক সাহায্যের জন্য",
      availability: "২৪/৭ উপলব্ধ",
      action: "চ্যাট শুরু করুন"
    },
    {
      icon: Headphones,
      title: "ফোন সাপোর্ট",
      description: "সরাসরি কথা বলুন আমাদের সাথে",
      availability: "সকাল ৯:০০ - রাত ৯:০০",
      action: "কল করুন"
    },
    {
      icon: Mail,
      title: "ইমেইল সাপোর্ট",
      description: "বিস্তারিত সমস্যার জন্য",
      availability: "২৪ ঘন্টার মধ্যে উত্তর",
      action: "ইমেইল পাঠান"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            যোগাযোগ করুন
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন। আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার প্রয়োজনে 
            আমরা সর্বদা আপনার পাশে আছি।
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  আমাদের একটি বার্তা পাঠান
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        আপনার নাম *
                      </label>
                      <Input placeholder="পূর্ণ নাম লিখুন" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ইমেইল ঠিকানা *
                      </label>
                      <Input type="email" placeholder="example@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        ফোন নম্বর
                      </label>
                      <Input placeholder="+৮৮০ ১৭০০ ০০০ ০০০" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        বিষয়
                      </label>
                      <Input placeholder="আপনার প্রশ্নের বিষয়" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      বার্তা *
                    </label>
                    <Textarea 
                      placeholder="আপনার প্রশ্ন বা মন্তব্য বিস্তারিত লিখুন..."
                      rows={6}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    বার্তা পাঠান
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  যোগাযোগের তথ্য
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              সাপোর্ট চ্যানেল
            </h2>
            <p className="text-lg text-muted-foreground">
              আপনার সুবিধামতো যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-[var(--course-shadow)] transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {channel.description}
                  </p>
                  <p className="text-xs text-primary font-medium mb-4">
                    {channel.availability}
                  </p>
                  <Button variant="outline" className="w-full">
                    {channel.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              সচরাচর জিজ্ঞাসিত প্রশ্ন
            </h2>
            <p className="text-lg text-muted-foreground">
              আপনার প্রশ্নের উত্তর এখানেই পেতে পারেন
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "কোর্স কিনার পর কতদিন এক্সেস পাবো?",
                  answer: "আমাদের সকল কোর্সে লাইফটাইম এক্সেস দেওয়া হয়। একবার কিনলে আজীবন দেখতে পারবেন।"
                },
                {
                  question: "কোর্স ফি ফেরত পাওয়া যাবে কি?",
                  answer: "কোর্স কেনার ৭ দিনের মধ্যে সন্তুষ্ট না হলে ১০০% অর্থ ফেরত দেওয়া হয়।"
                },
                {
                  question: "লাইভ ক্লাসে অংশ নিতে পারবো কি?",
                  answer: "হ্যাঁ, সকল কোর্সে নিয়মিত লাইভ ক্লাস এবং Q&A সেশন থাকে।"
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;