import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Toaster />
    </>
  );
}

export default App;
