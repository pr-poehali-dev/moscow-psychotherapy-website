export const getLastMondayOfMonth = (year: number, month: number): Date => {
  const lastDay = new Date(year, month + 1, 0);
  const day = lastDay.getDay();
  const diff = day === 0 ? 6 : day - 1;
  return new Date(year, month, lastDay.getDate() - diff);
};

export const generateIntervisionDates = (count: number = 6) => {
  const dates: Date[] = [];
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  while (dates.length < count) {
    const lastMonday = getLastMondayOfMonth(currentYear, currentMonth);
    
    if (lastMonday >= today) {
      dates.push(lastMonday);
    }
    
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return dates;
};

export const formatDate = (date: Date): string => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const formatShortDate = (date: Date): string => {
  const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  price?: string;
  format?: string;
  isRecurring?: boolean;
  recurringNote?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactTelegram?: string;
  contactMax?: string;
  registrationRequired?: boolean;
  registrationUrl?: string;
  programUrl?: string;
  additionalInfo?: string[];
  roundTableInfo?: {
    date: string;
    title: string;
    organizer: string;
    moderators: { name: string; id: number }[];
    experts: { name: string; id: number }[];
    targetAudience: string;
    goal: string;
    annotation: string;
  };
  speakers?: string[];
}

export const getUpcomingEvents = (): Event[] => {
  const intervisionDates = generateIntervisionDates(6);

  const regularIntervisions = intervisionDates.map((date, index) => ({
    id: `intervision-${index}`,
    title: 'Группа Интервизии',
    date: formatDate(date),
    time: '18:00 - 20:00',
    location: 'Большая Спасская 12, офис 7',
    type: 'Интервизия',
    description: 'На интервизионных встречах мы разбираем клинические случаи, обсуждаем сложные моменты практики и ищем рабочие решения в профессиональном кругу. Формат — мультимодальный: один случай рассматриваем с позиций разных подходов, чтобы расширить диагностическое видение, уточнить гипотезы, выбрать оптимальные стратегии и увидеть альтернативные тактики работы.',
    additionalInfo: [
      'Получать коллегиальную поддержку без оценивания и «правильных ответов»',
      'Сверять клиническое мышление и границы компетенций',
      'Находить ресурсы и снижать профессиональную изоляцию',
      'Пополнять инструментарий за счёт сопоставления школ и техник'
    ],
    price: 'Для членов РПА',
    isRecurring: true,
    recurringNote: 'Каждый последний понедельник месяца (переносы возможны только из-за праздничных дней)',
    contactPerson: 'Мальцева Екатерина',
    contactPhone: '+79266352069',
    contactTelegram: 'katrinmalceva',
    contactMax: 'https://max.ru/u/f9LHodD0cOIhXTu4FtbkqY34O1sNemnrH97QJY8iA6384YZx5fD7h-KOsWE',
    registrationRequired: true,
  }));

  const professionalWednesdayDates = ['14 октября 2026', '28 октября 2026', '11 ноября 2026'];
  const professionalWednesdayEvents: Event[] = professionalWednesdayDates.map((date, index) => ({
    id: `professionalnaya-sreda-${index}`,
    title: 'Вебинар «Профессиональная среда»',
    date,
    time: '19:00 - 20:30',
    location: 'Онлайн',
    type: 'Вебинар',
    format: 'Онлайн',
    description: 'Ежемесячная онлайн-встреча для психологов, психотерапевтов, психиатров и клинических психологов. Тема, спикер, разбор ситуаций и ваши вопросы.',
    price: 'По регистрации',
    isRecurring: true,
    recurringNote: 'Ежемесячно',
    registrationRequired: true,
    registrationUrl: 'https://course.rosmededucation.ru/professionalnaya-sreda',
  }));

  const bookClubBooks: { date: string; title: string; url?: string }[] = [
    { date: '20 сентября 2026', title: 'Stop love. Разлюбить за 100 дней или когда нужно расстаться' },
    { date: '24 октября 2026', title: 'Маски лжи: парадокс невозможной коммуникации', url: 'https://gorodets.ru/product/maski-lzhi#s_flip_book/' },
    { date: '28 ноября 2026', title: 'На краю синей бездны, или Как вернуть контроль над алкоголем', url: 'https://gorodets.ru/product/na-krayu-siney-bezdny-ili-kak-vernut-kontrol-nad-alkogolem#s_flip_book/' },
  ];

  const bookClubEvents: Event[] = bookClubBooks.map((book, index) => ({
    id: `book-club-${index}`,
    title: `Книжный клуб «Между строк»: «${book.title}»`,
    date: book.date,
    time: '17:30 - 19:30',
    location: 'г. Москва, ул. Трубная, 21, книжный магазин «Во весь голос»',
    type: 'Книжный клуб',
    format: 'Очный',
    description: 'Цикл чтений психологической литературы для психологов, психотерапевтов разных модальностей и всех тех, кто интересуется тем, что сокрыто между строк.',
    price: 'Бесплатно',
    isRecurring: true,
    recurringNote: 'Ежемесячно',
    registrationUrl: book.url,
  }));

  const upcomingEvents: Event[] = [
    ...professionalWednesdayEvents,
    ...bookClubEvents,
    {
      id: 'ne-sluchay-a-chelovek-conf',
      title: 'Конференция «Не случай, а человек: клиент в пространстве психотерапевтических подходов»',
      date: '18 сентября 2026',
      time: '09:00 - 17:20',
      location: 'Проспект Вернадского, 96, Московский центр инновационных технологий в здравоохранении',
      type: 'Конференция',
      format: 'Очный',
      description: 'Конференция объединит представителей разных психотерапевтических направлений, чтобы вместе разобрать, как меняется взгляд специалиста на клиента и что эта профессиональная оптика может скрывать. В программе — доклады, групповая работа с реальным клиентским случаем и итоговая дискуссия, а в завершение пройдут выборы председателя МО РПА.',
      price: 'Бесплатно',
      registrationUrl: 'https://course.rosmededucation.ru/180926',
      programUrl: 'https://cdn.poehali.dev/projects/bc3131c3-820e-44dd-91d7-c241696bb6f9/bucket/1adf8c64-61be-428a-8c42-45d215491bbc.PDF',
      speakers: [
        'Бородин Владимир Иванович',
        'Холмогорова Алла Борисовна',
        'Абрамов Сергей Владимирович',
        'Митрофанов Сергей Сергеевич',
        'Степанова Екатерина Сергеевна',
        'Мельник Екатерина Сергеевна',
        'Пекарская Светлана Игоревна',
        'Елена Журок',
        'Архангельская Наталия Владимировна',
        'Камилина Алина Вячеславовна',
        'Азовских Светлана Валерьевна',
        'Степанова Анна',
      ],
    },
  ];

  return [...regularIntervisions, ...upcomingEvents].sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const months: Record<string, number> = {
        'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5,
        'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
      };
      const parts = dateStr.split(' ');
      const day = parseInt(parts[0]);
      const month = months[parts[1]];
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    };
    return parseDate(a.date).getTime() - parseDate(b.date).getTime();
  });
};