import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Materials = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Протоколы работы с паническими атаками',
      type: 'Методические материалы',
      category: 'КПТ',
      description: 'Пошаговое руководство по работе с паническими атаками в рамках когнитивно-поведенческой терапии.',
      date: '10 декабря 2024',
      size: '2.5 МБ',
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Техники заземления при работе с травмой',
      type: 'Методические материалы',
      category: 'Травма',
      description: 'Коллекция техник заземления для стабилизации клиентов в травматерапии.',
      date: '5 декабря 2024',
      size: '1.8 МБ',
      format: 'PDF',
    },
    {
      id: 3,
      title: 'Супервизорский чек-лист',
      type: 'Инструменты',
      category: 'Супервизия',
      description: 'Чек-лист для проведения супервизорских сессий и анализа случаев.',
      date: '28 ноября 2024',
      size: '450 КБ',
      format: 'DOCX',
    },
    {
      id: 4,
      title: 'Генограмма: инструкция по построению',
      type: 'Методические материалы',
      category: 'Семейная терапия',
      description: 'Подробное руководство по построению и анализу генограмм в семейной терапии.',
      date: '20 ноября 2024',
      size: '3.2 МБ',
      format: 'PDF',
    },
  ];

  const books = [
    {
      id: 1,
      title: 'Экспериментальные методики патопсихологии',
      author: 'Сусанна Рубинштейн',
      description: 'Фундаментальное пособие по патопсихологическим исследованиям и экспериментальным методикам.',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/3664c0c4-bb3a-420a-a19d-f2d55164ecd3.jpg',
      publisher: 'Издательство Городец',
      url: 'https://gorodets.ru/product/eksperimentalnye-metodiki-patopsihologii#s_flip_book/',
    },
    {
      id: 2,
      title: 'Ненависть',
      author: 'Жаннет Фишер',
      description: 'Исследование эмоции ненависти с точки зрения психологии и психотерапии.',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/804fa038-887c-499c-9dd6-14eb93962220.jpg',
      publisher: 'Издательство Городец',
      series: 'СОПЗ. Психология и психиатрия',
      url: 'https://gorodets.ru/product/nenavist#s_flip_book/',
    },
    {
      id: 3,
      title: 'Всё желанное со мной: Нарцисс и нарциссизм',
      author: 'Жаннет Фишер',
      description: 'Глубокий анализ нарциссизма и нарциссических расстройств личности.',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/91a7aa64-b283-423d-af8a-63bddc1cd0b7.jpg',
      publisher: 'Издательство Городец',
      series: 'СОПЗ. Психология и психиатрия',
      url: 'https://gorodets.ru/product/vse-zhelannoe-so-mnoy-nartsiss-i-nartsissizm#s_flip_book/',
    },
    {
      id: 4,
      title: 'Черты лица',
      author: 'Елена Долгопят',
      description: 'Исследование психологии и восприятия личности.',
      coverImage: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/480bc12d-f9d6-41df-8533-a575d34525ab.jpg',
      publisher: 'Издательство Городец',
      url: 'https://gorodets.ru/product/cherty-litsa#s_flip_book/',
    },
  ];

  const links = [
    {
      id: 1,
      title: 'Российское общество психиатров',
      url: 'https://psychiatr.ru/',
      description: 'Официальный сайт профессиональной организации психиатров России',
      category: 'Профессиональные организации',
    },
    {
      id: 2,
      title: 'Российская психотерапевтическая ассоциация',
      url: 'https://rpa-russia.ru/',
      description: 'Профессиональная ассоциация психотерапевтов',
      category: 'Профессиональные организации',
    },
    {
      id: 3,
      title: 'Международная ассоциация психотерапевтов',
      url: 'https://example.com',
      description: 'Глобальная сеть профессионалов',
      category: 'Профессиональные организации',
    },
    {
      id: 4,
      title: 'База данных исследований по психотерапии',
      url: 'https://example.com',
      description: 'Архив научных публикаций',
      category: 'Исследования',
    },
    {
      id: 5,
      title: 'Онлайн курсы повышения квалификации',
      url: 'https://rosmededucation.ru/',
      description: 'Обучающие программы от ведущих экспертов',
      category: 'Образование',
    },
    {
      id: 6,
      title: 'Журнал "Психотерапия"',
      url: 'https://example.com',
      description: 'Ежеквартальный научный журнал',
      category: 'Публикации',
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Дополнительные материалы</h1>
              <p className="text-lg text-muted-foreground">
                Полезные ресурсы, статьи и инструменты для работы
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Поиск материалов..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="articles" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="articles">Методические материалы</TabsTrigger>
                  <TabsTrigger value="books">Рекомендуемая литература</TabsTrigger>
                  <TabsTrigger value="links">Полезные ссылки</TabsTrigger>
                </TabsList>

                <TabsContent value="articles" className="space-y-4">
                  {filteredArticles.map((article) => (
                    <Card key={article.id} className="border-2 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                              <Icon name="FileText" size={28} className="text-white" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-start gap-2">
                                <h3 className="text-xl font-semibold flex-1">{article.title}</h3>
                                <Badge className="bg-primary/10 text-primary">{article.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{article.description}</p>
                              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center space-x-1">
                                  <Icon name="Calendar" size={12} />
                                  <span>{article.date}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Icon name="HardDrive" size={12} />
                                  <span>{article.size}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Icon name="File" size={12} />
                                  <span>{article.format}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button>
                            <Icon name="Download" size={16} className="mr-2" />
                            Скачать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="books" className="space-y-4">
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      Рекомендуемая литература серии "СОПЗ. Психология и психиатрия" от{' '}
                      <a 
                        href="https://gorodets.ru/page/s-sopz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        издательства Городец
                      </a>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredBooks.map((book) => (
                      <Card key={book.id} className="border-2 hover:shadow-lg transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            {book.coverImage ? (
                              <img 
                                src={book.coverImage} 
                                alt={book.title}
                                className="w-24 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                              />
                            ) : (
                              <div className="text-6xl">{book.cover}</div>
                            )}
                            <div className="flex-1 space-y-2">
                              <h3 className="text-xl font-semibold">{book.title}</h3>
                              <p className="text-sm text-primary font-medium">{book.author}</p>
                              {book.series && (
                                <Badge variant="outline" className="text-xs">{book.series}</Badge>
                              )}
                              <p className="text-sm text-muted-foreground">{book.description}</p>
                              {book.url ? (
                                <Button variant="outline" size="sm" className="mt-2" asChild>
                                  <a href={book.url} target="_blank" rel="noopener noreferrer">
                                    <Icon name="ExternalLink" size={14} className="mr-2" />
                                    Подробнее
                                  </a>
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" className="mt-2">
                                  <Icon name="ExternalLink" size={14} className="mr-2" />
                                  Подробнее
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="links" className="space-y-4">
                  {filteredLinks.map((link) => (
                    <Card key={link.id} className="border-2 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                              <Icon name="Link" size={28} className="text-white" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-start gap-2">
                                <h3 className="text-xl font-semibold flex-1">{link.title}</h3>
                                <Badge variant="outline">{link.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{link.description}</p>
                            </div>
                          </div>
                          <Button>
                            <Icon name="ExternalLink" size={16} className="mr-2" />
                            Перейти
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Materials;