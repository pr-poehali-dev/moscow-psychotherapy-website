import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Structure = () => {
  const president = {
    name: 'Бабин Сергей Михайлович',
    description: 'Доктор медицинских наук, профессор, врач-психотерапевт высшей категории',
  };

  const vicePresidents = [
    { name: 'Караваева Татьяна Артуровна', description: 'Вице-президент РПА' },
    { name: 'Ковпак Дмитрий Викторович', description: 'Вице-президент РПА' },
    { name: 'Подсадный Сергей Александрович', description: 'Вице-президент РПА' },
    { name: 'Ташлыков Виктор Анатольевич', description: 'Вице-президент РПА' },
    { name: 'Холмогорова Алла Борисовна', description: 'Вице-президент РПА' },
  ];

  const executiveBoard = [
    { name: 'Бурлакова Наталья Сергеевна', role: 'Исполнительный директор' },
    { name: 'Смирнов Игорь Петрович', role: 'Научный секретарь' },
    { name: 'Васильева Елена Дмитриевна', role: 'Руководитель образовательных программ' },
  ];

  const supervisorsCommittee = [
    { name: 'Бабин Сергей Михайлович', role: 'Член совета' },
    { name: 'Кулаков Сергей Александрович', role: 'Член совета' },
    { name: 'Ляшковская Светлана Владимировна', role: 'Член совета' },
    { name: 'Демьяненко Алексей Михайлович', role: 'Член совета' },
    { name: 'Еричев Александр Николаевич', role: 'Член совета' },
    { name: 'Исурина Галина Львовна', role: 'Член совета' },
    { name: 'Ковпак Дмитрий Викторович', role: 'Член совета' },
    { name: 'Подсадный Сергей Александрович', role: 'Член совета' },
  ];

  const auditCommission = [
    { name: 'Федорова Марина Петровна', role: 'Председатель' },
    { name: 'Григорьев Алексей Иванович', role: 'Член комиссии' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Структура РПА</h1>
              <p className="text-lg text-muted-foreground">
                Руководство и органы управления Российской психотерапевтической ассоциации
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Crown" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Президент РПА</h2>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">{president.name}</h3>
                    <p className="text-muted-foreground">{president.description}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Вице-президенты</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vicePresidents.map((member, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-muted/30">
                        <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Briefcase" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Исполнительная дирекция</h2>
                  </div>
                  <div className="space-y-3">
                    {executiveBoard.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30">
                        <span className="font-semibold">{member.name}</span>
                        <span className="text-sm text-muted-foreground">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="GraduationCap" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Совет супервизоров</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {supervisorsCommittee.map((member, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-muted/30">
                        <span className="font-semibold text-sm">{member.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="FileCheck" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Ревизионная комиссия</h2>
                  </div>
                  <div className="space-y-3">
                    {auditCommission.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30">
                        <span className="font-semibold">{member.name}</span>
                        <span className="text-sm text-muted-foreground">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/10">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Globe" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Региональные отделения</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    РПА объединяет специалистов по всей России. Региональные отделения работают в 45 субъектах РФ.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span className="font-medium">Московское отделение</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Mail" size={14} className="text-primary" />
                      <span>moscow@rpa-russia.ru</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>

              <div className="lg:col-span-1">
                <EventsCalendar />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Structure;