import Layout from "./layout";
import DoubtForm from "../components/layout/doubtForm";
import Header from "@/components/layout/ Header";
import NavBar from "../components/layout/NavBar";
import HeroSection from "@/components/layout/HeroSection";
import TableOfContents from "@/components/layout/TableOfContents";
import Footer from "@/components/layout/Footer";
import Overview from "@/components/layout/Overview";
import CUETPrepPrograms from "@/components/layout/CUETPrepPrograms";
import SubjectsCovered from "@/components/layout/SubjectsCovered";
import AchieversSpeak from "@/components/layout/AchieversSpeak";
import PedagogySection from "@/components/layout/PedagogySection";
import CourseCuratedBy from "@/components/layout/CourseCuratedBy";
import AboutCUET2026 from "@/components/layout/AboutCUET2026";


export default function Home() {
  return (
    <Layout>
      {/* <section className="hero">
        
        
        
      </section> */}
      
       {<Header/>}
       {<NavBar/>}
       {<HeroSection/>}
       {/* {<DoubtForm/>} */}
       {<TableOfContents/>}
       {<Overview/>}
      {<CUETPrepPrograms/>}
      {<SubjectsCovered/>}
      {<AchieversSpeak/>}
      {<PedagogySection/>}
      {<CourseCuratedBy/>}
       {<AboutCUET2026/>}
      
       {<Footer/>}
       
     
    </Layout>
  );
}
