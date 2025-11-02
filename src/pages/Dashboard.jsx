import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Users, Settings, LogOut, Zap, TrendingUp, Clock, CheckCircle2, BarChart3, Bot, Bell, QrCode, Menu, X } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('zapflow_user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('zapflow_user');
    window.location.href = '/';
  };

  const menuItems = [
    { path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/dashboard/whatsapp', icon: <MessageSquare className="w-5 h-5" />, label: 'WhatsApp' },
    { path: '/dashboard/chatbot', icon: <Bot className="w-5 h-5" />, label: 'Chatbot' },
    { path: '/dashboard/contacts', icon: <Users className="w-5 h-5" />, label: 'Contatos' },
    { path: '/dashboard/analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
    { path: '/dashboard/settings', icon: <Settings className="w-5 h-5" />, label: 'Configurações' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 p-3 rounded-xl text-white">
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside className={`fixed left-0 top-0 h-full w-64 bg-purple-950/50 backdrop-blur-xl border-r border-purple-500/30 transition-transform duration-300 z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ZapFlow Pro</span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setSidebarOpen(false)} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' : 'text-purple-200 hover:bg-purple-800/50'}`}>
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl border border-pink-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">Plano Trial</span>
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Ativo</span>
            </div>
            <p className="text-xs text-purple-200 mb-3">
              {user && new Date(user.trialEndsAt) > new Date() ? `Expira em ${Math.ceil((new Date(user.trialEndsAt) - new Date()) / (1000 * 60 * 60 * 24))} dias` : 'Trial expirado'}
            </p>
            <button onClick={() => window.open('https://pay.kiwify.com.br/XxlKJT4', '_blank')} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all">
              Fazer Upgrade
            </button>
          </div>

          <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 mt-6 text-purple-200 hover:text-white hover:bg-purple-800/50 rounded-xl transition-all w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </aside>

      <main className="lg:ml-64 p-4 lg:p-8">
        <Routes>
          <Route path="/" element={<DashboardHome user={user} />} />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

function DashboardHome({ user }) {
  const stats = [
    { icon: <MessageSquare className="w-6 h-6" />, label: 'Mensagens Hoje', value: '1,234', change: '+12%', color: 'from-blue-500 to-cyan-500' },
    { icon: <Users className="w-6 h-6" />, label: 'Contatos Ativos', value: '856', change: '+8%', color: 'from-purple-500 to-pink-500' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Taxa de Conversão', value: '34%', change: '+5%', color: 'from-green-500 to-emerald-500' },
    { icon: <Clock className="w-6 h-6" />, label: 'Tempo de Resposta', value: '2m 30s', change: '-15%', color: 'from-orange-500 to-red-500' },
  ];

  const chartData = [
    { name: 'Seg', mensagens: 400, conversoes: 24 },
    { name: 'Ter', mensagens: 300, conversoes: 13 },
    { name: 'Qua', mensagens: 600, conversoes: 38 },
    { name: 'Qui', mensagens: 800, conversoes: 39 },
    { name: 'Sex', mensagens: 700, conversoes: 48 },
    { name: 'Sab', mensagens: 900, conversoes: 38 },
    { name: 'Dom', mensagens: 500, conversoes: 43 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Olá, {user?.name || 'Usuário'}! 👋</h1>
          <p className="text-purple-200">Aqui está o resumo do seu WhatsApp hoje</p>
        </div>
        <button className="mt-4 lg:mt-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
          <Bell className="w-5 h-5" />
          <span>Notificações</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <p className="text-purple-200 text-sm mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Mensagens da Semana</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#8b5cf6" opacity={0.1} />
              <XAxis dataKey="name" stroke="#c4b5fd" />
              <YAxis stroke="#c4b5fd" />
              <Tooltip contentStyle={{ backgroundColor: '#1e1b4b', border: 'none', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="mensagens" stroke="#ec4899" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Conversões</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#8b5cf6" opacity={0.1} />
              <XAxis dataKey="name" stroke="#c4b5fd" />
              <YAxis stroke="#c4b5fd" />
              <Tooltip contentStyle={{ backgroundColor: '#1e1b4b', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="conversoes" fill="#a855f7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-purple-800/50 hover:bg-purple-700/50 p-6 rounded-xl transition-all text-left border border-purple-500/30">
            <QrCode className="w-8 h-8 text-pink-400 mb-3" />
            <h4 className="text-white font-semibold mb-1">Conectar WhatsApp</h4>
            <p className="text-purple-200 text-sm">Escaneie o QR Code</p>
          </button>
          <button className="bg-purple-800/50 hover:bg-purple-700/50 p-6 rounded-xl transition-all text-left border border-purple-500/30">
            <Bot className="w-8 h-8 text-blue-400 mb-3" />
            <h4 className="text-white font-semibold mb-1">Criar Chatbot</h4>
            <p className="text-purple-200 text-sm">Configure respostas automáticas</p>
          </button>
          <button className="bg-purple-800/50 hover:bg-purple-700/50 p-6 rounded-xl transition-all text-left border border-purple-500/30">
            <MessageSquare className="w-8 h-8 text-green-400 mb-3" />
            <h4 className="text-white font-semibold mb-1">Enviar Campanha</h4>
            <p className="text-purple-200 text-sm">Mensagem em massa</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function WhatsAppPage() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
      <h2 className="text-3xl font-bold text-white mb-6">Conectar WhatsApp</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-purple-800/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Como conectar:</h3>
            <ol className="space-y-3 text-purple-200">
              <li className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <span>Abra o WhatsApp no seu celular</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <span>Vá em Configurações → Aparelhos Conectados</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <span>Toque em "Conectar um aparelho"</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                <span>Escaneie o QR Code ao lado</span>
              </li>
            </ol>
          </div>
          <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-xl">
            <p className="text-green-300 text-sm">
              <CheckCircle2 className="w-5 h-5 inline mr-2" />
              Conexão 100% segura via API oficial do WhatsApp
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl">
            <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-xl">
              <QrCode className="w-32 h-32 text-gray-400" />
            </div>
            <p className="text-center mt-4 text-gray-600 text-sm">QR Code aparecerá aqui</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatbotPage() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
      <h2 className="text-3xl font-bold text-white mb-6">Criar Chatbot</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Templates Prontos</h3>
          {['Atendimento Comercial', 'Suporte Técnico', 'Agendamento', 'FAQ Automático'].map((template, i) => (
            <div key={i} className="bg-purple-800/30 p-6 rounded-xl hover:bg-purple-700/30 transition-all cursor-pointer border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-1">{template}</h4>
                  <p className="text-purple-200 text-sm">Pronto para usar</p>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">Usar</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Preview do Chat</h3>
          <div className="bg-gray-100 rounded-xl p-4 h-96 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-gray-800 text-sm">Olá! Como posso ajudar?</p>
              </div>
              <div className="bg-purple-600 text-white rounded-lg p-3 shadow-sm max-w-xs ml-auto">
                <p className="text-sm">Quero saber sobre preços</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                <p className="text-gray-800 text-sm">Temos 3 planos disponíveis...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactsPage() {
  const contacts = [
    { name: 'João Silva', phone: '+55 11 99999-9999', lastMessage: 'Olá, tudo bem?', status: 'online' },
    { name: 'Maria Santos', phone: '+55 11 98888-8888', lastMessage: 'Obrigada!', status: 'offline' },
    { name: 'Pedro Costa', phone: '+55 11 97777-7777', lastMessage: 'Pode me ajudar?', status: 'online' },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Contatos</h2>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold">Importar Contatos</button>
      </div>
      <div className="space-y-4">
        {contacts.map((contact, i) => (
          <div key={i} className="bg-purple-800/30 p-6 rounded-xl hover:bg-purple-700/30 transition-all border border-purple-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {contact.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{contact.name}</h4>
                  <p className="text-purple-200 text-sm">{contact.phone}</p>
                  <p className="text-purple-300 text-xs mt-1">{contact.lastMessage}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`w-2 h-2 rounded-full ${contact.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                <button className="text-purple-200 hover:text-white">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPage() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
      <h2 className="text-3xl font-bold text-white mb-6">Analytics Detalhado</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <p className="text-purple-200 text-sm mb-2">Total de Mensagens</p>
          <p className="text-4xl font-bold text-white">12,458</p>
          <p className="text-green-400 text-sm mt-2">+23% vs mês anterior</p>
        </div>
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <p className="text-purple-200 text-sm mb-2">Taxa de Resposta</p>
          <p className="text-4xl font-bold text-white">87%</p>
          <p className="text-green-400 text-sm mt-2">+5% vs mês anterior</p>
        </div>
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <p className="text-purple-200 text-sm mb-2">Conversões</p>
          <p className="text-4xl font-bold text-white">342</p>
          <p className="text-green-400 text-sm mt-2">+18% vs mês anterior</p>
        </div>
      </div>
      <p className="text-purple-200 text-center">Gráficos detalhados em breve...</p>
    </div>
  );
}

function SettingsPage({ user }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
      <h2 className="text-3xl font-bold text-white mb-6">Configurações</h2>
      <div className="space-y-6">
        <div className="bg-purple-800/30 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Informações da Conta</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-purple-200 text-sm mb-1">Nome</label>
              <input type="text" defaultValue={user?.name} className="w-full bg-purple-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white" />
            </div>
            <div>
              <label className="block text-purple-200 text-sm mb-1">Email</label>
              <input type="email" defaultValue={user?.email} className="w-full bg-purple-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white" />
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold">Salvar Alterações</button>
          </div>
        </div>

        <div className="bg-purple-800/30 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Plano Atual</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold">Trial - 7 Dias Grátis</p>
              <p className="text-purple-200 text-sm">Expira em {user && Math.ceil((new Date(user.trialEndsAt) - new Date()) / (1000 * 60 * 60 * 24))} dias</p>
            </div>
            <button onClick={() => window.open('https://pay.kiwify.com.br/XxlKJT4', '_blank')} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold">
              Fazer Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;