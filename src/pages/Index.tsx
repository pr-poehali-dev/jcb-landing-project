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
      description: 'Универсальная машина для любых строительных работ',
      image: '/img/6a25d883-2426-494e-a513-e9f7c9acceae.jpg',
      features: ['Полноповоротный экскаватор', 'Фронтальный погрузчик', 'Компактные размеры']
    },
    {
      id: 2,
      name: 'JCB JS220',
      type: 'Гусеничный экскаватор',
      power: '170 л.с.',
      description: 'Мощный экскаватор для тяжелых земляных работ',
      image: '/img/0d3390c9-eab3-4eb9-82de-79845ecc75dd.jpg',
      features: ['Высокая производительность', 'Точность управления', 'Надежность']
    },
    {
      id: 3,
      name: 'JCB 8085',
      type: 'Мини-экскаватор',
      power: '24 л.с.',
      description: 'Компактный экскаватор для работы в ограниченном пространстве',
      image: '/img/d888c25d-d534-4226-8db5-ad7fbfbaa199.jpg',
      features: ['Маневренность', 'Экономичность', 'Универсальность']
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Официальный дилер',
      description: 'Прямые поставки от производителя с гарантией качества'
    },
    {
      icon: 'Wrench',
      title: 'Сервисное обслуживание',
      description: 'Полный цикл технического обслуживания и ремонта'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставка техники по всей России в кратчайшие сроки'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Расширенная гарантия на всю поставляемую технику'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
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

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/0j7t8G24/IMG-4557.jpg" 
                alt="JCB Seller" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-jcb-black">JCB Seller</h1>
                <p className="text-sm text-jcb-gray">Официальный дилер JCB</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="text-jcb-black hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-jcb-black hover:text-primary transition-colors">Каталог</a>
              <a href="#advantages" className="text-jcb-black hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="text-jcb-black hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primary/90 text-jcb-black font-medium"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-jcb-lightGray to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-montserrat font-bold text-jcb-black mb-6">
                Строительная техника 
                <span className="text-primary"> JCB</span>
              </h2>
              <p className="text-xl text-jcb-gray mb-8 leading-relaxed">
                Официальный дилер JCB в России. Широкий выбор экскаваторов, 
                погрузчиков и другой строительной техники с гарантией качества.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-primary/90 text-jcb-black font-medium px-8"
                >
                  Получить консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-jcb-gray text-jcb-black hover:bg-jcb-lightGray"
                >
                  <a href="#catalog">Смотреть каталог</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/0d3390c9-eab3-4eb9-82de-79845ecc75dd.jpg" 
                alt="JCB Excavator" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-jcb-black mb-4">
              Каталог техники
            </h3>
            <p className="text-xl text-jcb-gray max-w-3xl mx-auto">
              Экскаваторы JCB различной мощности и назначения для любых строительных задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 animate-fade-in border-jcb-lightGray">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-jcb-black">
                    {item.power}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-montserrat font-semibold text-jcb-black mb-2">
                    {item.name}
                  </h4>
                  <p className="text-primary font-medium mb-3">{item.type}</p>
                  <p className="text-jcb-gray mb-4">{item.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm text-jcb-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-jcb-black font-medium"
                    onClick={() => setShowForm(true)}
                  >
                    Запросить цену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-jcb-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-jcb-black mb-4">
              Наши преимущества
            </h3>
            <p className="text-xl text-jcb-gray max-w-3xl mx-auto">
              Почему клиенты выбирают JCB Seller для покупки строительной техники
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 animate-fade-in bg-white border-jcb-lightGray">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={advantage.icon} size={32} className="text-jcb-black" />
                  </div>
                  <h4 className="text-xl font-montserrat font-semibold text-jcb-black mb-4">
                    {advantage.title}
                  </h4>
                  <p className="text-jcb-gray">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-montserrat font-bold text-jcb-black mb-6">
                Контакты
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-jcb-black" />
                  </div>
                  <div>
                    <p className="font-medium text-jcb-black">Телефон</p>
                    <p className="text-jcb-gray">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-jcb-black" />
                  </div>
                  <div>
                    <p className="font-medium text-jcb-black">Email</p>
                    <p className="text-jcb-gray">info@jcbseller.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-jcb-black" />
                  </div>
                  <div>
                    <p className="font-medium text-jcb-black">Адрес</p>
                    <p className="text-jcb-gray">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <Card className="p-8 border-jcb-lightGray">
                <CardContent className="p-0">
                  <h4 className="text-2xl font-montserrat font-semibold text-jcb-black mb-6">
                    Быстрая заявка
                  </h4>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input 
                      placeholder="Ваше имя"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-jcb-lightGray focus:border-primary"
                    />
                    <Input 
                      placeholder="Телефон"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-jcb-lightGray focus:border-primary"
                    />
                    <Input 
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-jcb-lightGray focus:border-primary"
                    />
                    <Textarea 
                      placeholder="Сообщение"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-jcb-lightGray focus:border-primary"
                    />
                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-jcb-black font-medium"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jcb-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://i.postimg.cc/0j7t8G24/IMG-4557.jpg" 
                  alt="JCB Seller" 
                  className="h-8 w-auto"
                />
                <h5 className="text-xl font-montserrat font-bold">JCB Seller</h5>
              </div>
              <p className="text-gray-300 mb-4">
                Официальный дилер строительной техники JCB в России
              </p>
            </div>
            
            <div>
              <h6 className="font-montserrat font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-300">
                <li>Продажа техники JCB</li>
                <li>Сервисное обслуживание</li>
                <li>Запчасти и аксессуары</li>
                <li>Лизинг и кредитование</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-montserrat font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@jcbseller.ru</li>
                <li>г. Москва, ул. Промышленная, д. 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-jcb-gray mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 JCB Seller. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md animate-scale-in">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-2xl font-montserrat font-semibold text-jcb-black">
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
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-jcb-lightGray focus:border-primary"
                />
                <Input 
                  placeholder="Телефон"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="border-jcb-lightGray focus:border-primary"
                />
                <Input 
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-jcb-lightGray focus:border-primary"
                />
                <Textarea 
                  placeholder="Интересующая техника или вопрос"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="border-jcb-lightGray focus:border-primary"
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-jcb-black font-medium"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;