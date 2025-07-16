import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import TechnicalSkills from '@/components/TechnicalSkills';

export default function AboutPage() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />
      <About />
      <TechnicalSkills />
      <Footer />
    </main>
  );
} 