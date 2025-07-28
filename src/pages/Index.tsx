import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Smartphone",
      title: "Ремонт телефонов",
      description: "Замена экранов, батарей, восстановление после воды"
    },
    {
      icon: "Laptop",
      title: "Ремонт ноутбуков",
      description: "Диагностика, замена комплектующих, чистка от пыли"
    },
    {
      icon: "Monitor",
      title: "Ремонт компьютеров",
      description: "Сборка, модернизация, устранение неисправностей"
    },
    {
      icon: "Tablet",
      title: "Ремонт планшетов",
      description: "Замена дисплеев, восстановление программного обеспечения"
    },
    {
      icon: "HardDrive",
      title: "Восстановление данных",
      description: "Спасение информации с поврежденных носителей"
    },
    {
      icon: "ShoppingCart",
      title: "Продажа техники",
      description: "Новые и восстановленные устройства с гарантией"
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Быстро",
      description: "Большинство ремонтов за 1-2 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия",
      description: "До 6 месяцев гарантии на работы"
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Более 10 лет на рынке ремонта"
    },
    {
      icon: "Wrench",
      title: "Качество",
      description: "Используем только оригинальные запчасти"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={24} className="text-primary" />
              <span className="text-xl font-bold text-gray-900">TechFix</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Главная
                </a>
                <a href="#services" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Услуги
                </a>
                <a href="#about" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  О нас
                </a>
                <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                  Контакты
                </a>
              </div>
            </div>
            <Button className="hidden md:block">Заказать ремонт</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональный ремонт техники
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Быстро и качественно восстанавливаем работоспособность ваших устройств. 
                Телефоны, ноутбуки, компьютеры, планшеты — доверьте ремонт профессионалам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/1730a067-f591-4ccc-ae4f-cf4dbd7cec3c.jpg" 
                alt="Мастерская по ремонту техники" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">1000+ довольных клиентов</p>
                    <p className="text-xs text-gray-600">за последний год</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию электронных устройств
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/3f961505-2474-4ec3-92ec-16b2d0f6afeb.jpg" 
                alt="Довольный клиент" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают нас?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Мы — команда опытных специалистов, которая знает всё о современной электронике. 
                Наша цель — вернуть жизнь вашим устройствам максимально быстро и качественно.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <Icon name={advantage.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{advantage.title}</h3>
                      <p className="text-sm text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы помочь с ремонтом? Оставьте заявку или приходите к нам в мастерскую
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                <CardDescription>
                  Опишите проблему, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Устройство</label>
                  <Input placeholder="iPhone 12, Samsung Galaxy, MacBook..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Описание проблемы</label>
                  <Textarea placeholder="Что случилось с устройством?" rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                      <p className="text-gray-600">ул. Технологическая, 15<br />Москва, 123456</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@techfix.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Режим работы</h4>
                      <p className="text-gray-600">
                        Пн-Пт: 9:00 - 20:00<br />
                        Сб-Вс: 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Экстренный ремонт</h4>
                <p className="text-gray-600 mb-4">
                  Нужен срочный ремонт? Работаем 24/7 для критичных случаев
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Экстренная связь
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-primary" />
                <span className="text-xl font-bold">TechFix</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Профессиональный ремонт электронных устройств с гарантией качества. 
                Восстанавливаем к жизни вашу технику уже более 10 лет.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт телефонов</li>
                <li>Ремонт ноутбуков</li>
                <li>Ремонт компьютеров</li>
                <li>Восстановление данных</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@techfix.ru</li>
                <li>ул. Технологическая, 15</li>
                <li>Москва, 123456</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechFix. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}