import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const JournalAbout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    abstract: '',
    file: null as File | null,
  });

  const editorialBoard = [
    {
      name: 'Александров Виктор Петрович',
      position: 'Главный редактор',
      credentials: 'Доктор психологических наук, профессор',
    },
    {
      name: 'Смирнова Анна Ивановна',
      position: 'Заместитель главного редактора',
      credentials: 'Кандидат психологических наук',
    },
    {
      name: 'Петров Михаил Сергеевич',
      position: 'Ответственный секретарь',
      credentials: 'Доктор медицинских наук',
    },
    {
      name: 'Иванова Елена Александровна',
      position: 'Член редколлегии',
      credentials: 'Кандидат психологических наук',
    },
    {
      name: 'Волков Сергей Петрович',
      position: 'Член редколлегии',
      credentials: 'Доктор психологических наук',
    },
  ];

  const guidelines = [
    {
      title: 'Требования к оформлению',
      items: [
        'Объем статьи: 10-25 страниц',
        'Шрифт: Times New Roman, 14 пт',
        'Интервал: 1,5',
        'Поля: 2 см со всех сторон',
        'Формат файла: .doc или .docx',
      ],
    },
    {
      title: 'Структура статьи',
      items: [
        'Аннотация (150-250 слов)',
        'Ключевые слова (5-7 слов)',
        'Введение',
        'Основная часть',
        'Выводы',
        'Список литературы (не менее 15 источников)',
      ],
    },
    {
      title: 'Процесс публикации',
      items: [
        'Отправка статьи через форму',
        'Проверка на плагиат',
        'Рецензирование (2-4 недели)',
        'Доработка по замечаниям',
        'Публикация в журнале',
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Статья отправлена на рецензирование! Мы свяжемся с вами в течение 5 рабочих дней.');
    setFormData({
      name: '',
      email: '',
      title: '',
      abstract: '',
      file: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">О журнале</h1>
              <p className="text-lg text-muted-foreground">
                Научный журнал Московского отделения РПА
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">О журнале</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Журнал Московского отделения РПА — рецензируемое научное издание, публикующее оригинальные исследования и обзорные статьи в области психотерапии, клинической психологии и смежных дисциплин.
                    </p>
                    <p>
                      Журнал выходит 4 раза в год и индексируется в ведущих научных базах данных. Все статьи проходят двойное слепое рецензирование.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">Редакционная коллегия</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {editorialBoard.map((member, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                            <Icon name="User" size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-sm text-primary">{member.position}</p>
                            <p className="text-xs text-muted-foreground mt-1">{member.credentials}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">Требования для авторов</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {guidelines.map((section, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                            <Icon name="FileText" size={16} className="text-white" />
                          </div>
                          <h3 className="font-semibold">{section.title}</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Send" size={32} className="text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Подать статью на публикацию</h2>
                    <p className="text-muted-foreground">
                      Заполните форму, и мы свяжемся с вами в течение 5 рабочих дней
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Иванов Иван Иванович"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="title">Название статьи *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Введите название статьи"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="abstract">Аннотация (150-250 слов) *</Label>
                      <Textarea
                        id="abstract"
                        value={formData.abstract}
                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                        placeholder="Краткое описание содержания статьи..."
                        rows={5}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="file">Файл статьи (.doc, .docx) *</Label>
                      <Input
                        id="file"
                        type="file"
                        accept=".doc,.docx"
                        onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить статью на рецензирование
                    </Button>
                  </form>
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

export default JournalAbout;
