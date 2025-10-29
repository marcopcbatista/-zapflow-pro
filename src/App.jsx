import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, Users, TrendingUp, CheckCircle, Star, Menu, X, ArrowRight, Play, DollarSign, Clock, Target } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('recursos');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Users, value: '10.000+', label: 'Empresas Ativas' },
    { icon: MessageSquare, value: '5M+', label: 'Mensagens/Dia' },
    { icon: TrendingUp, value: '300%', label: 'Aumento em Vendas' },
    { icon: Star, value: '4.9/5', label: 'Avalia��o' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Automa��o Inteligente',
      description: 'Respostas autom�ticas 24/7 com IA avan�ada que aprende com suas conversas'
    },
    {
      icon: Users,
      title: 'Multi-Atendentes',
      description: 'Gerencie equipes, distribua conversas e monitore performance em tempo real'
    },
    {
      icon: Target,
      title: 'Funis de Vendas',
      description: 'Crie jornadas automatizadas e converta leads em clientes no piloto autom�tico'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Completo',
      description: 'Dashboards intuitivos com m�tricas de convers�o, engajamento e ROI'
    },
    {
      icon: Clock,
      title: 'Agendamento',
      description: 'Agende mensagens em massa, campanhas e follow-ups automaticamente'
    },
    {
      icon: DollarSign,
      title: 'Integra��o Pagamentos',
      description: 'Receba pagamentos via WhatsApp com Pix, cart�o e boleto integrados'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 97',
      period: '/m�s',
      description: 'Para pequenos neg�cios',
      features: [
        '1 n�mero WhatsApp',
        '1.000 mensagens/m�s',
        '2 atendentes',
        'Automa��o b�sica',
        'Suporte por email'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'R$ 297',
      period: '/m�s',
      description: 'Mais vendido',
      features: [
        '3 n�meros WhatsApp',
        '10.000 mensagens/m�s',
        '10 atendentes',
        'Automa��o avan�ada + IA',
        'Funis ilimitados',
        'Analytics completo',
        'Suporte priorit�rio',
        'API acesso'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 997',
      period: '/m�s',
      description: 'Para grandes empresas',
      features: [
        'N�meros ilimitados',
        'Mensagens ilimitadas',
        'Atendentes ilimitados',
        'IA personalizada',
        'White label',
        'Integra��es customizadas',
        'Gerente de conta dedicado',
        'SLA 99.9%'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'CEO, Loja Virtual X',
      avatar: '?????',
      text: 'Aumentamos 340% em vendas em apenas 2 meses. O ROI foi imediato!',
      rating: 5
    },
    {
      name: 'Ana Silva',
      role: 'Gerente, Cl�nica Sa�de+',
      avatar: '?????',
      text: 'Automatizamos todo o agendamento. Economizamos 15h/semana da equipe.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      role: 'Dono, Academia Fit',
      avatar: '???',
      text: 'Recuperamos 60% dos leads perdidos com os follow-ups autom�ticos.',
      rating: 5
    }
  ];

  const handleCTA = () => {
    window.open('https://pay.kiwify.com.br/XxlKJT4', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header/Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                <MessageSquare className="w-8 h-8" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ZapFlow Pro
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#recursos" className="hover:text-purple-400 transition">Recursos</a>
              <a href="#planos" className="hover:text-purple-400 transition">Planos</a>
              <a href="#depoimentos" className="hover:text-purple-400 transition">Depoimentos</a>
              <button
                onClick={handleCTA}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50"
              >
                Come�ar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#recursos" className="block hover:text-purple-400">Recursos</a>
              <a href="#planos" className="block hover:text-purple-400">Planos</a>
              <a href="#depoimentos" className="block hover:text-purple-400">Depoimentos</a>
              <button
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold"
              >
                Come�ar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <span className="text-purple-300 font-semibold">?? Revolucione seu atendimento</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automatize seu WhatsApp
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Venda 300% Mais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A plataforma completa de automa��o WhatsApp que empresas inteligentes usam para escalar vendas sem aumentar equipe
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleCTA}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2"
            >
              Come�ar Teste Gr�tis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500/10 transition flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Ver Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recursos que <span className="text-purple-400">Fazem a Diferen�a</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tudo que voc� precisa para automatizar, vender e escalar seu neg�cio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-105 group"
              >
                <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planos para <span className="text-purple-400">Todo Tamanho</span>
            </h2>
            <p className="text-xl text-gray-300">
              Escolha o plano ideal e comece a vender mais hoje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/30' : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 mb-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTA}
                  className={`w-full py-4 rounded-xl font-bold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Come�ar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Nossos <span className="text-purple-400">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-gray-300">
              Resultados reais de empresas que confiam no ZapFlow Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para 10x suas Vendas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a mais de 10.000 empresas que j� automatizaram o WhatsApp
            </p>
            <button
              onClick={handleCTA}
              className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Come�ar Teste Gr�tis por 7 Dias
            </button>
            <p className="text-sm mt-4 opacity-75">
              ? Sem cart�o de cr�dito � ? Cancele quando quiser � ? Suporte 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
              <MessageSquare className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">ZapFlow Pro</span>
          </div>
          <p className="text-gray-400 mb-4">
            A plataforma mais completa de automa��o WhatsApp do Brasil
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition">Termos de Uso</a>
            <a href="#" className="hover:text-purple-400 transition">Privacidade</a>
            <a href="#" className="hover:text-purple-400 transition">Suporte</a>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            � 2024 ZapFlow Pro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
