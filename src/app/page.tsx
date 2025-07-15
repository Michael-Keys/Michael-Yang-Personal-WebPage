import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import CurrentlyLearning from '@/components/CurrentlyLearning';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <CurrentlyLearning />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
