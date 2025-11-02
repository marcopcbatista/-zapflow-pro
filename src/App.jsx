<div className="hidden md:flex items-center space-x-8">
          <a href="#recursos" className="hover:text-purple-300 transition-colors">Recursos</a>
          <a href="#planos" className="hover:text-purple-300 transition-colors">Planos</a>
          <a href="#depoimentos" className="hover:text-purple-300 transition-colors">Depoimentos</a>
          <button 
            onClick={handleCTA}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Começar Agora
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-purple-900/95 backdrop-blur-lg">
        <div className="px-4 pt-2 pb-6 space-y-3">
          <a href="#recursos" className="block py-2 hover:text-purple-300">Recursos</a>
          <a href="#planos" className="block py-2 hover:text-purple-300">Planos</a>
          <a href="#depoimentos" className="block py-2 hover:text-purple-300">Depoimentos</a>
          <button 
            onClick={handleCTA}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full font-semibold mt-3"
          >
            Começar Agora
          </button>
        </div>
      </div>
    )}
  </nav>

  {/* Hero Section */}
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 7 dias de teste grátis
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Automatize seu WhatsApp
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Venda 300% Mais
            </span>
          </h1>
          
          <p className="text-xl text-purple-200 leading-relaxed">
            A plataforma completa de automação WhatsApp que empresas inteligentes usam para escalar vendas sem aumentar equipe
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCTA}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Começar Teste Grátis</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            
            <button className="group border-2 border-purple-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-800/30 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Ver Demo</span>
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="text-2xl font-bold">10.000+</span>
              </div>
              <p className="text-sm text-purple-300">Empresas Ativas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-5 h-5 text-pink-400" />
                <span className="text-2xl font-bold">5M+</span>
              </div>
              <p className="text-sm text-purple-300">Mensagens/Dia</p>
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-5 h-5 text-pink-400" />
                <span className="text-2xl font-bold">300%</span>
              </div>
              <p className="text-sm text-purple-300">Aumento em Vendas</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-purple-800/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
              alt="Dashboard Preview" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Teste Grátis 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Recursos que <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Transformam Vendas</span>
        </h2>
        <p className="text-xl text-purple-200">Tudo que você precisa para dominar o WhatsApp Business</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Bot className="w-8 h-8" />, title: "Chatbot Inteligente", description: "IA que responde clientes 24/7 com taxa de resolução de 87%" },
          { icon: <Zap className="w-8 h-8" />, title: "Respostas Rápidas", description: "Templates inteligentes que economizam 4h/dia da sua equipe" },
          { icon: <Users className="w-8 h-8" />, title: "CRM Integrado", description: "Gestão completa de contatos e histórico de conversas" },
          { icon: <BarChart3 className="w-8 h-8" />, title: "Análise em Tempo Real", description: "Dashboard com métricas que importam: conversão, tempo de resposta, ROI" },
          { icon: <MessageSquare className="w-8 h-8" />, title: "Envio em Massa", description: "Campanhas personalizadas que não são bloqueadas" },
          { icon: <CheckCircle2 className="w-8 h-8" />, title: "100% Seguro", description: "API oficial do WhatsApp - zero risco de ban" }
        ].map((feature, index) => (
          <div key={index} className="group bg-gradient-to-br from-purple-800/50 to-indigo-900/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-purple-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Pricing Section */}
  <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Planos que <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cabem no seu Bolso</span>
        </h2>
        <p className="text-xl text-purple-200">Comece grátis e escale conforme cresce</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Starter", price: "R$ 97", period: "/mês", features: ["1.000 mensagens/mês", "1 número WhatsApp", "Chatbot básico", "CRM incluído", "Suporte por email"], popular: false },
          { name: "Professional", price: "R$ 297", period: "/mês", features: ["10.000 mensagens/mês", "3 números WhatsApp", "Chatbot avançado com IA", "CRM + Automações", "Integrações ilimitadas", "Suporte prioritário 24/7"], popular: true },
          { name: "Enterprise", price: "R$ 997", period: "/mês", features: ["Mensagens ilimitadas", "Números ilimitados", "IA personalizada", "API dedicada", "Gerente de conta", "SLA de 99.9%", "Treinamento incluso"], popular: false }
        ].map((plan, index) => (
          <div key={index} className={`relative bg-gradient-to-br from-purple-800/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl p-8 border ${plan.popular ? 'border-pink-500 shadow-2xl shadow-pink-500/30 scale-105' : 'border-purple-500/30'}`}>
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  🔥 MAIS VENDIDO
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end justify-center">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-purple-300 ml-2 mb-2">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-purple-200">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleCTA}
              className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105' 
                  : 'border-2 border-purple-400 hover:bg-purple-800/30'
              }`}
            >
              Começar Teste Grátis
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          O que Nossos <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Clientes Dizem</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Carlos Silva", role: "CEO, TechStore", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", text: "Aumentamos as vendas em 340% no primeiro mês. O ROI foi absurdo!" },
          { name: "Mariana Costa", role: "Gerente, Fashion House", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", text: "Reduzimos o tempo de resposta de 2h para 30 segundos. Clientes adoram!" },
          { name: "Pedro Santos", role: "Fundador, EduOnline", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", text: "Automatizamos 80% do atendimento e dobramos a equipe de vendas." }
        ].map((testimonial, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-800/50 to-indigo-900/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-purple-100 mb-6 text-lg">"{testimonial.text}"</p>
            <div className="flex items-center space-x-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-purple-300">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para 7x suas Vendas?
        </h2>
        <p className="text-xl mb-8 text-purple-100">
          Junte-se a 10.000+ empresas que já transformaram seu WhatsApp em máquina de vendas
        </p>
        <button 
          onClick={handleCTA}
          className="group bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
        >
          <span>Começar Teste Grátis Agora</span>
          <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <p className="text-sm text-purple-200 mt-4">
          ✓ Sem cartão de crédito ✓ Cancelamento gratuito ✓ Suporte em português
        </p>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-purple-950/50">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-purple-300">
        © 2024 ZapFlow Pro. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</div>