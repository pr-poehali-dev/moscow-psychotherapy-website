import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Webinars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const webinars = [
    {
      id: 1,
      title: 'Терапия отношений родителей и подростков «А баба яга против»',
      price: 1000,
      speaker: 'Степанова Екатерина Сергеевна',
      speakerTitle: 'Член Российской Психотерапевтической Ассоциации (РПА), преподаватель НОЦ Современных Медицинских Технологий',
      speakerId: 31,
      category: 'Семейная терапия',
      description: 'Кто на самом деле становится клиентом психолога при работе с проблемами подростка, какие существуют ловушки в терапии и способы их обхода, как сделать из родителя не контрагента, а помощника — без вины виноватые.',
      format: 'Видеоурок',
      access: 'Доступ с момента оплаты на 30 дней',
      bonuses: [
        'Подробный конспект лекции для удобства работы с темой',
        'Стартовый набор психолога: работа с подростками и родителями'
      ],
      buyUrl: 'https://rosmededucation.ru/samoobrazovanie',
      isPaid: true,
    },
    {
      id: 2,
      title: 'Психолог и границы компетенции «Как работать, если чувствуешь, что клиенту нужна не только терапия»',
      price: 1000,
      speaker: 'Бородин Владимир Иванович',
      speakerTitle: 'ДМН, профессор, врач-психиатр, психотерапевт, Руководитель отделения проблем реабилитации отдела пограничной психиатрии ГНЦССП им. В.П. Сербского',
      speakerId: 58,
      category: 'Профессиональная этика',
      description: 'Лекция посвящена критической роли профессиональных границ в психологическом консультировании и психотерапии. В ней подробно разбирается, как границы, выполняя структурирующую, а не просто ограничивающую функцию, определяют эффективность этих видов помощи, и рассматриваются их конкретные виды, этические и технические аспекты.',
      format: 'Видеоурок',
      access: 'Доступ с момента оплаты на 30 дней',
      bonuses: [
        'Чек-лист «Красные флаги»: какие симптомы требуют срочного вмешательства',
        'Подробный конспект лекции для удобства работы с темой'
      ],
      buyUrl: 'https://rosmededucation.ru/samoobrazovanie',
      isPaid: true,
    },
    {
      id: 3,
      title: 'Системный взгляд психолога: «Как отличить личностные особенности от психопатологии»',
      price: 1000,
      speaker: 'Карпуль Анна Михайловна',
      speakerTitle: 'Клинический, психоаналитический, кризисный и перинатальный психолог. Член Российской психотерапевтической ассоциации, Ассоциации Специалистов Психоаналитической Психосоматики (АСПП), Международной ассоциации психологов',
      speakerId: 8,
      category: 'Диагностика',
      description: 'Четкая система вместо неопределенности: 4 критерия, чтобы точно отличить норму от патологии, и их применение на практике, как применять системный подход в диагностике и разбор реальных кейсов из практики.',
      format: 'Видеоурок',
      access: 'Доступ с момента оплаты на 90 дней',
      bonuses: [
        'Дифференциальный навигатор психолога',
        'Подробный конспект лекции для удобства работы с темой'
      ],
      buyUrl: 'https://rosmededucation.ru/samoobrazovanie',
      isPaid: true,
    },
    {
      id: 4,
      title: '«Мне больше не хочется жить». Что делать психологу?',
      price: 1000,
      speaker: 'Шмакова Евгения Владимировна',
      speakerTitle: 'Клинический психолог, криминальный психолог, заместитель директора Союза охраны психического здоровья. Преподаватель Научно-образовательного центра современных медицинских технологий (НОЦ СМТ), член Российской психотерапевтической ассоциации (РПА)',
      category: 'Кризисная психология',
      description: 'Почему суицидальный риск обостряется именно в праздники, как распознавать и работать с прямыми и косвенными криками о помощи, какие конкретные фразы использовать для оценки угрозы и как составить рабочий «План безопасности» — между страхом и профессиональной ответственностью.',
      format: 'Видеоурок',
      access: 'Доступ с момента оплаты на 90 дней',
      bonuses: [
        'Работа с суицидальным риском: Якорь для специалиста',
        'Подробный конспект лекции для удобства работы с темой'
      ],
      buyUrl: 'https://rosmededucation.ru/samoobrazovanie',
      isPaid: true,
    },
    {
      id: 5,
      title: 'Бесплатный вебинар',
      speaker: 'Степанова Екатерина Сергеевна',
      speakerTitle: 'Член Российской Психотерапевтической Ассоциации (РПА), преподаватель НОЦ Современных Медицинских Технологий',
      speakerId: 31,
      category: 'Семейная терапия',
      description: 'Бесплатный вебинар от эксперта РПА',
      format: 'Видеоурок',
      access: 'Бесплатный доступ',
      rutubeUrl: 'https://rutube.ru/video/8babd8ad6f32bd7249241513a0714ba9/',
      isPaid: false,
    },
  ];

  const filteredWebinars = webinars.filter((webinar) => {
    const matchesSearch = 
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      webinar.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Поиск по названию или спикеру..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Категория" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все категории</SelectItem>
                        <SelectItem value="КПТ">КПТ</SelectItem>
                        <SelectItem value="Психоанализ">Психоанализ</SelectItem>
                        <SelectItem value="Гештальт">Гештальт</SelectItem>
                        <SelectItem value="Семейная терапия">Семейная терапия</SelectItem>
                        <SelectItem value="Арт-терапия">Арт-терапия</SelectItem>
                        <SelectItem value="Экзистенциальная">Экзистенциальная</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredWebinars.map((webinar) => (
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

              {filteredWebinars.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">Вебинары не найдены</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Webinars;
