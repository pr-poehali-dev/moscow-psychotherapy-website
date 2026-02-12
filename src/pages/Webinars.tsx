import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      episodeNumber: 1,
      speaker: { 
        name: 'Степанова Екатерина Сергеевна', 
        role: 'Член Российской Психотерапевтической Ассоциации (РПА), преподаватель НОЦ Современных Медицинских Технологий',
        specialistId: 31
      },
      category: 'Семейная терапия',
      description: 'Кто на самом деле становится клиентом психолога при работе с проблемами подростка, какие существуют ловушки в терапии и способы их обхода, как сделать из родителя не контрагента, а помощника — без вины виноватые.',
      topics: [
        'Кто на самом деле клиент при работе с подростком',
        'Ловушки терапии и способы их обхода',
        'Превращение родителя в помощника'
      ],
      duration: '90 мин',
      rutubeUrl: 'https://rutube.ru/video/placeholder1/',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/840d7e71-5bff-4dd8-827c-689bf1dbf525.png',
      isPaid: true,
      price: 1000,
    },
    {
      id: 2,
      title: 'Психолог и границы компетенции «Как работать, если чувствуешь, что клиенту нужна не только терапия»',
      episodeNumber: 2,
      speaker: { 
        name: 'Бородин Владимир Иванович', 
        role: 'ДМН, профессор, врач-психиатр, психотерапевт, Руководитель отделения проблем реабилитации отдела пограничной психиатрии ГНЦССП им. В.П. Сербского',
        specialistId: 58
      },
      category: 'Профессиональная этика',
      description: 'Лекция посвящена критической роли профессиональных границ в психологическом консультировании и психотерапии. В ней подробно разбирается, как границы, выполняя структурирующую, а не просто ограничивающую функцию, определяют эффективность этих видов помощи, и рассматриваются их конкретные виды, этические и технические аспекты.',
      topics: [
        'Роль профессиональных границ',
        'Структурирующая функция границ',
        'Этические и технические аспекты'
      ],
      duration: '90 мин',
      rutubeUrl: 'https://rutube.ru/video/placeholder2/',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/840d7e71-5bff-4dd8-827c-689bf1dbf525.png',
      isPaid: true,
      price: 1000,
    },
    {
      id: 3,
      title: 'Системный взгляд психолога: «Как отличить личностные особенности от психопатологии»',
      episodeNumber: 3,
      speaker: { 
        name: 'Карпуль Анна Михайловна', 
        role: 'Клинический, психоаналитический, кризисный и перинатальный психолог. Член Российской психотерапевтической ассоциации, Ассоциации Специалистов Психоаналитической Психосоматики (АСПП), Международной ассоциации психологов',
        specialistId: 8
      },
      category: 'Диагностика',
      description: 'Четкая система вместо неопределенности: 4 критерия, чтобы точно отличить норму от патологии, и их применение на практике, как применять системный подход в диагностике и разбор реальных кейсов из практики.',
      topics: [
        '4 критерия отличия нормы от патологии',
        'Применение на практике',
        'Разбор реальных кейсов'
      ],
      duration: '90 мин',
      rutubeUrl: 'https://rutube.ru/video/placeholder3/',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/840d7e71-5bff-4dd8-827c-689bf1dbf525.png',
      isPaid: true,
      price: 1000,
    },
    {
      id: 4,
      title: '«Мне больше не хочется жить». Что делать психологу?',
      episodeNumber: 4,
      speaker: { 
        name: 'Шмакова Евгения Владимировна', 
        role: 'Клинический психолог, криминальный психолог, заместитель директора Союза охраны психического здоровья. Преподаватель АНО ДПО "НОЦ СМТ", действительный член МО РПА',
        specialistId: 43
      },
      category: 'Кризисная психология',
      description: 'Почему суицидальный риск обостряется именно в праздники, как распознавать и работать с прямыми и косвенными криками о помощи, какие конкретные фразы использовать для оценки угрозы и как составить рабочий «План безопасности» — между страхом и профессиональной ответственностью.',
      topics: [
        'Суицидальный риск в праздники',
        'Распознавание криков о помощи',
        'План безопасности'
      ],
      duration: '90 мин',
      rutubeUrl: 'https://rutube.ru/video/placeholder4/',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/840d7e71-5bff-4dd8-827c-689bf1dbf525.png',
      isPaid: true,
      price: 1000,
    },
  ];

  const filteredWebinars = webinars.filter((webinar) => {
    const matchesSearch = 
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.speaker.name.toLowerCase().includes(searchQuery.toLowerCase());
    
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
                        <SelectItem value="Семейная терапия">Семейная терапия</SelectItem>
                        <SelectItem value="Профессиональная этика">Профессиональная этика</SelectItem>
                        <SelectItem value="Диагностика">Диагностика</SelectItem>
                        <SelectItem value="Кризисная психология">Кризисная психология</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6">
                {filteredWebinars.map((webinar) => (
                  <Card key={webinar.id} className="border-2 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="lg:border-r">
                          <div className="relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none bg-gradient-to-br from-primary/5 to-accent/10">
                            <iframe
                              src={`https://rutube.ru/play/embed/${webinar.rutubeUrl.split('/video/')[1]?.replace('/', '')}`}
                              frameBorder="0"
                              allow="clipboard-write; autoplay"
                              allowFullScreen
                              className="w-full aspect-video"
                            />
                          </div>

                          <div className="p-6 space-y-4">
                            <div className="space-y-2">
                              <p className="font-semibold text-sm">Ведущий:</p>
                              <div className="flex items-start gap-2">
                                <Icon name="User" size={16} className="text-primary mt-1 flex-shrink-0" />
                                <div className="text-sm">
                                  {webinar.speaker.specialistId ? (
                                    <Link 
                                      to={`/specialists#specialist-${webinar.speaker.specialistId}`}
                                      className="font-semibold hover:text-primary transition-colors underline"
                                    >
                                      {webinar.speaker.name}
                                    </Link>
                                  ) : (
                                    <p className="font-semibold">{webinar.speaker.name}</p>
                                  )}
                                  <p className="text-muted-foreground">{webinar.speaker.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold">{webinar.title}</h3>

                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className="bg-accent text-accent-foreground">
                                Вебинар {webinar.episodeNumber}
                              </Badge>
                              {webinar.isPaid ? (
                                <Badge className="bg-primary text-white">
                                  {webinar.price} ₽
                                </Badge>
                              ) : (
                                <Badge className="bg-green-500 text-white">
                                  Бесплатно
                                </Badge>
                              )}
                              <Badge className="bg-primary/10 text-primary">
                                {webinar.category}
                              </Badge>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Clock" size={16} className="text-primary" />
                              <span>{webinar.duration}</span>
                            </div>

                            <div className="space-y-2">
                              <p className="font-semibold text-sm">О чем вебинар:</p>
                              <p className="text-sm text-muted-foreground">
                                {webinar.description}
                              </p>
                            </div>

                            {webinar.topics && webinar.topics.length > 0 && (
                              <div className="space-y-2">
                                <p className="font-semibold text-sm">Что обсуждаем:</p>
                                <ul className="space-y-1">
                                  {webinar.topics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <Icon name="MessageCircle" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="space-y-2">
                              <p className="font-semibold text-sm">Поделиться с друзьями:</p>
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    const title = encodeURIComponent(webinar.title);
                                    window.open(`https://vk.com/share.php?url=${url}&title=${title}`, '_blank', 'width=600,height=400');
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-md transition-colors"
                                >
                                  <Icon name="Share2" size={16} />
                                  <span className="text-sm font-medium">ВКонтакте</span>
                                </button>
                                <button
                                  onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    const text = encodeURIComponent(webinar.title);
                                    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-md transition-colors"
                                >
                                  <Icon name="Send" size={16} />
                                  <span className="text-sm font-medium">Telegram</span>
                                </button>
                                <button
                                  onClick={() => {
                                    const url = window.location.href;
                                    window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(webinar.title)}`, '_blank', 'width=600,height=400');
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#EE8208] hover:bg-[#DD7707] text-white rounded-md transition-colors"
                                >
                                  <Icon name="Share2" size={16} />
                                  <span className="text-sm font-medium">ОК</span>
                                </button>
                                <button
                                  onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    const text = encodeURIComponent(webinar.title);
                                    window.open(`https://api.maks.me/share?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF0033] hover:bg-[#EE0022] text-white rounded-md transition-colors"
                                >
                                  <Icon name="MessageCircle" size={16} />
                                  <span className="text-sm font-medium">МАКС</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
