import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import MembershipForm from '@/components/MembershipForm';
import Icon from '@/components/ui/icon';

const Home = () => {
  const leadership = [
    { name: 'Бородин Владимир Иванович', role: 'Председатель', description: 'Вице-президент Союза охраны психического здоровья, д.м.н. врач-психиатр высшей категории, профессор Учебно-методического отдела ФГБУ «НМИЦ психиатрии и наркологии им. В.П. Сербского» Минздрава России' },
    { name: 'Мальцева Екатерина Витальевна', role: 'Исполнительный директор', description: 'Директор Союза охраны психического здоровья, директор АНО ДПО "НОЦ СМТ", клинический психолог, заместитель председателя' },
    { name: 'Корнешов Алексей Александрович', role: 'Заместитель исполнительного директора по финансовым вопросам', description: 'Доктор экономических наук, кандидат психологических наук, психоаналитический психолог, клинический психолог, психолог консультант' },
  ];

  const coordinationCouncil = [
    { name: 'Бегиджанова' },
    { name: 'Карпуль' },
    { name: 'Малышева Татьяна Борисовна', description: 'Магистр психологии, клинический психолог, сексолог РНСО. Аккредитованный терапевт и супервизор Московского Гештальт Института' },
    { name: 'Москвин' },
    { name: 'Самохин' },
    { name: 'Степанова Екатерина Сергеевна', description: 'Психолог, супервизор РПА, преподаватель, мультимодальный и психоаналитический подходы' },
    { name: 'Хвощевская' },
    { name: 'Шатина' },
    { name: 'Шевченко' },
  ];

  const youthLeadership = [
    { name: 'Корнешова Мария Алексеевна', role: 'Руководитель молодежного подразделения' },
  ];

  const documents = [
    { title: 'Положение о Московском отделении РПА', size: '245 КБ', link: '#' },
    { title: 'Устав Московского отделения', size: '180 КБ', link: '#' },
    { title: 'Этический кодекс', size: '120 КБ', link: '#' },
    { title: 'Положение о молодежном подразделении', size: '95 КБ', link: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Московское отделение РПА — Профессиональное сообщество психотерапевтов</title>
        <meta name="description" content="Московское отделение Российской психотерапевтической ассоциации (МО РПА). Вступление в профессиональное сообщество психотерапевтов, обучение, сертификация, мероприятия и конференции." />
      </Helmet>
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
                <Link to="/about">
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
                        <Icon name="Users" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Руководство</h2>
                    </div>
                    <div className="space-y-4">
                      {leadership.map((member, index) => (
                        <div key={index} className="p-4 rounded-lg border bg-muted/30">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <span className="font-semibold">{member.name}</span>
                            <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{member.role}</span>
                          </div>
                          {member.description && (
                            <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Network" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Координационный совет</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {coordinationCouncil.map((member, index) => (
                        <div key={index} className="p-4 rounded-lg border bg-muted/30">
                          <span className="font-semibold text-sm block">{member.name}</span>
                          {member.description && (
                            <p className="text-xs text-muted-foreground mt-1">{member.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="GraduationCap" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Молодежное подразделение</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-3 mb-4">
                        {youthLeadership.map((member, index) => (
                          <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30">
                            <span className="font-semibold">{member.name}</span>
                            <span className="text-sm text-muted-foreground">{member.role}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Молодежное подразделение Московского отделения РПА объединяет начинающих специалистов 
                        и студентов, интересующихся психотерапией. Мы организуем специальные образовательные 
                        программы, мастер-классы и супервизии для молодых психотерапевтов.
                      </p>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Icon name="Info" size={16} className="mr-2" />
                          Направления работы:
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Образовательные мероприятия и тренинги</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Супервизии и групповая поддержка</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Профессиональное наставничество</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Научно-практические конференции</span>
                          </li>
                        </ul>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Icon name="FileText" size={16} className="mr-2" />
                          Скачать положение о молодежном подразделении
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="FileText" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">Документы Московского отделения</h2>
                    </div>
                    <div className="space-y-3">
                      {documents.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <Icon name="FileDown" size={20} className="text-primary" />
                            <span className="font-medium group-hover:text-primary transition-colors">{doc.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{doc.size}</span>
                        </a>
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
                      <h2 className="text-3xl font-bold">Контакты Московского отделения</h2>
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

                <Card className="border-2 bg-gradient-to-br from-accent/5 to-primary/10">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Info" size={24} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">О Московском отделении</h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Московское отделение РПА объединяет ведущих психотерапевтов столицы и является крупнейшим 
                        региональным подразделением ассоциации. Мы организуем профессиональные мероприятия, 
                        образовательные программы и способствуем развитию психотерапевтической практики в Москве.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="border-2 sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Icon name="Calendar" size={24} className="mr-2 text-primary" />
                      Мероприятия
                    </h3>
                    <EventsCalendar />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Вступление в Московское отделение РПА</h2>
                <p className="text-lg text-muted-foreground">
                  Заполните анкету для вступления в наше профессиональное сообщество
                </p>
              </div>
              <MembershipForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;