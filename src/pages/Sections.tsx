import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Sections = () => {
  const section = {
    name: 'Секция психоанализа и психоаналитически ориентированной психотерапии',
    coordinator: 'Корнешов Алексей Александрович',
    coordinatorId: 52,
    coordinatorTitle: 'Заместитель исполнительного директора по финансовым вопросам',
    coordinatorCredentials: 'Доктор экономических наук, кандидат психологических наук, психоаналитический психолог, клинический психолог, психолог консультант',
    description: 'Профессиональное сообщество психоаналитически ориентированных терапевтов Московского отделения РПА. Секция объединяет специалистов, работающих в психоаналитической парадигме, для обмена опытом, профессионального развития и популяризации психоанализа.',
    activities: [
      'Регулярные теоретические семинары по классическому и современному психоанализу',
      'Групповые и индивидуальные супервизии',
      'Разбор клинических случаев',
      'Научно-практические конференции',
      'Обучающие программы для начинающих специалистов',
    ],
    benefits: [
      'Доступ к закрытым профессиональным мероприятиям секции',
      'Участие в супервизиях с ведущими специалистами',
      'Обмен опытом с коллегами',
      'Информационная поддержка и профессиональные материалы',
      'Возможность выступить на конференциях секции',
    ],
    contact: 'AL.AL.PSY@yandex.ru',
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Секция психоанализа — МО РПА</title>
        <meta name="description" content="Секция психоанализа и психоаналитически ориентированной психотерапии МО РПА. Семинары, супервизии, конференции. Вступление в секцию." />
      </Helmet>
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
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-3">{section.name}</h2>
                          <div className="space-y-2">
                            <div className="flex items-start space-x-2">
                              <Icon name="User" size={16} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium">
                                  Руководитель:{' '}
                                  <Link 
                                    to={`/specialists#specialist-${section.coordinatorId}`}
                                    className="text-primary hover:underline"
                                  >
                                    {section.coordinator}
                                  </Link>
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">{section.coordinatorTitle}</p>
                                <p className="text-sm text-muted-foreground mt-1">{section.coordinatorCredentials}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>

                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <Icon name="Activity" size={20} className="mr-2 text-primary" />
                            Деятельность секции
                          </h3>
                          <ul className="space-y-2">
                            {section.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center">
                            <Icon name="Star" size={20} className="mr-2 text-primary" />
                            Преимущества членства в секции
                          </h3>
                          <ul className="space-y-2">
                            {section.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t space-y-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Icon name="Mail" size={16} className="text-primary" />
                            <a href={`mailto:${section.contact}`} className="text-muted-foreground hover:text-primary transition-colors">
                              {section.contact}
                            </a>
                          </div>
                          
                          <div className="bg-accent/10 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground flex items-start">
                              <Icon name="Info" size={16} className="mr-2 flex-shrink-0 mt-0.5 text-primary" />
                              <span>
                                Для вступления в секцию напишите письмо руководителю на почту{' '}
                                <a href="mailto:AL.AL.PSY@yandex.ru" className="text-primary hover:underline font-medium">
                                  AL.AL.PSY@yandex.ru
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <EventsCalendar />
                  </div>
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