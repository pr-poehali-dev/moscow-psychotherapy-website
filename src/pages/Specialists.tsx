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
      photo: '👩‍⚕️',
      workplace: 'Москва',
      contacts: '+7 (911) 572-10-99',
      education: 'Психолог, сертифицированный гештальт-терапевт',
      specialization: 'Гештальт-терапия',
      degree: '',
      approaches: ['Гештальт-терапия'],
      ageGroups: ['Взрослые'],
      mainIssues: ['Кризисы возрастные, экзистенциальные, профессиональные', 'Родительство детей ОВЗ', 'Финансовые запросы'],
      status: 'Член РПА',
    },
    {
      id: 2,
      name: 'Петров Дмитрий Сергеевич',
      photo: '👨‍⚕️',
      workplace: 'Московский институт психоанализа',
      contacts: '+7 (495) 234-56-78, petrov@example.com',
      education: 'МГППУ, клиническая психология',
      specialization: 'Психоанализ',
      degree: 'Доктор психологических наук',
      approaches: ['Психоаналитическая терапия'],
      ageGroups: ['Взрослые'],
      mainIssues: ['Личностные кризисы', 'Отношения'],
      status: 'Действительный член',
    },
    {
      id: 3,
      name: 'Смирнова Ольга Владимировна',
      photo: '👩‍⚕️',
      workplace: 'Частная практика',
      contacts: '+7 (495) 345-67-89, smirnova@example.com',
      education: 'СПбГУ, психология',
      specialization: 'Гештальт-терапия',
      degree: '',
      approaches: ['Гештальт-терапия'],
      ageGroups: ['Взрослые', 'Подростки'],
      mainIssues: ['Эмоциональная регуляция'],
      status: 'Кандидат',
    },
    {
      id: 4,
      name: 'Козлов Андрей Николаевич',
      photo: '👨‍⚕️',
      workplace: 'Семейный центр "Содружество"',
      contacts: '+7 (495) 456-78-90, kozlov@example.com',
      education: 'РГГУ, семейная психология',
      specialization: 'Семейная психология',
      degree: 'Кандидат психологических наук',
      approaches: ['Семейная системная терапия'],
      ageGroups: ['Взрослые', 'Дети', 'Подростки'],
      mainIssues: ['Семейные конфликты', 'Развод'],
      status: 'Действительный член',
    },
    {
      id: 5,
      name: 'Новикова Мария Игоревна',
      photo: '👩‍⚕️',
      workplace: 'Центр творческой терапии',
      contacts: '+7 (495) 567-89-01, novikova@example.com',
      education: 'МГУ им. М.В. Ломоносова',
      specialization: 'Арт-терапия',
      degree: '',
      approaches: ['Арт-терапия'],
      ageGroups: ['Дети', 'Подростки', 'Взрослые'],
      mainIssues: ['Психотравма', 'Самовыражение'],
      status: 'Кандидат',
    },
    {
      id: 6,
      name: 'Волков Сергей Петрович',
      photo: '👨‍⚕️',
      workplace: 'Институт экзистенциальной психологии',
      contacts: '+7 (495) 678-90-12, volkov@example.com',
      education: 'МГППУ',
      specialization: 'Экзистенциальная терапия',
      degree: 'Доктор психологических наук',
      approaches: ['Экзистенциальная терапия'],
      ageGroups: ['Взрослые'],
      mainIssues: ['Поиск смысла', 'Выгорание'],
      status: 'Действительный член',
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
      specialist.ageGroups.includes(selectedAgeGroup);

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
                            <div className="text-5xl">{specialist.photo}</div>
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
                            <Icon name="Briefcase" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Место работы:</p>
                              <p className="text-muted-foreground">{specialist.workplace}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="Contact" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Контакты:</p>
                              <p className="text-muted-foreground">{specialist.contacts}</p>
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
                              <p className="font-medium">Специализация:</p>
                              <p className="text-muted-foreground">{specialist.specialization}</p>
                            </div>
                          </div>

                          {specialist.degree && (
                            <div className="flex items-start space-x-2">
                              <Icon name="Award" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                              <div>
                                <p className="font-medium">Ученая степень:</p>
                                <p className="text-muted-foreground">{specialist.degree}</p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start space-x-2">
                            <Icon name="Users" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Категория клиентов:</p>
                              <p className="text-muted-foreground">{specialist.ageGroups.join(', ')}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Icon name="Target" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium">Основные запросы:</p>
                              <p className="text-muted-foreground">{specialist.mainIssues.join(', ')}</p>
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