import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const news = [
  {
    date: '16 сентября 2026',
    title: 'Запущена интервизионная группа Mare Internum',
    text: 'Регулярная интервизионная группа в подходе теории поля. Начало работы — 18 сентября, встречи еженедельно по пятницам в Zoom.',
  },
  {
    date: '15 сентября 2026',
    title: 'Открыта регистрация на осеннюю конференцию МО РПА',
    text: 'Приглашаем специалистов принять участие в ежегодной конференции, посвящённой актуальным вопросам психотерапии.',
  },
  {
    date: '2 сентября 2026',
    title: 'Новый цикл супервизий для членов ассоциации',
    text: 'Стартует серия групповых супервизий с ведущими практиками московского отделения.',
  },
  {
    date: '20 августа 2026',
    title: 'Итоги летней школы психотерапевтов',
    text: 'Подвели итоги образовательной программы, в которой приняли участие более 100 специалистов.',
  },
];

const Home = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Московское отделение РПА — Профессиональное сообщество психотерапевтов</title>
        <meta name="description" content="Московское отделение Российской психотерапевтической ассоциации (МО РПА). Вступление в профессиональное сообщество психотерапевтов, обучение, сертификация, мероприятия и конференции." />
      </Helmet>
      <Header />
      
      <main className="flex-1">
        <section className="relative py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/15 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                Московское отделение Российской психотерапевтической ассоциации
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
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
                    О Московском отделении
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Профессиональное сообщество</h3>
                    <p className="text-muted-foreground">Объединяем психотерапевтов для обмена опытом</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="BookOpen" size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Образование</h3>
                    <p className="text-muted-foreground">Регулярные семинары и супервизии</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Award" size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Сертификация</h3>
                    <p className="text-muted-foreground">Подтверждение квалификации</p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Calendar" size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Мероприятия</h3>
                    <p className="text-muted-foreground">Конференции и встречи</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10 lg:col-span-2">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-4">О Московском отделении</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          Московское отделение РПА объединяет ведущих психотерапевтов столицы и является крупнейшим 
                          региональным подразделением ассоциации. Мы организуем профессиональные мероприятия, 
                          образовательные программы и способствуем развитию психотерапевтической практики в Москве.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/about" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <Icon name="Info" size={16} className="mr-2" />
                            Подробнее о МО РПА
                          </Button>
                        </Link>
                        <a href="https://course.rosmededucation.ru/rpa" target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="w-full">
                            <Icon name="UserPlus" size={16} className="mr-2" />
                            Вступить в МО РПА
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Icon name="Newspaper" size={20} className="text-primary" />
                        Новости
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {news.map((item, index) => (
                        <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                          <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                          <h3 className="font-medium leading-snug mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-snug">{item.text}</p>
                        </div>
                      ))}
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

export default Home;