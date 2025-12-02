import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Documents = () => {
  const documents = [
    {
      title: 'Устав МО РПА',
      description: 'Основной учредительный документ ассоциации',
      icon: 'FileText',
      date: '2024',
      size: '1.2 МБ',
    },
    {
      title: 'Этический кодекс',
      description: 'Профессиональные стандарты и принципы работы',
      icon: 'Scale',
      date: '2024',
      size: '850 КБ',
    },
    {
      title: 'Положение о членстве',
      description: 'Условия и процедура вступления в ассоциацию',
      icon: 'UserPlus',
      date: '2024',
      size: '640 КБ',
    },
    {
      title: 'Положение о супервизии',
      description: 'Требования и порядок проведения супервизий',
      icon: 'Eye',
      date: '2024',
      size: '720 КБ',
    },
    {
      title: 'Положение о сертификации',
      description: 'Процедура подтверждения квалификации',
      icon: 'Award',
      date: '2024',
      size: '980 КБ',
    },
    {
      title: 'Согласие на обработку персональных данных',
      description: 'Форма согласия на обработку ПДн',
      icon: 'Shield',
      date: '2024',
      size: '420 КБ',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Документы</h1>
              <p className="text-lg text-muted-foreground">
                Официальные документы и положения ассоциации
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <Card key={index} className="border-2 hover:border-primary/30 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                          <Icon name={doc.icon as any} size={28} className="text-white" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{doc.title}</h3>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                          </div>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Icon name="Calendar" size={12} />
                              <span>{doc.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="HardDrive" size={12} />
                              <span>{doc.size}</span>
                            </span>
                          </div>
                          <Button className="w-full" size="sm">
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Info" size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Нужна консультация?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Если у вас есть вопросы по документам или процедурам ассоциации, свяжитесь с нами
                  </p>
                  <Button size="lg">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Написать в ассоциацию
                  </Button>
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

export default Documents;