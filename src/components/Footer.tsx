import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon name="Heart" size={20} />
              </div>
              <span className="text-lg font-semibold">МО РПА</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Московское отделение Российской психотерапевтической ассоциации
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Об ассоциации</Link></li>
              <li><Link to="/specialists" className="text-muted-foreground hover:text-foreground transition-colors">Специалисты</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">События</Link></li>
              <li><Link to="/journal" className="text-muted-foreground hover:text-foreground transition-colors">Журнал</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">Вопросы и ответы</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</Link></li>
              <li><Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">Личный кабинет</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@mo-rpa.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Московское отделение РПА. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
