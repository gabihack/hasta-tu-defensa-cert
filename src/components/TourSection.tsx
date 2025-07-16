import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gavel, 
  Shield, 
  Users, 
  Building2, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle 
} from "lucide-react";

interface TourSectionProps {
  onQuizStart: () => void;
}

const tourSteps = [
  {
    id: 1,
    title: "¿Qué hace un Juez?",
    icon: Gavel,
    content: "El juez es quien dirige el proceso judicial, toma decisiones imparciales basadas en la ley y garantiza que se respeten los derechos de todas las partes.",
    details: [
      "Preside audiencias y juicios",
      "Interpreta y aplica las leyes",
      "Dicta sentencias justas e imparciales",
      "Protege los derechos constitucionales"
    ]
  },
  {
    id: 2,
    title: "¿Qué hace un Fiscal?",
    icon: Shield,
    content: "El fiscal representa al Estado en los procesos penales, investiga delitos y presenta acusaciones cuando hay evidencia suficiente.",
    details: [
      "Investiga los delitos denunciados",
      "Recolecta evidencias y pruebas",
      "Presenta acusaciones formales",
      "Protege los intereses de la sociedad"
    ]
  },
  {
    id: 3,
    title: "¿Qué hace un Abogado Defensor?",
    icon: Users,
    content: "El abogado defensor protege los derechos del acusado, presenta su defensa y garantiza que reciba un juicio justo.",
    details: [
      "Defiende los derechos del acusado",
      "Presenta argumentos de defensa",
      "Asesora a su cliente durante el proceso",
      "Garantiza un juicio justo y equitativo"
    ]
  },
  {
    id: 4,
    title: "El Palacio de Justicia",
    icon: Building2,
    content: "Es el edificio donde se administra la justicia, alberga los tribunales y oficinas del sistema judicial dominicano.",
    details: [
      "Sede de los tribunales principales",
      "Oficinas administrativas del Poder Judicial",
      "Salas de audiencias y juicios",
      "Archivo de expedientes judiciales"
    ]
  }
];

export const TourSection = ({ onQuizStart }: TourSectionProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    onQuizStart();
  };

  const isLastStep = currentStep === tourSteps.length - 1;
  const allStepsCompleted = completedSteps.length === tourSteps.length;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tour Interactivo del Sistema Judicial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce los roles principales en nuestro sistema de justicia
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {tourSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'bg-muted text-muted-foreground border-border'
                  }`}
                >
                  {completedSteps.includes(index) ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{index + 1}</span>
                  )}
                </div>
                <span className="text-xs mt-2 text-center max-w-20">
                  {step.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-justice h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Step Content */}
        <Card className="bg-gradient-card border-border shadow-card-soft animate-scale-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {(() => {
                const IconComponent = tourSteps[currentStep].icon;
                return <IconComponent className="w-16 h-16 text-primary" />;
              })()}
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              {tourSteps[currentStep].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              {tourSteps[currentStep].content}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tourSteps[currentStep].details.map((detail, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-accent rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-accent-foreground">{detail}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            className="px-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <span className="text-muted-foreground">
            {currentStep + 1} de {tourSteps.length}
          </span>

          {isLastStep ? (
            <Button 
              onClick={handleComplete}
              variant="justice"
              className="px-8"
            >
              Comenzar Quiz
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              variant="default"
              className="px-6"
            >
              Siguiente
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};