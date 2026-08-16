import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
