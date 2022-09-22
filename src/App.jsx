import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FindMoreSection from "./components/FindMoreSection";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative z-30 bg-white ">
      <header className="relative z-30 ">
        <Header />
      </header>
      <Hero />
      <main>
        <Features />
        <FindMoreSection />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
