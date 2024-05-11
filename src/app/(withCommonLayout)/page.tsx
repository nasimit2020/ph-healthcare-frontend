import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWork from "@/components/UI/HomePage/HowItWork/HowItWork";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWork />
    </>
  );
};

export default HomePage;
