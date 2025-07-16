import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Scale, Flag } from "lucide-react";

const timelineEvents = [
  {
    year: "1844",
    title: "Independencia Nacional",
    description: "Se establece la República Dominicana como nación independiente con Juan Pablo Duarte.",
    icon: Flag,
    category: "Fundación"
  },
  {
    year: "1844",
    title: "Primera Constitución",
    description: "Se promulga la primera Constitución dominicana, estableciendo las bases del sistema legal.",
    icon: BookOpen,
    category: "Constitución"
  },
  {
    year: "1865",
    title: "Segunda República",
    description: "Restauración de la independencia y reorganización del sistema judicial.",
    icon: Scale,
    category: "Restauración"
  },
  {
    year: "1924",
    title: "Modernización Judicial",
    description: "Reformas importantes al sistema de justicia durante el gobierno de Horacio Vásquez.",
    icon: BookOpen,
    category: "Reforma"
  },
  {
    year: "1966",
    title: "Nueva Constitución",
    description: "Promulgación de una nueva constitución que fortalece el poder judicial independiente.",
    icon: BookOpen,
    category: "Constitución"
  },
  {
    year: "1994",
    title: "Reforma Judicial Moderna",
    description: "Implementación del nuevo Código Procesal Penal y modernización del sistema.",
    icon: Scale,
    category: "Modernización"
  },
  {
    year: "2010",
    title: "Constitución Actual",
    description: "Promulgación de la Constitución vigente que garantiza derechos fundamentales modernos.",
    icon: BookOpen,
    category: "Constitución"
  },
  {
    year: "2014",
    title: "Digitalización",
    description: "Inicio de la transformación digital del sistema judicial dominicano.",
    icon: Scale,
    category: "Tecnología"
  }
];

const categoryColors: Record<string, string> = {
  "Fundación": "bg-blue-100 text-blue-800",
  "Constitución": "bg-primary/10 text-primary",
  "Restauración": "bg-green-100 text-green-800",
  "Reforma": "bg-purple-100 text-purple-800",
  "Modernización": "bg-orange-100 text-orange-800",
  "Tecnología": "bg-cyan-100 text-cyan-800"
};

export const HistorySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Historia del Sistema de Justicia en RD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un recorrido por la evolución de nuestras leyes e instituciones judiciales
          </p>
        </div>

        <div className="relative">
          {/* Línea central de tiempo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-justice h-full rounded-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Contenido */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="bg-gradient-card border-border shadow-card-soft hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant="secondary"
                          className={categoryColors[event.category] || "bg-muted text-muted-foreground"}
                        >
                          {event.category}
                        </Badge>
                        <span className="text-2xl font-bold text-primary">
                          {event.year}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Ícono central */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg">
                  <event.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Espacio del otro lado */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Citas constitucionales */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Artículos Fundamentales de Nuestra Constitución
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-accent border-border p-6">
              <blockquote className="text-accent-foreground italic text-lg leading-relaxed">
                "La dignidad del ser humano es sagrada, innata e inviolable; 
                su respeto y protección constituyen una responsabilidad esencial de los poderes públicos."
              </blockquote>
              <footer className="mt-4 text-right">
                <cite className="text-primary font-semibold">
                  — Artículo 38, Constitución Dominicana
                </cite>
              </footer>
            </Card>

            <Card className="bg-accent border-border p-6">
              <blockquote className="text-accent-foreground italic text-lg leading-relaxed">
                "Todas las personas nacen libres e iguales en dignidad y derechos. 
                Están dotadas de razón y conciencia y deben comportarse fraternalmente las unas con las otras."
              </blockquote>
              <footer className="mt-4 text-right">
                <cite className="text-primary font-semibold">
                  — Artículo 39, Constitución Dominicana
                </cite>
              </footer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};