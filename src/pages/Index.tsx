import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseCategories from "@/components/CourseCategories";
import PopularCourses from "@/components/PopularCourses";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CourseCategories />
      <PopularCourses />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
