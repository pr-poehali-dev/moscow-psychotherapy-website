import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const faqs = [
    {
      question: 'Как стать членом Московского отделения РПА?',
      answer: 'Для вступления необходимо иметь высшее психологическое или медицинское образование, профессиональную подготовку по психотерапии и подать заявку. Кандидатура рассматривается на заседании правления.',
    },
    {
      question: 'Какие направления психотерапии представлены?',
      answer: 'В ассоциации представлены все основные направления: КПТ, психоанализ, гештальт-терапия, семейная системная терапия, экзистенциальная терапия, арт-терапия и другие.',
    },
    {
      question: 'Проводит ли ассоциация обучающие программы?',
      answer: 'Да, мы регулярно организуем семинары, тренинги, супервизии и программы повышения квалификации. График публикуется в разделе "Копилка экспертов".',
    },
    {
      question: 'Какие требования к опыту работы?',
      answer: 'Для действительных членов требуется не менее 3 лет практического опыта. Кандидаты могут быть приняты при наличии базовой подготовки.',
    },
    {
      question: 'Как найти психотерапевта?',
      answer: 'В разделе "Специалисты" представлен каталог всех членов с указанием специализации, опыта и контактов. Используйте фильтры для поиска.',
    },
    {
      question: 'Проводится ли сертификация?',
      answer: 'Да, мы проводим сертификацию в соответствии с международными стандартами. Сертификат подтверждает квалификацию специалиста.',
    },
    {
      question: 'Преимущества членства?',
      answer: 'Доступ к профессиональному сообществу, обучающим программам со скидкой, участие в конференциях, публикации в журнале, супервизии.',
    },
    {
      question: 'Как часто проводятся мероприятия?',
      answer: 'Более 100 мероприятий в год: ежемесячные встречи, семинары, тренинги, супервизорские группы и ежегодная конференция.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ваш вопрос отправлен! Мы ответим в ближайшее время.');
    setName('');
    setEmail('');
    setQuestion('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Вопрос-ответ</h1>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы и возможность задать свой
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-card">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="MessageCircle" size={32} className="text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Задайте свой вопрос</h2>
                    <p className="text-muted-foreground">
                      Не нашли ответ? Отправьте вопрос членам ассоциации
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите имя"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваш вопрос</label>
                      <Textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Опишите ваш вопрос..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить вопрос
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

export default FAQ;
