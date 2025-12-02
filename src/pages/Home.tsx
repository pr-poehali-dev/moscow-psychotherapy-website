import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Home = () => {
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
                Московское отделение{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Российской психотерапевтической ассоциации
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
                    Узнать больше
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
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8 md:p-12 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="UserPlus" size={32} className="text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Присоединяйтесь к нам</h2>
                  <p className="text-lg text-muted-foreground">
                    Станьте частью профессионального сообщества и получите доступ к эксклюзивным мероприятиям
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to="/structure">
                      <Button size="lg" className="w-full sm:w-auto">
                        Узнать условия
                      </Button>
                    </Link>
                    <Link to="/contacts">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        <Icon name="Mail" size={20} className="mr-2" />
                        Связаться
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
