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

  const upcomingEvents: Event[] = [
    {
      id: 'karvasarsky-conf',
      title: 'Всероссийская научно-практическая конференция с международным участием «Клиническая психотерапия: в поисках идеальной практики», посвященная памяти Б.Д. Карвасарского',
      date: '19-20 февраля 2026',
      time: '10:00 - 18:00',
      location: 'Санкт-Петербург, ул. Бехтерева 3, ФГБУ «НМИЦ ПН им. В.М. Бехтерева» Минздрава России',
      type: 'Конференция',
      format: 'Аудиторный с трансляцией',
      description: 'Всероссийская научно-практическая конференция с международным участием, посвященная памяти выдающегося психотерапевта Б.Д. Карвасарского.',
      price: 'Бесплатно',
      registrationUrl: 'https://78conf.ru/feb26',
      programUrl: 'https://78conf.ru/static/files/feb26/Программа_Психотерапия_19_20_02_2026_утв.pdf?1',
      roundTableInfo: {
        date: '20 февраля 2026',
        title: 'Многомерное видение клиента и мультимодальность: Интеграция подходов на примере одного случая',
        organizer: 'Московское отделение РПА',
        moderators: [
          { name: 'Бородин Владимир Иванович', id: 58 },
          { name: 'Щанкина Наталия Александровна', id: 44 }
        ],
        experts: [
          { name: 'Степанова Екатерина Сергеевна', id: 31 },
          { name: 'Пекарская Светлана Игоревна', id: 12 },
          { name: 'Бегиджанова Юлия Александровна', id: 29 },
          { name: 'Малышева Татьяна Борисовна', id: 37 },
          { name: 'Хвощевская Софья Игоревна', id: 41 }
        ],
        targetAudience: 'Практикующие психотерапевты и психологи, а также студенты старших курсов профильных направлений подготовки',
        goal: 'Продемонстрировать возможности мультимодального клинического рассмотрения случая и расширить профессиональный инструментарий участников за счёт разбора реального кейса с позиций различных психотерапевтических школ',
        annotation: 'В рамках круглого стола эксперты, представляющие ключевые направления современной психотерапии, проведут разбор одного клиентского случая в формате мультимодального клинического обсуждения. Участники увидят, как разные теоретические модели и техники формируют диагностические гипотезы, определяют фокус вмешательства и выстраивают стратегию терапии.'
      }
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
