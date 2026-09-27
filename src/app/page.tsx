import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import Introduction from "@/components/hero/Introduction";
import Explore from "@/components/hero/Explore";
import ThreeDExperience from "@/components/three-d/ThreeDExperience";
import Timeline from "@/components/timeline/Timeline";
import Sculptures from "@/components/sculptures/Sculptures";
import Preservation from "@/components/preservation/Preservation";
import Archive from "@/components/archive/Archive";
import OralHistories from "@/components/oral-history/OralHistories";
import PhotoArchive from "@/components/gallery/PhotoArchive";
import SurveyResults from "@/components/survey/SurveyResults";
import About from "@/components/ui/About";
import SearchOverlay from "@/components/ui/SearchOverlay";

export default function Home() {
  return (
    <>
      <Navigation />
      <SearchOverlay />

      <main>
        <Hero />
        <Introduction />
        <Explore />
        <ThreeDExperience />
        <Timeline />
        <Sculptures />
        <Preservation />
        <Archive />
        <OralHistories />
        <PhotoArchive />
        <SurveyResults />
        <About />
      </main>

      <Footer />
    </>
  );
}
