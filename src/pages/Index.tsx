import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [showForm, setShowForm] = useState(false);

  const equipment = [
    {
      id: 1,
      name: 'JCB 3CX',
      type: 'Экскаватор-погрузчик',
      power: '74 л.с.',
      description: 'Универсальная машина для земляных работ, погрузки и разгрузки материалов',
      image: '/img/9e1ebabd-c4cb-4146-ac62-18aa16eba488.jpg',
      features: ['Полноповоротный экскаватор', 'Фронтальный погрузчик', 'Компактные размеры'],
      price: 'от 4 500 000 ₽'
    },
    {
      id: 2,
      name: 'JCB JS220',
      type: 'Гусеничный экскаватор',
      power: '170 л.с.',
      description: 'Мощный экскаватор для тяжелых земляных работ и строительных проектов',
      image: '/img/fe9a952f-8101-44b3-8479-f5aaf58a8a2b.jpg',
      features: ['Высокая производительность', 'Точность управления', 'Надежность'],
      price: 'от 7 200 000 ₽'
    },
    {
      id: 3,
      name: 'JCB 8085',
      type: 'Мини-экскаватор',
      power: '24 л.с.',
      description: 'Компактный экскаватор для работы в ограниченном пространстве',
      image: '/img/e6d43460-a2fe-4e74-8fad-c7ba3b0dec97.jpg',
      features: ['Маневренность', 'Экономичность', 'Универсальность'],
      price: 'от 2 800 000 ₽'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Официальный дилер JCB',
      description: 'Прямые поставки от производителя с официальной гарантией качества'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 24 месяца',
      description: 'Расширенная гарантия на всю поставляемую технику и запчасти'
    },
    {
      icon: 'Wrench',
      title: 'Сервисное обслуживание',
      description: 'Собственный сервисный центр с оригинальными запчастями'
    },
    {
      icon: 'Truck',
      title: 'Доставка по России',
      description: 'Быстрая доставка техники во все регионы России'
    },
    {
      icon: 'CreditCard',
      title: 'Лизинг и кредит',
      description: 'Выгодные условия лизинга и кредитования от банков-партнеров'
    },
    {
      icon: 'Users',
      title: 'Опыт 15+ лет',
      description: 'Многолетний опыт работы на рынке строительной техники'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setShowForm(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="https://i.postimg.cc/0j7t8G24/IMG-4557.jpg" 
                alt="JCB Seller" 
                className="h-14 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-jcb-black">JCB Seller</h1>
                <p className="text-sm text-jcb-gray">Официальный дилер JCB в России</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex gap-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-jcb-black hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')} 
                className="text-jcb-black hover:text-primary transition-colors font-medium"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('advantages')} 
                className="text-jcb-black hover:text-primary transition-colors font-medium"
              >
                Преимущества
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-jcb-black hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-jcb-gray">Звоните прямо сейчас</p>
                <p className="text-lg font-bold text-jcb-black">+7 (495) 123-45-67</p>
              </div>
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-primary hover:bg-jcb-yellowHover text-white font-semibold px-6"
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-jcb-yellowBg to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-jcb-black mb-6 leading-tight">
                  Новые экскаваторы-погрузчики 
                  <span className="text-primary"> JCB</span> в наличии
                </h2>
                <p className="text-xl text-jcb-gray mb-8 leading-relaxed">
                  Официальный дилер JCB в России. Продажа, сервис, запчасти. 
                  Гарантия 24 месяца. Лизинг от 0%.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-jcb-yellowHover text-white font-semibold px-8"
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('catalog')}
                  className="border-2 border-jcb-strokeGray text-jcb-black hover:bg-jcb-lightGray font-semibold px-8"
                >
                  Смотреть каталог
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-jcb-black">15+</p>
                  <p className="text-sm text-jcb-gray">лет на рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-jcb-black">1000+</p>
                  <p className="text-sm text-jcb-gray">довольных клиентов</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-jcb-black">24</p>
                  <p className="text-sm text-jcb-gray">месяца гарантии</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/9e1ebabd-c4cb-4146-ac62-18aa16eba488.jpg" 
                alt="JCB Excavator" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <p className="text-sm font-medium">В наличии на складе</p>
                <p className="text-2xl font-bold">50+ единиц техники</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="bg-jcb-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Нужна консультация по выбору техники?</h3>
              <p className="text-jcb-lightGray">Наши эксперты помогут подобрать оптимальное решение для ваших задач</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-primary hover:bg-jcb-yellowHover text-white font-semibold px-8"
              >
                Получить консультацию
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-jcb-black font-semibold px-8"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-jcb-black mb-4">
              Каталог техники JCB
            </h3>
            <p className="text-xl text-jcb-gray max-w-3xl mx-auto">
              Экскаваторы-погрузчики различной мощности и назначения для любых строительных задач. 
              Все модели в наличии на складе.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white font-semibold">
                    {item.power}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-jcb-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    В наличии
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-jcb-black mb-1">
                      {item.name}
                    </h4>
                    <p className="text-primary font-semibold mb-2">{item.type}</p>
                    <p className="text-jcb-gray text-sm leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-jcb-green flex-shrink-0" />
                        <span className="text-sm text-jcb-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-2xl font-bold text-jcb-black mb-4">{item.price}</p>
                    <Button 
                      className="w-full bg-primary hover:bg-jcb-yellowHover text-white font-semibold"
                      onClick={() => setShowForm(true)}
                    >
                      Запросить предложение
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-jcb-gray mb-6">Не нашли нужную модель? У нас есть вся линейка техники JCB</p>
            <Button 
              size="lg"
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-jcb-yellowHover text-white font-semibold px-8"
            >
              Показать весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-jcb-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-jcb-black mb-4">
              Почему выбирают JCB Seller
            </h3>
            <p className="text-xl text-jcb-gray max-w-3xl mx-auto">
              Мы предоставляем полный спектр услуг для работы с техникой JCB
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 bg-white group">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={advantage.icon} size={36} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-jcb-black mb-4">
                    {advantage.title}
                  </h4>
                  <p className="text-jcb-gray leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-jcb-black mb-8">
                Контакты и офис
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-jcb-black text-lg mb-1">Телефон</p>
                    <p className="text-2xl font-bold text-primary mb-2">+7 (495) 123-45-67</p>
                    <p className="text-jcb-gray">Звоните с 9:00 до 18:00 (пн-пт)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-jcb-black text-lg mb-1">Email</p>
                    <p className="text-xl text-primary mb-2">info@jcbseller.ru</p>
                    <p className="text-jcb-gray">Ответим в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-jcb-black text-lg mb-1">Офис и склад</p>
                    <p className="text-xl text-jcb-black mb-2">г. Москва, ул. Промышленная, д. 15</p>
                    <p className="text-jcb-gray">Приезжайте посмотреть технику вживую</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="p-8 shadow-xl">
                <CardContent className="p-0">
                  <h4 className="text-2xl font-bold text-jcb-black mb-6">
                    Оставьте заявку
                  </h4>
                  <p className="text-jcb-gray mb-6">
                    Заполните форму, и мы свяжемся с вами в течение 15 минут
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      placeholder="Ваше имя *"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-jcb-strokeGray focus:border-primary"
                    />
                    <Input 
                      placeholder="Телефон *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-jcb-strokeGray focus:border-primary"
                    />
                    <Input 
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-jcb-strokeGray focus:border-primary"
                    />
                    <Textarea 
                      placeholder="Интересующая техника или вопрос"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-jcb-strokeGray focus:border-primary"
                    />
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-jcb-yellowHover text-white font-semibold"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                  
                  <p className="text-xs text-jcb-gray mt-4 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jcb-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://i.postimg.cc/0j7t8G24/IMG-4557.jpg" 
                  alt="JCB Seller" 
                  className="h-10 w-auto"
                />
                <div>
                  <h5 className="text-xl font-bold">JCB Seller</h5>
                  <p className="text-jcb-gray">Официальный дилер JCB</p>
                </div>
              </div>
              <p className="text-jcb-lightGray mb-6 leading-relaxed">
                Официальный дилер строительной техники JCB в России. 
                Продажа, сервисное обслуживание, запчасти. Работаем с 2009 года.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-jcb-gray text-white hover:bg-white hover:text-jcb-black">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-jcb-gray text-white hover:bg-white hover:text-jcb-black">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Техника</h6>
              <ul className="space-y-3 text-jcb-lightGray">
                <li><a href="#" className="hover:text-primary transition-colors">Экскаваторы-погрузчики</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гусеничные экскаваторы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мини-экскаваторы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Погрузчики</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold mb-4">Услуги</h6>
              <ul className="space-y-3 text-jcb-lightGray">
                <li><a href="#" className="hover:text-primary transition-colors">Продажа техники</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сервисное обслуживание</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Запчасти JCB</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лизинг и кредит</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-jcb-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-jcb-lightGray">&copy; 2024 JCB Seller. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-jcb-lightGray">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-2xl font-bold text-jcb-black">
                  Оставить заявку
                </h4>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowForm(false)}
                  className="text-jcb-gray hover:text-jcb-black"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              
              <p className="text-jcb-gray mb-6">
                Заполните форму, и наш менеджер свяжется с вами в течение 15 минут
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя *"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-jcb-strokeGray focus:border-primary"
                />
                <Input 
                  placeholder="Телефон *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border-jcb-strokeGray focus:border-primary"
                />
                <Input 
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-jcb-strokeGray focus:border-primary"
                />
                <Textarea 
                  placeholder="Интересующая техника или вопрос"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="border-jcb-strokeGray focus:border-primary"
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-jcb-yellowHover text-white font-semibold"
                >
                  Отправить заявку
                </Button>
              </form>
              
              <p className="text-xs text-jcb-gray mt-4 text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;