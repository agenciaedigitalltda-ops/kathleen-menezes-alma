/* =====================================================================
   CONFIGURAÇÃO — KATHLEEN MENEZES (ALMA) — edite SOMENTE este arquivo (e o topo do Code.gs)
   ---------------------------------------------------------------------
   Tudo que está vazio ("") precisa ser preenchido.
   Enquanto estiver vazio, a parte correspondente fica DESLIGADA:
     - metaPixelId vazio      → Pixel não carrega
     - appsScriptUrl vazio    → nada é enviado (o payload aparece no console)
     - whatsapp vazio         → botões de WhatsApp ficam ocultos
     - logoUrl vazio          → aparece um monograma com as iniciais do nome
   ===================================================================== */

window.APP_CONFIG = {

  /* ---------- Dados da fotógrafa ---------- */
  negocio: {
    nome: "Kathleen Menezes",
    responsavel: "Kathleen",
    whatsapp: "",        // só números com DDD — PREENCHER
    logoUrl: "assets/logo.png",
    logoAltura: 46,      // logo horizontal (altura em px)
    nomeNaLogo: true,    // a logo já tem o nome escrito
    descricao: ""
  },

  /* ---------- Fotos do carrossel (vitrine) ---------- */
  apresentacao: {
    titulo: "Sobre o meu trabalho",
    texto: "",
    fotos: [
      { src: "assets/fotos/carrossel/01.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/02.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/03.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/04.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/05.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/06.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/07.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/08.jpg?v=202611121700" },
      { src: "assets/fotos/carrossel/09.jpg?v=202611121700" }
    ],
    fotosNoFormulario: false
  },

  ensaiosAtivos: ["gestante"],

  /* ---------- Integrações ---------- */
  integracoes: {
    appsScriptUrl: "",   // URL do App da Web (termina em /exec) — PREENCHER
    metaPixelId: ""      // só os números do Pixel — PREENCHER
  },

  pixel: {
    eventoCadastro: "CadastroIniciado"   // evento customizado após nome + WhatsApp
  },

  /* ---------- Cores e fontes: PRETO E BRANCO ---------- */
  tema: {
    fundoCentro: "#1B1B1B",   // grafite (centro)
    fundoBordas: "#000000",   // preto (bordas)
    texto: "#F5F5F5",         // branco
    destaque: "#D9D9D9",      // cinza claro: subtítulos, opção marcada, progresso
    botao1: "#FFFFFF",        // botão branco
    botao2: "#E4E4E4",
    textoBotao: "#0A0A0A",    // texto do botão (preto)
    erro: "#FF9A9A",          // mensagens de erro
    fonteTitulos: "Playfair Display",
    fonteTexto: "Manrope",
    titulosMaiusculos: false,
    brilhoBotao: true,
    blocos: "#262626",        // fundo das opções e caixas
    linhas: "#4A4A4A",        // bordas e linhas finas
    claro: false
  },

  /* ---------- Página inicial (desligada: o link abre direto o formulário) ---------- */
  home: {
    ativa: false,
    fotosHero: [],
    selo: "Ensaio gestante",
    titulo: "ALMA",
    chamada: "",
    botao: "Quero saber valores e datas",
    linkWhatsapp: "ou fale direto no WhatsApp",
    mostrarOpcoes: false,
    subtitulo: "Como você prefere começar?",
    mensagemWhatsapp: "Oi, Kathleen! Vim pela sua página e queria saber mais sobre o ensaio ALMA.",
    cardWhatsapp: {
      etiqueta: "Prefere conversar?",
      titulo: "Falar direto no WhatsApp",
      texto: "Tire suas dúvidas agora mesmo."
    }
  },

  /* ---------- Página de venda (index.html): abertura, faixa, apresentação, carrossel e WhatsApp ---------- */
  venda: {
    revisao: true,   // enquanto não houver WhatsApp, os botões aparecem mas não abrem nada (para a cliente revisar)
    tituloAba: "Kathleen Menezes · ALMA",
    botao: "Quero essa experiência",
    botaoFlutuante: "Solicitar orçamento",
    mensagemWhatsapp: "Oi, Kathleen! Vim pelo site e quero viver a experiência ALMA. Gostaria de solicitar um orçamento.",
    faixa: ["Ensaio gestante", "ALMA", "Kathleen Menezes"],   // frases que passam na faixa
    fotografa: {
      foto: "",   // ex.: "assets/fotos/kathleen.jpg" — vazio = aparece um espaço reservado
      selo: "Quem vai te fotografar",
      titulo: "Prazer, eu sou a Kathleen",
      texto: "Sou fotógrafa de gestantes. O ALMA nasceu para registrar a mulher que gera uma vida: com direção leve, sensibilidade e todo o cuidado que esse momento merece."   // EDITAR: breve apresentação
    },
    carrossel: { selo: "ALMA", titulo: "Um pouco do nosso trabalho", segundos: 3.5 },
    /* RASCUNHOS — conferir e ajustar com a Kathleen */
    comoFunciona: {
      selo: "Como funciona",
      titulo: "Do primeiro contato às suas fotos",
      passos: [
        { titulo: "Você chama no WhatsApp", texto: "Conta com quantas semanas está e eu envio valores e datas disponíveis." },
        { titulo: "A gente combina os detalhes", texto: "Escolhemos a data e conversamos sobre looks e referências para o ensaio ter a sua cara." },
        { titulo: "Ensaio e entrega das fotos", texto: "No dia, eu te oriento do começo ao fim. Depois, você recebe as fotos editadas." }
      ],
      incluso: {
        titulo: "O que está incluso",
        itens: ["Direção de poses durante todo o ensaio", "Fotos tratadas e editadas", "Orientação sobre looks e referências"]
      }
    },
    prova: {   // prints de depoimentos: coloque os arquivos em assets/fotos/provas/ e liste aqui. Vazio = espaço reservado (só aparece no modo revisão)
      selo: "Depoimentos",
      titulo: "Quem já viveu o ALMA",
      imagens: []   // ex.: ["assets/fotos/provas/01.jpg", "assets/fotos/provas/02.jpg"]
    },
    faq: {
      selo: "Dúvidas",
      titulo: "Perguntas frequentes",
      itens: [
        { p: "Com quantas semanas posso fazer o ensaio?", r: "Em geral, entre a 28ª e a 36ª semana, quando a barriga está mais marcada. Me chama e a gente escolhe a melhor data para você." },
        { p: "Nunca fiz um ensaio, preciso saber posar?", r: "Não precisa. Eu te oriento durante todo o ensaio, do começo ao fim." },
        { p: "Posso levar meu parceiro ou outros filhos?", r: "Pode, se você quiser. É só me avisar antes para eu organizar o ensaio." }
      ]
    },
    fim: { titulo: "Vamos registrar a sua história?", texto: "Me chama no WhatsApp e eu te envio valores e datas disponíveis." }
  },

  /* ---------- Formulário ---------- */
  formularios: {

    gestante: {
      nome: "ALMA",   // nome do ensaio — também é o nome da aba na planilha
      pagina: "gestante.html",
      card: {
        etiqueta: "ALMA",
        titulo: "Quero saber valores e datas",
        texto: "Responda algumas perguntas rápidas e receba tudo no seu WhatsApp.",
        tempo: "1 min"
      },
      boasVindas: {
        titulo: "Tão extraordinária quanto a vida que nasce é a mulher que a gera.",
        assinatura: "",
        texto: "Ensaio gestante",
        botao: "Começar",
        fotoCentral: { src: "assets/fotos/capa.jpg?v=202611121700", foco: "50% 30%" },
        fotosLaterais: [],
        tempo: "Responda em 1 minuto e receba valores e datas no seu WhatsApp"
      },
      /* Modo vitrine (sem perguntas, só carrossel + botão do WhatsApp pulsante):
         descomente o bloco abaixo e preencha o WhatsApp em negocio.whatsapp.
      soVitrine: {
        titulo: "ALMA",
        texto: "Tão extraordinária quanto a vida que nasce é a mulher que a gera.",
        botao: "Quero saber valores e datas",
        mensagemWhatsapp: "Oi, Kathleen! Vim pelo anúncio e queria saber valores e datas do ensaio ALMA.",
        segundos: 2, formato: "2/3", tamanho: 0.7, fotos: []
      },
      */
      perguntaNome: "Antes de tudo, como você se chama?",
      perguntaWhatsapp: "Que bom te ver por aqui, {nome}! Qual o seu WhatsApp?",
      ajudaWhatsapp: "É por lá que você vai receber os valores e as datas.",
      perguntas: [
        {
          id: "semanas", coluna: "Semanas de gestação", tipo: "escolha", obrigatorio: true,
          titulo: "Com quantas semanas você está?",
          opcoes: ["Até 24 semanas", "De 25 a 29 semanas", "De 30 a 34 semanas", "35 semanas ou mais"]
        },
        {
          id: "vitrine", tipo: "galeria",
          titulo: "Veja um pouco do nosso trabalho",
          botao: "É isso que eu quero!",
          segundos: 2,
          formato: "2/3",
          tamanho: 0.7,
          fotos: []
        },
        {
          id: "momento", coluna: "Momento de decisão", tipo: "escolha", obrigatorio: true,
          titulo: "Em que momento você está?",
          opcoes: ["Quero agendar logo", "Estou comparando fotógrafos", "Só pesquisando valores por enquanto"]
        }
      ],
      final: {
        titulo: "Recebi tudo, {nome}!",
        texto: "Em breve você recebe no WhatsApp os valores e as datas disponíveis para o seu ensaio. Se quiser adiantar a conversa, é só tocar no botão abaixo.",
        botao: "Falar no WhatsApp agora",
        mensagemWhatsapp: "Oi, Kathleen! Sou {nome}, acabei de responder o formulário do ensaio ALMA."
      }
    }
  }
};
