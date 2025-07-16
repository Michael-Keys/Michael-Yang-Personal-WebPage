import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechnicalSkills from '@/components/TechnicalSkills';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
      <TechnicalSkills />
      <CurrentlyLearning />
      <Projects />
      <Footer />
    </main>
  );
}
