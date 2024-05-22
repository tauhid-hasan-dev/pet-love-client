import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TopRatedDoctors />
    </div>
  );
};

export default HomePage;
