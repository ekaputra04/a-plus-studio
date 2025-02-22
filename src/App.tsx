import ClientSay from "./components/ClientSay";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
    </>
  );
}

export default App;
