import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const NewsConference180926 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>«Не случай, а человек»: как прошла конференция РПА — МО РПА</title>
        <meta
          name="description"
          content="Отчёт о конференции Российской психотерапевтической ассоциации «Не случай, а человек: клиент в пространстве психотерапевтических подходов», прошедшей 18 сентября."
        />
      </Helmet>
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-sm text-muted-foreground">18 сентября 2026</p>
              <h1 className="text-3xl md:text-5xl font-bold">
                «Не случай, а человек»: как прошла конференция РПА
              </h1>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <Link to="/events" className="inline-flex items-center text-sm text-primary hover:underline">
                <Icon name="ArrowLeft" size={16} className="mr-1" />
                Все мероприятия
              </Link>

              <a
                href="https://disk.yandex.ru/d/Ui6QEf7LvsrMfg"
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative"
              >
                <img
                  src="/news/ne-sluchay-a-chelovek-conf.jpg"
                  alt="Конференция «Не случай, а человек»"
                  className="w-full rounded-xl border-2 object-cover transition-opacity group-hover:opacity-90"
                />
                <span className="absolute bottom-3 right-3 bg-background/90 text-xs px-3 py-1.5 rounded-full border flex items-center gap-1.5 shadow-sm">
                  <Icon name="ExternalLink" size={14} />
                  Все фото на Яндекс.Диске
                </span>
              </a>

              <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
                <p>
                  18 сентября прошла конференция Российской психотерапевтической ассоциации «Не случай, а человек:
                  клиент в пространстве психотерапевтических подходов». Целый день, с утренней регистрации до
                  финальной рефлексии, специалисты разных направлений искали ответ на один вопрос: что мы видим в
                  клиенте через профессиональную оптику и что эта оптика может от нас скрывать?
                </p>

                <p>
                  С первых минут в зале было очень тепло. Встречались давние коллеги, знакомились новые люди, и
                  почти сразу возникло то ощущение, ради которого мы и собираемся вместе: здесь можно говорить о
                  трудном открыто и быть услышанным.
                </p>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Открытие</h2>
                  <p>
                    Задал глубину всему дню доклад профессора В. И. Бородина (НМИЦ психиатрии и наркологии им. В. П.
                    Сербского) о том, как психотерапевт «видит» клиента: о балансе объективного и субъективного, о
                    разных оптиках видения и о цене любого упрощения.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Блок I. «Кто сегодня входит в кабинет?»</h2>
                  <p className="mb-3">Был посвящён современному клиенту:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>
                      С. В. Абрамов — о влиянии цифровой среды на мозг, зависимости от генеративного ИИ и о том, как
                      сохранить авторство собственного мышления
                    </li>
                    <li>
                      С. С. Митрофанов — о том, насколько психоаналитический метод готов меняться вместе с клиентом
                      и где граница между рамкой и гибкостью
                    </li>
                    <li>
                      Е. С. Степанова — о клиенте, который приходит за советом, и о балансе между его ожиданиями и
                      принципами работы
                    </li>
                    <li>
                      Е. С. Мельник — о диалоге пациента с искусственным интеллектом как о материале для понимания
                      его внутреннего мира
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Блок II. «Что мы можем не увидеть?»</h2>
                  <p className="mb-3">Стал самым клинически насыщенным:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>
                      С. И. Пекарская — о том, как отличить рост тревоги на фоне стресса от шоковой реакции в
                      телесно-ориентированном подходе
                    </li>
                    <li>
                      Е. Журок — об особенностях работы со взрослыми детьми алкоголиков и о том, как не начать вместе
                      с клиентом «ходить кругами»
                    </li>
                    <li>
                      Н. В. Архангельская — «За пределами симптома»: эго-идентичность и повышенный индекс массы тела
                      у женщин
                    </li>
                    <li>А. В. Камилина — о стигматизации, которая может воспроизводиться внутри самой терапии</li>
                    <li>
                      С. В. Азовских — клинический разбор случая психоаналитической психотерапии
                      агрессивно-сексуализирующего пациента
                    </li>
                  </ul>
                </div>

                <p>
                  Главным практическим событием дня стала групповая работа «Маршрутизатор клиента: где мы можем
                  потерять человека». Участники шаг за шагом прошли один случай, от первого сообщения клиента до его
                  молчания, вместе с коллегами других направлений. Каждый видел в том же человеке что-то своё, и к
                  финалу стало понятно, в какой момент клиент решил уйти. Как правило, гораздо раньше, чем нам
                  кажется.
                </p>

                <p>
                  В итоговой дискуссии «Где заканчивается метод и начинаемся мы?» представители разных подходов
                  говорили уже не о техниках, а о себе в профессии. Завершился день короткой рефлексией: каждый
                  ответил себе на вопрос «Что я теперь буду замечать?».
                </p>

                <p>
                  Не менее ценным, чем программа, было всё, что происходило между докладами. В перерывах продолжались
                  обсуждения, завязывались профессиональные знакомства, рождались идеи совместных проектов и
                  супервизий. Участники не просто слушали: задавали вопросы, спорили, делились случаями из практики.
                  Благодаря этому конференция получилась живой, насыщенной и по-настоящему практической.
                </p>

                <p>
                  Благодарим всех докладчиков за глубину и щедрость, с которой они делились опытом, участников — за
                  открытость и включённость, а организаторов — за атмосферу, в которой так хотелось работать.
                </p>

                <p className="font-medium">До новых встреч!</p>
              </div>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Хотите быть в курсе будущих мероприятий МО РПА?
                  </p>
                  <Link to="/events">
                    <Button>
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Смотреть мероприятия
                    </Button>
                  </Link>
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

export default NewsConference180926;