import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react";

interface NavigationProps {
  onSectionChange: (section: string) => void;
  currentSection: string;
}

export const Navigation = ({ onSectionChange, currentSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'tour', label: 'Tour Interactivo' },
    { id: 'history', label: 'Historia' },
    { id: 'quiz', label: 'Quiz' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onSectionChange('home')}
          >
            <Scale className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              HastaTuPuedesDefenderte.net
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                variant={currentSection === item.id ? "default" : "ghost"}
                className="px-4 py-2"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  variant={currentSection === item.id ? "default" : "ghost"}
                  className="justify-start px-4 py-2"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};