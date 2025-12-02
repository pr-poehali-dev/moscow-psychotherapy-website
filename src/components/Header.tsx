import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const aboutItems = [
    { title: 'Структура', href: '/structure', description: 'Руководство и органы управления' },
    { title: 'Документы', href: '/documents', description: 'Устав, положения, кодекс' },
  ];

  const knowledgeItems = [
    { title: 'Анонсы мероприятий', href: '/events', description: 'Предстоящие события' },
    { title: 'Записи вебинаров', href: '/webinars', description: 'Архив видеозаписей' },
    { title: 'Доп. материалы', href: '/materials', description: 'Статьи и ресурсы' },
  ];

  const journalItems = [
    { title: 'О журнале', href: '/journal/about', description: 'Информация для авторов' },
    { title: 'Профессиональные публикации', href: '/journal/professional', description: 'Научные статьи' },
    { title: 'Психология для жизни', href: '/journal/life', description: 'Популярные статьи' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <span className="text-xl font-bold text-white">МО</span>
            </div>
            <span className="hidden font-bold sm:inline-block">РПА Москва</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9">Об ассоциации</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {aboutItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/specialists"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Специалисты
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9">Копилка экспертов</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {knowledgeItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9">Журнал</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {journalItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/faq"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Вопрос-ответ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/contacts"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Контакты
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground px-3">Об ассоциации</h3>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                
                <Link
                  to="/specialists"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors font-medium"
                >
                  Специалисты
                </Link>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground px-3">Копилка экспертов</h3>
                  {knowledgeItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-muted-foreground px-3">Журнал</h3>
                  {journalItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/faq"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors font-medium"
                >
                  Вопрос-ответ
                </Link>

                <Link
                  to="/contacts"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md hover:bg-accent transition-colors font-medium"
                >
                  Контакты
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;