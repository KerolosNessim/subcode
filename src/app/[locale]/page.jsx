import AboutSection from "@/components/home/about-section";
import BlogsSection from "@/components/home/blogs-section";
import ClientSection from "@/components/home/client-reviews";
import HeroSection from "@/components/home/hero-section";
import TeamSection from "@/components/home/team-section";
import WorksSection from "@/components/home/works-section";
import Counters from "@/components/shared/counters";
import CustomMarquee from "@/components/shared/custom-marquee";
import StackSection from "@/components/shared/stacked-cards-section";


export default function Home() {
  return (
    <main >
      <div className="md:pt-40 pt-30 bg-[url('/images/hero-bg.svg')] bg-no-repeat">
        <HeroSection />
        <AboutSection />
      </div>
      <StackSection />
      <div className="py-20 bg-[url('/images/hero-bg.svg')] bg-center ">
        <CustomMarquee />
        <WorksSection />
        <Counters />
        <BlogsSection />
        <ClientSection />
        <TeamSection />
      </div>
    </main>)
}