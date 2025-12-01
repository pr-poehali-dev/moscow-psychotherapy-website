import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Specialists = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const specialists = [
    {
      id: 1,
      name: 'Иванова Елена Александровна',
      specialty: 'Когнитивно-поведенческая терапия',
      status: 'Действительный член',
      experience: '15 лет',
      education: 'МГУ им. М.В. Ломоносова',
      phone: '+7 (495) 123-45-67',
      email: 'ivanova@example.com',
    },
    {
      id: 2,
      name: 'Петров Дмитрий Сергеевич',
      specialty: 'Психоаналитическая терапия',
      status: 'Действительный член',
      experience: '20 лет',
      education: 'МГППУ',
      phone: '+7 (495) 234-56-78',
      email: 'petrov@example.com',
    },
    {
      id: 3,
      name: 'Смирнова Ольга Владимировна',
      specialty: 'Гештальт-терапия',
      status: 'Кандидат',
      experience: '8 лет',
      education: 'СПбГУ',
      phone: '+7 (495) 345-67-89',
      email: 'smirnova@example.com',
    },
    {
      id: 4,
      name: 'Козлов Андрей Николаевич',
      specialty: 'Семейная системная терапия',
      status: 'Действительный член',
      experience: '12 лет',
      education: 'РГГУ',
      phone: '+7 (495) 456-78-90',
      email: 'kozlov@example.com',
    },
    {
      id: 5,
      name: 'Новикова Мария Игоревна',
      specialty: 'Арт-терапия',
      status: 'Кандидат',
      experience: '6 лет',
      education: 'МГУ им. М.В. Ломоносова',
      phone: '+7 (495) 567-89-01',
      email: 'novikova@example.com',
    },
    {
      id: 6,
      name: 'Волков Сергей Петрович',
      specialty: 'Экзистенциальная терапия',
      status: 'Действительный член',
      experience: '18 лет',
      education: 'МГППУ',
      phone: '+7 (495) 678-90-12',
      email: 'volkov@example.com',
    },
  ];

  const filteredSpecialists = specialists.filter((specialist) => {
    const matchesSearch = specialist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specialist.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || specialist.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    return status === 'Действительный член' ? 'bg-primary/10 text-primary' : 'bg-accent text-accent-foreground';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
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
            <div className="max-w-6xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Поиск по имени или специальности..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-full md:w-[250px]">
                        <SelectValue placeholder="Статус члена" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все статусы</SelectItem>
                        <SelectItem value="Действительный член">Действительный член</SelectItem>
                        <SelectItem value="Кандидат">Кандидат</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSpecialists.map((specialist) => (
                  <Card key={specialist.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <Icon name="User" size={32} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{specialist.name}</h3>
                            <p className="text-sm text-muted-foreground">{specialist.specialty}</p>
                          </div>
                        </div>
                      </div>

                      <Badge className={getStatusColor(specialist.status)}>
                        {specialist.status}
                      </Badge>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Icon name="Briefcase" size={16} />
                          <span>Опыт работы: {specialist.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Icon name="GraduationCap" size={16} />
                          <span>{specialist.education}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Icon name="Phone" size={16} />
                          <span>{specialist.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Icon name="Mail" size={16} />
                          <span>{specialist.email}</span>
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
