
import BookingContent from "@/components/Home/BookingContent";
import CheckListContent from "@/components/Home/CheckListContent";
import CoursesContent from "@/components/Home/CoursesContent";
import HeroContent from "@/components/Home/HeroContent";
import HowItWorks from "@/components/Home/HowItWorks";
import LearningContent from "@/components/Home/LearningContent";
import TechStackLoop from "@/components/Home/TechStackLoop";


export default function Home() {
  return (
    <>
      <HeroContent />
      <TechStackLoop />
      <CoursesContent />


      <BookingContent />

      <CheckListContent />
      <HowItWorks />
      <LearningContent />
    </>
  );
}


