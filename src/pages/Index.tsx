import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ContentSections from '@/components/sections/ContentSections';
import NewsAndContacts from '@/components/sections/NewsAndContacts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'history', label: 'История' },
    { id: 'icon', label: 'Икона' },
    { id: 'projects', label: 'Проекты' },
    { id: 'support', label: 'Поддержать' },
    { id: 'news', label: 'Новости' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        menuItems={menuItems}
      />

      <main className="pt-20">
        <HeroSection scrollToSection={scrollToSection} />
        <ContentSections />
        <NewsAndContacts />
      </main>
    </div>
  );
};

export default Index;
