import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TourSection } from "@/components/TourSection";
import { HistorySection } from "@/components/HistorySection";
import { QuizSection } from "@/components/QuizSection";
import { CertificateSection } from "@/components/CertificateSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [quizScore, setQuizScore] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleStartTour = () => {
    setCurrentSection('tour');
  };

  const handleQuizStart = () => {
    setCurrentSection('quiz');
  };

  const handleQuizComplete = (passed: boolean, score: number) => {
    setQuizScore(score);
    setQuizPassed(passed);
    setCurrentSection('certificate');
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection onStartTour={handleStartTour} />;
      case 'tour':
        return <TourSection onQuizStart={handleQuizStart} />;
      case 'history':
        return <HistorySection />;
      case 'quiz':
        return <QuizSection onQuizComplete={handleQuizComplete} />;
      case 'certificate':
        return <CertificateSection score={quizScore} passed={quizPassed} />;
      default:
        return <HeroSection onStartTour={handleStartTour} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onSectionChange={handleSectionChange}
        currentSection={currentSection}
      />
      
      <main className="pt-16">
        {renderCurrentSection()}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2024 HastaTuPuedesDefenderte.net - Educación Jurídica para Todos
          </p>
          <p className="text-xs mt-2 text-secondary-foreground/70">
            Sistema Educativo de Justicia Ciudadana - República Dominicana
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
