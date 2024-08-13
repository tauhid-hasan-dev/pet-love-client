import AdoptionSection from "@/components/UI/HomePage/AdoptionSection/AdoptionSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchPets from "@/components/UI/HomePage/SearchPets/SearchPets";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SearchPets />
      <AdoptionSection />
    </div>
  );
};

export default HomePage;
