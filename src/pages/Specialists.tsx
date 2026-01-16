import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Specialists = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApproach, setSelectedApproach] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');

  const specialists = [
    {
      id: 1,
      name: 'Романюта Юлия Александровна',
      photo: 'https://cdn.poehali.dev/files/РОманюта.jpg',
      location: 'Москва',
      education: 'Психолог, сертифицированный гештальт-терапевт',
      specialty: 'Гештальт-терапия',
      approach: 'Гештальт-терапия',
      workplace: 'Частная практика',
      phone: '+7 (911) 572-10-99',
      website: '',
      email: '',
      mainIssues: ['Кризисы возрастные, экзистенциальные, профессиональные', 'Родительство детей ОВЗ', 'Финансовые запросы'],
      ageGroups: 'Взрослые (от 18 лет)',
      approaches: ['Гештальт-терапия'],
      status: 'Член РПА',
    },
    {
      id: 2,
      name: 'Азовских Светлана Валерьевна',
      photo: 'https://cdn.poehali.dev/files/Азовских.jpg',
      location: 'Москва',
      education: 'Уральский федеральный университет им. Первого президента России Б. Н. Ельцина, бакалавр философии. Московский институт психоанализа, магистр психологии, прикладной психоанализ и психоаналитическое консультирование. Международная школа групп-анализа, групп-анализ и групповая психотерапия.',
      specialty: 'Психоаналитический психотерапевт, групп-аналитик',
      approach: 'Психоанализ',
      workplace: 'Частная практика',
      phone: '+7 925 777-51-90',
      website: 'http://azovskikh.ru',
      email: 'azovskikh@gmail.com',
      mainIssues: ['Страхи. Тревога.', 'Стыд. Проблемы в самоопределении. Скованность.', 'Сомнения в нормальности текущих или прошлых взаимоотношений с близкими, коллегами, друзьями. Сложности в любовных отношениях. Отсутствие отношений.', 'Ощущение собственной незаметности, ничтожности.', 'Скорбь. Обида. Ненависть.', 'Сексуальное насилие, неправомерные сексуализированные действия, домогательства в любой период жизни.', 'Свидетельство насилия, смерти, трагедий.'],
      ageGroups: 'Взрослые (от 20 лет)',
      approaches: ['Психоаналитическая терапия'],
      status: 'Член РПА',
    },
  ];

  const filteredSpecialists = specialists.filter((specialist) => {
    const matchesSearch = 
      specialist.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesApproach = 
      selectedApproach === 'all' || 
      specialist.approaches.some(approach => 
        approach.toLowerCase().includes(selectedApproach.toLowerCase())
      );
    
    const matchesAgeGroup = 
      selectedAgeGroup === 'all' || 
      specialist.ageGroups.toLowerCase().includes(selectedAgeGroup.toLowerCase());

    return matchesSearch && matchesApproach && matchesAgeGroup;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Специалисты — МО РПА</title>
        <meta name="description" content="Реестр психотерапевтов Московского отделения РПА. Найдите психотерапевта в Москве по подходу, специализации и возрастной группе." />
      </Helmet>
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Наши специалисты</h1>
              <p className="text-lg text-muted-foreground">
                Квалифицированные психотерапевты различных направлений
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Поиск по фамилии..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    
                    <Select value={selectedApproach} onValueChange={setSelectedApproach}>
                      <SelectTrigger>
                        <SelectValue placeholder="Подход" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все подходы</SelectItem>
                        <SelectItem value="когнитивно">КПТ</SelectItem>
                        <SelectItem value="психоанализ">Психоанализ</SelectItem>
                        <SelectItem value="гештальт">Гештальт</SelectItem>
                        <SelectItem value="семейная">Семейная</SelectItem>
                        <SelectItem value="арт">Арт-терапия</SelectItem>
                        <SelectItem value="экзистенциальная">Экзистенциальная</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                      <SelectTrigger>
                        <SelectValue placeholder="Возраст клиентов" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все возрасты</SelectItem>
                        <SelectItem value="Дети">Дети</SelectItem>
                        <SelectItem value="Подростки">Подростки</SelectItem>
                        <SelectItem value="Взрослые">Взрослые</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredSpecialists.map((specialist) => (
                  <Card key={specialist.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                              <img src={specialist.photo} alt={specialist.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{specialist.name}</h3>
                              <Badge className={specialist.status === 'Действительный член' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-accent text-accent-foreground'}>
                                {specialist.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start space-x-2">
                            <Icon name="MapPin" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Место проживания:</p>
                              <p className="text-muted-foreground">{specialist.location}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="GraduationCap" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Образование:</p>
                              <p className="text-muted-foreground">{specialist.education}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="BookOpen" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Специальность:</p>
                              <p className="text-muted-foreground">{specialist.specialty}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="Target" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Направление психотерапии:</p>
                              <p className="text-muted-foreground">{specialist.approach}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="Briefcase" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Место работы:</p>
                              <p className="text-muted-foreground">{specialist.workplace}</p>
                            </div>
                          </div>

                          {specialist.phone && (
                            <div className="flex items-start space-x-2">
                              <Icon name="Phone" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                              <div>
                                <p className="font-medium">Профессиональные контакты:</p>
                                <p className="text-muted-foreground">{specialist.phone}</p>
                              </div>
                            </div>
                          )}

                          {specialist.website && (
                            <div className="flex items-start space-x-2">
                              <Icon name="Globe" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                              <div>
                                <p className="font-medium">Сайт:</p>
                                <a href={specialist.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{specialist.website}</a>
                              </div>
                            </div>
                          )}

                          {specialist.email && (
                            <div className="flex items-start space-x-2">
                              <Icon name="Mail" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                              <div>
                                <p className="font-medium">Почта:</p>
                                <a href={`mailto:${specialist.email}`} className="text-primary hover:underline">{specialist.email}</a>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start space-x-2">
                            <Icon name="MessageCircle" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Основные запросы:</p>
                              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                                {specialist.mainIssues.map((issue, idx) => (
                                  <li key={idx}>{issue}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="Users" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Возраст клиентов:</p>
                              <p className="text-muted-foreground">{specialist.ageGroups}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredSpecialists.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">Специалисты не найдены</p>
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

export default Specialists;