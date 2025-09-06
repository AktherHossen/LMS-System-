import { TrendingUp, Users, Award, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "সক্রিয় শিক্ষার্থী",
    description: "দেশব্যাপী"
  },
  {
    icon: BookOpen,
    value: "200+",
    label: "কোর্স সংখ্যা",
    description: "সব বিষয়ে"
  },
  {
    icon: Award,
    value: "95%",
    label: "সফলতার হার",
    description: "ভর্তি পরীক্ষায়"
  },
  {
    icon: TrendingUp,
    value: "4.9/5",
    label: "গড় রেটিং",
    description: "শিক্ষার্থীদের"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-[var(--stats-bg)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আমাদের অর্জনসমূহ
          </h2>
          <p className="text-lg text-muted-foreground">
            সংখ্যার মাধ্যমে আমাদের সাফল্যের গল্প
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-[var(--course-shadow)] transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;