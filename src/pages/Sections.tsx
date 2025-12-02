import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Sections = () => {
  const sections = [
    {
      id: 1,
      name: 'Секция когнитивно-поведенческой терапии',
      coordinator: 'Иванова Елена Александровна',
      members: 45,
      description: 'Объединяет специалистов, работающих в рамках КПТ. Регулярные встречи, обмен опытом, супервизии.',
      activities: ['Ежемесячные супервизии', 'Мастер-классы', 'Исследовательские проекты'],
      contact: 'kpt@mo-rpa.ru',
    },
    {
      id: 2,
      name: 'Секция психоаналитической терапии',
      coordinator: 'Петров Дмитрий Сергеевич',
      members: 38,
      description: 'Сообщество психоаналитически ориентированных терапевтов. Изучение классических и современных подходов.',
      activities: ['Теоретические семинары', 'Супервизии', 'Разбор случаев'],
      contact: 'psychoanalysis@mo-rpa.ru',
    },
    {
      id: 3,
      name: 'Секция гештальт-терапии',
      coordinator: 'Смирнова Ольга Владимировна',
      members: 42,
      description: 'Развитие гештальт-подхода в России. Практические воркшопы и теоретические дискуссии.',
      activities: ['Практические группы', 'Воркшопы', 'Конференции'],
      contact: 'gestalt@mo-rpa.ru',
    },
    {
      id: 4,
      name: 'Секция семейной и системной терапии',
      coordinator: 'Козлов Андрей Николаевич',
      members: 36,
      description: 'Специалисты по работе с семьями и парами. Системный подход к пониманию проблем.',
      activities: ['Супервизии случаев', 'Обучающие программы', 'Исследования'],
      contact: 'family@mo-rpa.ru',
    },
    {
      id: 5,
      name: 'Секция арт-терапии',
      coordinator: 'Новикова Мария Игоревна',
      members: 29,
      description: 'Творческие методы в психотерапии. Работа с различными видами искусства.',
      activities: ['Практические мастерские', 'Выставки', 'Обмен методиками'],
      contact: 'art@mo-rpa.ru',
    },
    {
      id: 6,
      name: 'Секция экзистенциальной терапии',
      coordinator: 'Волков Сергей Петрович',
      members: 31,
      description: 'Философские и практические аспекты экзистенциального подхода в психотерапии.',
      activities: ['Философские чтения', 'Супервизии', 'Теоретические семинары'],
      contact: 'existential@mo-rpa.ru',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Секции МО РПА</h1>
              <p className="text-lg text-muted-foreground">
                Профессиональные сообщества по направлениям психотерапии
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {sections.map((section) => (
                    <Card key={section.id} className="border-2 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-2">{section.name}</h3>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Icon name="User" size={14} className="text-primary" />
                                <span>Координатор: {section.coordinator}</span>
                              </div>
                            </div>
                            <Badge className="bg-primary text-primary-foreground">
                              {section.members} членов
                            </Badge>
                          </div>

                          <p className="text-muted-foreground">{section.description}</p>

                          <div>
                            <p className="font-semibold mb-2 text-sm">Активности секции:</p>
                            <div className="flex flex-wrap gap-2">
                              {section.activities.map((activity, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 text-sm pt-4 border-t">
                            <Icon name="Mail" size={14} className="text-primary" />
                            <span className="text-muted-foreground">{section.contact}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <Icon name="UserPlus" size={32} className="text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">Хотите присоединиться к секции?</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Секции открыты для всех членов ассоциации. Выберите направление и свяжитесь с координатором.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-1">
                  <EventsCalendar />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sections;
