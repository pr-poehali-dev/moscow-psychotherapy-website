import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const EventsCalendar = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Конференция "Современные подходы"',
      date: '15 янв',
      time: '10:00',
      type: 'conference',
      color: 'bg-primary',
    },
    {
      id: 2,
      title: 'Мастер-класс по КПТ',
      date: '22 янв',
      time: '14:00',
      type: 'masterclass',
      color: 'bg-accent',
    },
    {
      id: 3,
      title: 'Супервизорская группа',
      date: '28 янв',
      time: '18:00',
      type: 'supervision',
      color: 'bg-secondary',
    },
    {
      id: 4,
      title: 'Вебинар "Работа с травмой"',
      date: '2 фев',
      time: '16:00',
      type: 'webinar',
      color: 'bg-primary/80',
    },
    {
      id: 5,
      title: 'Круглый стол "Этика"',
      date: '12 фев',
      time: '19:00',
      type: 'discussion',
      color: 'bg-accent/70',
    },
  ];

  const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      conference: 'Users',
      masterclass: 'BookOpen',
      supervision: 'Eye',
      webinar: 'Video',
      discussion: 'MessageCircle',
    };
    return icons[type] || 'Calendar';
  };

  return (
    <Card className="border-2 sticky top-20">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
            <Icon name="Calendar" size={20} className="text-white" />
          </div>
          <h3 className="text-xl font-bold">Календарь событий</h3>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="p-3 rounded-lg border-2 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-start space-x-3">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${event.color}`}>
                  <Icon name={getTypeIcon(event.type) as any} size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={10} />
                    <span>{event.date}</span>
                    <span>•</span>
                    <Icon name="Clock" size={10} />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t space-y-3">
          <div className="text-center">
            <p className="text-sm font-medium mb-2">Быстрые ссылки</p>
          </div>
          <div className="space-y-2">
            <a href="/events" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="CalendarDays" size={14} className="text-primary" />
              <span>Все мероприятия</span>
            </a>
            <a href="/webinars" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="Video" size={14} className="text-primary" />
              <span>Записи вебинаров</span>
            </a>
            <a href="/materials" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="FileText" size={14} className="text-primary" />
              <span>Материалы</span>
            </a>
            <a href="/journal/professional" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="BookOpen" size={14} className="text-primary" />
              <span>Публикации</span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsCalendar;
