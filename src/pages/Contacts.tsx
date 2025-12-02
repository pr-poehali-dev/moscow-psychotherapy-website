import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Контакты</h1>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Phone" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Телефон</h3>
                        <p className="text-muted-foreground">Звоните в рабочие часы</p>
                      </div>
                    </div>
                    <div className="pl-15">
                      <p className="text-lg font-medium">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 10:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Mail" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">Ответим в течение дня</p>
                      </div>
                    </div>
                    <div className="pl-15">
                      <p className="text-lg font-medium">info@mo-rpa.ru</p>
                      <p className="text-sm text-muted-foreground mt-1">Общие вопросы</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="MapPin" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Адрес офиса</h3>
                        <p className="text-muted-foreground">Приходите на встречу</p>
                      </div>
                    </div>
                    <div className="pl-15">
                      <p className="font-medium">г. Москва, ул. Примерная, д. 1</p>
                      <p className="text-sm text-muted-foreground mt-1">м. Парк Культуры</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                        <Icon name="Clock" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Режим работы</h3>
                        <p className="text-muted-foreground">График приема</p>
                      </div>
                    </div>
                    <div className="pl-15 space-y-1 text-sm">
                      <p><span className="font-medium">Пн-Пт:</span> 10:00 - 18:00</p>
                      <p><span className="font-medium">Сб-Вс:</span> Выходной</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-12 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <Icon name="MessageCircle" size={40} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">Остались вопросы?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Напишите нам, и мы с радостью ответим на все ваши вопросы о членстве, программах и мероприятиях
                    </p>
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

export default Contacts;
