import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const chairman = {
    name: 'Александров Виктор Петрович',
    description: 'Доктор психологических наук, профессор',
    email: 'chairman@mo-rpa.ru',
  };

  const viceChairmen = [
    {
      name: 'Смирнова Анна Ивановна',
      description: 'Кандидат психологических наук, по образовательным программам',
      email: 'smirnova@mo-rpa.ru',
    },
    {
      name: 'Петров Михаил Сергеевич',
      description: 'Доктор медицинских наук, по научной работе',
      email: 'petrov@mo-rpa.ru',
    },
  ];

  const supervisors = [
    { name: 'Иванова Елена Александровна', specialty: 'КПТ', email: 'ivanova@mo-rpa.ru' },
    { name: 'Козлов Андрей Николаевич', specialty: 'Семейная терапия', email: 'kozlov@mo-rpa.ru' },
    { name: 'Волков Сергей Петрович', specialty: 'Экзистенциальная терапия', email: 'volkov@mo-rpa.ru' },
    { name: 'Соколова Марина Дмитриевна', specialty: 'Психоанализ', email: 'sokolova@mo-rpa.ru' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">О московском отделении</h1>
              <p className="text-lg text-muted-foreground">
                Руководство и структура МО РПА
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Crown" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Председатель</h2>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{chairman.name}</h3>
                      <p className="text-muted-foreground">{chairman.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <a href={`mailto:${chairman.email}`} className="hover:text-primary transition-colors">
                          {chairman.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Users" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Заместители председателя</h2>
                    </div>
                    <div className="space-y-4">
                      {viceChairmen.map((member, index) => (
                        <div key={index} className="p-5 rounded-lg border-2 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/30 transition-all">
                          <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{member.description}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Mail" size={14} className="text-primary" />
                            <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                              {member.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Eye" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Супервизоры</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {supervisors.map((member, index) => (
                        <div key={index} className="p-4 rounded-lg border-2 bg-muted/30 hover:border-primary/30 transition-all">
                          <h3 className="font-semibold mb-1">{member.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{member.specialty}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Icon name="Mail" size={12} className="text-primary" />
                            <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                              {member.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Sparkles" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Молодежное подразделение</h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Специальная программа для молодых специалистов до 35 лет. Мы предлагаем:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Программу менторства с опытными психотерапевтами</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Специальные тарифы на обучение и супервизии</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Возможность участия в профессиональных проектах</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Доступ к закрытым мероприятиям и сообществу</span>
                        </li>
                      </ul>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-4 border-t">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <a href="mailto:youth@mo-rpa.ru" className="hover:text-primary transition-colors">
                          youth@mo-rpa.ru
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <EventsCalendar />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
