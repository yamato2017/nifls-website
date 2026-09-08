import Header from "@/components/en/Header";
import Hero from "@/components/en/Hero";
import SchoolFacts from "@/components/en/SchoolFacts";
import SchoolBuildings from "@/components/en/SchoolBuildings";
import News from "@/components/en/News";
import About from "@/components/en/About";
import Courses from "@/components/en/Courses";
import Dormitory from "@/components/en/Dormitory";
import Tuition from "@/components/en/Tuition";
import Documents from "@/components/en/Documents";
import UsefulLinks from "@/components/en/UsefulLinks";
import Footer from "@/components/en/Footer";

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-[#EEF6FB] text-[#082F69]">
      <Header />
      <Hero />
      <SchoolFacts />
      <SchoolBuildings />
      <News />
      <About />
      <Courses />
      <Dormitory />
      <Tuition />
      <Documents />
      <UsefulLinks />
      <Footer />
    </main>
  );
}