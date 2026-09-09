import Header from "@/components/zh/Header";
import Hero from "@/components/zh/Hero";
import SchoolFacts from "@/components/zh/SchoolFacts";
import SchoolBuildings from "@/components/zh/SchoolBuildings";
import News from "@/components/zh/News";
import About from "@/components/zh/About";
import Courses from "@/components/zh/Courses";
import Dormitory from "@/components/zh/Dormitory";
import Tuition from "@/components/zh/Tuition";
import Documents from "@/components/zh/Documents";
import UsefulLinks from "@/components/zh/UsefulLinks";
import Footer from "@/components/zh/Footer";

export default function Home() {
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