import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { getUpcomingEvents } from '@/utils/eventsData';

const Events = () => {
  const allEvents = getUpcomingEvents();

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Конференция': 'bg-primary text-primary-foreground',
      'Мастер-класс': 'bg-accent text-accent-foreground',
      'Супервизия': 'bg-secondary text-secondary-foreground',
      'Интервизия': 'bg-green-500 text-white',
      'Семинар': 'bg-primary/80 text-primary-foreground',
      'Круглый стол': 'bg-accent/70 text-accent-foreground',
      'Книжный клуб': 'bg-primary/80 text-primary-foreground',
    };
    return colors[type] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Мероприятия — МО РПА</title>
        <meta name="description" content="Конференции, семинары, мастер-классы и супервизии Московского отделения РПА. Регистрация на ближайшие мероприятия по психотерапии." />
      </Helmet>
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Анонсы мероприятий</h1>
              <p className="text-lg text-muted-foreground">
                Предстоящие события, конференции и обучающие программы
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-6">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-3 flex-wrap">
                    <Badge className="bg-blue-500 text-white">Вебинары</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      <Icon name="Repeat" size={14} className="mr-1" />
                      Ежемесячно
                    </Badge>
                    <h3 className="text-2xl font-bold flex-1 w-full sm:w-auto">«Профессиональная среда»</h3>
                  </div>

                  <p className="font-medium text-primary">Встречи, которые работают на практику</p>

                  <p className="text-muted-foreground">
                    Ежемесячная онлайн-встреча для психологов, психотерапевтов, психиатров и клинических психологов.
                    Тема, спикер, разбор ситуаций и ваши вопросы. Встречи ведут эксперты Московского отделения
                    Российской психотерапевтической ассоциации.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['14 октября', '28 октября', '11 ноября'].map((date) => (
                      <Badge key={date} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        {date}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg space-y-2">
                    <p className="font-semibold text-sm">О формате</p>
                    <p className="text-sm text-muted-foreground">
                      Профессиональная встреча без перегруза и лишней теории. «Профессиональная среда» — это
                      регулярные онлайн-встречи для специалистов, которым важно не просто слушать лекции, а
                      разбирать реальные вопросы практики: что происходит с клиентом, как выбрать стратегию
                      работы и где специалисту важно не оставаться в одиночестве.
                    </p>
                  </div>

                  <Button asChild>
                    <a href="https://course.rosmededucation.ru/professionalnaya-sreda" target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее и регистрация
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-3 flex-wrap">
                    <Badge className="bg-primary/80 text-primary-foreground">Книжный клуб</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      <Icon name="Repeat" size={14} className="mr-1" />
                      Ежемесячно
                    </Badge>
                    <h3 className="text-2xl font-bold flex-1 w-full sm:w-auto">Книжный клуб «Между строк»</h3>
                  </div>

                  <p className="text-sm">
                    Автор проекта:{' '}
                    <Link to="/specialists#specialist-19" className="text-primary hover:underline font-medium">
                      Хвощевская Софья Игоревна
                    </Link>
                  </p>

                  <p className="text-muted-foreground">
                    Цикл чтений психологической литературы для психологов, психотерапевтов разных модальностей
                    и всех тех, кто интересуется тем, что сокрыто между строк. Встречи проходят в книжном
                    магазине «Во весь голос».
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span>г. Москва, ул. Трубная, 21</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Ticket" size={16} className="text-primary" />
                      <span>Бесплатно</span>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">20 сентября, 17:30–19:30</p>
                      <p className="text-sm text-muted-foreground">
                        Обсуждение книги «Stop love. Разлюбить за 100 дней или когда нужно расстаться»
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">24 октября, 17:30–19:30</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Обсуждение книги «Маски лжи: парадокс невозможной коммуникации»
                      </p>
                      <Button size="sm" variant="outline" asChild>
                        <a href="https://gorodets.ru/product/maski-lzhi#s_flip_book/" target="_blank" rel="noopener noreferrer">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          О книге
                        </a>
                      </Button>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">28 ноября, 17:30–19:30</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        Обсуждение книги «На краю синей бездны, или Как вернуть контроль над алкоголем»
                      </p>
                      <Button size="sm" variant="outline" asChild>
                        <a href="https://gorodets.ru/product/na-krayu-siney-bezdny-ili-kak-vernut-kontrol-nad-alkogolem#s_flip_book/" target="_blank" rel="noopener noreferrer">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          О книге
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-3 flex-wrap">
                    <Badge className="bg-primary/80 text-primary-foreground">Киноклуб</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      <Icon name="Repeat" size={14} className="mr-1" />
                      Ежемесячно
                    </Badge>
                    <h3 className="text-2xl font-bold flex-1 w-full sm:w-auto">Киноклуб «Субъектив»</h3>
                  </div>

                  <p className="text-sm">
                    Авторы проекта:{' '}
                    <Link to="/specialists#specialist-31" className="text-primary hover:underline font-medium">
                      Степанова Екатерина Сергеевна
                    </Link>
                    {', '}
                    <Link to="/specialists#specialist-6" className="text-primary hover:underline font-medium">
                      Митрофанов Сергей Сергеевич
                    </Link>
                  </p>

                  <p className="text-muted-foreground">
                    Смотрим кино вместе и обсуждаем.
                  </p>

                  <div className="bg-accent/10 p-4 rounded-lg space-y-2">
                    <p className="font-semibold text-sm">Октябрь</p>
                    <p className="text-sm text-muted-foreground">«Боб Тревино поставил лайк»</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Ticket" size={16} className="text-primary" />
                      <span>Для членов РПА бесплатно</span>
                    </div>
                  </div>

                  <Button asChild>
                    <a href="https://t.me/subjectivecinema" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={16} className="mr-2" />
                      Наш канал
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {allEvents.map((event) => (
                <Card key={event.id} className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3 flex-wrap">
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                          {event.isRecurring && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              <Icon name="Repeat" size={14} className="mr-1" />
                              Регулярно
                            </Badge>
                          )}
                          <h3 className="text-2xl font-bold flex-1 w-full sm:w-auto">{event.title}</h3>
                        </div>

                        <p className="text-muted-foreground">{event.description}</p>

                        {event.additionalInfo && (
                          <div className="bg-accent/10 p-4 rounded-lg">
                            <p className="font-semibold text-sm mb-2">Встречи подходят для специалистов, которые хотят:</p>
                            <ul className="space-y-1">
                              {event.additionalInfo.map((info, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                  <span>{info}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" size={16} className="text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" size={16} className="text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="MapPin" size={16} className="text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Ticket" size={16} className="text-primary" />
                            <span>{event.price}</span>
                          </div>
                        </div>

                        {event.recurringNote && (
                          <div className="flex items-start gap-2 text-sm bg-blue-50 p-3 rounded-lg">
                            <Icon name="Info" size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-900">{event.recurringNote}</span>
                          </div>
                        )}

                        {event.registrationRequired && (
                          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <div className="flex items-start gap-2">
                              <Icon name="Key" size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-sm text-orange-900 mb-2">Для участия необходима предварительная регистрация</p>
                                <p className="text-sm text-orange-800">Направьте ваши ФИО организатору — это необходимо для оформления пропуска в здание.</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {event.contactPerson && (
                          <div className="space-y-2">
                            <p className="font-semibold text-sm">Контакт для регистрации: {event.contactPerson}</p>
                            <div className="flex flex-wrap gap-2">
                              <Button size="sm" asChild className="bg-[#0088CC] hover:bg-[#0077BB]">
                                <a href={`https://t.me/${event.contactTelegram}`} target="_blank" rel="noopener noreferrer">
                                  <Icon name="Send" size={16} className="mr-2" />
                                  Telegram
                                </a>
                              </Button>
                              <Button size="sm" asChild className="bg-[#FF0033] hover:bg-[#EE0022]">
                                <a href={event.contactMax} target="_blank" rel="noopener noreferrer">
                                  <Icon name="MessageCircle" size={16} className="mr-2" />
                                  МАКС
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <a href={`tel:${event.contactPhone}`}>
                                  <Icon name="Phone" size={16} className="mr-2" />
                                  {event.contactPhone}
                                </a>
                              </Button>
                            </div>
                          </div>
                        )}

                        {event.format && (
                          <div className="flex items-start gap-2 text-sm bg-purple-50 p-3 rounded-lg">
                            <Icon name="Video" size={16} className="text-purple-600 mt-0.5 flex-shrink-0" />
                            <span className="text-purple-900">Формат: {event.format}</span>
                          </div>
                        )}

                        {event.programUrl && (
                          <div className="space-y-2">
                            <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                              <a href={event.programUrl} target="_blank" rel="noopener noreferrer">
                                <Icon name="FileText" size={16} className="mr-2" />
                                Программа конференции
                              </a>
                            </Button>
                          </div>
                        )}

                        {event.roundTableInfo && (
                          <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20 space-y-3">
                            <div className="flex items-start gap-2">
                              <Badge className="bg-primary text-primary-foreground">
                                {event.roundTableInfo.date}
                              </Badge>
                              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                                {event.roundTableInfo.organizer}
                              </Badge>
                            </div>
                            
                            <h4 className="font-bold text-lg">{event.roundTableInfo.title}</h4>
                            
                            <p className="text-sm text-muted-foreground">{event.roundTableInfo.annotation}</p>
                            
                            <div>
                              <p className="text-sm font-semibold mb-2">Целевая аудитория:</p>
                              <p className="text-sm text-muted-foreground">{event.roundTableInfo.targetAudience}</p>
                            </div>

                            <div>
                              <p className="text-sm font-semibold mb-2">Модераторы:</p>
                              <div className="flex flex-wrap gap-2">
                                {event.roundTableInfo.moderators.map((moderator, idx) => (
                                  <Link
                                    key={idx}
                                    to={`/specialists#specialist-${moderator.id}`}
                                    className="text-sm text-primary hover:underline"
                                  >
                                    {moderator.name}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-semibold mb-2">Эксперты:</p>
                              <div className="flex flex-wrap gap-2">
                                {event.roundTableInfo.experts.map((expert, idx) => (
                                  <Link
                                    key={idx}
                                    to={`/specialists#specialist-${expert.id}`}
                                    className="text-sm text-primary hover:underline"
                                  >
                                    {expert.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {event.speakers && (
                          <div>
                            <p className="text-sm font-medium mb-2">Спикеры:</p>
                            <div className="flex flex-wrap gap-2">
                              {event.speakers.map((speaker, idx) => (
                                <Badge key={idx} variant="outline">
                                  {speaker}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {!event.isRecurring && (
                        <div className="flex flex-col gap-2 md:w-40">
                          {event.registrationUrl ? (
                            <Button className="w-full" asChild>
                              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                                <Icon name="UserPlus" size={16} className="mr-2" />
                                Регистрация
                              </a>
                            </Button>
                          ) : (
                            <Button className="w-full">
                              <Icon name="UserPlus" size={16} className="mr-2" />
                              Записаться
                            </Button>
                          )}
                          <Button variant="outline" className="w-full">
                            <Icon name="Share2" size={16} className="mr-2" />
                            Поделиться
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;