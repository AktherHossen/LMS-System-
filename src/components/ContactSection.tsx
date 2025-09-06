import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            যোগাযোগ করুন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            কোনো প্রশ্ন বা সহায়তার প্রয়োজন? আমরা এখানে আছি আপনার জন্য
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                আমাদের সাথে যোগাযোগ করুন
              </h3>
              <p className="text-muted-foreground mb-8">
                শিক্ষার্থীদের সেবায় আমরা সর্বদা প্রস্তুত। যেকোনো সময় যোগাযোগ করুন।
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-4 flex items-center space-x-4 border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ফোন</div>
                  <div className="text-muted-foreground">+৮৮০ ১৭১২ ৩৪৫৬৭২</div>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4 border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ইমেইল</div>
                  <div className="text-muted-foreground">info@edubangla.com</div>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4 border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">ঠিকানা</div>
                  <div className="text-muted-foreground">ধানমন্ডি, ঢাকা-১২০৫</div>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4 border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">সাপোর্ট</div>
                  <div className="text-muted-foreground">২৪/৭ অনলাইন সাপোর্ট</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              আমাদের লিখুন
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    নাম *
                  </label>
                  <Input placeholder="আপনার নাম লিখুন" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ইমেইল *
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  বিষয়
                </label>
                <Input placeholder="বিষয় লিখুন" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  বার্তা *
                </label>
                <Textarea 
                  placeholder="আপনার বার্তা লিখুন..."
                  rows={5}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                পাঠান
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;