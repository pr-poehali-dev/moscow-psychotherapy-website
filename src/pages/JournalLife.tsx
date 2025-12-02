import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const JournalLife = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Как справиться с тревогой: 5 простых техник',
      author: 'Иванова Е.А.',
      date: '10 декабря 2024',
      category: 'Тревога',
      readTime: '5 мин',
      preview: 'Тревога — естественная реакция организма на стресс. Но когда она становится чрезмерной, это мешает жить полной жизнью...',
      image: '🧘',
    },
    {
      id: 2,
      title: 'Почему важно говорить о своих чувствах',
      author: 'Смирнова О.В.',
      date: '5 декабря 2024',
      category: 'Эмоции',
      readTime: '7 мин',
      preview: 'Многие из нас учились скрывать свои эмоции. Разбираемся, почему важно уметь их выражать и как это делать правильно...',
      image: '💭',
    },
    {
      id: 3,
      title: 'Здоровые границы в отношениях',
      author: 'Козлов А.Н.',
      date: '1 декабря 2024',
      category: 'Отношения',
      readTime: '6 мин',
      preview: 'Личные границы — это невидимая линия между вами и другими людьми. Как их устанавливать и защищать...',
      image: '🤝',
    },
    {
      id: 4,
      title: 'Что делать, если близкий человек в депрессии',
      author: 'Петров Д.С.',
      date: '25 ноября 2024',
      category: 'Депрессия',
      readTime: '8 мин',
      preview: 'Когда близкий человек страдает от депрессии, мы часто не знаем, как помочь. Практические советы психотерапевта...',
      image: '🫂',
    },
    {
      id: 5,
      title: 'Стресс на работе: как не выгореть',
      author: 'Волков С.П.',
      date: '20 ноября 2024',
      category: 'Выгорание',
      readTime: '6 мин',
      preview: 'Профессиональное выгорание — серьезная проблема современности. Как распознать признаки и что делать...',
      image: '🔥',
    },
    {
      id: 6,
      title: 'Как научить ребенка справляться с эмоциями',
      author: 'Новикова М.И.',
      date: '15 ноября 2024',
      category: 'Дети',
      readTime: '9 мин',
      preview: 'Эмоциональный интеллект — важный навык для жизни. Как помочь ребенку понимать и выражать свои чувства...',
      image: '👶',
    },
    {
      id: 7,
      title: 'Осознанность: практика для начинающих',
      author: 'Иванова Е.А.',
      date: '10 ноября 2024',
      category: 'Практики',
      readTime: '5 мин',
      preview: 'Осознанность помогает жить здесь и сейчас. Простые упражнения для развития этого навыка...',
      image: '🧘‍♀️',
    },
    {
      id: 8,
      title: 'Когда пора обратиться к психотерапевту',
      author: 'Петров Д.С.',
      date: '5 ноября 2024',
      category: 'Психотерапия',
      readTime: '7 мин',
      preview: 'Многие люди откладывают визит к психотерапевту. Разбираемся, когда стоит обратиться за помощью...',
      image: '👨‍⚕️',
    },
  ];

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Психология для жизни</h1>
              <p className="text-lg text-muted-foreground">
                Популярные статьи о психологии и ментальном здоровье
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
                      placeholder="Поиск статей..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="border-2 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="text-6xl text-center py-4">
                          {article.image}
                        </div>

                        <div className="space-y-3">
                          <Badge className="bg-primary/10 text-primary">
                            {article.category}
                          </Badge>

                          <h3 className="text-xl font-semibold line-clamp-2">
                            {article.title}
                          </h3>

                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {article.preview}
                          </p>

                          <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                            <div className="flex items-center space-x-2">
                              <Icon name="User" size={12} className="text-primary" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="Clock" size={12} className="text-primary" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Icon name="Calendar" size={12} className="text-primary" />
                            <span>{article.date}</span>
                          </div>

                          <Button className="w-full mt-2">
                            <Icon name="BookOpen" size={16} className="mr-2" />
                            Читать статью
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">Статьи не найдены</p>
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

export default JournalLife;
