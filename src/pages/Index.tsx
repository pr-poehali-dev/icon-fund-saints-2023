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
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 sm:gap-6 min-w-max">
                {[
                  {
                    date: '16 декабря 2025',
                    title: 'Встреча с уполномоченным по правам человека',
                    description: 'Сегодня президент фонда Артём Дмитриевич Баконин встретился с представительницей правозащитных органов города Санкт-Петербурга — уполномоченным по правам человека Агапитовой Светланой Юрьевной, преподнеся ей ценную иконописную работу. Икона посвящена Святым Новомученикам юристам Петроградским, которые были канонизированы Русской Православной Церковью за свою верность христианской вере и приверженность нравственным принципам во времена жестоких гонений начала XX века.',
                  },
                  {
                    date: '5 декабря 2025',
                    title: 'Вручение иконы руководителю УФНС',
                    description: 'Сегодня президент Фонда Артём Баконин вручил в торжественной обстановке икону Святых юристов руководителю Управления федеральной налоговой службы Санкт-Петербурга, государственному советнику Российской Федерации второго класса Гнедых Александру Викторовичу. В свою очередь президент Фонда выразил слова благодарности Александру Викторовичу высокой оценки деятельности Фонда. Эта встреча подчеркнула высокую ответственность представителей правового сообщества.',
                  },
                  {
                    date: '4 декабря 2025',
                    title: 'Передача иконы офицерам МО РФ',
                    description: 'Сегодня в одном из подразделений Министерства обороны РФ Ленинградского военного округа, состоялась церемония вручения иконы Святых юристов Новомучеников Петроградских. Икона была передана офицерам прибывшим из зоны проведения специальной военной операции (СВО), а также получившим ранения и удостоенным государственных наград за проявленные мужество и героизм при выполнении своего воинского долга.',
                  },
                  {
                    date: '3 декабря 2025',
                    title: 'Праздничный молебен в День юриста',
                    description: 'Настоятелем храма Рождества Христова на Песках отцом Андреем был проведен праздничный молебен у иконы святых Новомучеников юристов Петроградских. Духовенство храма, совместно с президентом фонда Артемом Дмитриевичем Бакониным помолились за благоденствие, мудрое ведение дел и способность честно исполнять свою миссию тем, кому доверены судьбы граждан и правопорядок государства.',
                  },
                  {
                    date: '3 декабря 2025',
                    title: 'Вручение учредительных документов фонда',
                    description: 'Торжественная церемония вручения документов фонду иконы Святых Новомучеников юристов Петроградских. Сегодня, в День юриста, начальник Главного управления Министерства юстиции Российской Федерации по Санкт-Петербургу и Ленинградской области Евгений Анатольевич Орловский передал учредительные документы о государственной регистрации вновь созданного фонда Президенту данного учреждения – Артёму Дмитриевичу Баконину.',
                  },
                  {
                    date: '2 декабря 2025',
                    title: 'Визит работников транспортной прокуратуры',
                    description: 'Сегодня, коллектив работников Северо-Западной транспортной прокуратуры, возглавляемый Северо-Западным транспортным прокурором Владимиром Владимировым, посетил храм Рождества Христова на Песках. В ходе визита состоялась содержательная экскурсия по святым местам храма, наполненная глубокими историческими и духовными смыслами. Завершилось мероприятие торжественным событием — служением молебна у иконы святых юристов Новомучеников Петроградских.',
                  },
                  {
                    date: '1 декабря 2025',
                    title: 'Передача иконы руководителю Росгвардии',
                    description: 'Сегодня президентом фонда Артёмом Дмитриевичем Бакониным была передана икона руководителю подразделения Росгвардии по Санкт-Петербургу и Ленинградской области Алексею Константиновичу Сумскому. Символическое значение данного акта заключается в выражении поддержки сотрудников ведомства при выполнении ими своих должностных обязанностей, связанных с применением правовых норм и принятием ответственных решений.',
                  },
                  {
                    date: '26 ноября 2025',
                    title: 'Храму в Мариуполе подарили икону святых Новомучеников-юристов Петроградских!',
                    description: 'Свято-Покровский собор в городе Мариуполе принял редкую икону, изображающую святых Новомучеников-юристов Петроградских — Сергея Шеина, Юрия Новицкого и Иоанна Ковшарова. Это торжественное мероприятие стало символом единства православных христиан и глубоким уважением к наследию русской истории. Тем более, Санкт-Петербург и Мариуполь являются городами побратимами. Дарение иконы подчеркивает важность сохранения исторической памяти.',
                  },
                  {
                    date: '25 ноября 2025',
                    title: 'Благая весть!',
                    description: 'Фонд Иконы святых новомучеников юристов Петроградских (Сергея Шеина, Юрия Новицкого, Иоанна Ковшарова) учрежден в Санкт-Петербурге. Мы верим и надеемся, что наша совместная деятельность явится той милостью, которая и есть истинное служение своему народу, Отечеству и продвижению проповеди подвига этих новомучеников. «Всё можно сделать, если есть желание, и есть на то воля Божья», — Президент Фонда Артем Баконин.',
                  },
                ].map((news, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[320px] sm:w-[380px]">
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
              <p className="text-sm text-primary-foreground/80 mb-4">ikona-yuristov@mail.ru</p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://vk.com/sdaproject?from=groups" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="VKontakte"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.1"/>
                    <path d="M16.8 22.4c-6.8 0-10.7-4.6-10.9-12.4h3.4c.2 5.6 2.6 8 4.5 8.5V10h3.2v4.8c1.9-.2 3.8-2.4 4.5-4.8h3.2c-.5 3-2.6 5.2-4.1 6.1 1.5.8 3.8 2.7 4.7 6.3h-3.5c-.7-2.4-2.4-4.2-4.7-4.5v4.5h-.3z" fill="currentColor"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/fondPetrograd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Telegram"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.1"/>
                    <path d="M23.3 8.7l-3.1 14.6c-.2 1-.8 1.2-1.6.8l-4.4-3.3-2.1 2c-.2.2-.5.5-1 .5l.3-4.6 9-8.1c.4-.3-.1-.5-.6-.2l-11.1 7-4.3-1.3c-.9-.3-.9-1 .2-1.4l16.8-6.5c.8-.3 1.5.2 1.2 1.3z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
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