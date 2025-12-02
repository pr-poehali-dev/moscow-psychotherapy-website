import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Structure = () => {
  const leadership = [
    {
      position: 'Президент',
      name: 'Александров Виктор Петрович',
      description: 'Доктор психологических наук, профессор',
    },
  ];

  const vicePresidents = [
    {
      name: 'Смирнова Анна Ивановна',
      description: 'Кандидат психологических наук',
    },
    {
      name: 'Петров Михаил Сергеевич',
      description: 'Доктор медицинских наук',
    },
  ];

  const supervisors = [
    { name: 'Иванова Елена Александровна', specialty: 'КПТ' },
    { name: 'Козлов Андрей Николаевич', specialty: 'Семейная терапия' },
    { name: 'Волков Сергей Петрович', specialty: 'Экзистенциальная терапия' },
  ];

  const ethicsCommittee = [
    { name: 'Морозова Светлана Викторовна', role: 'Председатель' },
    { name: 'Новиков Игорь Владимирович', role: 'Член комитета' },
    { name: 'Белова Ольга Николаевна', role: 'Член комитета' },
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
              <h1 className="text-4xl md:text-5xl font-bold">Структура ассоциации</h1>
              <p className="text-lg text-muted-foreground">
                Руководство и органы управления МО РПА
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Crown" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Президент</h2>
                  </div>
                  {leadership.map((member, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-2xl font-semibold">{member.name}</h3>
                      <p className="text-muted-foreground">{member.description}</p>
                    </div>
                  ))}
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
                      <Icon name="Eye" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Совет супервизоров</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {supervisors.map((member, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-muted/30">
                        <h3 className="font-semibold mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.specialty}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Scale" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Этический комитет</h2>
                  </div>
                  <div className="space-y-3">
                    {ethicsCommittee.map((member, index) => (
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

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="Sparkles" size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Молодежное подразделение</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Специальная программа для молодых специалистов до 35 лет. Поддержка, менторство и развитие карьеры.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Mail" size={16} />
                    <span>youth@mo-rpa.ru</span>
                  </div>
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

export default Structure;
