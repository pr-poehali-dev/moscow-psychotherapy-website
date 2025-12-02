import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface FormData {
  fullName: string;
  birthDate: string;
  email: string;
  phone: string;
  education: string;
  workPlace: string;
  experience: string;
  motivation: string;
}

const MembershipForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthDate: '',
    email: '',
    phone: '',
    education: '',
    workPlace: '',
    experience: '',
    motivation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Заявка на вступление:', formData);
    
    setIsSubmitted(true);
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы рассмотрим вашу заявку в течение 5-7 рабочих дней и свяжемся с вами.',
    });
  };

  if (isSubmitted) {
    return (
      <Card className="border-2">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Icon name="CheckCircle" size={40} className="text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Заявка принята!</h3>
              <p className="text-muted-foreground">
                Ваша заявка на вступление в Московское отделение РПА принята к рассмотрению.
              </p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg space-y-3">
              <h4 className="font-semibold flex items-center justify-center">
                <Icon name="Info" size={20} className="mr-2 text-primary" />
                Что дальше?
              </h4>
              <ol className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Мы рассмотрим вашу заявку в течение 5-7 рабочих дней</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>При положительном решении вы получите уведомление на email</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>После одобрения вам будут доступны реквизиты для оплаты вступительного взноса</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>После оплаты вы станете полноправным членом Московского отделения РПА</span>
                </li>
              </ol>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Отправить еще одну заявку
              </Button>
              <Button asChild>
                <a href="mailto:moscow@rpa-russia.ru">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Связаться с нами
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Анкета на вступление</CardTitle>
        <CardDescription>
          Заполните все поля формы. После рассмотрения вашей заявки и принятия положительного решения,
          вам будут предоставлены реквизиты для оплаты вступительного взноса.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">ФИО полностью *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Дата рождения *</Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (999) 123-45-67"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="education">Образование *</Label>
            <Textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Укажите ваше базовое образование, специализацию, дополнительное профессиональное образование в области психотерапии"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workPlace">Место работы *</Label>
            <Input
              id="workPlace"
              name="workPlace"
              value={formData.workPlace}
              onChange={handleChange}
              placeholder="Название организации, должность"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Опыт работы в психотерапии *</Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Укажите стаж работы, основные направления, методы, с какими клиентами работаете"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="motivation">Мотивация для вступления в РПА *</Label>
            <Textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              placeholder="Расскажите, почему вы хотите вступить в Московское отделение РПА, какие цели и задачи преследуете"
              rows={4}
              required
            />
          </div>

          <div className="bg-accent/10 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground flex items-start">
              <Icon name="Info" size={16} className="mr-2 flex-shrink-0 mt-0.5 text-primary" />
              <span>
                После одобрения вашей заявки вы получите уведомление на указанный email с реквизитами 
                для оплаты вступительного взноса. Оплата станет доступна только после положительного 
                решения о приеме в члены Московского отделения РПА.
              </span>
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full">
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MembershipForm;
