import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Podcasts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const podcasts = [
    {
      id: 1,
      title: 'Психология – новая религия? Эпизод 1: "Почему вы это слушаете?"',
      episodeNumber: 1,
      hosts: [
        { name: 'Мальцева Екатерина Витальевна', role: 'Исполнительный директор МО РПА, директор Союза охраны психического здоровья, директор АНО ДПО "НОЦ СМТ", клинический психолог' },
        { name: 'Шмакова Евгения Владимировна', role: 'Клинический психолог, криминальный психолог, заместитель директора Союза охраны психического здоровья. Преподаватель АНО ДПО "НОЦ СМТ", действительный член МО РПА', specialistId: 43 },
        { name: 'Журихин Сергей Анатольевич', role: 'Проректор по повышению квалификации', organization: 'Университета Правительства Москвы', organizationUrl: 'https://t.me/openeduspace' },
      ],
      category: 'Популярная психология',
      description: 'В первом эпизоде нашего подкаста мы разбираем популярную психологию сквозь призму классических научных подходов, а вы – присяжный заседатель, которому предстоит вынести вердикт!',
      topics: [
        'Почему психологические тренды заполонили рабочие чаты и соцсети?',
        'Доступные знания или маркетинговая ловушка?',
        'Осознанность или бесконечное самокопание?'
      ],
      duration: '45 мин',
      rutubeUrl: 'https://rutube.ru/video/a71542eceb09cd6991b198730f3c6074/',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/840d7e71-5bff-4dd8-827c-689bf1dbf525.png',
      isPaid: false,
    },
  ];

  const filteredPodcasts = podcasts.filter((podcast) => {
    const matchesSearch = 
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.hosts.some(host => host.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      podcast.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Подкасты</h1>
              <p className="text-lg text-muted-foreground">
                Аудио и видео подкасты экспертов РПА на актуальные темы психологии
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
                        <SelectItem value="Популярная психология">Популярная психология</SelectItem>
                        <SelectItem value="Клиническая практика">Клиническая практика</SelectItem>
                        <SelectItem value="Профессиональное развитие">Профессиональное развитие</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-6">
                {filteredPodcasts.map((podcast) => (
                  <Card key={podcast.id} className="border-2 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="lg:border-r">
                          <div className="relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none bg-gradient-to-br from-primary/5 to-accent/10">
                            <iframe
                              src={`https://rutube.ru/play/embed/${podcast.rutubeUrl.split('/video/')[1]?.replace('/', '')}`}
                              frameBorder="0"
                              allow="clipboard-write; autoplay"
                              allowFullScreen
                              className="w-full aspect-video"
                            />
                          </div>

                          <div className="p-6 space-y-4">
                            <div className="space-y-2">
                              <p className="font-semibold text-sm">Ведущие:</p>
                              {podcast.hosts.map((host, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <Icon name="User" size={16} className="text-primary mt-1 flex-shrink-0" />
                                  <div className="text-sm">
                                    {host.specialistId ? (
                                      <Link 
                                        to={`/specialists#specialist-${host.specialistId}`}
                                        className="font-semibold hover:text-primary transition-colors underline"
                                      >
                                        {host.name}
                                      </Link>
                                    ) : host.organizationUrl ? (
                                      <a 
                                        href={host.organizationUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="font-semibold hover:text-primary transition-colors underline"
                                      >
                                        {host.name}
                                      </a>
                                    ) : (
                                      <p className="font-semibold">{host.name}</p>
                                    )}
                                    <p className="text-muted-foreground">
                                      {host.role}
                                      {host.organization && (
                                        <> {host.organization}</>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold">{podcast.title}</h3>

                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className="bg-accent text-accent-foreground">
                                Эпизод {podcast.episodeNumber}
                              </Badge>
                              {!podcast.isPaid && (
                                <Badge className="bg-green-500 text-white">
                                  Бесплатно
                                </Badge>
                              )}
                              <Badge className="bg-primary/10 text-primary">
                                {podcast.category}
                              </Badge>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Icon name="Clock" size={16} className="text-primary" />
                              <span>{podcast.duration}</span>
                            </div>

                            <div className="space-y-2">
                              <p className="font-semibold text-sm">О чем эпизод:</p>
                              <p className="text-sm text-muted-foreground">
                                {podcast.description}
                              </p>
                            </div>

                            {podcast.topics && podcast.topics.length > 0 && (
                              <div className="space-y-2">
                                <p className="font-semibold text-sm">Что обсуждаем:</p>
                                <ul className="space-y-1">
                                  {podcast.topics.map((topic, index) => (
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
                                    const title = encodeURIComponent(podcast.title);
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
                                    const text = encodeURIComponent(podcast.title);
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
                                    const text = `${podcast.title} - ${url}`;
                                    window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(podcast.title)}`, '_blank', 'width=600,height=400');
                                  }}
                                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#EE8208] hover:bg-[#DD7707] text-white rounded-md transition-colors"
                                >
                                  <Icon name="Share2" size={16} />
                                  <span className="text-sm font-medium">ОК</span>
                                </button>
                                <button
                                  onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    const text = encodeURIComponent(podcast.title);
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

              {filteredPodcasts.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">Подкасты не найдены</p>
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

export default Podcasts;