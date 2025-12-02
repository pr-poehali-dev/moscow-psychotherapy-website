import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Users',
      title: 'Профессиональное сообщество',
      description: 'Объединяем психотерапевтов для обмена опытом',
    },
    {
      icon: 'BookOpen',
      title: 'Образование',
      description: 'Регулярные семинары и супервизии',
    },
    {
      icon: 'Award',
      title: 'Сертификация',
      description: 'Подтверждение квалификации',
    },
    {
      icon: 'Calendar',
      title: 'Мероприятия',
      description: 'Конференции и встречи',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/15 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Российская психотерапевтическая ассоциация
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Профессиональное сообщество психотерапевтов для развития и популяризации психотерапии в России
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/specialists">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти специалиста
                  </Button>
                </Link>
                <Link to="/structure">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Структура РПА
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name={feature.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Структура ассоциации</h2>
                  <p className="text-lg text-muted-foreground">
                    Руководство Российской психотерапевтической ассоциации
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Crown" size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Президент РПА</h3>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">Макаров Виктор Викторович</h4>
                      <p className="text-muted-foreground">Доктор медицинских наук, профессор, президент Российской психотерапевтической ассоциации</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <Icon name="Users" size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold">Вице-президенты</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Катков Александр Лазаревич</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Незнанов Николай Григорьевич</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Холмогорова Алла Борисовна</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <Icon name="Scale" size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold">Этический комитет</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Контроль соблюдения профессиональной этики и разрешение спорных ситуаций
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Icon name="Mail" size={14} className="text-primary" />
                        <span>ethics@rpa-russia.ru</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <Icon name="Eye" size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold">Совет супервизоров</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Профессиональное развитие и контроль качества психотерапевтической практики
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Icon name="Mail" size={14} className="text-primary" />
                        <span>supervision@rpa-russia.ru</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                          <Icon name="FileCheck" size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold">Ревизионная комиссия</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Проверка финансово-хозяйственной деятельности и контроль за целевым использованием средств
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Globe" size={24} className="text-white" />
                      </div>
                      <h2 className="text-2xl font-bold">Региональные отделения</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      РПА объединяет специалистов по всей России. Региональные отделения работают в 45 субъектах РФ.
                    </p>
                    <div className="space-y-3 mt-6">
                      <div className="p-4 bg-background rounded-lg border">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="MapPin" size={16} className="text-primary" />
                          <span className="font-medium">Московское отделение</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Mail" size={14} className="text-primary" />
                          <span>moscow@rpa-russia.ru</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>Другие региональные отделения: Санкт-Петербург, Новосибирск, Екатеринбург и другие города</p>
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

        <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">О Российской психотерапевтической ассоциации</h2>
                <p className="text-lg text-muted-foreground">
                  Миссия, цели и задачи нашей организации
                </p>
              </div>

              <div className="space-y-8">
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Icon name="Target" size={24} className="text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">Миссия</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Развитие и популяризация психотерапии в России, объединение профессионального сообщества и повышение качества психотерапевтической помощи населению.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">Основные направления деятельности</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start space-x-2">
                            <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>Профессиональное образование и повышение квалификации специалистов</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>Сертификация психотерапевтов и супервизоров</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>Организация конференций, семинаров и научных мероприятий</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>Разработка профессиональных стандартов и этических норм</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>Защита профессиональных интересов психотерапевтов</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0">
                        <Icon name="TrendingUp" size={24} className="text-white" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">Достижения</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          РПА является крупнейшей профессиональной организацией психотерапевтов в России с многолетней историей. Ассоциация объединяет более 3000 специалистов и имеет региональные представительства в 45 субъектах РФ.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
