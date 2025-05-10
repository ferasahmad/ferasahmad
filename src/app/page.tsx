import Hero from "./components/Hero";
import About from "./components/About";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-black text-white">
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Connect />
      </div>
    </div>
  );
}
