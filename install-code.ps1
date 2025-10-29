# ============================================
# SCRIPT PARA INSTALAR CÓDIGO DO ZAPFLOW PRO
# ============================================

Write-Host "🚀 Instalando código do ZapFlow Pro..." -ForegroundColor Cyan
Write-Host ""

$projectPath = "C:\Users\User\Desktop\zapflow-pro"

# Verifica se a pasta existe
if (-not (Test-Path $projectPath)) {
    Write-Host "❌ Pasta do projeto não encontrada!" -ForegroundColor Red
    Write-Host "Execute primeiro o script de deploy" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit
}

Set-Location $projectPath

# ============================================
# CÓDIGO COMPLETO DO APP.JSX
# ============================================

$appCode = @'
import React, { useState, useEffect } from 'react';
import { MessageSquare, Users, BarChart3, Settings, Menu, Sun, Moon, CheckCircle, ArrowRight, Star, Shield, Bot, Target, TrendingUp, Zap, Clock, DollarSign } from 'lucide-react';

// ========================================
// CONFIGURAÇÃO SUPABASE
// ========================================
const SUPABASE_URL = 'https://synhrgmzqvwgoikiyxoo.supabase.co';
const SUPABASE_KEY = 'COLE_SUA_CHAVE_ANON_AQUI'; // 👈 Pegue no Supabase Settings > API

// LINK DE VENDA
const LINK_VENDA = 'https://pay.hotmart.com/seu-link-aqui'; // 👈 Seu link de pagamento

// Função para salvar no Supabase
const saveToSupabase = async (table, data) => {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      return { success: true, data: await response.json() };
    }
    return { success: false };
  } catch (error) {
    return { success: false, error };
  }
};

