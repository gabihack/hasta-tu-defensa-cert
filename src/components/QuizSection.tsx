import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Clock, Trophy } from "lucide-react";

interface QuizSectionProps {
  onQuizComplete: (passed: boolean, score: number) => void;
}

const quizQuestions = [
  {
    id: 1,
    question: "¿Cuál es la función principal de un juez?",
    options: [
      "Defender al acusado",
      "Dirigir el proceso judicial e interpretar las leyes",
      "Investigar delitos",
      "Presentar acusaciones"
    ],
    correct: 1,
    explanation: "El juez dirige el proceso judicial, interpreta las leyes y garantiza que se respeten los derechos de todas las partes."
  },
  {
    id: 2,
    question: "¿Qué representa el fiscal en un juicio?",
    options: [
      "Al acusado",
      "Al Estado y la sociedad",
      "A los testigos",
      "Al juez"
    ],
    correct: 1,
    explanation: "El fiscal representa al Estado en los procesos penales e investiga delitos para proteger los intereses de la sociedad."
  },
  {
    id: 3,
    question: "¿Cuál es el rol del abogado defensor?",
    options: [
      "Acusar al demandado",
      "Investigar el delito",
      "Proteger los derechos del acusado",
      "Dictar la sentencia"
    ],
    correct: 2,
    explanation: "El abogado defensor protege los derechos del acusado y garantiza que reciba un juicio justo."
  },
  {
    id: 4,
    question: "¿Qué es el Palacio de Justicia?",
    options: [
      "Una cárcel",
      "El edificio donde se administra la justicia",
      "La casa del presidente",
      "Un museo"
    ],
    correct: 1,
    explanation: "El Palacio de Justicia es el edificio donde se administra la justicia y alberga los tribunales."
  },
  {
    id: 5,
    question: "¿Cuántas ramas tiene el poder público en República Dominicana?",
    options: [
      "Dos",
      "Tres",
      "Cuatro",
      "Cinco"
    ],
    correct: 1,
    explanation: "El poder público se divide en tres ramas: Ejecutivo, Legislativo y Judicial."
  },
  {
    id: 6,
    question: "¿Qué garantiza la Constitución Dominicana?",
    options: [
      "Solo los derechos del gobierno",
      "Los derechos fundamentales de los ciudadanos",
      "Solo las leyes penales",
      "Los derechos de los extranjeros únicamente"
    ],
    correct: 1,
    explanation: "La Constitución garantiza los derechos fundamentales de todos los ciudadanos dominicanos."
  },
  {
    id: 7,
    question: "¿Qué principio fundamental rige el sistema judicial?",
    options: [
      "La venganza",
      "La imparcialidad e igualdad ante la ley",
      "El favoritismo",
      "La corrupción"
    ],
    correct: 1,
    explanation: "El sistema judicial se rige por el principio de imparcialidad e igualdad ante la ley."
  },
  {
    id: 8,
    question: "¿Cuál es un derecho fundamental en un juicio?",
    options: [
      "Ser condenado sin pruebas",
      "La presunción de inocencia",
      "No tener abogado",
      "Ser juzgado en secreto"
    ],
    correct: 1,
    explanation: "La presunción de inocencia es un derecho fundamental que protege a toda persona acusada."
  },
  {
    id: 9,
    question: "¿Qué debe hacer un ciudadano si sus derechos son violados?",
    options: [
      "Nada, no puede hacer nada",
      "Buscar ayuda legal y denunciar",
      "Vengarse por su cuenta",
      "Huir del país"
    ],
    correct: 1,
    explanation: "Todo ciudadano debe buscar ayuda legal y denunciar cuando sus derechos son violados."
  },
  {
    id: 10,
    question: "¿Cuál es el objetivo principal de las leyes?",
    options: [
      "Castigar a las personas",
      "Proteger la convivencia y los derechos",
      "Beneficiar solo a los ricos",
      "Crear confusión"
    ],
    correct: 1,
    explanation: "Las leyes tienen como objetivo proteger la convivencia pacífica y los derechos de todos los ciudadanos."
  }
];

export const QuizSection = ({ onQuizComplete }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setAnswered(true);

    // Auto advance after 2 seconds
    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === quizQuestions[index].correct
    ).length;
    
    const passed = correctAnswers >= 7;
    setShowResults(true);
    
    setTimeout(() => {
      onQuizComplete(passed, correctAnswers);
    }, 3000);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentQ = quizQuestions[currentQuestion];

  if (showResults) {
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === quizQuestions[index].correct
    ).length;
    const passed = correctAnswers >= 7;

    return (
      <section className="py-20 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-scale-in">
            {passed ? (
              <Trophy className="w-24 h-24 text-primary mx-auto mb-6 animate-float" />
            ) : (
              <Clock className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {passed ? "¡Felicitaciones!" : "Sigue Intentando"}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6">
              Obtuviste {correctAnswers} de {quizQuestions.length} respuestas correctas
            </p>
            
            {passed ? (
              <p className="text-lg text-foreground mb-8">
                Has demostrado un conocimiento sólido del sistema de justicia dominicano.
                Tu certificado se generará en breve.
              </p>
            ) : (
              <p className="text-lg text-foreground mb-8">
                Necesitas al menos 7 respuestas correctas para obtener el certificado.
                ¡Repasa el material y vuelve a intentarlo!
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiz de Conocimientos
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Responde al menos 7 de 10 preguntas correctamente para obtener tu certificado
          </p>
          
          <div className="mb-4">
            <Progress value={progress} className="w-full h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              Pregunta {currentQuestion + 1} de {quizQuestions.length}
            </p>
          </div>
        </div>

        <Card className="bg-card border-border shadow-elegant animate-scale-in">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion] === index;
                const isCorrect = index === currentQ.correct;
                const showAnswer = answered;
                
                let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-300 ";
                
                if (showAnswer) {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50 text-green-700";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50 text-red-700";
                  } else {
                    buttonClass += "border-border bg-muted text-muted-foreground";
                  }
                } else {
                  buttonClass += "border-border bg-background hover:border-primary hover:bg-accent";
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                    variant="ghost"
                    disabled={answered}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{option}</span>
                      {showAnswer && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                      {showAnswer && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>
            
            {answered && (
              <div className="mt-6 p-4 bg-accent rounded-lg animate-fade-in">
                <p className="text-sm text-accent-foreground">
                  <strong>Explicación:</strong> {currentQ.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};