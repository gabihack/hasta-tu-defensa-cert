import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Download, User, Calendar, QrCode, Check } from "lucide-react";
import justiceSymbols from "@/assets/justice-symbols.jpg";

interface CertificateSectionProps {
  score: number;
  passed: boolean;
}

export const CertificateSection = ({ score, passed }: CertificateSectionProps) => {
  const [fullName, setFullName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleGenerateCertificate = () => {
    if (fullName.trim()) {
      setShowCertificate(true);
    }
  };

  const handleDownloadPDF = () => {
    // En una implementación real, aquí se generaría el PDF
    // Por ahora, simularemos la descarga
    alert("En una implementación completa, aquí se descargaría el PDF del certificado.");
  };

  const currentDate = new Date().toLocaleDateString('es-DO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (!passed) {
    return (
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¡Sigue Aprendiendo!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Necesitas al menos 7 respuestas correctas para obtener tu certificado.
            Repasa el material del tour y vuelve a intentar el quiz.
          </p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="default"
            size="lg"
          >
            Intentar de Nuevo
          </Button>
        </div>
      </section>
    );
  }

  if (!showCertificate) {
    return (
      <section className="py-20 px-4 bg-gradient-card">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border shadow-elegant">
            <CardHeader className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
              <CardTitle className="text-2xl font-bold text-foreground">
                ¡Generar Tu Certificado!
              </CardTitle>
              <p className="text-muted-foreground">
                Felicitaciones por completar exitosamente el curso.
                Obtuviste {score} de 10 respuestas correctas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-base font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <Button
                onClick={handleGenerateCertificate}
                disabled={!fullName.trim()}
                variant="justice"
                size="lg"
                className="w-full"
              >
                <Award className="w-5 h-5 mr-2" />
                Generar Certificado
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tu Certificado Oficial
          </h2>
          <p className="text-muted-foreground">
            Certificado digital descargable de conocimientos del sistema de justicia
          </p>
        </div>

        {/* Certificado */}
        <div 
          ref={certificateRef}
          className="bg-white p-12 rounded-lg shadow-2xl border-8 border-primary mx-auto max-w-4xl animate-scale-in"
          style={{ aspectRatio: '4/3' }}
        >
          {/* Header del certificado */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <img 
                src={justiceSymbols} 
                alt="Símbolos de Justicia" 
                className="w-20 h-15 object-contain mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold text-primary">
                  CERTIFICADO DE HONOR
                </h1>
                <p className="text-lg text-secondary">
                  Sistema Educativo de Justicia Ciudadana
                </p>
              </div>
            </div>
            
            <div className="h-1 bg-gradient-justice mx-auto w-64 rounded-full mb-6"></div>
          </div>

          {/* Contenido principal */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Se certifica que
            </p>
            
            <h2 className="text-4xl font-bold text-secondary mb-6 border-b-2 border-primary inline-block pb-2">
              {fullName}
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ha completado exitosamente el curso interactivo 
              <strong> "Hasta Tú Puedes Defenderte"</strong> y ha demostrado 
              conocimiento sólido del sistema de justicia de la República Dominicana,
              obteniendo una calificación de <strong>{score}/10</strong>.
            </p>
            
            <div className="bg-accent p-4 rounded-lg mb-6">
              <p className="text-lg font-semibold text-accent-foreground">
                "Conocedor Básico del Sistema de Justicia Dominicano"
              </p>
            </div>
          </div>

          {/* Footer del certificado */}
          <div className="flex justify-between items-end">
            <div className="text-left">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm text-gray-600">Fecha de emisión:</span>
              </div>
              <p className="font-semibold text-secondary">{currentDate}</p>
            </div>
            
            <div className="text-center">
              <div className="border-t-2 border-gray-400 pt-2 px-8">
                <p className="text-sm font-semibold text-secondary">
                  Sistema Educativo de Justicia Ciudadana
                </p>
                <p className="text-xs text-gray-600">HastaTuPuedesDefenderte.net</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <QrCode className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm text-gray-600">Verificación:</span>
              </div>
              <p className="text-xs text-gray-600 font-mono">
                CERT-{Date.now().toString().slice(-8)}
              </p>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            onClick={handleDownloadPDF}
            variant="justice"
            size="lg"
            className="px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar PDF
          </Button>
          
          <Button
            onClick={() => window.print()}
            variant="outline"
            size="lg"
            className="px-8"
          >
            <Check className="w-5 h-5 mr-2" />
            Imprimir Certificado
          </Button>
        </div>

        {/* Información adicional */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-accent border-border">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-accent-foreground mb-3">
                ¿Qué puedes hacer ahora?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-accent-foreground">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span>Comparte tu logro en redes sociales</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span>Usa este conocimiento en tu día a día</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span>Ayuda a otros a conocer sus derechos</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  <span>Continúa aprendiendo sobre leyes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};