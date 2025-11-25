import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/layout/HeroSection";
import TableOfContents from "../components/layout/TableOfContents";
import Overview from "../components/layout/Overview";
import CUETPrepPrograms from "../components/layout/CUETPrepPrograms";
import SubjectsCovered from "../components/layout/SubjectsCovered";
import AchieversSpeak from "../components/layout/AchieversSpeak";
import PedagogySection from "../components/layout/PedagogySection";
import CourseCuratedBy from "../components/layout/CourseCuratedBy";
import AboutCUET2026 from "../components/layout/AboutCUET2026";
import {FAQs } from "@/components/layout";
import CoursesCarousel from "@/components/layout/CoursesCarousel";
// import MentorGrid from "@compoents/layout/
// import DoubtForm from "../components/layout/DoubtForm";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* <doubtForm />  */}
      <TableOfContents />
      <Overview />
      <CUETPrepPrograms />
      <SubjectsCovered />
      <AchieversSpeak />
      <PedagogySection />
      <CourseCuratedBy />
      {/* <MentorGrid/> */}
      <AboutCUET2026 /> 
      <FAQs/>
       <CoursesCarousel/>
     
    </>
  );
}