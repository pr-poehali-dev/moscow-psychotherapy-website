import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Webinars = () => {
  const webinars = [
    {
      id: 5,
      title: 'На разборе: Психоаналитическая диагностика в кино Дьявол Носит Прада',
      speaker: 'Степанова Екатерина Сергеевна',
      speakerTitle: 'Член Российской Психотерапевтической Ассоциации (РПА), преподаватель НОЦ Современных Медицинских Технологий',
      speakerId: 31,
      category: 'Психоанализ',
      description: 'Разберём ключевых персонажей фильма и определим их вероятный уровень организации личности (невротический, пограничный, нарциссический, психотический). Поймём мотивацию и конфликты героев через призму психоаналитической диагностики. Увидим, как теория работает на практике, и обсудим, почему один и тот же метод применим и к нашим реальным клиентам.',
      format: 'Видеоурок',
      access: 'Бесплатный доступ',
      rutubeUrl: 'https://rutube.ru/video/8babd8ad6f32bd7249241513a0714ba9/',
      isPaid: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Записи вебинаров</h1>
              <p className="text-lg text-muted-foreground">
                Архив видеозаписей обучающих вебинаров и мастер-классов
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-3 flex-wrap">
                    <Badge className="bg-accent/20 text-accent-foreground">Платно</Badge>
                    <h3 className="text-2xl font-bold flex-1 w-full sm:w-auto">Записи прошедших вебинаров «Профессиональная среда»</h3>
                  </div>

                  <p className="text-muted-foreground">
                    Записи прошедших вебинаров доступны к покупке — вы получаете полный доступ к материалам и
                    можете изучать их в удобном темпе. Это возможность ознакомиться с содержанием встречи
                    последовательно и спокойно, возвращаясь к ключевым моментам в течение всего периода доступа.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Video" size={18} className="text-primary" />
                      <span>Запись + материалы</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>Доступ с момента оплаты на 30 дней</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="FileText" size={18} className="text-primary" />
                      <span>Подробный конспект лекции для удобства работы с темой</span>
                    </div>
                  </div>

                  <Button asChild>
                    <a href="https://course.rosmededucation.ru/web" target="_blank" rel="noopener noreferrer">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Посмотреть записи
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {webinars.map((webinar) => (
                  <Card key={webinar.id} className="border-2 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-xl font-bold flex-1">{webinar.title}</h3>
                            {webinar.isPaid ? (
                              <Badge className="bg-accent/20 text-accent-foreground">
                                Платный
                              </Badge>
                            ) : (
                              <Badge className="bg-green-500 text-white">
                                Бесплатно
                              </Badge>
                            )}
                          </div>

                          <Badge className="bg-primary/10 text-primary">
                            {webinar.category}
                          </Badge>

                          {webinar.price && (
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold text-primary">{webinar.price} ₽</span>
                            </div>
                          )}
                        </div>

                        {webinar.rutubeUrl && (
                          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-accent/10">
                            <iframe
                              src={`https://rutube.ru/play/embed/${webinar.rutubeUrl.split('/video/')[1]?.replace('/', '')}`}
                              frameBorder="0"
                              allow="clipboard-write; autoplay"
                              allowFullScreen
                              className="w-full aspect-video"
                            />
                          </div>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Icon name="User" size={20} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              {webinar.speakerId ? (
                                <Link 
                                  to={`/specialists#specialist-${webinar.speakerId}`}
                                  className="font-semibold hover:text-primary transition-colors underline"
                                >
                                  {webinar.speaker}
                                </Link>
                              ) : (
                                <p className="font-semibold">{webinar.speaker}</p>
                              )}
                              <p className="text-sm text-muted-foreground">{webinar.speakerTitle}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Icon name="FileText" size={20} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Описание</p>
                              <p className="text-sm text-muted-foreground">{webinar.description}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Icon name="Video" size={20} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Формат</p>
                              <p className="text-sm text-muted-foreground">{webinar.format}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold">Доступ</p>
                              <p className="text-sm text-muted-foreground">{webinar.access}</p>
                            </div>
                          </div>

                          {webinar.bonuses && webinar.bonuses.length > 0 && (
                            <div className="flex items-start gap-3">
                              <Icon name="Gift" size={20} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-semibold">Бонусы</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {webinar.bonuses.map((bonus, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                                      <span>{bonus}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                        {webinar.buyUrl && webinar.isPaid && (
                          <Button asChild className="w-full" size="lg">
                            <a href={webinar.buyUrl} target="_blank" rel="noopener noreferrer">
                              <Icon name="ShoppingCart" className="mr-2" size={20} />
                              Купить вебинар
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Webinars;