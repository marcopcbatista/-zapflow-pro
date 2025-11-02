// api/verify-subscription.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email obrigatório' });
    }

    // Em produção, buscar do banco de dados
    // const user = await getUserFromDatabase(email);
    
    // Por enquanto, simular resposta
    const mockUser = {
      email: email,
      name: 'Usuário Teste',
      plan: 'trial',
      status: 'active',
      isTrial: true,
      trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      expiresAt: null
    };

    // Verificar se trial expirou
    const now = new Date();
    const trialEnd = new Date(mockUser.trialEndsAt);
    
    if (mockUser.isTrial && now > trialEnd) {
      return res.status(200).json({
        valid: false,
        expired: true,
        message: 'Trial expirado',
        user: mockUser
      });
    }

    // Verificar se assinatura expirou
    if (mockUser.expiresAt) {
      const expirationDate = new Date(mockUser.expiresAt);
      if (now > expirationDate) {
        return res.status(200).json({
          valid: false,
          expired: true,
          message: 'Assinatura expirada',
          user: mockUser
        });
      }
    }

    return res.status(200).json({
      valid: true,
      expired: false,
      user: mockUser
    });

  } catch (error) {
    console.error('Erro ao verificar assinatura:', error);
    return res.status(500).json({ 
      error: 'Erro ao verificar assinatura',
      message: error.message 
    });
  }
}