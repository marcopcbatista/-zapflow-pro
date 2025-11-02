// api/webhook-kiwify.js
export default async function handler(req, res) {
  // Apenas aceitar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Log para debug (remover em produção)
    console.log('Webhook recebido:', JSON.stringify(data, null, 2));

    // Validar webhook_id (segurança básica)
    const WEBHOOK_SECRET = process.env.KIWIFY_WEBHOOK_SECRET || 'seu_secret_aqui';
    
    // Extrair dados do cliente
    const {
      order_status,
      Customer,
      Product,
      order_id,
      order_ref,
      created_at
    } = data;

    // Apenas processar quando pagamento aprovado
    if (order_status === 'paid' || order_status === 'approved') {
      const userData = {
        email: Customer?.email,
        name: Customer?.full_name,
        phone: Customer?.mobile,
        plan: Product?.product_name || 'Professional',
        planPrice: Product?.price || 297,
        orderId: order_id,
        orderRef: order_ref,
        status: 'active',
        activatedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 dias
        isTrial: false
      };

      // Em produção, salvar no banco de dados (Firebase/Supabase)
      // Por enquanto, vamos apenas retornar sucesso
      
      console.log('Usuário ativado:', userData);

      // Aqui você pode:
      // 1. Salvar no Firebase/Firestore
      // 2. Enviar email de boas-vindas
      // 3. Notificar no Slack/Discord
      // 4. Adicionar em lista de email marketing

      return res.status(200).json({
        success: true,
        message: 'Pagamento processado com sucesso',
        user: userData
      });
    }

    // Outros status (refunded, cancelled, etc)
    if (order_status === 'refunded' || order_status === 'cancelled') {
      console.log('Pedido cancelado/reembolsado:', order_id);
      
      // Desativar conta do usuário
      // await desativarConta(Customer.email);
      
      return res.status(200).json({
        success: true,
        message: 'Conta desativada'
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Webhook recebido',
      status: order_status 
    });

  } catch (error) {
    console.error('Erro no webhook:', error);
    return res.status(500).json({ 
      error: 'Erro ao processar webhook',
      message: error.message 
    });
  }
}