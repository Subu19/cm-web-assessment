
import BookingContent from "@/components/Home/BookingContent";
import CheckListContent from "@/components/Home/CheckListContent";
import CoursesContent from "@/components/Home/CoursesContent";
import HeroContent from "@/components/Home/HeroContent";
import TechStackLoop from "@/components/Home/TechStackLoop";
import Button from "@/components/ui/button";
import Wrapper from "@/components/ui/wrapper";
import { Check } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <HeroContent />
      <TechStackLoop />
      <CoursesContent />


      <BookingContent />

      <CheckListContent />


    </>
  );
}


