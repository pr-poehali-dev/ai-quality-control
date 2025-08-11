import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 font-montserrat">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 animate-gradient-shift bg-[length:400%_400%]"></div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm font-medium px-4 py-2">
                  <Icon name="Brain" size={16} className="mr-2" />
                  ИИ-технологии нового поколения
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Увеличим выручку на
                  <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent"> 10–20%</span>
                  <br />за 90 дней с помощью ИИ-отдела контроля качества
                </h1>
                
                <p className="text-xl text-blue-100 font-medium leading-relaxed">
                  100% звонков под контролем. Без найма новых сотрудников. Гарантия результата.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-200">
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    Получить бесплатный аудит
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg">
                    <Icon name="PlayCircle" size={20} className="mr-2" />
                    Смотреть демо
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-scale-in delay-200">
                <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/img/a6f5061b-76e4-45c3-8e15-947626962dd2.jpg" 
                    alt="AI CRM Dashboard" 
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    <Icon name="Sparkles" size={16} className="inline mr-1" />
                    AI
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              ИИ-контроль качества — точка роста продаж
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Наш сервис на основе нейросетей помогает находить слабые места в работе отдела продаж, 
              чтобы вы зарабатывали больше без лишней нагрузки на команду и затрат на привлечение клиентов.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                title: "Руководитель продаж",
                description: "Держите отдел под контролем и выводите KPI на новый уровень.",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: "TrendingUp",
                title: "Собственник бизнеса", 
                description: "Видите, где теряются деньги, и получаете план по росту прибыли.",
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                icon: "Target",
                title: "Менеджер по продажам",
                description: "Понимаете, что исправить, чтобы закрывать больше сделок.",
                gradient: "from-blue-600 to-cyan-500"
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Выгоды решения</h2>
            <p className="text-xl text-slate-600">Измеримый результат для вашего бизнеса</p>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: "TrendingUp",
                title: "Рост продаж и конверсий",
                description: "ИИ находит ключевые моменты в звонках и даёт рекомендации для увеличения конверсии и снижения отказов.",
                stats: [
                  { value: "+5–8%", label: "к конверсии за 1–2 месяца" },
                  { value: "50+", label: "компаний повысили LTV на 15–18%" }
                ],
                gradient: "from-green-500 to-emerald-400"
              },
              {
                icon: "DollarSign",
                title: "Экономия бюджета и контроль команды",
                description: "Автоматическая проверка звонков по чек-листам. Быстро находит ошибки и предлагает решение.",
                stats: [
                  { value: "40–60 часов", label: "экономим руководителю" },
                  { value: "20–35%", label: "рост эффективности" }
                ],
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: "Shield",
                title: "Отдел продаж под контролем",
                description: "Вся аналитика и ошибки менеджеров в одном дашборде.",
                stats: [
                  { value: "100+", label: "метрик" },
                  { value: "10,000+", label: "звонков обучено" },
                  { value: "3-100", label: "менеджеров" }
                ],
                gradient: "from-purple-500 to-indigo-400"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-8 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="hidden lg:block">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                </div>
                
                <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">{benefit.description}</p>
                        <div className="flex lg:hidden justify-center mb-6">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center`}>
                            <Icon name={benefit.icon} size={24} className="text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {benefit.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center lg:text-left">
                            <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-1`}>
                              {stat.value}
                            </div>
                            <div className="text-slate-600 font-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Что нужно для старта работы?</h2>
            <p className="text-xl text-slate-600">Простой процесс внедрения за 4 шага</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block"></div>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Доступ к звонкам",
                    description: "Подключаемся к записи звонков из вашей CRM или телефонии.",
                    icon: "Phone"
                  },
                  {
                    step: "2", 
                    title: "Чек-листы качества и необходимые метрики",
                    description: "Используем ваши или настроим готовые под ваш бизнес.",
                    icon: "CheckSquare"
                  },
                  {
                    step: "3",
                    title: "Настройка ИИ-анализа",
                    description: "Синхронизация с CRM, загрузка исторических звонков, запуск мониторинга.",
                    icon: "Settings"
                  },
                  {
                    step: "4",
                    title: "Старт и первые результаты",
                    description: "Через 14 дней получаете первый отчёт с аналитикой и планом улучшений.",
                    icon: "BarChart3"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    
                    <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={step.icon} size={24} className="text-slate-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Тарифы</h2>
            <p className="text-xl text-slate-600">Выберите подходящий план для вашего бизнеса</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Базовый",
                subtitle: "от 3 направлений",
                setupPrice: "70 000 ₽",
                monthlyPrice: "35 000 ₽",
                perMinute: "5 ₽",
                features: [
                  "До 5 пользователей",
                  "5 ключевых метрик для контроля",
                  "Анализ звонков и этапов продаж",
                  "Сводная аналитика по отделу",
                  "Рейтинг сотрудников",
                  "Выгрузка всех данных",
                  "Точная транскрипция звонков",
                  "Анализ Zoom/онлайн встреч",
                  "Личный менеджер и поддержка",
                  "Персональное обучение"
                ],
                popular: false,
                gradient: "from-slate-500 to-slate-600"
              },
              {
                name: "Стандарт",
                subtitle: "от 5 направлений", 
                setupPrice: "100 000 ₽",
                monthlyPrice: "50 000 ₽",
                perMinute: "3 ₽",
                features: [
                  "До 10 пользователей",
                  "10 метрик для анализа",
                  "Все функции базового тарифа",
                  "Кастомные этапы продаж",
                  "Личный чек-лист оценки",
                  "Отчёты для собственника и РОПа",
                  "Рекомендации по повышению конверсии"
                ],
                popular: true,
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                name: "Премиум",
                subtitle: "от 7 направлений",
                setupPrice: "150 000 ₽", 
                monthlyPrice: "75 000 ₽",
                perMinute: "2 ₽",
                features: [
                  "До 15 пользователей",
                  "15 метрик",
                  "Максимальная персонализация",
                  "Индивидуальные воронки и скрипты",
                  "Расширенные отчёты и аналитика",
                  "Совместная разработка улучшений отдела продаж",
                  "Полная интеграция с CRM и внешними сервисами"
                ],
                popular: false,
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                name: "Индивидуальный",
                subtitle: "от 15 пользователей",
                setupPrice: "Обсуждается",
                monthlyPrice: "индивидуально",
                perMinute: "",
                features: [
                  "Без ограничений по направлениям и метрикам",
                  "Любая интеграция с CRM",
                  "Любой объём звонков",
                  "Все условия под вас"
                ],
                popular: false,
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200 hover:border-slate-300'}`} style={{ animationDelay: `${index * 100}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 text-sm font-semibold shadow-lg">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</CardTitle>
                  <p className="text-slate-600 text-sm mb-4">{plan.subtitle}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-slate-500 font-medium">💰 Внедрение:</div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.setupPrice}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-slate-500 font-medium">📅 Абонплата:</div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.monthlyPrice}
                      </div>
                    </div>
                    
                    {plan.perMinute && (
                      <div>
                        <div className="text-sm text-slate-500 font-medium">⏱ Стоимость минуты:</div>
                        <div className={`text-xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.perMinute}
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6">
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500' : ''} font-semibold`} size="lg">
                      {plan.name === 'Индивидуальный' ? 'Обсудить условия' : 'Выбрать план'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы увеличить продажи с помощью ИИ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Получите бесплатный аудит вашего отдела продаж и узнайте, 
              как можно повысить конверсию уже через 14 дней
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на демо
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;