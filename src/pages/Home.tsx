import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import Icon from '@/components/ui/icon';

const Home = () => {
  const president = {
    name: 'Макаров Виктор Викторович',
    description: 'Доктор медицинских наук, профессор, президент Российской психотерапевтической ассоциации',
  };

  const vicePresidents = [
    { name: 'Катков Александр Лазаревич', description: 'Вице-президент РПА' },
    { name: 'Незнанов Николай Григорьевич', description: 'Вице-президент РПА' },
    { name: 'Холмогорова Алла Борисовна', description: 'Вице-президент РПА' },
  ];

  const executiveBoard = [
    { name: 'Бурлакова Наталья Сергеевна', role: 'Исполнительный директор' },
    { name: 'Смирнов Игорь Петрович', role: 'Научный секретарь' },
    { name: 'Васильева Елена Дмитриевна', role: 'Руководитель образовательных программ' },
  ];

  const ethicsCommittee = [
    { name: 'Петрова Светлана Викторовна', role: 'Председатель' },
    { name: 'Соколов Игорь Владимирович', role: 'Член комитета' },
    { name: 'Белова Ольга Николаевна', role: 'Член комитета' },
  ];

  const auditCommission = [
    { name: 'Федорова Марина Петровна', role: 'Председатель' },
    { name: 'Григорьев Алексей Иванович', role: 'Член комиссии' },
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
                Московское отделение{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Российской психотерапевтической ассоциации
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Профессиональное сообщество психотерапевтов Москвы для развития и популяризации психотерапии
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/specialists">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти специалиста
                  </Button>
                </Link>
                <Link to="/about-rpa">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    О РПА
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Структура Московского отделения</h2>
                  <p className="text-lg text-muted-foreground">
                    Руководство и органы управления
                  </p>
                </div>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Crown" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Президент РПА</h2>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{president.name}</h3>
                      <p className="text-muted-foreground">{president.description}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Users" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Вице-президенты</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {vicePresidents.map((member, index) => (
                        <div key={index} className="p-4 rounded-lg border bg-muted/30">
                          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Briefcase" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Исполнительная дирекция</h2>
                    </div>
                    <div className="space-y-3">
                      {executiveBoard.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30">
                          <span className="font-semibold">{member.name}</span>
                          <span className="text-sm text-muted-foreground">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Scale" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Этический комитет</h2>
                    </div>
                    <div className="space-y-3">
                      {ethicsCommittee.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30">
                          <span className="font-semibold">{member.name}</span>
                          <span className="text-sm text-muted-foreground">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="FileCheck" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Ревизионная комиссия</h2>
                    </div>
                    <div className="space-y-3">
                      {auditCommission.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30">
                          <span className="font-semibold">{member.name}</span>
                          <span className="text-sm text-muted-foreground">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="MapPin" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Контакты</h2>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" size={16} className="text-primary" />
                        <span className="text-muted-foreground">moscow@rpa-russia.ru</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" size={16} className="text-primary" />
                        <span className="text-muted-foreground">+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Icon name="MapPin" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">г. Москва, ул. Профессиональная, д. 10</span>
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

export default Home;
