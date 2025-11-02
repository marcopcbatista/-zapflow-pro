// api/get-user.js
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email obrigatório' });
    }

    // Em produção, buscar do banco de dados
    // const user = await getUserFromDatabase(email);

    // Mock de resposta
    const mockUser = {
      email: email,
      name: 'Usuário Teste',
      plan: 'trial',
      status: 'active',
      isTrial: true,
      trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      createdAt: new Date().toISOString(),
      features: {
        maxMessages: 1000,
        maxNumbers: 1,
        chatbotEnabled: true,
        analyticsEnabled: true,
        integrationsEnabled: false
      }
    };

    return res.status(200).json({
      success: true,
      user: mockUser
    });

  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return res.status(500).json({ 
      error: 'Erro ao buscar usuário',
      message: error.message 
    });
  }
}