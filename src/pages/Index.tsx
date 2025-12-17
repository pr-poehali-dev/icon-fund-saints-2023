import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

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
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-heading font-semibold text-primary">
              Фонд Иконы Святых Новомучеников
            </h1>
            <div className="hidden md:flex gap-6">
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

      <main className="pt-20">
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

        <Separator className="my-0" />

        <section id="history" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              История Фонда и Святых Новомучеников
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Святые Новомученики Юристы Петроградские
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  В период гонений на Русскую Православную Церковь в начале XX века многие верующие юристы Петрограда приняли мученическую смерть за исповедание веры. Они стояли на защите правды и справедливости, не отрекаясь от Христа даже перед лицом смерти.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Эти святые стали примером верности христианским идеалам и профессиональной этике, соединив служение закону с служением Богу.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Миссия Фонда
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Наш фонд создан для сохранения памяти о святых новомучениках, просвещения общества об их подвиге и поддержки исследований истории Русской Православной Церкви в период гонений. Мы стремимся донести до современников значение жертвенного служения истине и вере.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        <section id="icon" className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              О Чудотворной Иконе
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <img
                src="https://cdn.poehali.dev/files/627b2917-8fe1-4e81-a162-fc37454dcfc2.jpeg"
                alt="Чудотворная икона"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Икона святых новомучеников юристов Петроградских была написана в традициях древнерусской иконописи. На ней изображены святые в момент их небесной славы, с нимбами над головами, символизирующими их святость.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  По свидетельствам верующих, перед иконой происходили случаи чудесных исцелений и духовного утешения. Многие люди получали помощь в сложных жизненных ситуациях, особенно связанных с правовыми вопросами и поиском справедливости.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Икона напоминает нам о том, что святость достижима в любом служении, когда оно совершается с верой и любовью к Богу и ближним.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Деятельность и Проекты Фонда
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: 'BookOpen',
                  title: 'Издательская деятельность',
                  description: 'Публикация книг и материалов о святых новомучениках, их житиях и духовном наследии',
                },
                {
                  icon: 'Users',
                  title: 'Просветительские программы',
                  description: 'Организация лекций, семинаров и встреч, посвященных истории гонений на Церковь',
                },
                {
                  icon: 'Church',
                  title: 'Поддержка храмов',
                  description: 'Помощь в восстановлении храмов и создании памятных мест, связанных с новомучениками',
                },
                {
                  icon: 'GraduationCap',
                  title: 'Образовательные проекты',
                  description: 'Разработка учебных программ для воскресных школ и православных учебных заведений',
                },
                {
                  icon: 'Archive',
                  title: 'Архивная работа',
                  description: 'Сбор и систематизация документов и свидетельств о жизни и подвиге новомучеников',
                },
                {
                  icon: 'Heart',
                  title: 'Благотворительность',
                  description: 'Оказание помощи нуждающимся в традициях христианского милосердия',
                },
              ].map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name={project.icon} className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        <section id="support" className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Как Поддержать Фонд
            </h2>
            <Card className="p-8">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ваша поддержка помогает сохранять память о святых новомучениках и продолжать просветительскую деятельность фонда. Каждое пожертвование идет на реализацию наших проектов.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    Способы поддержки
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1" size={20} />
                      <span className="text-muted-foreground">Единовременное пожертвование</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1" size={20} />
                      <span className="text-muted-foreground">Регулярная поддержка фонда</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1" size={20} />
                      <span className="text-muted-foreground">Волонтерская помощь в проектах</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="text-accent mt-1" size={20} />
                      <span className="text-muted-foreground">Помощь в исследовательской работе</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-heading font-semibold text-primary mb-3">
                    Реквизиты для пожертвований
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-semibold text-primary">Получатель:</span> ФОНД ИКОНЫ СВЯТЫХ НОВОМУЧЕНИКОВ ЮРИСТОВ ПЕТРОГРАДСКИХ</p>
                    <p><span className="font-semibold text-primary">ИНН:</span> 7806632350</p>
                    <p><span className="font-semibold text-primary">КПП:</span> 780601001</p>
                    <p><span className="font-semibold text-primary">Счёт получателя:</span> 40703 810 3 9033 0000175</p>
                    <p><span className="font-semibold text-primary">Банк получателя:</span> Банк «Санкт-Петербург»</p>
                    <p><span className="font-semibold text-primary">БИК:</span> 044030790</p>
                    <p><span className="font-semibold text-primary">К/счёт:</span> 30101810900000000790</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <Separator className="my-0" />

        <section id="news" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Новости и События
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  date: '25 ноября 2025',
                  title: 'Благая весть',
                  description: 'Фонд Иконы святых новомучеников юристов Петроградских (Сергея Шеина, Юрия Новицкого, Иоанна Ковшарова) учрежден в Санкт-Петербурге.',
                },
                {
                  date: '26 ноября 2025',
                  title: 'Храму в Мариуполе подарили икону святых Новомучеников-юристов Петроградских!',
                  description: 'Свято-Покровский собор в городе Мариуполе принял редкую икону, изображающую святых Новомучеников-юристов Петроградских — Сергея Шеина, Юрия Новицкого и Иоанна Ковшарова.',
                },
                {
                  date: '20 сентября 2024',
                  title: 'Освящение памятной доски',
                  description: 'В Санкт-Петербурге установлена памятная доска в честь святых новомучеников',
                },
              ].map((news, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <p className="text-sm text-accent font-semibold mb-3">{news.date}</p>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {news.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-0" />

        <section id="contacts" className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
              Контакты
            </h2>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">ikona-yuristov@mail.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (911)0011377</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      Санкт-Петербург, Невский проспект
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">О Фонде</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Фонд Иконы Святых Новомучеников Юристов Петроградских — хранитель памяти о героях веры
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <button onClick={() => scrollToSection('history')} className="hover:text-accent transition-colors">
                    История
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition-colors">
                    Проекты
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('support')} className="hover:text-accent transition-colors">
                    Поддержать
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <p className="text-sm text-primary-foreground/80">ikona-yuristov@mail.ru</p>
            </div>
          </div>
          <Separator className="bg-primary-foreground/20 mb-8" />
          <p className="text-center text-sm text-primary-foreground/60">© 2025 Фонд Иконы Святых Новомучеников Юристов Петроградских. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;