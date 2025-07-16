import { Button } from "@/components/ui/button";
import { Scale, BookOpen, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-justice.jpg";

interface HeroSectionProps {
  onStartTour: () => void;
}

export const HeroSection = ({ onStartTour }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Scale className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Hasta Tú Puedes</span>
            <span className="block bg-gradient-justice bg-clip-text text-transparent">
              Defenderte
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo funciona la justicia en República Dominicana y conoce tus derechos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={onStartTour}
              variant="justice" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Empezar Tour Interactivo
            </Button>
            
            <Button 
              variant="elegant" 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Users className="w-6 h-6 mr-2" />
              Conoce Tus Derechos
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Scale,
              title: "Sistema Judicial",
              description: "Aprende sobre jueces, fiscales y abogados"
            },
            {
              icon: BookOpen,
              title: "Educación Legal",
              description: "Comprende tus derechos fundamentales"
            },
            {
              icon: Award,
              title: "Certificación",
              description: "Obtén tu certificado oficial al completar"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-8 h-8 text-primary-glow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};