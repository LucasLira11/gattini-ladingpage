import type { Tutorial } from "../types";

/**
 * Tutoriais do guia original, com o texto preservado exatamente como foi
 * aprovado. A marcação [[...]] apenas separa o que está escrito na tela do
 * aparelho do texto corrido.
 */
export const tutoriaisGuia: Tutorial[] = [
  {
    id: "tutorial-operadora",
    plataforma: "App da operadora",
    categoria: "rede",
    icone: "wifi",
    titulo: "App da operadora — pausar e agendar",
    resumo:
      "Faça este primeiro: são cinco minutos e já pode resolver. Se o seu app não tiver a opção, siga para a ficha seguinte.",
    antes: [
      "O app da operadora instalado e com login feito: Minha Vivo, Minha Claro, Meu Oi ou Meu TIM.",
      "Os aparelhos da criança ligados no Wi-Fi agora, para aparecerem na lista.",
    ],
    passos: [
      "Abra o app e procure a área do seu plano de internet fixa — costuma se chamar [[Minha internet]] ou [[Meu Wi-Fi]].",
      "Toque em [[Dispositivos conectados]]. Vai aparecer a lista de tudo que está usando o Wi-Fi da casa.",
      "Identifique o aparelho da criança. Se os nomes forem confusos, desligue o Wi-Fi do celular dela por um instante — o que sumir da lista é o dela. Renomeie para “Celular da Manu”, e você nunca mais vai precisar adivinhar.",
      "Toque no aparelho e procure [[Pausar internet]] ou [[Bloquear]]. Esse é o botão de emergência — o que serve para a hora do almoço e do dever de casa.",
      "Na mesma tela, procure [[Agendar]] ou [[Controle dos pais]] e defina a janela de bloqueio automático. Comece pelo horário de dormir: das **21h30 às 6h30**, todos os dias.",
      "Salve. A regra passa a valer na hora.",
    ],
    confirmar:
      "Dentro do horário bloqueado, o celular dela continua mostrando o Wi-Fi conectado, mas nenhum site ou app carrega. É o comportamento esperado — não é defeito.",
    limites: [
      "Dados móveis: o celular sai do Wi-Fi e continua navegando. Combine com a ficha do iPhone, do Android ou com o Qustodio.",
      "Conteúdo impróprio — a maioria dos apps de operadora só liga e desliga a internet, não filtra.",
    ],
  },
  {
    id: "tutorial-iphone",
    plataforma: "iPhone e iPad",
    categoria: "aparelhos",
    marca: "apple",
    destaque: "Mais usado pelos nossos clientes",
    titulo: "iPhone e iPad — Tempo de Uso",
    resumo:
      "Já está no aparelho, sem instalar nada. É aqui que o controle de horário e de tempo por app acontece.",
    antes: [
      "O iPhone da criança em mãos — ou, se ela estiver no seu Compartilhamento Familiar, dá para fazer tudo do seu próprio iPhone.",
      "Escolha um código de 4 dígitos **diferente** do código de desbloqueio do aparelho. É este passo que decide se o controle vai durar uma semana ou um ano.",
    ],
    passos: [
      "Abra [[Ajustes]] › [[Tempo de Uso]].",
      "Toque em [[Bloquear Ajustes do Tempo de Uso]] e crie o código. Guarde-o fora do alcance dela; sem isso, qualquer limite é desfeito em dez segundos.",
      "**Horário de dormir:** toque em [[Tempo Longe da Tela]], ligue a chave e defina início e fim — por exemplo, das 21h30 às 6h30.",
      "**Limite por aplicativo:** volte e toque em [[Limites de App]] › [[Adicionar Limite]]. Marque a categoria ([[Redes Sociais]], [[Jogos]]), toque em [[Avançar]] e defina a duração diária.",
      "Ainda na tela do limite, ligue [[Bloquear no Fim do Limite]]. Sem essa opção, o aviso é ignorado com um toque.",
      "**Sites adultos:** volte e toque em [[Restrições de Conteúdo e Privacidade]] › [[Restrições de Conteúdo]] › [[Conteúdo da Web]] › [[Limitar Sites Adultos]].",
      "**Travar instalação de apps:** em [[Restrições de Conteúdo e Privacidade]] › [[Compras na App Store]], defina [[Instalar Apps]] como [[Não Permitir]]. Isso também impede que ela instale um VPN para furar o filtro da rede.",
      "Em [[Sempre Permitidos]], garanta que Telefone e Mensagens continuem liberados durante o Tempo Longe da Tela.",
    ],
    confirmar:
      "Peça o aparelho emprestado dentro do horário bloqueado: os ícones ficam apagados, com uma ampulheta ao lado. Ao tocar, aparece a tela de limite pedindo o código.",
    limites: [
      "Se ela souber o código do Tempo de Uso, tudo cai. É o ponto de falha número um.",
      "Não cobre outros aparelhos da casa.",
    ],
    links: [{ label: "Apple para famílias", url: "https://www.apple.com/br/families/" }],
  },
  {
    id: "tutorial-mac",
    plataforma: "Mac",
    categoria: "aparelhos",
    marca: "apple",
    titulo: "Mac — Tempo de Uso",
    resumo:
      "A mesma lógica do iPhone, no computador. Se a criança já tem iPhone no Compartilhamento Familiar, os limites podem valer nos dois aparelhos somados.",
    antes: [
      "Uma conta de usuário separada no Mac para a criança, com o Apple ID dela — não o seu.",
      "O código de 4 dígitos do Tempo de Uso, diferente da senha do computador.",
    ],
    passos: [
      "Faça login na conta da criança e abra [[Ajustes do Sistema]] › [[Tempo de Uso]].",
      "Ligue [[Bloquear Ajustes do Tempo de Uso]] e crie o código.",
      "Se ela já usa iPhone com o mesmo Apple ID, ligue [[Compartilhar entre Dispositivos]] para que o tempo do celular e do computador contem juntos.",
      "**Horários:** em [[Tempo Longe da Tela]], defina a janela de bloqueio.",
      "**Tempo por programa:** em [[Limites de App]], toque em [[+]], marque a categoria ou o programa e defina a duração.",
      "**Sites:** em [[Restrições de Conteúdo e Privacidade]] › [[Restrições de Conteúdo]] › [[Acesso a Conteúdo da Web]], escolha [[Limitar Sites Adultos]] ou [[Apenas Sites Permitidos]].",
    ],
    confirmar:
      "Ao abrir um programa limitado depois do tempo, o Mac mostra uma tela cinza com o aviso de limite atingido e a opção de pedir mais tempo.",
    limites: ["Se ela usar a conta de administrador do Mac, pode desligar tudo."],
  },
  {
    id: "tutorial-android",
    plataforma: "Android",
    categoria: "aparelhos",
    marca: "android",
    titulo: "Android — Family Link",
    resumo:
      "Administrado pelo seu celular: limite diário, hora de dormir e aprovação de cada app novo.",
    antes: [
      "Os dois celulares em mãos na primeira configuração.",
      "A conta Google da criança. Se ela tiver menos de 13 anos, a conta precisa ser criada dentro do próprio Family Link.",
      "Reserve 20 minutos: a vinculação inicial é a parte mais demorada.",
    ],
    passos: [
      "No **seu** celular, instale o [[Family Link]] e entre com a sua conta Google.",
      "Toque em [[Adicionar]] e escolha adicionar um filho ao grupo familiar.",
      "No **celular dela**, siga as instruções que aparecem na tela do seu app: entrar com a conta da criança e conceder as permissões de gerenciamento. Aceite todas.",
      "De volta ao seu celular, abra o perfil dela e toque em [[Controles]].",
      "**Limite diário e hora de dormir:** em [[Limites de tempo de tela]], defina o total diário e o [[Horário de dormir]].",
      "**Limite por aplicativo:** em [[Limites de apps]], toque no aplicativo e defina o tempo diário — ou toque no cadeado para bloqueá-lo por completo.",
      "**Aprovar instalações:** em [[Filtros de conteúdo]] › [[Google Play]], exija aprovação para downloads e defina a classificação indicativa máxima.",
      "**Bloquear sites:** em [[Filtros de conteúdo]] › [[Google Chrome]], escolha [[Tentar bloquear sites explícitos]] — ou, para crianças menores, [[Permitir apenas sites aprovados]].",
      "Ative também a [[Pesquisa segura]] e o modo restrito do [[YouTube]].",
    ],
    confirmar:
      "Quando o limite diário acaba, a tela dela é bloqueada com o aviso de pausa. No seu celular, o painel passa a mostrar quanto tempo ela usou cada app hoje.",
    limites: [
      "O filtro de sites só vale no Chrome. Se ela instalar outro navegador, ele passa livre — por isso a aprovação de downloads é obrigatória aqui, não opcional.",
      "A partir dos 13 anos, o adolescente pode desvincular a conta sozinho; você recebe um aviso, mas não consegue impedir.",
    ],
    links: [
      { label: "Site oficial", url: "https://families.google/intl/pt-BR/familylink/" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=family%20link&c=apps" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=family%20link" },
    ],
  },
  {
    id: "tutorial-windows",
    plataforma: "Windows",
    categoria: "aparelhos",
    icone: "monitor",
    titulo: "Windows — Segurança da Família",
    resumo:
      "Limite de horas no computador, tempo por programa ou jogo e relatório semanal por e-mail.",
    antes: [
      "A criança precisa ter **a própria conta** no computador. Se ela usa o mesmo login que você, nada disso funciona — e é o passo que quase todo mundo pula.",
      "Uma conta Microsoft para você e outra para ela.",
    ],
    passos: [
      "No computador, abra [[Configurações]] › [[Contas]] › [[Família]] e toque em [[Adicionar alguém]].",
      "Escolha criar uma conta para uma criança e informe a data de nascimento real — é ela que define os filtros automáticos por idade.",
      "Peça para a criança fazer login com a conta nova ao menos uma vez. O computador só aparece no painel depois disso.",
      "No seu celular, abra o app [[Segurança da Família]] ou o site ((family.microsoft.com|https://family.microsoft.com)) e selecione o perfil dela.",
      "**Horários:** em [[Tempo de uso]] › [[Dispositivos]], ligue o limite e arraste as faixas de horário permitido.",
      "**Tempo por programa:** em [[Tempo de uso]] › [[Aplicativos e jogos]], escolha o programa e defina o limite diário.",
      "**Sites:** em [[Filtros de conteúdo]] › [[Web e pesquisa]], ligue o filtro e confirme que a opção de bloquear outros navegadores está ativa — o filtro só funciona no Edge.",
    ],
    confirmar:
      "Entre na conta dela fora do horário permitido: o Windows avisa que o tempo acabou e faz logoff. Ao tentar abrir o Chrome, aparece um aviso de app bloqueado com botão para pedir sua permissão.",
    limites: [
      "Se ela usar a sua conta de administrador, nada se aplica. Ponha senha na sua conta.",
      "Sem bloquear os outros navegadores, o filtro de sites é decorativo.",
    ],
    links: [
      { label: "Painel oficial", url: "https://family.microsoft.com" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/search?q=microsoft%20family%20safety&c=apps",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/br/search?term=microsoft%20family%20safety",
      },
    ],
  },
  {
    id: "tutorial-qustodio",
    plataforma: "Qustodio",
    categoria: "aparelhos",
    letra: "Q",
    titulo: "Qustodio — o painel único",
    resumo:
      "O mais completo da lista. Instala em cada aparelho da criança e funciona em qualquer rede, inclusive no 4G.",
    antes: [
      "Os aparelhos da criança em mãos, um de cada vez, com a senha de desbloqueio.",
      "Um e-mail seu para a conta de responsável.",
      "Reserve 15 minutos por aparelho. Faça com ela presente: o app é visível e ela vai perceber.",
    ],
    passos: [
      "No **seu** celular, instale o [[Qustodio]] e crie a conta como responsável. Escolha a opção de proteger o dispositivo de uma criança, não o seu.",
      "Cadastre o perfil do filho: nome, idade e foto. A idade define os filtros iniciais.",
      "No **aparelho dela**, instale o mesmo app e, ao abrir, escolha a opção de que é o dispositivo da criança. Entre com a sua conta e selecione o perfil que você acabou de criar.",
      "Conceda todas as permissões que o app pedir — acessibilidade, VPN, administrador de dispositivo. Sem elas o app não bloqueia nada; esse é o passo em que a maioria das pessoas desiste no meio.\n· No iPhone, ele vai pedir para instalar um perfil de configuração. Aceite e confirme em [[Ajustes]].",
      "De volta ao seu celular, abra o perfil dela e toque em [[Regras]].",
      "**Horários:** em [[Tempo de tela]], defina o limite diário e arraste as faixas de horário permitido em cada dia.",
      "**Tempo por aplicativo:** em [[Aplicativos]], toque no app e escolha entre permitir, limitar por tempo ou bloquear.",
      "**Sites:** em [[Navegação na web]], ligue as categorias que devem ser barradas e ative a opção de bloquear também sites não categorizados, se a criança for pequena.",
      "Ative o relatório semanal por e-mail. É o que transforma o app em assunto de conversa em vez de vigilância silenciosa.",
    ],
    confirmar:
      "No painel do seu celular, o aparelho dela aparece como [[Protegido]] e, depois de algumas horas, começa a mostrar o tempo gasto em cada app. Ao tentar abrir um site bloqueado, ela vê uma tela do Qustodio com botão para pedir sua liberação.",
    limites: [
      "Não cobre a TV nem o videogame — para esses, use a camada de Wi-Fi.",
      "No iPhone, o controle de apps é menos preciso do que no Android, por limitação da própria Apple.",
      "Um adolescente determinado consegue desinstalar; você recebe o alerta, mas a proteção cai até você reinstalar.",
    ],
    links: [
      { label: "Site oficial", url: "https://www.qustodio.com/pt/" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=qustodio" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=qustodio&c=apps" },
    ],
  },
  {
    id: "tutorial-tplink",
    plataforma: "TP-Link Deco",
    categoria: "rede",
    marca: "tplink",
    titulo: "TP-Link Deco — perfis por filho",
    resumo:
      "Troca o roteador da operadora. Depois de instalado, tudo se faz arrastando aparelhos para o perfil de cada filho.",
    antes: [
      "Um kit Deco. Dois aparelhos cobrem bem uma casa ou apartamento médio.",
      "Uma tomada livre perto do roteador atual e o cabo de rede que veio na caixa.",
      "Reserve meia hora e avise a casa: o Wi-Fi vai cair durante a troca, e a senha vai mudar.",
    ],
    intro:
      "A instalação é guiada por desenhos no próprio app — ele diz qual cabo vai onde. O que importa aqui é o que vem depois.",
    passos: [
      "Instale o app [[Deco]] pela loja de aplicativos e crie uma conta TP-Link.",
      "Siga o assistente de instalação até o Wi-Fi novo estar no ar. Guarde a senha nova em algum lugar — você vai reconectar todos os aparelhos da casa.",
      "Na tela inicial do app, toque em [[Mais]] › [[HomeShield]] › [[Controle dos Pais]].",
      "Toque em [[Criar perfil]], escreva o nome da criança e escolha a faixa etária. O filtro de conteúdo é definido automaticamente por essa escolha.",
      "Na lista de aparelhos, marque os que pertencem a ela — celular, tablet, videogame, a TV do quarto.",
      "Defina o [[Tempo online]]: quantas horas por dia, separando dia de semana e fim de semana.",
      "Defina o [[Horário de dormir]], quando a internet dela fica fora do ar independentemente do tempo restante.",
      "Se quiser mais rigor, entre em [[Filtro de conteúdo]] e ligue categorias extras — apostas, redes sociais, jogos.",
    ],
    confirmar:
      "A tela inicial do app passa a mostrar o perfil dela com o tempo usado hoje. Ao tentar abrir um site bloqueado no aparelho da criança, aparece uma página da TP-Link avisando do bloqueio.",
    limites: [
      "Nada disso vale no 4G nem fora de casa.",
      "Não limita tempo de um aplicativo específico — só o tempo total de internet do aparelho.",
      "O controle parental completo depende da assinatura HomeShield Pro; confira o que está incluso antes de comprar, porque a divisão entre grátis e pago muda de tempos em tempos.",
    ],
    links: [
      { label: "Site oficial", url: "https://www.tp-link.com/br/deco/" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=tp-link%20deco" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=tp-link%20deco&c=apps" },
    ],
  },
  {
    id: "tutorial-nextdns",
    plataforma: "NextDNS",
    categoria: "rede",
    marca: "nextdns",
    titulo: "NextDNS — filtro por categoria",
    resumo: "O filtro mais abrangente. Tem dois passos técnicos, mas você faz uma vez só e esquece.",
    antes: [
      "Um computador para a configuração inicial — o painel funciona melhor em tela grande.",
      "O painel do site é em inglês. Os nomes que você precisa estão escritos abaixo, em inglês, exatamente como aparecem.",
    ],
    passos: [
      "Acesse ((nextdns.io|https://nextdns.io)) e crie uma conta gratuita.",
      "Você verá um código de configuração de seis caracteres no topo — anote, é o identificador da sua casa.",
      "Abra a aba [[Parental Control]]. Ligue as chaves das categorias que quer bloquear: [[Porn]], [[Gambling]], [[Dating]] e, se fizer sentido, apps específicos como [[TikTok]] ou [[Instagram]].",
      "Ainda nessa aba, ligue [[SafeSearch]] e [[YouTube Restricted Mode]] — isso limpa os resultados de busca e o YouTube em todos os aparelhos de uma vez.",
      "**Para proteger a casa toda:** abra a aba [[Setup]], copie os dois endereços IPv4 mostrados ali e coloque-os como servidores DNS no seu roteador.\n· Se essa parte travar, pule: instale o app no aparelho da criança (passo seguinte) e você já resolve o essencial.",
      "**Para proteger o celular no 4G:** instale o app [[NextDNS]] no aparelho da criança, entre com a sua conta e toque em ativar. Ele passa a filtrar em qualquer rede.",
      "Volte à aba [[Logs]] depois de alguns dias para ver o que foi acessado e o que foi barrado.",
    ],
    confirmar:
      "Na aba [[Setup]], o topo da página passa a mostrar em verde que este dispositivo está usando a sua configuração. E qualquer site adulto deixa de abrir.",
    limites: [
      "Não controla tempo de uso — nem total, nem por aplicativo. Combine com a ficha do iPhone ou do Android.",
      "Um VPN instalado no celular passa por cima do filtro. Bloqueie a instalação de apps.",
      "Não filtra o que está dentro do TikTok ou do Discord, só o acesso ao app inteiro.",
    ],
    links: [
      { label: "Painel oficial", url: "https://nextdns.io" },
      { label: "App Store", url: "https://apps.apple.com/br/search?term=nextdns" },
      { label: "Google Play", url: "https://play.google.com/store/search?q=nextdns&c=apps" },
    ],
  },
  {
    id: "tutorial-youtube-netflix",
    plataforma: "YouTube e Netflix",
    categoria: "streaming",
    marca: "youtube",
    marcaSecundaria: "netflix",
    titulo: "Dentro dos apps — YouTube e Netflix",
    resumo:
      "Ajustes de dois minutos que evitam a maior parte das queixas de conteúdo, mesmo com todo o resto já configurado.",
    intro:
      "Os filtros de Wi-Fi e de aparelho não enxergam o que acontece dentro de um app já liberado. Estes dois concentram a maior parte do tempo de tela infantil.",
    passos: [
      "**YouTube, até 12 anos:** use o [[YouTube Kids]] em vez do YouTube comum. Na configuração, escolha a faixa etária e desligue [[Pesquisar]] — sem a busca, a criança fica restrita ao que foi curado.",
      "**YouTube, adolescentes:** toque na foto do perfil › [[Configurações]] › [[Geral]] e ligue o [[Modo restrito]].",
      "**Netflix:** em ((netflix.com/account|https://www.netflix.com/account)), escolha o perfil da criança e defina a [[Classificação indicativa]] máxima.",
      "Ative o [[PIN de perfil]] nos perfis dos adultos. Sem isso, a criança troca de perfil e assiste ao que quiser.",
    ],
    limites: [
      "Nenhum dos dois limita tempo — isso vem da camada do aparelho.",
      "O modo restrito do YouTube vale por app e por navegador: precisa ser ativado em cada lugar onde ela assiste.",
    ],
    links: [
      { label: "YouTube Kids", url: "https://www.youtubekids.com" },
      { label: "Conta Netflix", url: "https://www.netflix.com/account" },
    ],
  },
];
