import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Конференция "Современные подходы в психотерапии"',
      date: '15 января 2025',
      time: '10:00 - 18:00',
      location: 'МГУ, главное здание',
      type: 'Конференция',
      description: 'Ежегодная конференция с участием ведущих специалистов России и зарубежья. Обсуждение актуальных вопросов психотерапии.',
      speakers: ['Иванов И.И.', 'Петрова А.С.', 'Смирнов В.П.'],
      price: 'Для членов РПА: бесплатно',
    },
    {
      id: 2,
      title: 'Мастер-класс по КПТ',
      date: '22 января 2025',
      time: '14:00 - 17:00',
      location: 'Онлайн (Zoom)',
      type: 'Мастер-класс',
      description: 'Практические техники когнитивно-поведенческой терапии при работе с тревожными расстройствами.',
      speakers: ['Иванова Е.А.'],
      price: '2000 руб.',
    },
    {
      id: 3,
      title: 'Супервизорская группа',
      date: '28 января 2025',
      time: '18:00 - 20:00',
      location: 'Офис МО РПА',
      type: 'Супервизия',
      description: 'Регулярная супервизорская группа для членов ассоциации. Разбор сложных случаев из практики.',
      speakers: ['Волков С.П.'],
      price: 'Для членов РПА: 500 руб.',
    },
    {
      id: 4,
      title: 'Семинар "Работа с психотравмой"',
      date: '5 февраля 2025',
      time: '11:00 - 16:00',
      location: 'Центр "Гармония"',
      type: 'Семинар',
      description: 'Методы и техники работы с травматическим опытом. Протоколы безопасности в терапии.',
      speakers: ['Новикова М.И.', 'Козлов А.Н.'],
      price: '3500 руб.',
    },
    {
      id: 5,
      title: 'Круглый стол "Этика в психотерапии"',
      date: '12 февраля 2025',
      time: '19:00 - 21:00',
      location: 'Онлайн (Zoom)',
      type: 'Круглый стол',
      description: 'Обсуждение этических дилемм в современной психотерапевтической практике.',
      speakers: ['Морозова С.В.', 'Белова О.Н.'],
      price: 'Бесплатно',
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Конференция': 'bg-primary text-primary-foreground',
      'Мастер-класс': 'bg-accent text-accent-foreground',
      'Супервизия': 'bg-secondary text-secondary-foreground',
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
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                          <h3 className="text-2xl font-bold flex-1">{event.title}</h3>
                        </div>

                        <p className="text-muted-foreground">{event.description}</p>

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
                      </div>

                      <div className="flex flex-col gap-2 md:w-40">
                        <Button className="w-full">
                          <Icon name="UserPlus" size={16} className="mr-2" />
                          Записаться
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Icon name="Share2" size={16} className="mr-2" />
                          Поделиться
                        </Button>
                      </div>
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