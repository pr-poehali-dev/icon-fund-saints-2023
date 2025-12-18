import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  menuItems: Array<{ id: string; label: string }>;
}

const Navigation = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  menuItems,
}: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl font-heading font-semibold text-primary">
            Фонд Иконы Святых Новомучеников
          </h1>
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-body transition-colors ${
                  activeSection === item.id
                    ? 'text-accent font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Separator orientation="vertical" className="h-6 bg-border" />
            <div className="flex gap-3">
              <a 
                href="https://vk.com/sdaproject?from=groups" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="VKontakte"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6 16.8c-5.1 0-8-3.5-8.2-9.3h2.5c.1 4.2 1.9 6 3.4 6.4V7.5h2.4v3.6c1.4-.1 2.8-1.8 3.4-3.6h2.4c-.4 2.2-2 3.9-3.1 4.6 1.1.6 2.8 2 3.5 4.7h-2.6c-.5-1.8-1.8-3.2-3.5-3.4v3.4h-.2z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="https://t.me/fondPetrograd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Telegram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 6.5l-2.3 10.9c-.2.8-.6.9-1.2.6l-3.3-2.5-1.6 1.5c-.2.2-.4.4-.7.4l.2-3.4 6.8-6.1c.3-.2-.1-.4-.5-.2l-8.3 5.2-3.2-1c-.7-.2-.7-.7.1-1.1l12.6-4.9c.6-.2 1.1.2.9 1z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-lg font-body transition-colors py-2 ${
                      activeSection === item.id
                        ? 'text-accent font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
