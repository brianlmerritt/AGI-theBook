import { Footer, Navbar } from "./components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "./sections";

export default function Home() {
  return (
    <main className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="pt-[100px]">
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <div id="explore">
            <Explore />
          </div>
        </section>
        {/*<section className="relative">
          <div id="get-started">
            <GetStarted />
          </div>
          <div className="gradient-03 z-0" />
          <div id="whats-new">
            <WhatsNew />
          </div>
        </section>*/}
        <div id="world">
          <World />
        </div>
        <section className="relative">
          <div id="insights">
            <Insights />
          </div>
          <div className="gradient-03 z-0" />
          <div id="feedback">
            <Feedback />
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
