import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const NewsAndContacts = () => {
  const newsData = [
    {
      date: '18 декабря 2025',
      title: 'История создания иконы в главном журнале дорожной отрасли',
      description: 'В декабрьском номере журнала «Путевой навигатор» — официального издания АНП «Объединение ДСТ» — вышла статья об истории создания иконы святых Новомучеников юристов Петроградских в церкви Рождества Христова на Песках. Публикация рассказывает о том, как более 100 лет назад началась история массовых репрессий, и как сегодня икона снова звучит по-новому, требуя особого переосмысления.',
      images: [
        'https://cdn.poehali.dev/files/photo_5341792440156884776_y.jpg',
        'https://cdn.poehali.dev/files/photo_5341792440156884759_y.jpg',
      ],
    },
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
  ];

  return (
    <>
      <Separator className="my-0" />

      <section id="news" className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Новости и События
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 sm:gap-6 min-w-max">
              {newsData.map((news, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[320px] sm:w-[380px]">
                  <p className="text-sm text-accent font-semibold mb-3">{news.date}</p>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {news.description}
                  </p>
                  {news.images && news.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {news.images.map((img, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={img} 
                          alt={`${news.title} - фото ${imgIndex + 1}`}
                          className="w-full h-auto rounded-md object-cover"
                        />
                      ))}
                    </div>
                  )}
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
                <Icon name="MapPin" className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Храм Рождества Христова на Песках<br />
                    Санкт-Петербург, улица Большая Конюшенная
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Электронная почта</h3>
                  <a
                    href="mailto:fond-ikona@mail.ru"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    fond-ikona@mail.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-2">Телефон</h3>
                  <a
                    href="tel:+79111116188"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +7 (911) 111-61-88
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-heading font-semibold text-primary mb-3">Социальные сети</h3>
                <div className="flex gap-4">
                  <a
                    href="https://vk.com/sdaproject?from=groups"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6 16.8c-5.1 0-8-3.5-8.2-9.3h2.5c.1 4.2 1.9 6 3.4 6.4V7.5h2.4v3.6c1.4-.1 2.8-1.8 3.4-3.6h2.4c-.4 2.2-2 3.9-3.1 4.6 1.1.6 2.8 2 3.5 4.7h-2.6c-.5-1.8-1.8-3.2-3.5-3.4v3.4h-.2z" fill="currentColor"/>
                    </svg>
                    <span>VKontakte</span>
                  </a>
                  <a
                    href="https://t.me/fondPetrograd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 6.5l-2.3 10.9c-.2.8-.6.9-1.2.6l-3.3-2.5-1.6 1.5c-.2.2-.4.4-.7.4l.2-3.4 6.8-6.1c.3-.2-.1-.4-.5-.2l-8.3 5.2-3.2-1c-.7-.2-.7-.7.1-1.1l12.6-4.9c.6-.2 1.1.2.9 1z" fill="currentColor"/>
                    </svg>
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default NewsAndContacts;
