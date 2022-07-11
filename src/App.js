import './App.css';
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experience from "./components/experience/experience"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
import Testimonial from "./components/testimonials/testimonials"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import MyBot from './components/bot/MyBot';


function App() {
  return (
    <div className="App">

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      {true ? <MyBot /> : "fgh"}
    </div>
  );
}

export default App;
