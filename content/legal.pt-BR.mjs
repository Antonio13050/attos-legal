export default {
  app: 'Aplicativo: Attos',
  updated: 'Última atualização: 11 de outubro de 2026',
  contactTitle: 'Contato',
  supportLabel: 'Suporte e dúvidas gerais',
  privacyLabel: 'Privacidade e encarregado (LGPD)',
  translation: { title: '', text: '' },

  hub: {
    title: 'Termos e privacidade',
    lead: 'Os documentos oficiais do Attos e o caminho para apagar sua conta e seus dados.',
    read: 'Ler o documento',
    privacyText: 'Quais dados o app usa, para quê, com quem são compartilhados e quais são os seus direitos.',
    termsText: 'Regras de uso, avisos de saúde, limites do Coach IA e como funciona a assinatura.',
    deleteShort: 'Excluir conta e dados',
    deleteTitle: 'Como excluir sua conta e seus dados',
    deleteBody: [
      'Você pode pedir a exclusão completa da sua conta e de todos os dados a qualquer momento, de duas formas.',
      [
        '<b>Pelo aplicativo:</b> abra o Attos, toque em <b>Perfil</b>, depois na engrenagem no topo da tela, role até o fim e toque em <b>Excluir conta e dados</b>. Confirme em <b>Excluir definitivamente</b>. O app apaga seus treinos, histórico, medidas e a cópia na nuvem, e desconecta sua conta Google.',
        '<b>Por e-mail:</b> se você já desinstalou o app, escreva para {support} com o assunto “Exclusão de dados — Attos”, informando o e-mail da conta Google usada no app. Atendemos em até 5 dias úteis e confirmamos por e-mail.',
      ],
      'A exclusão é definitiva: não é possível recuperar os dados depois. Excluir a conta não cancela uma assinatura ativa do Attos PRO; o cancelamento é feito no Google Play.',
      'Quem usa o app sem conta tem os dados guardados só no aparelho. Nesse caso, “Excluir conta e dados” apaga tudo do aparelho, e desinstalar o app tem o mesmo efeito.',
    ],
  },

  privacy: {
    title: 'Política de privacidade',
    short: 'Privacidade',
    desc: 'Como o Attos coleta, usa, guarda e protege seus dados, em conformidade com a LGPD.',
    intro: {
      tone: 'ok',
      title: 'Resumo',
      text: 'O Attos guarda seus dados primeiro no seu aparelho. Só há cópia na nuvem se você entrar com o Google. Não vendemos nem alugamos seus dados, e não há anúncios no app. Você pode apagar tudo quando quiser.',
    },
    sections: [
      {
        h: '1. Sobre esta política',
        body: [
          'Esta política explica como o aplicativo Attos coleta, usa, guarda e protege as informações de quem o utiliza, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e com as regras do Google Play.',
          'Ao usar o aplicativo, você declara que leu e concorda com esta política.',
        ],
      },
      {
        h: '2. Dados que tratamos',
        body: [
          'Coletamos apenas o necessário para o app funcionar:',
          [
            '<b>Dados de conta:</b> nome, e-mail e foto de perfil da sua conta Google, somente se você escolher entrar com o Google.',
            '<b>Dados físicos e de treino (dados sensíveis):</b> idade, peso, altura, sexo biológico, objetivo, nível de experiência, local de treino, treinos, cargas, repetições e histórico de sessões.',
            '<b>Dores e limitações:</b> as regiões do corpo que você marcar na ficha do atleta, para que exercícios de risco sejam evitados.',
            '<b>Alimentação e hábitos:</b> metas de calorias e macronutrientes, refeições registradas, consumo de água, suplementos e seus horários, e preferências alimentares.',
            '<b>Conversas com o Coach IA:</b> as mensagens que você envia e as fotos de fichas de treino que você anexa.',
            '<b>Dados de assinatura:</b> se você assinar o Attos PRO, o estado da assinatura e um identificador da compra. Não recebemos nem guardamos dados do seu cartão.',
          ],
        ],
      },
      {
        h: '3. Para que usamos e com qual base legal',
        body: [
          'O tratamento se apoia nas bases legais da LGPD (arts. 7º e 11):',
          [
            '<b>Execução do serviço (art. 7º, V):</b> montar treinos, calcular estimativas (TMB, GET, IMC, meta de água), registrar sua evolução e manter o histórico.',
            '<b>Consentimento (art. 11, I):</b> usar seus dados físicos e suas limitações para personalizar as respostas do Coach IA. Você consente ao preencher a ficha e ao usar o Coach, e pode retirar o consentimento apagando esses dados.',
            '<b>Legítimo interesse e segurança:</b> prevenir fraude e manter a integridade dos dados salvos.',
          ],
        ],
      },
      {
        h: '4. Com quem compartilhamos',
        body: [
          'O Attos <b>não vende, não aluga e não compartilha</b> dados pessoais com anunciantes, redes de publicidade ou corretores de dados.',
          'Há compartilhamento apenas com os fornecedores necessários para o app funcionar:',
          [
            '<b>Google Firebase (Google):</b> login com a conta Google e banco de dados na nuvem, usados somente se você entrar com o Google.',
            '<b>Provedores de inteligência artificial (OpenRouter e Google Gemini):</b> quando você usa o Coach IA ou o ajuste de dieta com IA, sua mensagem segue para o provedor junto com o contexto da sua ficha: primeiro nome, idade, peso, altura, objetivo, nível, local de treino, dores informadas, preferências alimentares, suplementos cadastrados, metas da dieta, consumo de água e um resumo dos treinos recentes. Fotos de fichas que você anexar também são enviadas para leitura. Não enviamos e-mail, senha nem dados de pagamento.',
            '<b>Cloudflare:</b> hospeda o servidor do Coach IA, por onde as mensagens passam antes de chegar ao provedor de IA. Nele ficam o contador diário de mensagens e as respostas que você reportar.',
            '<b>Google Play e RevenueCat:</b> processam a assinatura do Attos PRO e informam ao app se ela está ativa.',
          ],
          'Esses fornecedores podem tratar dados em servidores fora do Brasil, seguindo as próprias políticas de privacidade e as salvaguardas previstas na LGPD para transferência internacional.',
        ],
      },
      {
        h: '5. Onde os dados ficam e como são protegidos',
        body: [
          [
            '<b>No aparelho, por padrão:</b> seus dados ficam salvos no armazenamento do aplicativo no seu celular.',
            '<b>Na nuvem, se você quiser:</b> ao entrar com o Google, uma cópia é sincronizada com o Google Firebase.',
            '<b>Criptografia em trânsito:</b> toda comunicação com servidores usa HTTPS/TLS.',
            '<b>Acesso restrito:</b> só a conta Google autenticada acessa os próprios dados na nuvem.',
          ],
          'Os lembretes de água e de suplementos são agendados no próprio aparelho. O conteúdo desses avisos não é enviado a servidores.',
        ],
      },
      {
        h: '6. Por quanto tempo guardamos',
        body: [
          'Guardamos seus dados enquanto você usar o app. Ao excluir a conta, os dados do aparelho e a cópia na nuvem são apagados de forma definitiva. Dados enviados aos provedores de IA para responder a uma mensagem seguem os prazos de retenção desses provedores.',
        ],
      },
      {
        h: '7. Seus direitos (art. 18 da LGPD)',
        body: [
          'Você é o titular dos seus dados e pode, a qualquer momento:',
          [
            '<b>Confirmar e acessar:</b> saber se tratamos seus dados e consultá-los. Tudo o que o app guarda está visível nas telas de Perfil, Histórico, Nutrição e Ficha do atleta.',
            '<b>Corrigir:</b> alterar dados incompletos ou desatualizados na Ficha do atleta e nas próprias telas do app.',
            '<b>Pedir uma cópia (portabilidade):</b> solicitar por e-mail uma cópia dos dados associados à sua conta.',
            '<b>Retirar o consentimento e excluir:</b> apagar todos os dados, do aparelho e da nuvem, de forma definitiva.',
          ],
          'Para exercer qualquer direito, escreva para {privacy}. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).',
        ],
      },
      {
        h: '8. Como excluir sua conta e seus dados',
        id: 'delete',
        body: [
          [
            '<b>Pelo aplicativo:</b> Perfil → engrenagem no topo → <b>Excluir conta e dados</b> → <b>Excluir definitivamente</b>. O app apaga seus dados do aparelho e da nuvem e desconecta a conta Google.',
            '<b>Por e-mail:</b> se você desinstalou o app, escreva para {support} com o assunto “Exclusão de dados — Attos”, informando o e-mail da conta Google usada. O pedido é atendido em até 5 dias úteis, com confirmação por e-mail.',
          ],
          'Excluir a conta não cancela uma assinatura ativa: o cancelamento é feito no Google Play.',
        ],
      },
      {
        h: '9. Crianças e adolescentes',
        body: [
          'O aplicativo não é direcionado a menores de 16 anos. Se identificarmos o cadastro de alguém abaixo dessa idade sem consentimento comprovado dos pais ou responsáveis, os dados serão apagados.',
        ],
      },
      {
        h: '10. Mudanças nesta política',
        body: [
          'Podemos atualizar esta política para refletir novas funções do app ou exigências legais. A data no topo indica a versão em vigor. Mudanças relevantes são avisadas no aplicativo.',
        ],
      },
    ],
  },

  terms: {
    title: 'Termos de uso e aviso de saúde',
    short: 'Termos de uso',
    desc: 'Regras de uso do Attos, avisos de saúde, limites do Coach IA e condições da assinatura Attos PRO.',
    intro: {
      tone: '',
      title: 'Aviso de saúde e segurança',
      text: 'O Attos e o Coach IA são ferramentas de organização e apoio ao treino. Não são serviço médico, de fisioterapia nem prescrição nutricional individualizada. Antes de começar uma rotina de exercícios ou mudar bastante a alimentação, consulte um médico e profissionais registrados no CREF (Conselho Regional de Educação Física) e no CFN (Conselho Federal de Nutricionistas).',
    },
    sections: [
      {
        h: '1. Aceitação dos termos',
        body: ['Ao baixar, instalar ou usar o aplicativo Attos, você concorda com estes Termos de uso. Se não concordar com alguma cláusula, não use o aplicativo.'],
      },
      {
        h: '2. O que o serviço é e o que não é',
        body: [
          'O Attos oferece recursos de registro de treinos, histórico de cargas, acompanhamento de água, dieta e suplementos, e sugestões de rotinas geradas por regras do app e por modelos de inteligência artificial.',
          [
            '<b>Não é dispositivo médico:</b> o aplicativo não diagnostica doenças, não previne lesões e não substitui a consulta presencial.',
            '<b>Educação física (CREF):</b> a supervisão de um profissional habilitado é importante para corrigir postura e amplitude e para adequar o volume de treino a cada pessoa.',
            '<b>Nutrição (CFN):</b> as metas de calorias e as substituições de alimentos são estimativas gerais, baseadas em literatura aberta, e não substituem o plano alimentar de um nutricionista.',
          ],
        ],
      },
      {
        h: '3. Aptidão física e riscos',
        body: [
          'Musculação, levantamento de peso e atividade física intensa envolvem riscos de lesão, como contraturas, rupturas, lesões articulares, dores lombares e problemas cardiovasculares por esforço ou por condições de saúde anteriores.',
          'Ao usar o Attos, você declara que:',
          [
            'tem 16 anos ou mais e está clinicamente apto a praticar exercícios;',
            'assume a responsabilidade pela escolha de cargas, pelo ritmo, pela postura e pela execução dos movimentos;',
            'vai interromper o treino se sentir dor aguda, tontura, palpitação, falta de ar ou náusea, e procurar atendimento médico.',
          ],
        ],
      },
      {
        h: '4. Inteligência artificial (Coach IA)',
        body: [
          'O Coach IA usa modelos de linguagem e de leitura de imagens, inclusive para ler fotos de fichas de treino. Esses modelos são probabilísticos e podem apresentar imprecisões, erros de interpretação ou informações inventadas.',
          'Revise com atenção qualquer treino ou orientação gerada pela IA antes de colocar em prática. O aplicativo e seus desenvolvedores não se responsabilizam por danos decorrentes de seguir, sem conferir, conteúdo gerado por IA.',
          'Use o botão Reportar, em cada resposta do Coach, para avisar sobre conteúdo errado ou inadequado.',
        ],
      },
      {
        h: '5. Assinatura Attos PRO',
        body: [
          'O Attos tem uma versão gratuita, com as funções essenciais, e uma assinatura paga, o Attos PRO, que libera mensagens ilimitadas com o Coach IA e a dieta ajustada pela IA.',
          [
            '<b>Pagamento:</b> a compra é processada pelo sistema de cobrança do Google Play. Não recebemos os dados do seu cartão.',
            '<b>Preço:</b> o valor dos planos mensal e anual é exibido no aplicativo antes da compra, conforme a loja do seu país.',
            '<b>Renovação automática:</b> a assinatura renova ao fim de cada período, até ser cancelada.',
            '<b>Cancelamento e reembolso:</b> você cancela quando quiser, nas assinaturas da sua conta do Google Play. Pedidos de reembolso e direito de arrependimento seguem as regras do Google Play e a legislação aplicável.',
          ],
        ],
      },
      {
        h: '6. Propriedade intelectual',
        body: ['O nome Attos, a marca, o código, a interface e as bases de dados do aplicativo pertencem aos seus criadores e são protegidos por lei. Não é permitido copiar, fazer engenharia reversa ou distribuir o aplicativo sem autorização. Os treinos e registros que você cria continuam sendo seus.'],
      },
      {
        h: '7. Mudanças nos termos',
        body: ['Estes termos podem ser atualizados para refletir novas funções ou exigências legais. A data no topo indica a versão em vigor. Continuar usando o aplicativo depois de uma atualização significa que você aceita os novos termos.'],
      },
      {
        h: '8. Lei aplicável',
        body: ['Estes termos são regidos pelas leis do Brasil, em especial o Código de Defesa do Consumidor (Lei nº 8.078/1990) e o Marco Civil da Internet (Lei nº 12.965/2014).'],
      },
    ],
  },
};