const signInWithGoogle = () => {
  window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${window.location.origin}`;
};

const ZapFlowPro = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('overview');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleBuyNow = async (planName) => {
    await saveToSupabase('clicks_compra', {
      plan_name: planName,
      timestamp: new Date().toISOString()
    });
    setShowLeadForm(true);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    const result = await saveToSupabase('leads', {
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      created_at: new Date().toISOString()
    });
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        window.open(LINK_VENDA, '_blank');
      }, 2000);
    }
  };

  const stats = { conversasHoje: 247, taxaConversao: 32.5, tempoResposta: 18, vendasMes: 89 };
  const conversas = [
    { id: 1, nome: 'João Silva', msg: 'Gostaria de saber mais', hora: '10:32', status: 'novo', avatar: 'JS' },
    { id: 2, nome: 'Maria Santos', msg: 'Qual o prazo?', hora: '10:28', status: 'respondido', avatar: 'MS' },
    { id: 3, nome: 'Pedro Costa', msg: 'Enviar orçamento', hora: '10:15', status: 'atendimento', avatar: 'PC' }
  ];
  const funil = [
    { etapa: 'Leads', qtd: 342, perc: 100, cor: 'bg-blue-500' },
    { etapa: 'Contato', qtd: 256, perc: 75, cor: 'bg-indigo-500' },
    { etapa: 'Qualificados', qtd: 198, perc: 58, cor: 'bg-purple-500' },
    { etapa: 'Propostas', qtd: 124, perc: 36, cor: 'bg-pink-500' },
    { etapa: 'Vendas', qtd: 89, perc: 26, cor: 'bg-green-500' }
  ];
  const plans = [
    { name: 'Gratuito', price: 0, conv: 50, users: 1, features: ['Chatbot básico', 'Templates'], badge: 'Teste', color: 'bg-green-500' },
    { name: 'Starter', price: 97, conv: 500, users: 2, features: ['Automação', 'Relatórios', 'Suporte'] },
    { name: 'Professional', price: 297, conv: 2000, users: 5, features: ['IA avançada', 'Funil', 'API'], badge: 'Popular', color: 'bg-blue-500', popular: true },
    { name: 'Enterprise', price: 697, conv: 10000, users: '∞', features: ['Tudo incluído', 'Customizações'], badge: 'Premium', color: 'bg-purple-500' }
  ];

  const Navbar = () => (
    <nav className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b fixed w-full top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 rounded-xl">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ZapFlow Pro</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('landing')} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Início</button>
            <button onClick={() => setCurrentPage('pricing')} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Preços</button>
            <button onClick={() => setCurrentPage('dashboard')} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Dashboard</button>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100'}`}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => handleBuyNow('Professional')} className="px-6 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-2xl animate-pulse">
              💰 COMPRAR AGORA
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const LandingPage = () => (
    <div className="pt-16">
      <section className={`${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'} py-24`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                <Star className="h-4 w-4 fill-current" />
                <span>+5.000 empresas</span>
              </div>
              <h1 className={`text-6xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Automação que
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Multiplica Vendas</span>
              </h1>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Transforme WhatsApp em máquina de vendas. Automatize e aumente em 300%.</p>
              <button onClick={() => handleBuyNow('Professional')} className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-black text-xl hover:shadow-2xl animate-pulse">
                💰 COMPRAR AGORA
              </button>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-2xl p-6`}>
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Nova conversa</p>
                      <p className="text-blue-100 text-sm">João Silva</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white bg-opacity-20 rounded-xl p-4">
                      <p className="text-blue-100 text-sm">Conversas</p>
                      <p className="text-white text-2xl font-bold">247</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-xl p-4">
                      <p className="text-blue-100 text-sm">Vendas</p>
                      <p className="text-white text-2xl font-bold">89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-12">
            {[
              { value: '300%', label: 'Conversões', color: 'text-green-500' },
              { value: '80%', label: 'Tempo', color: 'text-blue-500' },
              { value: '250%', label: 'Vendas', color: 'text-purple-500' },
              { value: '15x', label: 'ROI', color: 'text-orange-500' }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`text-5xl font-black mb-2 ${s.color}`}>{s.value}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black text-white mb-6">Pronto para Transformar?</h2>
          <button onClick={() => handleBuyNow('Professional')} className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-black text-2xl hover:shadow-2xl animate-bounce">
            💰 COMPRAR AGORA - 50% OFF
          </button>
        </div>
      </section>
    </div>
  );

  const PricingPage = () => (
    <div className={`min-h-screen pt-24 pb-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-black mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Planos e Preços</h1>
          <div className="inline-flex bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full animate-pulse">
            <span className="font-black">🔥 50% OFF + BÔNUS</span>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 relative ${p.popular ? 'ring-4 ring-purple-500 scale-105' : ''} shadow-xl`}>
              {p.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${p.color} text-white px-6 py-2 rounded-full text-sm font-bold`}>{p.badge}</div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className={`text-6xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>{p.price}</span>
                  <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleBuyNow(p.name)} className={`w-full py-4 rounded-xl font-bold ${p.popular ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white animate-pulse' : darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white'}`}>
                {p.price === 0 ? 'Começar Grátis' : '💰 COMPRAR AGORA'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="flex h-screen pt-16">
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r transition-all flex flex-col`}>
        <div className="p-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`p-3 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded-xl`}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {[
            { icon: BarChart3, label: 'Dashboard', id: 'overview' },
            { icon: MessageSquare, label: 'Conversas', id: 'conversations' },
            { icon: Users, label: 'Contatos', id: 'contacts' }
          ].map((item) => (
            <button key={item.id} onClick={() => setCurrentView(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl ${currentView === item.id ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 overflow-auto">
        <div className={darkMode ? 'bg-gray-900' : 'bg-gray-50'}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b px-8 py-6`}>
            <h1 className={`text-3xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>Dashboard</h1>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Conversas', value: stats.conversasHoje, icon: MessageSquare, grad: 'from-blue-500 to-blue-600' },
                { label: 'Conversão', value: `${stats.taxaConversao}%`, icon: TrendingUp, grad: 'from-green-500 to-emerald-600' },
                { label: 'Tempo', value: `${stats.tempoResposta}s`, icon: Clock, grad: 'from-purple-500 to-purple-600' },
                { label: 'Vendas', value: stats.vendasMes, icon: DollarSign, grad: 'from-orange-500 to-orange-600' }
              ].map((s, i) => (
                <div key={i} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
                  <div className={`bg-gradient-to-br ${s.grad} p-3 rounded-xl w-fit mb-4`}>
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>{s.value}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 mb-8`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Funil de Vendas</h2>
              {funil.map((e, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between mb-2">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{e.etapa}</span>
                    <span className={`font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>{e.qtd}</span>
                  </div>
                  <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div className={`h-full ${e.cor}`} style={{ width: `${e.perc}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar />
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'pricing' && <PricingPage />}
      {currentPage === 'dashboard' && <Dashboard />}
      
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 max-w-md w-full shadow-2xl relative`}>
            <button onClick={() => setShowLeadForm(false)} className="absolute top-4 right-4 text-gray-500 text-2xl">✕</button>
            {!showSuccess ? (
              <>
                <div className="text-center mb-6">
                  <h2 className={`text-3xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>🎉 Quase lá!</h2>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Preencha para garantir a oferta</p>
                </div>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <input type="text" required value={leadData.name} onChange={(e) => setLeadData({...leadData, name: e.target.value})} className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'}`} placeholder="Seu nome" />
                  <input type="email" required value={leadData.email} onChange={(e) => setLeadData({...leadData, email: e.target.value})} className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'}`} placeholder="seu@email.com" />
                  <input type="tel" required value={leadData.phone} onChange={(e) => setLeadData({...leadData, phone: e.target.value})} className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'}`} placeholder="(00) 00000-0000" />
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-black text-lg">
                    🚀 GARANTIR OFERTA
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>✅ Dados Salvos!</h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Redirecionando...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ZapFlowPro;
'@

# Salvar o código
Write-Host "📝 Salvando código do App.jsx..." -ForegroundColor Yellow
$appCode | Out-File -FilePath "src\App.jsx" -Encoding UTF8 -NoNewline

Write-Host "✅ Código instalado com sucesso!" -ForegroundColor Green
Write-Host ""

# ============================================
# CONFIGURAR CREDENCIAIS
# ============================================
Write-Host "🔑 AGORA CONFIGURE SUAS CREDENCIAIS:" -ForegroundColor Yellow
Write-Host ""

Write-Host "1️⃣  Pegue sua chave do Supabase:" -ForegroundColor White
Write-Host "   https://supabase.com/dashboard/project/synhrgmzqvwgoikiyxoo/settings/api" -ForegroundColor Cyan
Write-Host "   Copie a chave 'anon public'" -ForegroundColor Cyan
Write-Host ""

Write-Host "2️⃣  Cole sua chave Supabase:" -ForegroundColor White
$supabaseKey = Read-Host "   Cole aqui"

Write-Host ""
Write-Host "3️⃣  Cole seu link de pagamento:" -ForegroundColor White
$linkVenda = Read-Host "   Cole aqui (ex: https://pay.hotmart.com/...)"

# Substituir no arquivo
if ($supabaseKey) {
    (Get-Content "src\App.jsx") -replace "COLE_SUA_CHAVE_ANON_AQUI", $supabaseKey | Set-Content "src\App.jsx"
    Write-Host "✅ Chave Supabase configurada!" -ForegroundColor Green
}

if ($linkVenda) {
    (Get-Content "src\App.jsx") -replace "https://pay.hotmart.com/seu-link-aqui", $linkVenda | Set-Content "src\App.jsx"
    Write-Host "✅ Link de venda configurado!" -ForegroundColor Green
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "✅ INSTALAÇÃO COMPLETA!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣  Teste local:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "2️⃣  Abra no navegador:" -ForegroundColor White
Write-Host "   http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "3️⃣  Se funcionar, faça deploy:" -ForegroundColor White
Write-Host "   vercel login" -ForegroundColor Cyan
Write-Host "   vercel --prod" -ForegroundColor Cyan
Write-Host ""

Write-Host "🚀 Quer testar agora? (S/N): " -ForegroundColor Yellow -NoNewline
$testar = Read-Host

if ($testar -eq "S" -or $testar -eq "s") {
    Write-Host ""
    Write-Host "🚀 Iniciando servidor de desenvolvimento..." -ForegroundColor Cyan
    npm run dev
}
