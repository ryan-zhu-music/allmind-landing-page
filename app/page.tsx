import Nav from "./components/nav";
import Hero from "./components/hero";
import Copilot from "./components/copilot";
import Solutions from "./components/solutions";
import Features from "./components/features";
import Developers from "./components/developers";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen place-content-center">
      <Nav />
      <Hero />
      <Copilot />
      <Solutions />
      <Features />
      <Developers />
      <Testimonial />
      <Footer />
    </div>
  );
}
