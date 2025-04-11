import Banner from "../components/banner";
import FeaturedProperties from "../components/features";
import Footer from "../components/footer";
import HeroCompoment from "../components/heroComponent";
import LocationProperty from "../components/location_property";
import LoginContainer from "../components/loginDivComponent";
import PropertyManagement from "../components/property_management";
import PropertyManagementUI from "../components/property_management_ui";
import ReviewSection from "../components/review_section";
import TestimonialCard from "../components/testimonials_card";
import BoardComponent from "../components/featuresDivComponent";
export default function HomePage() {
  return (
    <>
      <HeroCompoment />
      <LoginContainer />
      <BoardComponent />
      <PropertyManagementUI/>
      <FeaturedProperties />
      <LocationProperty/>
      <PropertyManagement/>
      <Banner />
      <TestimonialCard />
      <ReviewSection />
      <Footer />
    </>
  );
}
