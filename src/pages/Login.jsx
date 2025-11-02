import React, { useState } from 'react';
import { Mail, Lock, Zap, ArrowRight, Eye, EyeOff } from 'lucide-react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      plan: 'trial',
      trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    localStorage.setItem('zapflow_user', JSON.stringify(user));
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="w-9 h-9 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">ZapFlow Pro</h1>
          <p className="text-purple-200">{isLogin ? 'Bem-vindo de volta!' : 'Comece seu teste grátis'}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Nome Completo</label>
                <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="João Silva" className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-pink-500" />
              </div>
            )}

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="seu@email.com" className="w-full pl-12 pr-4 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-pink-500" />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required placeholder="••••••••" className="w-full pl-12 pr-12 py-3 bg-white/10 border border-purple-400/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-pink-500" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2">
              <span>{isLogin ? 'Entrar' : 'Começar Teste Grátis'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {!isLogin && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
              <p className="text-green-300 text-sm text-center font-semibold">7 dias grátis - Sem cartão - Cancele quando quiser</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-purple-200 hover:text-white transition-colors">
              {isLogin ? <><span>Não tem conta? </span><span className="text-pink-400 font-bold">Cadastre-se grátis</span></> : <><span>Já tem conta? </span><span className="text-pink-400 font-bold">Faça login</span></>}
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-purple-300 hover:text-white transition-colors">Voltar para home</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
