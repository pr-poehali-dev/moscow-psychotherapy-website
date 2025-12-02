import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface User {
  id: number;
  email: string;
  full_name: string;
  phone?: string;
  city?: string;
  specialization?: string;
  education?: string;
  experience_years?: number;
  methods?: string;
  age_groups?: string;
  work_format?: string;
  profile_photo_url?: string;
  about_me?: string;
}

interface Payment {
  id: number;
  payment_year: number;
  payment_date: string;
  amount: number;
  payment_status: string;
  payment_method?: string;
}

const Cabinet = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState<Partial<User>>({});

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    loadUserProfile(parsedUser.id);
    loadPayments(parsedUser.id);
  }, [navigate]);

  const loadUserProfile = async (userId: number) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `https://functions.poehali.dev/cdcffe30-abd7-4227-842e-b4e3933f2a13?user_id=${userId}`,
        {
          headers: {
            'X-Auth-Token': token || ''
          }
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setFormData(data.user);
        setIsPaid(data.is_paid);
      }
    } catch (err) {
      setError('Ошибка загрузки профиля');
    } finally {
      setLoading(false);
    }
  };

  const loadPayments = async (userId: number) => {
    try {
      const response = await fetch(
        `https://functions.poehali.dev/d5fe3519-2567-4e87-b33a-cd9b41bfdffa?user_id=${userId}`
      );
      const data = await response.json();
      if (response.ok) {
        setPayments(data.payments);
      }
    } catch (err) {
      console.error('Ошибка загрузки платежей');
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://functions.poehali.dev/cdcffe30-abd7-4227-842e-b4e3933f2a13', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': localStorage.getItem('auth_token') || ''
        },
        body: JSON.stringify({
          user_id: user?.id,
          ...formData
        })
      });

      if (response.ok) {
        setSuccess('Профиль успешно обновлен');
        if (user) {
          loadUserProfile(user.id);
        }
      } else {
        const data = await response.json();
        setError(data.error || 'Ошибка обновления профиля');
      }
    } catch (err) {
      setError('Ошибка подключения к серверу');
    } finally {
      setSaving(false);
    }
  };

  const handleCreatePayment = async () => {
    setSaving(true);
    setError('');

    try {
      const currentYear = new Date().getFullYear();
      const response = await fetch('https://functions.poehali.dev/d5fe3519-2567-4e87-b33a-cd9b41bfdffa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': localStorage.getItem('auth_token') || ''
        },
        body: JSON.stringify({
          user_id: user?.id,
          payment_year: currentYear,
          amount: 5000
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(`Переход на страницу оплаты: ${data.payment_url}\n\nСумма: ${data.amount} руб.`);
        if (user) {
          loadPayments(user.id);
        }
      } else {
        setError(data.error || 'Ошибка создания платежа');
      }
    } catch (err) {
      setError('Ошибка подключения к серверу');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Icon name="Loader2" className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const isPaymentPeriod = currentMonth >= 1 && currentMonth <= 3;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Личный кабинет</h1>
            <p className="text-muted-foreground mt-1">{user?.full_name}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <Icon name="LogOut" className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </div>

        {!isPaid && isPaymentPeriod && (
          <Alert className="mb-6 border-orange-500 bg-orange-50">
            <Icon name="AlertCircle" size={16} />
            <AlertDescription>
              Период оплаты членства: январь-март. Оплатите членство за {currentYear} год, чтобы ваша анкета отображалась в списке специалистов.
            </AlertDescription>
          </Alert>
        )}

        {!isPaid && !isPaymentPeriod && (
          <Alert className="mb-6 border-red-500 bg-red-50">
            <Icon name="AlertTriangle" size={16} />
            <AlertDescription>
              Членство за {currentYear} год не оплачено. Ваша анкета скрыта из списка специалистов. Оплата доступна с января по март.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="payment">Оплата членства</TabsTrigger>
            <TabsTrigger value="history">История платежей</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Редактирование профиля</CardTitle>
                <CardDescription>
                  Обновите информацию о себе. Эти данные отображаются в каталоге специалистов.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <Icon name="AlertCircle" size={16} />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {success && (
                  <Alert className="mb-4 border-green-500 bg-green-50">
                    <Icon name="CheckCircle" size={16} />
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">ФИО *</Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        value={formData.full_name || ''}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">Город</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city || ''}
                        onChange={handleChange}
                        placeholder="Москва"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience_years">Опыт работы (лет)</Label>
                      <Input
                        id="experience_years"
                        name="experience_years"
                        type="number"
                        value={formData.experience_years || ''}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">Специализация</Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      value={formData.specialization || ''}
                      onChange={handleChange}
                      placeholder="Клинический психолог, психотерапевт"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Образование</Label>
                    <Textarea
                      id="education"
                      name="education"
                      value={formData.education || ''}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Укажите ваше образование"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="methods">Методы работы</Label>
                    <Input
                      id="methods"
                      name="methods"
                      value={formData.methods || ''}
                      onChange={handleChange}
                      placeholder="КПТ, Гештальт-терапия, Психоанализ"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age_groups">Возрастные группы</Label>
                    <Input
                      id="age_groups"
                      name="age_groups"
                      value={formData.age_groups || ''}
                      onChange={handleChange}
                      placeholder="Взрослые, Подростки, Дети"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="work_format">Формат работы</Label>
                    <Input
                      id="work_format"
                      name="work_format"
                      value={formData.work_format || ''}
                      onChange={handleChange}
                      placeholder="Очно, Онлайн"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about_me">О себе</Label>
                    <Textarea
                      id="about_me"
                      name="about_me"
                      value={formData.about_me || ''}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Расскажите о себе, своем подходе к работе"
                    />
                  </div>

                  <Button type="submit" disabled={saving}>
                    {saving ? 'Сохранение...' : 'Сохранить изменения'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Оплата годового членства</CardTitle>
                <CardDescription>
                  Стоимость членства: 5 000 руб. / год
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isPaid ? (
                  <Alert className="border-green-500 bg-green-50">
                    <Icon name="CheckCircle" size={16} />
                    <AlertDescription>
                      Членство за {currentYear} год оплачено. Ваша анкета отображается в каталоге специалистов.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Что входит в членство:</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                            Размещение анкеты в каталоге специалистов РПА Москва
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                            Доступ к мероприятиям и вебинарам
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                            Участие в работе секций
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                            Публикация статей в журнале
                          </li>
                        </ul>
                      </div>

                      <Alert>
                        <Icon name="Info" size={16} />
                        <AlertDescription>
                          Оплата членства доступна с января по март. После оплаты ваша анкета автоматически появится в каталоге.
                        </AlertDescription>
                      </Alert>

                      {isPaymentPeriod ? (
                        <Button 
                          onClick={handleCreatePayment} 
                          disabled={saving}
                          className="w-full"
                          size="lg"
                        >
                          <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                          {saving ? 'Создание платежа...' : 'Оплатить членство 5 000 руб.'}
                        </Button>
                      ) : (
                        <Alert variant="destructive">
                          <Icon name="AlertCircle" size={16} />
                          <AlertDescription>
                            Оплата членства доступна только с января по март
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>История платежей</CardTitle>
                <CardDescription>
                  Все ваши платежи за членство
                </CardDescription>
              </CardHeader>
              <CardContent>
                {payments.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon name="Receipt" className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <p>Платежей пока нет</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {payments.map((payment) => (
                      <div key={payment.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">Членство за {payment.payment_year} год</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(payment.payment_date).toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{payment.amount} ₽</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              payment.payment_status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : payment.payment_status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {payment.payment_status === 'completed' && 'Оплачено'}
                              {payment.payment_status === 'pending' && 'Ожидание'}
                              {payment.payment_status === 'failed' && 'Ошибка'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Cabinet;
