import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const JournalProfessional = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const publications = [
    {
      id: 1,
      title: 'Эффективность когнитивно-поведенческой терапии при лечении генерализованного тревожного расстройства',
      authors: ['Иванова Е.А.', 'Петров Д.С.'],
      journal: 'Журнал МО РПА',
      issue: '2024, №4',
      category: 'КПТ',
      abstract: 'Исследование эффективности КПТ на выборке из 120 пациентов с ГТР. Показана значимая редукция симптомов...',
      keywords: ['КПТ', 'тревожность', 'ГТР', 'эффективность'],
      citations: 23,
    },
    {
      id: 2,
      title: 'Психодинамический подход в работе с личностными расстройствами',
      authors: ['Петров Д.С.', 'Смирнова О.В.'],
      journal: 'Журнал МО РПА',
      issue: '2024, №3',
      category: 'Психоанализ',
      abstract: 'Обзор психодинамических техник и их применение в долгосрочной терапии пациентов с личностными расстройствами...',
      keywords: ['психоанализ', 'личностные расстройства', 'долгосрочная терапия'],
      citations: 18,
    },
    {
      id: 3,
      title: 'Семейная терапия в контексте культурных особенностей',
      authors: ['Козлов А.Н.'],
      journal: 'Журнал МО РПА',
      issue: '2024, №3',
      category: 'Семейная терапия',
      abstract: 'Анализ влияния культурных факторов на процесс семейной терапии в российском контексте...',
      keywords: ['семейная терапия', 'культурные особенности', 'системный подход'],
      citations: 15,
    },
    {
      id: 4,
      title: 'Нейробиологические аспекты психотравмы и их значение для психотерапии',
      authors: ['Новикова М.И.', 'Волков С.П.'],
      journal: 'Журнал МО РПА',
      issue: '2024, №2',
      category: 'Травма',
      abstract: 'Обзор современных исследований нейробиологии травмы и их импликации для психотерапевтической практики...',
      keywords: ['травма', 'нейробиология', 'ПТСР', 'психотерапия'],
      citations: 31,
    },
    {
      id: 5,
      title: 'Супервизия как метод профессионального развития психотерапевта',
      authors: ['Волков С.П.', 'Морозова С.В.'],
      journal: 'Журнал МО РПА',
      issue: '2024, №2',
      category: 'Супервизия',
      abstract: 'Исследование роли супервизии в профессиональном развитии и предотвращении выгорания психотерапевтов...',
      keywords: ['супервизия', 'профессиональное развитие', 'выгорание'],
      citations: 12,
    },
    {
      id: 6,
      title: 'Арт-терапия в работе с детьми и подростками',
      authors: ['Новикова М.И.'],
      journal: 'Журнал МО РПА',
      issue: '2024, №1',
      category: 'Арт-терапия',
      abstract: 'Систематический обзор эффективности арт-терапевтических методов в детской и подростковой практике...',
      keywords: ['арт-терапия', 'дети', 'подростки', 'эффективность'],
      citations: 27,
    },
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      pub.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Профессиональные публикации</h1>
              <p className="text-lg text-muted-foreground">
                Научные статьи и исследования в области психотерапии
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Поиск по названию или автору..."
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
                        <SelectItem value="Семейная терапия">Семейная терапия</SelectItem>
                        <SelectItem value="Травма">Травма</SelectItem>
                        <SelectItem value="Супервизия">Супервизия</SelectItem>
                        <SelectItem value="Арт-терапия">Арт-терапия</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {filteredPublications.map((pub) => (
                  <Card key={pub.id} className="border-2 hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-bold flex-1">{pub.title}</h3>
                          <Badge className="bg-primary/10 text-primary">
                            {pub.category}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="Users" size={14} className="text-primary" />
                            <span>{pub.authors.join(', ')}</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Icon name="BookOpen" size={14} className="text-primary" />
                            <span>{pub.journal}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Calendar" size={14} className="text-primary" />
                            <span>{pub.issue}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Quote" size={14} className="text-primary" />
                            <span>Цитирований: {pub.citations}</span>
                          </span>
                        </div>

                        <p className="text-muted-foreground">{pub.abstract}</p>

                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button>
                            <Icon name="FileText" size={16} className="mr-2" />
                            Читать полностью
                          </Button>
                          <Button variant="outline">
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать PDF
                          </Button>
                          <Button variant="outline">
                            <Icon name="Share2" size={16} className="mr-2" />
                            Цитировать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPublications.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">Публикации не найдены</p>
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

export default JournalProfessional;
