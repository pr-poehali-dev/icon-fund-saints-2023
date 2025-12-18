import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Фонд Иконы Святых Новомучеников Юристов Петроградских
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Сохранение памяти и духовного наследия святых новомучеников, пострадавших за веру в годы гонений
            </p>
            <Button
              onClick={() => scrollToSection('support')}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Поддержать фонд
            </Button>
          </div>
          <div className="animate-fade-in delay-100">
            <img
              src="https://cdn.poehali.dev/files/627b2917-8fe1-4e81-a162-fc37454dcfc2.jpeg"
              alt="Икона святых новомучеников"
              className="shadow-2xl w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
