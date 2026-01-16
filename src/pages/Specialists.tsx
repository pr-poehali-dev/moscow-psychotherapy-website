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
      website: 'https://romanuta.tb.ru/',
      email: 'yuliya-masko@mail.ru',
      mainIssues: ['Кризисы возрастные, экзистенциальные, профессиональные', 'Родительство детей ОВЗ', 'Финансовые запросы'],
      ageGroups: 'Взрослые (от 18 лет)',
      approaches: ['Гештальт-терапия'],
      status: 'Действительный член РПА',
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
      status: 'Действительный член РПА',
    },
    {
      id: 3,
      name: 'Блищенко Алёна Викторовна',
      photo: '👩‍⚕️',
      location: 'Москва',
      education: 'МПГУ им Ленина, Факультет педагогики и психологии, 1994 г. Аспирантура при МПГУ им. Ленина, 1998 г. Кафедра психологии развития РАО. Институт прикладной психологии в социальной сфере, 2024 г.',
      specialty: 'Психолог-консультант. Клинический психолог.',
      approach: 'Интегративная психология',
      workplace: 'Частная практика',
      phone: '+7 985 665-82-54',
      website: 'https://www.b17.ru/pollianna/',
      email: 'pollianna251@gmail.com',
      mainIssues: ['Самооценка', 'Зависимость', 'Созависимость', 'Переживание кризисов', 'Поиски себя', 'Семейная терапия', 'Психология женско-мужских отношений', 'Утраты и расставания', 'Семейно-родовые сценарии', 'Психосоматика', 'Психологическое бесплодие'],
      ageGroups: 'Взрослые',
      approaches: ['Интегративная психология'],
      status: 'Действительный член РПА',
    },
    {
      id: 4,
      name: 'Мельник Екатерина Сергеевна',
      photo: '👩‍⚕️',
      location: 'Москва',
      education: 'Высшее',
      specialty: 'Психолог, клинический психолог',
      approach: 'Психоанализ, психоаналитическая психотерапия, семейная терапия, психотравматерапия (emdr, se)',
      workplace: 'Частная практика',
      phone: '+7 926 123-74-88',
      website: 'http://ekaterinapsy.space',
      email: 'soulmatetherapist@gmail.com',
      mainIssues: ['Трудности с построением личных и профессиональных отношений', 'Депрессивные, тревожные и навязчивые состояния', 'Фобии', 'Перепады настроения', 'Проблемы с управлением гневом', 'Неспособность отстоять свое мнение', 'Аллергии и прочие психосоматические расстройства', 'Хроническая усталость, выгорание', 'Работа с парами, проходящими через кризисы отношений'],
      ageGroups: 'Взрослые',
      approaches: ['Психоанализ', 'Семейная терапия'],
      status: 'Действительный член РПА',
    },
    {
      id: 5,
      name: 'Богодистова Анастасия Юрьевна',
      photo: '👩‍⚕️',
      location: 'Москва',
      education: 'Диплом о высшем образовании с присвоением квалификации практический психолог и дополнительной квалификации гештальт-консультант (1560 часов), 2022 г. Магистратура МИП (Прикладной психоанализ и психологическое консультирование), 2024. Программа ДО МИП Психоанализ, психоаналитическая психотерапия и психоаналитическое консультирование (2800 час.) - с октября 2024 (по 2027 г.).',
      specialty: 'Гештальт-консультант, психоаналитически ориентированный психолог',
      approach: 'Психодинамический подход',
      workplace: 'Частная практика',
      phone: '+7 936 610-13-12',
      website: 'https://abpsy.ru',
      email: 'psy-holism@yandex.ru',
      mainIssues: ['Детско-родительские и межличностные отношения', 'Сепарация взрослых детей от родительской семьи', 'Снижение уровня тревоги по поводу жизни и благополучия близких', 'Детские психотравмы у взрослых', 'Последствия взросления в дисфункциональной родительской семье', 'Поиск смыслов и создание глубины и близости внутри пары', 'Выстраивание личных границ и здоровых отношений', 'Прохождение возрастных и ситуативных кризисов', 'Трудности в проявлении и контроле эмоций', 'Состояния апатии, тоски, уныния', 'Поиск и реализация жизненных смыслов'],
      ageGroups: 'Взрослые',
      approaches: ['Психодинамический подход'],
      status: 'Действительный член РПА',
    },
    {
      id: 6,
      name: 'Митрофанов Сергей Сергеевич',
      photo: '👨‍⚕️',
      location: 'Москва',
      education: 'НИУ ВШЭ Психоанализ и психоаналитическая психотерапия, 2024. ДПО НИУ ВШЭ Клиническая психология, 2025',
      specialty: 'Клинический психолог, психоаналитический психотерапевт',
      approach: 'Психоаналитическая психотерапия',
      workplace: 'Частная практика',
      phone: '+7 915 408-30-68',
      website: 'https://t.me/smitrofanovpsy',
      email: 'ssmitrofanov@ssmitrofanov.ru',
      mainIssues: ['Стресс', 'Отсутствие энергии', 'Неуверенность в себе', 'Низкая самооценка', 'Поиск себя', 'Прокрастинация', 'Раздражительность', 'Тревоги и страхи', 'Перепады настроения', 'Потеря опоры', 'Депрессия', 'Межличностные отношения', 'Отношения с партнером', 'Отношения с родителями', 'Сексуальные отношения', 'Развод, расставание', 'Переезд, эмиграция', 'Потеря близкого человека', 'Суицидальные мысли', 'Отсутствие стабильности', 'Насилие', 'Нарушение пищевого поведения', 'Психосоматика', 'Панические атаки', 'Наркотическая зависимость', 'Алкогольная зависимость', 'Игромания'],
      ageGroups: 'Взрослые',
      approaches: ['Психоаналитическая терапия'],
      status: 'Действительный член РПА',
    },
    {
      id: 7,
      name: 'Матюхина Елена Юрьевна',
      photo: '👩‍⚕️',
      location: 'Москва',
      education: 'Высшее',
      specialty: 'Психолог',
      approach: 'Гештальт-подход',
      workplace: 'Частная практика',
      phone: '+7 916 421-58-74',
      website: 'https://www.b17.ru/id684997/',
      email: 'matuhina76@rambler.ru',
      mainIssues: ['Кризисы (утрата смыслов, выгорание, развод)', 'Травмы - ПТСР, травмы развития, ситуативные травмы (смерть близкого, горевание, насилие)', 'Химические зависимости (алкоголизм, наркомания) - помощь самим зависимым и членам их семей', 'Эмоциональная зависимость (созависимость)', 'Сепарация от родителей, партнера', 'Сложности в отношениях (не складываются, не устраивают текущие)', 'БАР, депрессии, фобии (в паре с психиатром)'],
      ageGroups: 'Взрослые',
      approaches: ['Гештальт-терапия'],
      status: 'Действительный член РПА',
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