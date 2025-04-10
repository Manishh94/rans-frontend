import Banner from "../components/banner";
import Footer from "../components/footer";
import HeroCompoment from "../components/heroComponent";
import LoginContainer from "../components/loginDivComponent";
import ReviewSection from "../components/review_section";
import TestimonialCard from "../components/testimonials_card";
export default function HomePage() {
  return (
    <>
      <HeroCompoment />
      <LoginContainer />
      <Banner />
      <TestimonialCard />
      <ReviewSection />
      <Footer />
    </>
  );
}
