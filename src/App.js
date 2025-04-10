import Banner from "./components/banner";
import Footer from "./components/footer";
import PropertyManagement from "./components/property_management";
import ReviewSection from "./components/review_section";
import TestimonialCard from "./components/testimonials_card";

function App() {
  return (
    <>
      <PropertyManagement />
      <Banner />
      <TestimonialCard />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default App;
