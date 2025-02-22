import ClientSay from "./components/ClientSay";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import OurClient from "./components/OurClient";
import OurService from "./components/OurService";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurClient />
      <OurService />
      <Project />
      <ClientSay />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
