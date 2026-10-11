import legal from './legal.pt-BR.mjs';

export default {
  meta: { name: 'Português' },
  nav: { home: 'Início', guide: 'Guia do app', legal: 'Termos e privacidade', download: 'Baixar no Google Play', soon: 'Em breve no Google Play', menu: 'Menu', theme: 'Trocar entre tema claro e escuro', language: 'Idioma' },
  foot: {
    disclaimer: 'O Attos é uma ferramenta de organização de treinos. Não substitui médico, profissional de educação física nem nutricionista.',
    rights: 'Todos os direitos reservados.',
    links: 'Links do rodapé',
    contact: 'Contato',
  },

  home: {
    title: 'Attos — treino, dieta e evolução num app só',
    desc: 'Registre seus treinos de musculação, acompanhe cargas e recordes, cuide da dieta e da água e tire dúvidas com o Coach IA. Em português, espanhol e inglês.',
    eyebrow: 'App de treino para Android',
    h1: 'Seu treino na mão, do aquecimento ao recorde.',
    lead: 'O Attos monta seus treinos a partir de seis perguntas, registra cada série na academia e mostra sua evolução. Registrar treinos é grátis, para sempre.',
    ctaGuide: 'Ver como funciona',
    facts: [['101', 'exercícios com instruções'], ['3', 'idiomas: português, espanhol e inglês'], ['R$ 0', 'para registrar treinos']],
    featuresTitle: 'Feito para o que acontece dentro da academia',
    featuresLead: 'Poucos toques por série, números grandes e nada que atrapalhe entre um exercício e outro.',
    features: [
      {
        chapter: 'workouts', shot: 'workouts', more: 'Como criar e editar treinos',
        title: 'Treinos prontos no primeiro dia',
        text: 'Você responde seis perguntas e o Attos entrega uma divisão de treinos ajustada ao seu objetivo, ao seu nível e ao lugar onde você treina.',
        ticks: ['Treinos para academia, condomínio ou casa', 'Crie os seus do zero ou edite os sugeridos', '101 exercícios com vídeo e passo a passo de execução', 'Exercícios de risco ficam de fora se você informar uma dor'],
      },
      {
        chapter: 'active', shot: 'active', more: 'Como registrar um treino',
        title: 'Registre cada série em um toque',
        text: 'A tela do treino mostra o que você fez da última vez ao lado de cada série. É só ajustar a carga, marcar e seguir.',
        ticks: ['Carga e repetições da sessão anterior sempre à vista', 'Adicione séries e mude a ordem dos exercícios no meio do treino', 'Resumo com duração, volume e recordes ao finalizar', 'Cards prontos para compartilhar'],
      },
      {
        chapter: 'coach', shot: 'coach-workout', more: 'Como usar o Coach IA',
        title: 'Um coach que conhece a sua ficha',
        text: 'O Coach IA responde dúvidas de treino e de alimentação levando em conta seu objetivo, seu nível e suas limitações. E monta treinos que entram no app com um toque.',
        ticks: ['Peça um treino por escrito e salve em Meus treinos', 'Fotografe a ficha de papel da academia e deixe a IA digitalizar', '5 mensagens por dia no plano grátis'],
      },
      {
        chapter: 'nutrition', shot: 'diet', more: 'Como usar a Nutrição',
        title: 'Dieta, água e suplementos no mesmo lugar',
        text: 'Metas diárias de calorias e macros, refeições para marcar ao longo do dia, meta de água calculada pelo seu peso e a lista dos seus suplementos.',
        ticks: ['Meta de água recomendada pelo peso ou definida por você', 'Lembretes de água e de cada suplemento, no horário que você escolher', 'Alertas de incentivo quando o dia está atrasado', 'Horário de silêncio para não ser incomodado à noite'],
      },
      {
        chapter: 'profile', shot: 'profile', more: 'Como acompanhar sua evolução',
        title: 'Veja sua evolução de verdade',
        text: 'O Perfil reúne tudo o que você já treinou: constância, recordes, distribuição por grupo muscular, peso corporal e conquistas.',
        ticks: ['Recordes pessoais e 1RM estimado por exercício', 'Mapa do corpo com os músculos mais treinados', 'Tendência do peso corporal e IMC', 'Histórico completo, série por série'],
      },
    ],
    cardsTitle: 'Os detalhes que fazem diferença',
    cardsLead: 'O app se adapta ao seu aparelho e aos seus hábitos.',
    cards: [
      { icon: 'moon', title: 'Tema claro e escuro', text: 'O Attos acompanha o tema do seu celular. Se preferir, fixe o claro ou o escuro em Configurações.' },
      { icon: 'globe', title: 'Três idiomas', text: 'Português, espanhol e inglês. O app abre no idioma do aparelho e você troca quando quiser.' },
      { icon: 'bell', title: 'Lembretes no seu ritmo', text: 'Avisos de água e de suplementos nos horários que você definir, com horário de silêncio.' },
      { icon: 'cloud', title: 'Backup na nuvem', text: 'Entre com o Google para não perder seus treinos ao trocar de celular. Sem conta, tudo fica no aparelho.' },
      { icon: 'share', title: 'Compartilhe o treino', text: 'Cards do treino e do mês em vários estilos, prontos para os stories.' },
      { icon: 'shield', title: 'Seus dados são seus', text: 'Não vendemos dados. Você apaga a conta e tudo o que foi salvo direto pelo app, quando quiser.' },
    ],
    plans: {
      title: 'Grátis e Attos PRO',
      lead: 'Registrar treinos continua grátis para sempre. O PRO libera o Coach IA sem limite e a dieta ajustada pela IA.',
      cols: ['Recurso', 'Grátis', 'PRO'], yes: 'incluído', no: 'não incluído',
      rows: [
        ['Registrar treinos', true, true],
        ['Recordes, 1RM e evolução', true, true],
        ['Backup na nuvem', true, true],
        ['Coach IA', '5 por dia', 'ilimitado'],
        ['Dieta ajustada pela IA', false, true],
      ],
      note: 'O preço do plano mensal e do anual aparece no app, vindo do Google Play. A assinatura renova automaticamente e pode ser cancelada quando você quiser, no Google Play.',
    },
    faqTitle: 'Perguntas frequentes',
    faq: [
      ['O Attos é gratuito?', 'Sim. Criar treinos, registrar séries, ver histórico, recordes, conquistas e usar o backup na nuvem é grátis. O plano Attos PRO é opcional e libera o Coach IA sem limite de mensagens e a dieta ajustada pela IA.'],
      ['Preciso criar uma conta?', 'Não. Você pode começar sem conta e seus dados ficam salvos no aparelho. Entrar com o Google serve para ter backup na nuvem e recuperar tudo ao trocar de celular.'],
      ['Funciona sem internet?', 'Registrar treinos, água, dieta e suplementos funciona sem internet. O Coach IA, o backup na nuvem e a assinatura precisam de conexão.'],
      ['O Coach IA substitui um personal ou nutricionista?', 'Não. O Coach IA é um apoio: tira dúvidas e sugere treinos com base na sua ficha, mas pode errar. Confira sempre as sugestões e procure um profissional habilitado, principalmente se você tem lesões ou condições de saúde.'],
      ['Posso usar em libras em vez de quilos?', 'Sim. Em Configurações, no grupo Treino, troque as unidades entre kg e lb.'],
      ['Como apago minha conta e meus dados?', 'No app, vá em Perfil, toque na engrenagem, role até o fim e toque em “Excluir conta e dados”. Se você já desinstalou o app, peça a exclusão por e-mail. O passo a passo está na página Termos e privacidade.'],
      ['Em quais aparelhos o Attos funciona?', 'O Attos é um app para Android e está em fase de testes. Em breve estará disponível no Google Play.'],
    ],
    band: { title: 'Comece o próximo treino com o Attos', text: 'Seis perguntas e seus treinos estão prontos.' },
  },

  guide: {
    title: 'Guia do app — Attos',
    desc: 'Passo a passo de todas as telas do Attos: primeiro acesso, treinos, treino em andamento, Coach IA, nutrição, perfil, configurações e Attos PRO.',
    h1: 'Guia do app',
    lead: 'Todas as telas do Attos, uma por uma, com o que cada botão faz. As imagens acompanham o tema e o idioma que você escolher no topo desta página. Toque numa imagem para ampliar.',
    tocLabel: 'Capítulos', chapterLabel: 'Capítulo', tipLabel: 'Dica:', zoom: 'Ampliar',
    chapters: {
      start: { title: 'Primeiros passos', lead: 'Do primeiro toque até os treinos montados: leva cerca de um minuto.' },
      home: { title: 'Início', lead: 'A tela que abre com o app: o treino do dia e o que falta fazer hoje.' },
      workouts: { title: 'Treinos e exercícios', lead: 'Onde ficam seus treinos e a biblioteca com os 101 exercícios do catálogo.' },
      active: { title: 'Treino em andamento', lead: 'A tela que você usa na academia, série por série.' },
      coach: { title: 'Coach IA', lead: 'Um assistente que conhece a sua ficha: tira dúvidas e monta treinos.' },
      nutrition: { title: 'Nutrição', lead: 'Três abas: Dieta, Água e Suplementos.' },
      profile: { title: 'Perfil e evolução', lead: 'Tudo o que você já treinou, em números, gráficos e conquistas.' },
      settings: { title: 'Configurações', lead: 'Conta, backup, ficha do atleta, lembretes, tema e idioma. Abra pela engrenagem no topo do Perfil.' },
      pro: { title: 'Attos PRO', lead: 'O plano opcional que libera o Coach IA sem limite e a dieta ajustada pela IA.' },
    },
    steps: {
      'start.welcome': {
        title: 'Abra o app e escolha como entrar',
        text: 'A primeira tela apresenta o Attos e pergunta se você quer usar uma conta. Você decide: as duas opções dão acesso a todos os recursos gratuitos.',
        how: [
          'Se o app não abrir no seu idioma, toque no botão do idioma, no canto superior direito, e escolha entre <b>Português</b>, <b>Español</b> e <b>English</b>.',
          'Toque em <b>Continuar com Google</b> para entrar com sua conta Google. Seus treinos passam a ter backup na nuvem.',
          'Ou toque em <b>Começar sem conta</b>. Tudo fica salvo só neste aparelho, e você pode entrar com o Google depois, em Configurações.',
        ],
        tip: 'Ao continuar você concorda com os Termos de uso e a Política de privacidade. Os dois links, na parte de baixo da tela, abrem o texto completo.',
      },
      'start.about': {
        title: 'Conte sobre você e suas medidas',
        text: 'São as duas primeiras de seis perguntas. Elas servem para calcular seu gasto de calorias, seu IMC e as cargas iniciais.',
        how: [
          'Em <b>Sobre você</b>, escolha o sexo biológico e digite sua idade.',
          'Toque em <b>Continuar</b>.',
          'Em <b>Suas medidas</b>, informe peso e altura. O app mostra o IMC estimado logo abaixo.',
          'Toque em <b>Continuar</b>. A seta no topo volta para a pergunta anterior, sem perder o que você preencheu.',
        ],
      },
      'start.goal': {
        title: 'Escolha o objetivo e a rotina',
        text: 'O objetivo define repetições, volume e calorias. A rotina dosa a intensidade para o seu nível e para os dias que você tem.',
        how: [
          'Escolha um objetivo: <b>Ganhar massa muscular</b>, <b>Emagrecer</b>, <b>Definir</b>, <b>Ficar mais forte</b> ou <b>Saúde e disposição</b>.',
          'Na tela seguinte, marque sua experiência com musculação: iniciante, intermediário ou avançado.',
          'Escolha quantos dias por semana você treina, de 2 a 7.',
        ],
        tip: 'O número de dias decide a divisão: de corpo inteiro para poucos dias até cinco treinos diferentes para quem treina quase todo dia.',
      },
      'start.place': {
        title: 'Diga onde treina e do que precisa cuidar',
        text: 'As duas últimas perguntas garantem que só entrem exercícios que você consegue e pode fazer.',
        how: [
          'Escolha o local: <b>Academia</b>, <b>Condomínio</b> ou <b>Em casa</b>.',
          'Se quiser, escolha uma prioridade muscular. <b>Equilibrado</b> distribui o treino por igual.',
          'Em <b>Cuidados</b>, marque as regiões onde você sente dor: joelho, lombar, ombro, punho ou cotovelo. Pode marcar várias ou nenhuma.',
          'Escolha sua alimentação: sem restrições, sem lactose, sem glúten ou vegetariano.',
          'Toque em <b>Concluir</b>.',
        ],
        tip: 'A etapa de cuidados é opcional, mas vale preencher: exercícios de risco para a região marcada são trocados por alternativas.',
      },
      'start.ready': {
        title: 'Pronto: seus treinos estão montados',
        text: 'O Attos monta os treinos e abre a tela Início. Você já pode começar o primeiro.',
        how: [
          'Aguarde a mensagem <b>Tudo pronto</b>. O app segue sozinho para o Início.',
          'O primeiro treino aparece no card <b>Treino de hoje</b>, com a marca “calibrado para você”.',
        ],
        tip: 'Mudou de objetivo ou de academia? Edite as respostas quando quiser em Configurações → Ficha do atleta.',
      },

      'home.today': {
        title: 'Veja o treino de hoje e sua semana',
        text: 'O topo do Início responde à pergunta “o que eu treino hoje?” e mostra como foi a semana.',
        how: [
          'O card <b>Treino de hoje</b> sugere o próximo treino da sua lista, depois do último que você fez.',
          'Toque em <b>Começar treino</b> para abrir a tela do treino em andamento.',
          'Em <b>Últimos 7 dias</b>, os dias com treino ficam marcados. Abaixo do título aparecem os dias treinados e as semanas seguidas.',
        ],
        tip: 'A ordem dos treinos na aba Treinos define o rodízio. Para mudar a sugestão do dia, mude a ordem da lista.',
      },
      'home.day': {
        title: 'Acompanhe água, dieta e suplementos do dia',
        text: 'Rolando a tela, a seção Hoje resume o que já foi feito e o que falta.',
        how: [
          '<b>Água</b> mostra quanto você bebeu e a meta do dia. Toque para abrir a aba Água.',
          '<b>Dieta</b> mostra quantos itens das refeições já foram marcados. Toque para abrir a aba Dieta.',
          'Em <b>Suplementos</b>, toque no círculo para marcar o que já tomou. O horário de cada um aparece à direita.',
          'Toque em <b>Gerenciar</b> para cadastrar ou editar suplementos.',
        ],
      },

      'workouts.list': {
        title: 'Comece um treino pela lista',
        text: 'A aba Treinos tem duas partes: <b>Meus treinos</b>, com as suas rotinas, e <b>Exercícios</b>, com a biblioteca.',
        how: [
          'Na barra inferior, toque em <b>Treinos</b>.',
          'Cada treino mostra quantos exercícios tem, a duração estimada e os primeiros exercícios.',
          'Toque no treino, ou no botão azul à direita, para começar.',
        ],
      },
      'workouts.create': {
        title: 'Crie um treino do zero',
        text: 'Monte uma rotina sua, com os exercícios que quiser.',
        how: [
          'Toque em <b>Novo treino</b>.',
          'Dê um nome (por exemplo, “Treino A”) e, se quiser, uma descrição.',
          'Toque em <b>Adicionar exercícios</b>.',
          'Na tela <b>Selecionar</b>, busque pelo nome ou filtre por grupo muscular, e toque nos exercícios que quer incluir.',
          'Toque em <b>Confirmar</b> e, de volta ao treino, em <b>Criar treino</b>.',
        ],
        tip: 'Não achou um exercício? O botão Novo, ao lado da busca, cria um exercício seu sem sair da seleção.',
      },
      'workouts.editor': {
        title: 'Edite um treino',
        text: 'Mude o nome, a descrição e a lista de exercícios de qualquer treino, inclusive dos sugeridos pelo app.',
        how: [
          'Em Meus treinos, toque em <b>Editar</b> e depois no lápis do treino.',
          'Altere o nome e a descrição.',
          'Arraste um exercício pela alça, à esquerda, ou use as setas para mudar a ordem.',
          'Toque na lixeira para tirar um exercício do treino.',
          'Toque em <b>Salvar alterações</b>.',
        ],
      },
      'workouts.manage': {
        title: 'Reordene ou exclua treinos',
        text: 'O modo de edição da lista serve para organizar suas rotinas.',
        how: [
          'Toque em <b>Editar</b>, ao lado de “Seus treinos”.',
          'Arraste pela alça ou use as setas para mudar a ordem.',
          'Toque na lixeira para excluir um treino. O app pede confirmação.',
          'Toque em <b>Pronto</b> para sair do modo de edição.',
        ],
        tip: 'A ordem define o rodízio: o Início sugere como treino de hoje o próximo da lista depois do último que você fez.',
      },
      'workouts.library': {
        title: 'Consulte a biblioteca de exercícios',
        text: 'São 101 exercícios, cada um com vídeo e instruções de execução.',
        how: [
          'Na aba Treinos, toque em <b>Exercícios</b>.',
          'Use a busca ou os filtros: Peito, Costas, Pernas, Ombros, Braços e Core.',
          'Toque num exercício para ver o vídeo e o passo a passo.',
          'Toque em <b>Fechar</b> para voltar à lista.',
        ],
        tip: 'A busca encontra o exercício pelo nome em português, espanhol ou inglês.',
      },
      'workouts.custom': {
        title: 'Cadastre um exercício seu',
        text: 'Use quando a sua academia tem uma máquina ou variação que não está no catálogo.',
        how: [
          'Na parte Exercícios, toque em <b>Novo exercício</b>.',
          'Digite o nome e escolha o grupo muscular principal.',
          'Se quiser, escreva as instruções de execução e cole o link de um vídeo do YouTube.',
          'Toque em <b>Salvar exercício</b>. Ele passa a aparecer na biblioteca e na seleção de exercícios.',
        ],
      },

      'active.sets': {
        title: 'Registre cada série',
        text: 'No topo ficam o cronômetro do treino e o total de séries feitas. Cada exercício tem uma tabela com uma linha por série.',
        how: [
          'A coluna <b>Anterior</b> mostra a carga e as repetições da última vez. Toque nela para copiar os valores para a série.',
          'Ajuste <b>kg</b> e <b>Reps</b> tocando nos campos.',
          'Toque no botão de visto para concluir a série. A linha fica verde.',
          'Toque em <b>Adicionar série</b> para incluir mais uma.',
          'Toque em <b>Editar</b>, no exercício, para remover séries.',
        ],
        tip: 'Pode sair da tela ou fechar o app: o treino em andamento fica salvo e continua de onde parou.',
      },
      'active.reorder': {
        title: 'Mude a ordem dos exercícios',
        text: 'O aparelho que você queria está ocupado? Troque a ordem sem perder o que já registrou.',
        how: [
          'Toque em <b>Reordenar</b>, no topo da lista.',
          'Arraste pela alça ou use as setas para subir e descer cada exercício.',
          'Toque em <b>Pronto</b>.',
        ],
        tip: 'A ordem escolhida aqui vale só para este treino. Para mudar de vez, edite o treino na aba Treinos.',
      },
      'active.finish': {
        title: 'Finalize e veja o resumo',
        text: 'Ao terminar, o Attos salva o treino no histórico e mostra o resultado.',
        how: [
          'Toque em <b>Finalizar</b>, no canto superior direito.',
          'O resumo mostra duração, volume total, séries e exercícios feitos.',
          'Recordes batidos e conquistas desbloqueadas neste treino aparecem logo abaixo, com o XP ganho.',
          'Toque em <b>Voltar aos treinos</b> para sair.',
        ],
        tip: 'Para sair sem salvar, toque na seta de voltar no topo do treino e confirme o descarte.',
      },
      'active.share': {
        title: 'Compartilhe o treino',
        text: 'Do resumo você gera um card com os números do treino.',
        how: [
          'No resumo, toque em <b>Compartilhar</b>.',
          'Deslize para o lado para ver os modelos de card.',
          'Escolha o estilo: <b>Cor</b>, <b>Escuro</b>, <b>Claro</b>, <b>Transparente</b> ou <b>Foto</b>, que usa uma imagem sua de fundo.',
          'Toque em <b>Compartilhar</b> para enviar para outro app, ou no botão ao lado para salvar a imagem.',
        ],
      },

      'coach.ask': {
        title: 'Tire dúvidas com o Coach',
        text: 'O Coach IA responde sobre treino, alimentação e execução dos exercícios levando em conta a sua ficha.',
        how: [
          'Na barra inferior, toque em <b>IA Coach</b>.',
          'Toque numa das sugestões da tela inicial ou escreva sua pergunta no campo de baixo.',
          'Toque na seta para enviar. A resposta aparece aos poucos; enquanto isso, o botão vira um quadrado que para a resposta.',
          'Abaixo de cada resposta há três ações: copiar o texto, gerar de novo e reportar.',
          'O contador abaixo do título mostra quantas mensagens restam hoje no plano grátis: são 5 por dia.',
        ],
        tip: 'O Coach IA pode errar. Use as respostas como apoio e toque na bandeira para reportar uma resposta errada ou inadequada. Uma resposta que você parou no meio não gasta mensagem.',
      },
      'coach.plan': {
        title: 'Peça um treino e salve no app',
        text: 'Quando você pede um treino, a resposta vem com um card de treino estruturado.',
        how: [
          'Escreva o que você quer. Por exemplo: “Monte um treino de peito e tríceps de 45 minutos”.',
          'O card mostra os exercícios com séries, repetições e descanso.',
          'Toque em <b>Salvar em Meus treinos</b>. O treino passa a aparecer na aba Treinos.',
        ],
        tip: 'Os exercícios que existem no catálogo entram com vídeo e instruções. Os que não existem viram exercícios seus.',
      },
      'coach.photo': {
        title: 'Digitalize uma ficha de papel',
        text: 'Tem uma ficha impressa da academia? O Coach lê a foto e monta o treino.',
        how: [
          'Toque no ícone da câmera, à esquerda do campo de texto.',
          'Escolha <b>Tirar Foto</b> para abrir a câmera ou <b>Galeria de Fotos</b> para usar uma imagem salva.',
          'Envie a foto. O Coach devolve os treinos da ficha em cards.',
          'Confira os exercícios e toque em <b>Salvar em Meus treinos</b>.',
        ],
        tip: 'Fotografe com boa luz e a ficha inteira no quadro. Letra de mão difícil de ler pode gerar erros: confira antes de salvar.',
      },

      'nutrition.diet': {
        title: 'Siga as metas e marque as refeições',
        text: 'A aba Dieta mostra suas metas diárias de calorias e macronutrientes e as refeições do dia.',
        how: [
          'Em <b>Metas do dia</b> estão calorias, proteína, carboidrato e gordura, calculados para o seu peso e objetivo.',
          'Toque numa refeição para abrir.',
          'Toque no círculo de cada alimento para marcar como consumido.',
          'Use o campo <b>Adicionar alimento</b> para incluir um item na refeição.',
          'Toque em <b>Nova refeição</b> para criar outra, ou em <b>Reiniciar o dia</b> para desmarcar tudo.',
        ],
        tip: 'Com o Attos PRO, o botão Ajustar com IA monta um cardápio para o seu objetivo e deixa trocar cada alimento por um equivalente.',
      },
      'nutrition.water': {
        title: 'Registre a água e ajuste a meta',
        text: 'O anel mostra quanto você já bebeu em relação à meta do dia.',
        how: [
          'Toque num dos botões para registrar: <b>+200 ml</b>, <b>+300 ml</b>, <b>+500 ml</b> ou <b>+750 ml</b>.',
          'Em <b>Hoje</b>, a lixeira apaga um registro lançado por engano.',
          'Toque em <b>Alterar meta</b> para escolher entre a meta <b>Recomendada</b> e a <b>Personalizada</b>.',
          'Toque em <b>Salvar meta</b>.',
        ],
        tip: 'A recomendada usa 35 ml por quilo de peso, entre 1.800 e 4.000 ml, e muda sozinha quando você atualiza o peso. A personalizada fica fixa no valor que você escolher.',
      },
      'nutrition.waterrem': {
        title: 'Ative os lembretes de água',
        text: 'No fim da aba Água você define quando o Attos deve avisar.',
        how: [
          'Ligue <b>Lembretes de água</b> para ser avisado se ficar muito tempo sem registrar.',
          'Ligue <b>Alertas de incentivo</b> para receber um aviso quando o dia estiver atrasado em relação à meta.',
          'Toque em <b>Janela e intervalo</b>.',
          'Escolha a que horas seu dia de água começa e termina, e o intervalo entre avisos: 1 h, 1h30, 2 h ou 3 h.',
          'Toque em <b>Salvar</b>.',
        ],
        tip: 'Cada registro de água reinicia a contagem. Os avisos chegam pelo app do celular; na primeira vez, o Android pede permissão para notificações.',
      },
      'nutrition.supps': {
        title: 'Cadastre suplementos e horários',
        text: 'A aba Suplementos é a sua lista diária do que tomar.',
        how: [
          'Em <b>Adicionar suplemento</b>, digite o nome e a dose, ou toque numa das sugestões.',
          'Toque no horário, à direita do suplemento, para definir quando tomar.',
          'Escolha a hora, ou um dos atalhos, e toque em <b>Salvar horário</b>.',
          'Durante o dia, toque no círculo para marcar o que já tomou.',
        ],
        tip: 'Passada uma hora do horário sem marcar, o suplemento aparece como atrasado. Quem toma o mesmo suplemento mais de uma vez por dia pode cadastrá-lo duas vezes, uma para cada horário.',
      },
      'nutrition.suppsedit': {
        title: 'Lembretes de suplementos e edição da lista',
        text: 'Os avisos de suplementos seguem os horários que você definiu.',
        how: [
          'Ligue <b>Lembrar no horário</b> para receber um aviso na hora de cada suplemento.',
          'Ligue <b>Alertas de incentivo</b> para ser lembrado uma hora depois, se ainda não tiver marcado.',
          'Para tirar um suplemento da lista, toque em <b>Editar</b> e depois na lixeira.',
          'Toque em <b>Concluir</b>.',
        ],
        tip: 'Remover um suplemento não apaga o que você já marcou nos dias anteriores.',
      },

      'profile.overview': {
        title: 'Entenda a visão geral',
        text: 'O Perfil resume toda a sua história no app.',
        how: [
          'No topo estão seu nível e o XP que falta para o próximo. Toque no XP para ver como ele é calculado.',
          'Os contadores mostram treinos feitos, volume total levantado, tempo treinado e semanas seguidas.',
          '<b>Constância</b> mostra as últimas 12 semanas. Toque num dia para ver os detalhes.',
          '<b>Recordes pessoais</b> lista seus melhores exercícios, com o 1RM estimado.',
          'Mais abaixo ficam as conquistas e os atalhos para as telas de detalhe.',
        ],
        tip: 'Você ganha XP ao concluir treinos, bater recordes e desbloquear conquistas.',
      },
      'profile.muscles': {
        title: 'Veja quais músculos você mais treina',
        text: 'A tela Distribuição muscular mostra se o seu treino está equilibrado.',
        how: [
          'No Perfil, toque em <b>Distribuição muscular</b>.',
          'Escolha o período: 7, 30 ou 90 dias.',
          'O mapa do corpo pinta os grupos mais trabalhados. Alterne entre <b>Ambos</b>, <b>Frente</b> e <b>Costas</b>.',
          'A lista abaixo mostra as séries e a porcentagem de cada grupo.',
        ],
      },
      'profile.body': {
        title: 'Acompanhe o peso corporal',
        text: 'A tela Peso e medidas mostra a tendência do peso, sem os altos e baixos do dia a dia.',
        how: [
          'No Perfil, toque em <b>Peso e medidas</b>.',
          'Toque em <b>Registrar</b>, escolha a data e digite o peso. Os botões de −1 a +1 ajustam o valor.',
          'Toque em <b>Salvar peso</b>.',
          'Escolha o período do gráfico: 30, 90 ou 180 dias.',
          'Toque em <b>Editar altura</b> para corrigir a altura usada no IMC.',
        ],
        tip: 'O último peso registrado atualiza a meta de água recomendada e as metas da dieta.',
      },
      'profile.history': {
        title: 'Consulte o histórico de treinos',
        text: 'Cada treino finalizado fica guardado com todas as séries.',
        how: [
          'No Perfil, toque em <b>Histórico de treinos</b>.',
          'Use a busca para achar um treino ou um exercício.',
          'Cada sessão mostra duração, séries e volume. Toque em <b>Ver séries</b> para abrir carga e repetições de cada série.',
          'O ícone de compartilhar gera o card daquele treino.',
          'A lixeira exclui a sessão do histórico, depois de confirmar.',
        ],
      },
      'profile.medals': {
        title: 'Desbloqueie conquistas',
        text: 'São 16 conquistas, por treinos feitos, volume levantado, constância, recordes e hábitos.',
        how: [
          'No Perfil, toque em <b>Ver todas</b>, na seção Conquistas.',
          'Filtre por categoria: Treinos, Volume, Constância, Recordes ou Especiais.',
          'As conquistas coloridas já são suas. As demais mostram o progresso em porcentagem.',
          'Toque numa conquista para ver o que falta, a data em que foi desbloqueada e o XP que ela dá.',
        ],
      },
      'profile.month': {
        title: 'Compartilhe o resumo do mês',
        text: 'Cards com os números do seu mês: treinos, volume, sequência e recorde.',
        how: [
          'No topo do Perfil, toque no ícone de compartilhar.',
          'Deslize para escolher o card.',
          'Escolha o estilo: Cor, Escuro, Claro, Transparente ou Foto.',
          'Toque em <b>Compartilhar</b> ou salve a imagem.',
        ],
      },

      'settings.account': {
        title: 'Conta e backup na nuvem',
        text: 'Abra as Configurações pela engrenagem, no topo do Perfil. O grupo Conta cuida do seu backup.',
        how: [
          'Toque em <b>Entrar com o Google</b> para ligar o backup. Quem já entrou vê o nome da conta e o botão <b>Sair</b>.',
          'Toque em <b>Fazer agora</b> para salvar um backup na hora.',
          'Num celular novo, entre com a mesma conta e toque em <b>Restaurar da nuvem</b>.',
        ],
        tip: 'O backup é automático: acontece ao entrar e depois de cada treino. Restaurar substitui os dados deste aparelho pelos da nuvem.',
      },
      'settings.sheet': {
        title: 'Atualize a ficha do atleta',
        text: 'A ficha guarda as respostas do primeiro acesso. Ela personaliza os treinos, as metas da dieta e as respostas do Coach IA.',
        how: [
          'Em Configurações, toque em <b>Ficha do atleta</b>.',
          'Atualize sexo, idade, peso e altura.',
          'Mude objetivo, experiência, dias por semana, local de treino, dores e alimentação.',
          'Toque em <b>Salvar ficha</b>.',
        ],
        tip: 'No mesmo grupo, em Unidades, você troca entre quilos e libras.',
      },
      'settings.reminders': {
        title: 'Lembretes e horário de silêncio',
        text: 'O grupo Lembretes controla todos os avisos do app num lugar só.',
        how: [
          '<b>Receber lembretes</b> é a chave geral. Desligada, o Attos não envia nenhum aviso.',
          '<b>Água</b> e <b>Suplementos</b> abrem os ajustes de cada tipo de lembrete.',
          'Toque em <b>Horário de silêncio</b> e defina quando o app não deve avisar. O padrão é das 22:00 às 07:00.',
          'Toque em <b>Salvar</b>.',
        ],
        tip: 'O silêncio vale para os lembretes de água e para os alertas de incentivo. O horário que você marcar num suplemento é sempre respeitado.',
      },
      'settings.look': {
        title: 'Tema e idioma',
        text: 'No grupo Aparência e idioma você escolhe como o app aparece.',
        how: [
          'Em <b>Tema</b>, escolha <b>Sistema</b> para acompanhar o celular, ou fixe <b>Claro</b> ou <b>Escuro</b>.',
          'Toque em <b>Idioma</b>.',
          'Escolha <b>Idioma do aparelho</b>, <b>Português</b>, <b>Español</b> ou <b>English</b>. A troca é na hora.',
        ],
        tip: 'Treinos, alimentos e outros textos que você escreveu continuam como estão. Os exercícios do catálogo e os treinos sugeridos aparecem no idioma escolhido.',
      },
      'settings.delete': {
        title: 'Exclua sua conta e seus dados',
        text: 'Você pode apagar tudo o que o Attos guarda sobre você, quando quiser.',
        how: [
          'Em Configurações, role até o fim e toque em <b>Excluir conta e dados</b>.',
          'Leia o aviso: treinos, histórico de cargas, medidas e a cópia na nuvem são apagados para sempre.',
          'Toque em <b>Excluir definitivamente</b> para confirmar, ou em <b>Cancelar</b>.',
        ],
        tip: 'Não dá para desfazer. Se você assina o Attos PRO, cancele a assinatura no Google Play: excluir a conta não cancela a cobrança.',
      },

      'pro.plans': {
        title: 'Conheça e assine o Attos PRO',
        text: 'Registrar treinos continua grátis para sempre. O PRO libera o Coach IA sem limite de mensagens e a dieta ajustada pela IA.',
        how: [
          'Em Configurações, toque em <b>Conhecer o PRO</b>. A mesma tela abre quando você toca num recurso PRO.',
          'Compare as colunas <b>Grátis</b> e <b>PRO</b>.',
          'Escolha o plano <b>Anual</b> ou <b>Mensal</b>. O preço vem do Google Play.',
          'Toque em <b>Assinar o PRO</b> e conclua a compra no Google Play.',
          'Já assinou e trocou de celular? Toque em <b>Restaurar compra</b>.',
        ],
        tip: 'A assinatura renova automaticamente. Para cancelar, trocar a forma de pagamento ou pedir reembolso, use Gerenciar no Google Play.',
      },
    },
  },

  legal,
};
