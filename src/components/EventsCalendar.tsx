import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { getUpcomingEvents, formatShortDate } from '@/utils/eventsData';

const EventsCalendar = () => {
  const allEvents = getUpcomingEvents();
  const upcomingEvents = allEvents.slice(0, 5);

  const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      'Конференция': 'Users',
      'Мастер-класс': 'BookOpen',
      'Супервизия': 'Eye',
      'Интервизия': 'UserCheck',
      'Вебинар': 'Video',
      'Круглый стол': 'MessageCircle',
      'Семинар': 'GraduationCap',
    };
    return icons[type] || 'Calendar';
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Конференция': 'bg-primary',
      'Мастер-класс': 'bg-accent',
      'Супервизия': 'bg-secondary',
      'Интервизия': 'bg-green-500',
      'Круглый стол': 'bg-accent/70',
      'Семинар': 'bg-primary/80',
    };
    return colors[type] || 'bg-muted';
  };

  const parseEventDate = (dateStr: string): Date => {
    const months: Record<string, number> = {
      'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3, 'мая': 4, 'июня': 5,
      'июля': 6, 'августа': 7, 'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
    };
    
    const parts = dateStr.split(' ');
    if (parts.length >= 3) {
      const day = parseInt(parts[0].replace('-', '').split('-')[0]);
      const month = months[parts[1]];
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
    
    return new Date();
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
            <Link
              key={event.id}
              to="/events"
              className="block p-3 rounded-lg border-2 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="flex items-start space-x-3">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${getTypeColor(event.type)}`}>
                  <Icon name={getTypeIcon(event.type)} size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={10} />
                    <span>{formatShortDate(parseEventDate(event.date))}</span>
                    <span>•</span>
                    <Icon name="Clock" size={10} />
                    <span>{event.time.split(' - ')[0]}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t space-y-3">
          <div className="text-center">
            <p className="text-sm font-medium mb-2">Быстрые ссылки</p>
          </div>
          <div className="space-y-2">
            <Link to="/events" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="CalendarDays" size={14} className="text-primary" />
              <span>Все мероприятия</span>
            </Link>
            <Link to="/webinars" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="Video" size={14} className="text-primary" />
              <span>Записи вебинаров</span>
            </Link>
            <Link to="/materials" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="FileText" size={14} className="text-primary" />
              <span>Материалы</span>
            </Link>
            <Link to="/journal/professional" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Icon name="BookOpen" size={14} className="text-primary" />
              <span>Публикации</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsCalendar;