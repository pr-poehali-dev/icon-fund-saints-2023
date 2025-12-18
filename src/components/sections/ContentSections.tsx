import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const ContentSections = () => {
  return (
    <>
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
                Икона святых новомучеников юристов Петроградских находится в храме Рождества Христова на Песках в Санкт-Петербурге. Этот образ является духовным центром почитания святых.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Икона написана в классических традициях православной иконописи и несет в себе глубокий духовный смысл. Верующие приходят к образу с молитвами о справедливости, защите правды и укреплении веры.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Многие паломники отмечают особую благодать, исходящую от святого образа, и получают духовную помощь в своих жизненных испытаниях.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Проекты и Деятельность
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Book',
                title: 'Исследования',
                description: 'Изучение истории святых новомучеников и публикация научных работ',
              },
              {
                icon: 'Users',
                title: 'Просветительская работа',
                description: 'Организация лекций, семинаров и встреч для распространения знаний о подвиге святых',
              },
              {
                icon: 'Church',
                title: 'Паломничество',
                description: 'Организация паломнических поездок к святым местам и храмам',
              },
              {
                icon: 'Scroll',
                title: 'Издательская деятельность',
                description: 'Публикация книг, брошюр и материалов о святых новомучениках',
              },
              {
                icon: 'Heart',
                title: 'Благотворительность',
                description: 'Поддержка храмов и монастырей, связанных с памятью святых',
              },
              {
                icon: 'GraduationCap',
                title: 'Образовательные программы',
                description: 'Разработка учебных материалов для духовных и светских учебных заведений',
              },
            ].map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-accent">
                  <Icon name={project.icon} size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      <section id="support" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Поддержать Фонд
          </h2>
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Как вы можете помочь
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
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
        </div>
      </section>
    </>
  );
};

export default ContentSections;
