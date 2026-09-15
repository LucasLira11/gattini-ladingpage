import type { Tutorial } from "../types";

/** Videogames, streaming e apps de entretenimento. */
export const tutoriaisPlataformas: Tutorial[] = [
  {
    id: "tutorial-playstation",
    plataforma: "PlayStation",
    categoria: "consoles",
    marca: "playstation",
    titulo: "PlayStation 5 — conta infantil e limite de jogo",
    resumo:
      "Tudo começa por criar uma conta de criança dentro da sua família. Sem isso, o console não tem a quem aplicar regra.",
    antes: [
      "Uma conta PlayStation Network adulta, que será a **gerente da família**. É a única que pode alterar as regras depois.",
      "A data de nascimento real da criança — é ela que define a classificação sugerida.",
      "Um código de 4 dígitos que você não use para mais nada; ele destrava as restrições do console.",
    ],
    passos: [
      "No console, vá em [[Configurações]] › [[Família e Controle dos Pais]] › [[Gerenciamento de Família]].",
      "Toque em [[Adicionar Membro da Família]] › [[Criar Usuário]] e cadastre a criança com a data de nascimento correta. O PlayStation já sugere restrições pela idade — aceite como ponto de partida e ajuste depois.",
      "**Tempo de jogo:** ainda no perfil dela, abra [[Tempo de Jogo]]. Defina o fuso, quantas horas por dia e a faixa de horário permitida. Em [[Quando o Tempo de Jogo Acabar]], escolha **Fazer logout do usuário** — a outra opção apenas avisa e pode ser ignorada.",
      "**Classificação de jogos:** em [[Restrições de Conteúdo]] › [[Jogos e Aplicativos]], escolha o nível por idade. Use a classificação indicativa brasileira como referência: 10, 12, 14, 16 ou 18 anos.",
      "**Conversa e conteúdo de outros jogadores:** em [[Comunicação e Conteúdo Gerado por Usuários]], bloqueie o chat de voz e texto com desconhecidos. É o ajuste que mais importa em jogos online.",
      "**Compras:** em [[Limite de Gastos Mensal]], defina o valor como **R$ 0** se ela não deve comprar nada sozinha. Cada compra passará a exigir sua liberação.",
      "**Navegador:** em [[Restrições de Conteúdo]], desligue o [[Navegador de Internet]] — ele abre qualquer site e passa por fora de qualquer filtro que você tenha no celular dela.",
      "Volte a [[Restrições do Console PS5]] e crie o código de 4 dígitos. Sem ele, qualquer pessoa entra nas configurações e desfaz tudo.",
    ],
    confirmar:
      "Entre com o perfil da criança depois do horário permitido: o console avisa que o tempo acabou e faz logout sozinho. Ao tentar abrir um jogo acima da classificação, aparece um pedido de código.",
    limites: [
      "Se a criança usar **o seu** perfil adulto, nada disso vale. Ponha senha de login no seu usuário.",
      "O limite de tempo é por perfil, não pelo console: um segundo usuário sem restrição continua jogando.",
      "Não filtra o que os outros jogadores falam dentro do jogo — só desliga os canais de conversa.",
    ],
    links: [
      {
        label: "Controle dos pais PlayStation",
        url: "https://www.playstation.com/pt-br/support/account/playstation-parental-controls/",
      },
    ],
  },
  {
    id: "tutorial-xbox",
    plataforma: "Xbox",
    categoria: "consoles",
    letra: "X",
    titulo: "Xbox — família, tempo de tela e privacidade",
    resumo:
      "O Xbox usa a mesma conta de família do Windows. Se você já configurou o computador, metade do caminho está feito.",
    antes: [
      "Uma conta Microsoft sua e outra para a criança. Se ela já tem conta no computador da casa, use a mesma.",
      "O app [[Segurança da Família]] no seu celular, ou o site ((family.microsoft.com|https://family.microsoft.com)) no computador.",
    ],
    intro:
      "Tudo pode ser feito pelo console, mas o painel no celular é mais confortável e permite ajustar de longe, sem tomar o controle da mão da criança.",
    passos: [
      "No console, entre com a **sua** conta e vá em [[Configurações]] › [[Conta]] › [[Família e Xbox network]].",
      "Escolha [[Adicionar à família]] e cadastre a conta da criança com a data de nascimento real. Se a conta ainda não existe, crie ali mesmo.",
      "Peça para ela entrar com a conta nova ao menos uma vez no console — só depois disso o aparelho aparece no seu painel.",
      "**Tempo de tela:** no app [[Segurança da Família]], abra o perfil dela › [[Tempo de uso]] e ligue o limite para o Xbox. Defina horas por dia e a faixa de horário, separando dias de semana e fim de semana.",
      "**Classificação de jogos:** em [[Filtros de conteúdo]] › [[Aplicativos, jogos e mídia]], escolha a idade. O Xbox passa a bloquear jogos acima disso e pede sua aprovação para liberar um específico.",
      "**Privacidade e conversa online:** no console, em [[Conta]] › [[Privacidade e segurança online]] › [[Privacidade do Xbox]], escolha o modelo por idade e depois ajuste em [[Exibir detalhes e personalizar]] quem pode mandar mensagem e convidar para jogar.",
      "**Compras:** no painel da família, ligue [[Peça para comprar]]. Toda compra passa a precisar da sua autorização, inclusive as feitas com saldo.",
      "Ligue o relatório semanal por e-mail. Ele mostra o que ela jogou e por quanto tempo — melhor material de conversa do que qualquer suspeita.",
    ],
    confirmar:
      "Quando o tempo acaba, o Xbox avisa na tela e desconecta o perfil dela. No seu celular chega uma notificação sempre que ela pede mais tempo ou tenta abrir algo bloqueado.",
    limites: [
      "Se ela jogar com a sua conta adulta, nenhuma regra se aplica.",
      "Os controles valem para a conta, não para o aparelho: num Xbox de amigo, com a mesma conta, os limites acompanham — mas com outra conta, não.",
      "A Microsoft vem unificando o antigo app Xbox Family Settings dentro do Segurança da Família. Se o seu celular ainda tiver os dois, use o Segurança da Família.",
    ],
    links: [
      { label: "Painel da família", url: "https://family.microsoft.com" },
      {
        label: "Suporte Xbox",
        url: "https://support.xbox.com/pt-BR/help/family-online-safety",
      },
    ],
  },
  {
    id: "tutorial-nintendo",
    plataforma: "Nintendo Switch",
    categoria: "consoles",
    marca: "nintendoswitch",
    titulo: "Nintendo Switch — controle pelo seu celular",
    resumo:
      "O console tem um app próprio de controle parental. É o mais simples dos três videogames e o que menos depende de senha no aparelho.",
    antes: [
      "O app [[Controle dos Pais do Nintendo Switch]] instalado no seu celular — é um app separado do Nintendo Switch Online.",
      "O console em mãos na primeira configuração, ligado na internet.",
      "Uma conta Nintendo sua para vincular.",
    ],
    passos: [
      "Instale o app no seu celular e entre com a sua conta Nintendo.",
      "No app, escolha vincular um console. Ele mostra um **código de registro** de seis dígitos.",
      "No console, vá em [[Configurações do Console]] › [[Controle dos Pais]] › [[Configurações de Controle dos Pais]] e digite o código que apareceu no celular.",
      "**Tempo de jogo:** no app, defina o limite diário. Ative [[Suspender Software]] para que o console realmente pause quando o tempo acabar — sem isso, ele só mostra um aviso na tela.",
      "Ajuste o [[Horário de Dormir]], a partir do qual o console não pode mais ser usado, mesmo que sobre tempo no dia.",
      "**Classificação indicativa:** em [[Nível de Restrição]], escolha a faixa etária. Dá para usar os níveis prontos (Criança, Pré-adolescente, Adolescente) ou personalizar jogo a jogo.",
      "**Comunicação e redes sociais:** ainda nas restrições, desligue [[Comunicação com Outros Usuários]] e [[Publicação em Redes Sociais]] para crianças menores.",
      "**Compras:** entre na conta Nintendo em ((accounts.nintendo.com|https://accounts.nintendo.com)) e, nas configurações da conta da criança, desative a compra na eShop ou exija sua senha.",
    ],
    confirmar:
      "Quando o tempo diário acaba, o jogo é suspenso e aparece um aviso na tela do console. No seu celular, o app passa a mostrar um resumo diário do que foi jogado e por quanto tempo.",
    limites: [
      "Um jogo já aberto antes do horário continua até o console suspender — pode haver alguns segundos de diferença.",
      "O console pode ser desvinculado se alguém souber o PIN do app. Guarde-o fora do alcance.",
      "Não cobre o que acontece em chats de voz de terceiros, como Discord no celular enquanto joga.",
    ],
    links: [
      {
        label: "Controle dos pais Nintendo",
        url: "https://www.nintendo.com/pt-br/switch/parental-controls/",
      },
    ],
  },
  {
    id: "tutorial-disney",
    plataforma: "Disney+",
    categoria: "streaming",
    letra: "D+",
    titulo: "Disney+ — perfil infantil e PIN",
    resumo:
      "O catálogo mistura desenho infantil e série adulta na mesma conta. O perfil certo resolve quase tudo.",
    antes: [
      "Acesso à conta pelo navegador ou pelo app, entrando como o perfil principal.",
      "Um PIN de 4 dígitos que a criança não conheça.",
    ],
    passos: [
      "Abra [[Editar Perfis]] e escolha o perfil da criança — ou crie um novo com o nome dela.",
      "Ligue a opção [[Perfil Infantil]]. A interface inteira muda: some o catálogo adulto e entra uma tela simplificada.",
      "Se ela já for maior e o perfil infantil for restritivo demais, deixe o perfil normal e ajuste a [[Classificação Indicativa]] para a idade dela.",
      "Ligue o [[Bloqueio de Perfil]] e crie um PIN — isso impede que ela simplesmente troque para o perfil de um adulto.",
      "Nos perfis dos adultos da casa, ligue o PIN também. É o passo que a maioria esquece, e é o que realmente fecha a porta.",
      "Em [[Acesso de Perfil]], desative a criação de novos perfis sem senha.",
      "Nas configurações da conta, desligue a [[Reprodução Automática]] no perfil dela: sem isso, um episódio puxa o próximo indefinidamente.",
    ],
    confirmar:
      "Saia e entre de novo no app: o perfil da criança abre direto na tela infantil, e tentar entrar em um perfil adulto pede o PIN.",
    limites: [
      "A classificação é por perfil, não por conta. Um perfil novo nasce sem restrição.",
      "Não há limite de tempo de tela — isso vem da camada do aparelho, no iPhone ou no Android.",
    ],
    links: [{ label: "Conta Disney+", url: "https://www.disneyplus.com/pt-br" }],
  },
  {
    id: "tutorial-primevideo",
    plataforma: "Prime Video",
    categoria: "streaming",
    marca: "primevideo",
    titulo: "Prime Video — PIN e restrição por idade",
    resumo:
      "O ponto de atenção aqui é a compra: o Prime Video vende e aluga filmes com um toque, dentro do próprio app.",
    antes: [
      "A conta Amazon aberta no navegador — algumas dessas opções não aparecem no app da TV.",
      "Um PIN de 5 dígitos, que o Prime Video usa tanto para conteúdo quanto para compra.",
    ],
    passos: [
      "Entre em ((primevideo.com|https://www.primevideo.com)) › [[Configurações]] › [[Controles dos Pais]].",
      "Crie o [[PIN do Prime Video]] de 5 dígitos. Anote em local seguro: ele também é pedido para confirmar compras.",
      "Em [[Restrições de visualização]], escolha a faixa etária que deve pedir PIN. Marque todas as idades acima da idade da criança.",
      "Logo abaixo, marque **todos os dispositivos da casa** onde a restrição deve valer — TV, celular, tablet, videogame. Esse é o passo que costuma ficar pela metade: a regra vale só nos aparelhos marcados.",
      "Crie um [[Perfil Infantil]] para ela: além de filtrar, ele tira da tela as fileiras de conteúdo adulto.",
      "Em [[Configurações de compra]], exija o PIN para compras e aluguéis. Sem isso, um filme é alugado em dois toques pelo controle da TV.",
      "Desligue a [[Reprodução automática do próximo episódio]] no perfil dela.",
    ],
    confirmar:
      "Abra um título com classificação acima do limite: o app pede o PIN antes de reproduzir. Tente alugar um filme: ele também pede o PIN.",
    limites: [
      "Marcar a restrição e esquecer de marcar os aparelhos é o erro mais comum — confira a lista de dispositivos.",
      "O Prime Video não limita tempo de uso.",
      "Canais contratados dentro do Prime (add-ons) seguem a mesma restrição, mas confira caso a caso.",
    ],
    links: [{ label: "Configurações Prime Video", url: "https://www.primevideo.com" }],
  },
  {
    id: "tutorial-max",
    plataforma: "HBO Max",
    categoria: "streaming",
    marca: "max",
    titulo: "HBO Max — perfil infantil e bloqueio",
    resumo:
      "Aparece como HBO Max ou Max, dependendo da versão do app. O caminho é o mesmo nos dois.",
    antes: [
      "A conta aberta no navegador ou no app, no perfil principal.",
      "Um PIN de 4 dígitos.",
    ],
    passos: [
      "Abra o menu do seu perfil › [[Configurações]] › [[Perfis]] › [[Gerenciar perfis]].",
      "Crie um perfil para a criança marcando [[É uma criança]] e informando a data de nascimento. A interface fica simplificada e o catálogo, filtrado.",
      "Se preferir um perfil comum, ajuste a [[Classificação indicativa]] no perfil dela para a faixa etária correta.",
      "Ligue o [[PIN do perfil]] nos perfis dos adultos, para que ela não troque de perfil sozinha.",
      "Em [[Configurações]] › [[Reprodução]], desligue a reprodução automática e a prévia automática no perfil infantil.",
      "Se a assinatura foi feita por dentro de outra plataforma (operadora, Prime Video, Apple), lembre que a cobrança e alguns controles ficam lá — mas o perfil infantil continua sendo criado aqui.",
    ],
    confirmar:
      "No perfil da criança, o catálogo passa a mostrar só títulos dentro da faixa etária, e voltar para um perfil adulto pede o PIN.",
    limites: [
      "Sem PIN nos perfis adultos, o perfil infantil é apenas uma sugestão.",
      "Não há controle de tempo de tela dentro do app.",
    ],
    links: [{ label: "HBO Max", url: "https://www.hbomax.com" }],
  },
  {
    id: "tutorial-globoplay",
    plataforma: "Globoplay",
    categoria: "streaming",
    letra: "GP",
    titulo: "Globoplay — classificação e perfil Kids",
    resumo:
      "Mistura novela, jornalismo e conteúdo infantil no mesmo lugar, então o perfil separado faz bastante diferença.",
    antes: ["A conta aberta no app ou no site.", "Uma senha de 4 dígitos para o controle dos pais."],
    passos: [
      "Abra o menu › [[Perfis]] e crie um perfil para a criança marcando a opção [[Kids]] ou informando a idade.",
      "Vá em [[Configurações]] › [[Controle dos pais]] e crie a senha numérica.",
      "Defina a [[Classificação indicativa]] máxima liberada sem senha — livre, 10, 12, 14, 16 ou 18 anos.",
      "Marque a opção de exigir a senha para **trocar de perfil**. Sem isso, ela volta ao perfil adulto em um toque.",
      "Nas configurações do perfil infantil, desligue a reprodução automática.",
      "Se a casa assiste por uma TV com login compartilhado, repita a configuração naquele aparelho: o controle é por aparelho e por perfil.",
    ],
    confirmar:
      "No perfil Kids, o app abre com o catálogo infantil e pede a senha ao tentar sair dele ou abrir um título acima da classificação.",
    limites: [
      "O conteúdo ao vivo (transmissão da TV aberta) nem sempre respeita a classificação do perfil.",
      "Não limita tempo de uso.",
    ],
    links: [{ label: "Globoplay", url: "https://globoplay.globo.com" }],
  },
  {
    id: "tutorial-roblox",
    plataforma: "Roblox",
    categoria: "streaming",
    marca: "roblox",
    titulo: "Roblox — idade, conversa e gastos",
    resumo:
      "É o app onde mais aparecem queixas de contato com estranhos. Vale gastar dez minutos aqui, mesmo que tudo o mais já esteja configurado.",
    antes: [
      "A conta da criança aberta, com a **data de nascimento correta** — é ela que libera ou trava a maior parte das proteções.",
      "Um PIN de 4 dígitos para os pais, diferente da senha da conta.",
      "Seu e-mail cadastrado como responsável na conta dela.",
    ],
    intro:
      "Se a conta foi criada com uma idade acima da real, corrija antes de tudo: com idade de adulto, o Roblox libera chat aberto e conteúdo que você não vai conseguir bloquear depois.",
    passos: [
      "Entre na conta dela › [[Configurações]] › [[Controles dos Pais]] e cadastre o seu e-mail como responsável.",
      "Crie o [[PIN dos Pais]]. Ele tranca todas as configurações abaixo — sem ele, a criança desfaz tudo em um minuto.",
      "Ligue [[Permitir apenas conteúdo adequado à idade]] e escolha o nível. O Roblox passa a esconder experiências acima da faixa.",
      "**Conversa:** em [[Privacidade]], defina quem pode conversar com ela. Para crianças menores, escolha **Ninguém** no chat e nas mensagens; para adolescentes, **Amigos**.",
      "Ainda em [[Privacidade]], limite quem pode convidá-la para experiências privadas e quem pode encontrá-la por busca.",
      "**Gastos:** em [[Controles dos Pais]], defina um limite mensal de gastos em Robux — ou zere. Retire também qualquer cartão salvo na conta.",
      "**Tempo:** ligue o limite diário de tempo de tela dentro dos controles dos pais. Ele funciona junto com o limite do celular, não no lugar dele.",
      "Por fim, revise a lista de amigos com ela. É a conversa mais útil de todas: quem é cada pessoa dali e de onde ela conhece.",
    ],
    confirmar:
      "Saia e entre de novo na conta: as opções de chat aparecem desativadas e com um cadeado, e entrar nas configurações pede o PIN.",
    limites: [
      "Se a data de nascimento estiver errada, boa parte das proteções nem aparece na tela.",
      "O chat de voz de terceiros (Discord, por exemplo) fica fora disso — é outro app, com outra configuração.",
      "Filtros de texto não pegam tudo: combine com a conversa sobre o que fazer se alguém pedir dados ou fotos.",
    ],
    links: [
      { label: "Controles dos pais Roblox", url: "https://en.help.roblox.com/hc/pt-br" },
    ],
  },
  {
    id: "tutorial-tiktok",
    plataforma: "TikTok",
    categoria: "streaming",
    marca: "tiktok",
    titulo: "TikTok — Sincronização Familiar",
    resumo:
      "Dá para vincular a conta do adolescente à sua e administrar de longe, sem precisar do celular dele toda vez.",
    antes: [
      "Os dois celulares em mãos na primeira vez, com o app instalado nos dois.",
      "A conversa feita antes: a sincronização é visível no app dele e funciona muito melhor quando é combinada.",
    ],
    passos: [
      "No **seu** celular, abra o TikTok › [[Perfil]] › menu (três traços) › [[Configurações e privacidade]] › [[Sincronização Familiar]].",
      "Escolha [[Responsável]]. O app mostra um QR Code.",
      "No **celular dele**, siga o mesmo caminho e escolha [[Adolescente]]. Leia o QR Code da sua tela e confirme a vinculação nos dois aparelhos.",
      "**Tempo de tela:** no seu app, defina o limite diário e os horários de pausa. Dá para deixar diferente em dias de semana e fim de semana.",
      "**Conteúdo:** ligue o [[Modo restrito]], que filtra o que não é adequado para menores no feed.",
      "**Mensagens diretas:** limite quem pode mandar mensagem, ou desligue as mensagens diretas por completo. Para menores de 16 anos o TikTok já desativa por padrão — confirme se está assim.",
      "Em [[Privacidade]], deixe a conta como **privada** e limite quem pode comentar, fazer dueto e baixar os vídeos dele.",
      "Ligue os [[Filtros de palavras-chave]] para esconder temas que você não quer que apareçam no feed.",
    ],
    confirmar:
      "No app dele aparece um aviso de que a conta está sincronizada com a sua, e as configurações que você travou ficam com um cadeado, sem permitir alteração.",
    limites: [
      "Ele pode desfazer a sincronização — você é avisado, mas não impedido.",
      "Uma segunda conta, criada com outro e-mail, fica fora da sincronização. Bloquear a instalação de apps no celular ajuda aqui.",
      "O modo restrito reduz, mas não elimina, o conteúdo impróprio.",
    ],
    links: [
      {
        label: "Sincronização Familiar",
        url: "https://www.tiktok.com/safety/pt-br/guardians-guide/",
      },
    ],
  },
];
