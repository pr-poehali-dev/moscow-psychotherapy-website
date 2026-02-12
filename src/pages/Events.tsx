import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Events = () => {
  const getLastMondayOfMonth = (year: number, month: number): Date => {
    const lastDay = new Date(year, month + 1, 0);
    const day = lastDay.getDay();
    const diff = day === 0 ? 6 : day - 1;
    return new Date(year, month, lastDay.getDate() - diff);
  };

  const generateIntervisionDates = (count: number = 6) => {
    const dates: Date[] = [];
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    while (dates.length < count) {
      const lastMonday = getLastMondayOfMonth(currentYear, currentMonth);
      
      if (lastMonday >= today) {
        dates.push(lastMonday);
      }
      
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
    }

    return dates;
  };

  const formatDate = (date: Date): string => {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const intervisionDates = generateIntervisionDates(6);

  const regularIntervisions = intervisionDates.map((date, index) => ({
    id: `intervision-${index}`,
    title: 'Группа Интервизии',
    date: formatDate(date),
    time: '18:00 - 20:00',
    location: 'Большая Спасская 12, офис 7',
    type: 'Интервизия',
    description: 'На интервизионных встречах мы разбираем клинические случаи, обсуждаем сложные моменты практики и ищем рабочие решения в профессиональном кругу. Формат — мультимодальный: один случай рассматриваем с позиций разных подходов, чтобы расширить диагностическое видение, уточнить гипотезы, выбрать оптимальные стратегии и увидеть альтернативные тактики работы.',
    additionalInfo: [
      'Получать коллегиальную поддержку без оценивания и «правильных ответов»',
      'Сверять клиническое мышление и границы компетенций',
      'Находить ресурсы и снижать профессиональную изоляцию',
      'Пополнять инструментарий за счёт сопоставления школ и техник'
    ],
    price: 'Для членов РПА',
    isRecurring: true,
    recurringNote: 'Каждый последний понедельник месяца (переносы возможны только из-за праздничных дней)',
    contactPerson: 'Мальцева Екатерина',
    contactPhone: '+79266352069',
    contactTelegram: 'katrinmalceva',
    contactMax: 'https://max.ru/u/f9LHodD0cOIhXTu4FtbkqY34O1sNemnrH97QJY8iA6384YZx5fD7h-KOsWE',
    registrationRequired: true,
  }));

  const upcomingEvents = [
    {
      id: 'karvasarsky-conf',
      title: 'Всероссийская научно-практическая конференция с международным участием «Клиническая психотерапия: в поисках идеальной практики», посвященная памяти Б.Д. Карвасарского',
      date: '19-20 февраля 2026',
      time: '10:00 - 18:00',
      location: 'Санкт-Петербург, ул. Бехтерева 3, ФГБУ «НМИЦ ПН им. В.М. Бехтерева» Минздрава России',
      type: 'Конференция',
      format: 'Аудиторный с трансляцией',
      description: 'Всероссийская научно-практическая конференция с международным участием, посвященная памяти выдающегося психотерапевта Б.Д. Карвасарского.',
      price: 'Бесплатно',
      registrationUrl: 'https://78conf.ru/feb26',
      programUrl: 'https://78conf.ru/static/files/feb26/Программа_Психотерапия_19_20_02_2026_утв.pdf?1',
      roundTableInfo: {
        date: '20 февраля 2026',
        title: 'Многомерное видение клиента и мультимодальность: Интеграция подходов на примере одного случая',
        organizer: 'Московское отделение РПА',
        moderators: [
          { name: 'Бородин Владимир Иванович', id: 58 },
          { name: 'Щанкина Наталия Александровна', id: 44 }
        ],
        experts: [
          { name: 'Степанова Екатерина Сергеевна', id: 31 },
          { name: 'Пекарская Светлана Игоревна', id: 12 },
          { name: 'Бегиджанова Юлия Александровна', id: 29 },
          { name: 'Малышева Татьяна Борисовна', id: 37 },
          { name: 'Хвощевская Софья Игоревна', id: 41 }
        ],
        targetAudience: 'Практикующие психотерапевты и психологи, а также студенты старших курсов профильных направлений подготовки',
        goal: 'Продемонстрировать возможности мультимодального клинического рассмотрения случая и расширить профессиональный инструментарий участников за счёт разбора реального кейса с позиций различных психотерапевтических школ',
        annotation: 'В рамках круглого стола эксперты, представляющие ключевые направления современной психотерапии, проведут разбор одного клиентского случая в формате мультимодального клинического обсуждения. Участники увидят, как разные теоретические модели и техники формируют диагностические гипотезы, определяют фокус вмешательства и выстраивают стратегию терапии.'
      }
    },
  ];

  const allEvents = [...regularIntervisions, ...upcomingEvents].sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const months: Record<string, number> = {
        'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5,
        'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
      };
      const parts = dateStr.split(' ');
      const day = parseInt(parts[0]);
      const month = months[parts[1]];
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    };
    return parseDate(a.date).getTime() - parseDate(b.date).getTime();
  });

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Конференция': 'bg-primary text-primary-foreground',
      'Мастер-класс': 'bg-accent text-accent-foreground',
      'Супервизия': 'bg-secondary text-secondary-foreground',
      'Интервизия': 'bg-green-500 text-white',
      'Семинар': 'bg-primary/80 text-primary-foreground',
      'Круглый стол': 'bg-accent/70 text-accent-foreground',
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