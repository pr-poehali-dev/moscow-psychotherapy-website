import { useState } from 'react';
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
      title: 'Основы КПТ: работа с автоматическими мыслями',
      date: '15 декабря 2024',
      duration: '2 часа 15 мин',
      category: 'КПТ',
      speaker: 'Иванова Елена Александровна',
      views: 1250,
      description: 'Практическое руководство по выявлению и работе с автоматическими мыслями в рамках когнитивно-поведенческой терапии.',
    },
    {
      id: 2,
      title: 'Психодинамический подход в современной терапии',
      date: '8 декабря 2024',
      duration: '3 часа',
      category: 'Психоанализ',
      speaker: 'Петров Дмитрий Сергеевич',
      views: 890,
      description: 'Обзор психодинамических техник и их применение в работе с клиентами.',
    },
    {
      id: 3,
      title: 'Гештальт-терапия: работа с незавершенными ситуациями',
      date: '1 декабря 2024',
      duration: '1 час 45 мин',
      category: 'Гештальт',
      speaker: 'Смирнова Ольга Владимировна',
      views: 1450,
      description: 'Техники завершения гештальтов и работа с незакрытыми ситуациями из прошлого.',
    },
    {
      id: 4,
      title: 'Семейная терапия: системный подход',
      date: '25 ноября 2024',
      duration: '2 часа 30 мин',
      category: 'Семейная терапия',
      speaker: 'Козлов Андрей Николаевич',
      views: 760,
      description: 'Системный взгляд на семью как единицу терапии. Работа с семейными паттернами.',
    },
    {
      id: 5,
      title: 'Арт-терапия при работе с травмой',
      date: '18 ноября 2024',
      duration: '2 часа',
      category: 'Арт-терапия',
      speaker: 'Новикова Мария Игоревна',
      views: 1120,
      description: 'Использование творческих методов в работе с травматическим опытом.',
    },
    {
      id: 6,
      title: 'Экзистенциальная терапия: поиск смысла',
      date: '10 ноября 2024',
      duration: '2 часа 20 мин',
      category: 'Экзистенциальная',
      speaker: 'Волков Сергей Петрович',
      views: 980,
      description: 'Работа с экзистенциальными вопросами клиентов: смысл, свобода, ответственность.',
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredWebinars.map((webinar) => (
                  <Card key={webinar.id} className="border-2 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                          <Icon name="Play" size={48} className="text-primary" />
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-xl font-semibold flex-1">{webinar.title}</h3>
                            <Badge className="bg-primary/10 text-primary">
                              {webinar.category}
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {webinar.description}
                          </p>

                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="User" size={14} className="text-primary" />
                            <span>{webinar.speaker}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Icon name="Calendar" size={12} className="text-primary" />
                              <span>{webinar.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Clock" size={12} className="text-primary" />
                              <span>{webinar.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Eye" size={12} className="text-primary" />
                              <span>{webinar.views} просмотров</span>
                            </div>
                          </div>

                          <Button className="w-full">
                            <Icon name="Play" size={16} className="mr-2" />
                            Смотреть запись
                          </Button>
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
