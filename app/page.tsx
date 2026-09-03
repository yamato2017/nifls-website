import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SchoolFacts from "@/components/SchoolFacts";
import SchoolBuildings from "@/components/SchoolBuildings";
import News from "@/components/News";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Dormitory from "@/components/Dormitory";
import Tuition from "@/components/Tuition";
import Documents from "@/components/Documents";
import UsefulLinks from "@/components/UsefulLinks";
import Footer from "@/components/Footer";

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