interface Poem {
  id: number;
  title: string;
  content: string;
  // date: string;
  preview: string;
  tags: string[];
}
export const poems: Poem[] = [
  {
    id: 1,
    title: "Possibilities",
    content: `Coração acelera igual motor de carro,
Cê me deixa louco a cada batida,
Cada momento junto parece raro,
Então não me deixe ir nem dê partida.
Vamo pra longe desse mundo,
Acelerar pra longe desses problemas,
Tudo que soa negativo deixa no mudo
Que "paz e amor" vire nosso lema.`,
    // date: "25 de Maio, 2020",
    preview:
      "Coração acelera igual motor de carro, Cê me deixa louco a cada batida...",
    tags: ["amor", "romance", "esperança"],
  },
  {
    id: 2,
    title: "Remorso",
    content: `E quando não tem mais tempo pro arrependimento,
O remorso é o pior sentimento,
Não consigo mais pedir desculpas,
Foi alguns segundos de pura loucura.
Isso dói na alma, eu lamento,
Esta dor não alivia o cruel sofrimento.
Nem mesmo o tempo...`,
    // date: "27 de Setembro, 2020",
    preview: "E quando não tem mais tempo pro arrependimento...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 3,
    title: "Plural",
    content: `Moça, você é radiante
seus sorrisos colorem suas cicatrizes,
Numa dança de cores que desafia o destino.
Não é engano, é autenticidade em cada riso,
A luz que irradia em ti ilumina os caminhos sombrios.

Não te deixes definir por padrões estreitos,
Tua beleza reside na singularidade que carregas.
Deixe para trás quem não te faz bem,
Não te diluas para caber em moldes alheios.

Nos seus traços, o mundo encontra poesia,
Cada marca, cada lágrima, compõe tua melodia.
Com graça e coragem, enfrentas as tempestades
Que sua jornada seja tecida com fios de esperança,
E que seu sorriso seja sempre tua mais bela dança.`,
    // date: "22 de Fevereiro, 2024",
    preview: "Moça, você é radiante seus sorrisos colorem suas cicatrizes...",
    tags: ["autoestima", "empoderamento", "beleza"],
  },
  {
    id: 4,
    title: "Sdds",
    content: `Também estou com saudades,
Sinto culpa...
Me desculpa!

Não consigo seguir em frente,
Sinto falta do seu corpo quente.
Se foi um pedaço da minha alma...
Se foram os lábios que me traziam calma...

Não sei viver assim,
Com você longe de mim.
Estamos olhando o mesmo céu,
Estou olhando a lua que você me prometeu.
Ainda tem as mesmas estrelas.

Eu vou dormir, talvez em meus sonhos você esteja lá.
E se for voltar,
Me fala que horas vai chegar,
E ficar...
Pra sempre.

Eu não quero que cê vá.`,
    // date: "20 de Junho, 2021",
    preview: "Também estou com saudades, Sinto culpa......",
    tags: ["saudade", "amor", "distância"],
  },
  {
    id: 5,
    title: "Túlipas",
    content: `Hoje ganhei flores do meu amor,
As melhores túlipas da lojinha.
Recebi uma carta do meu amor,
Falando o quanto que sou linda.
Veio até mim mostrando que o amor não morreu,
É tanto afeto desse meu Romeu,
Não merecia mas o universo deu.
Olha só você tão feliz em me ver
E seus olhos brilhando enquanto olha para mim,
Só você me deixa assim,
Embrulha meu estômago quando você sorri.
Me trouxe amor, paz e túlipas vermelhas
Arrumou a mesa, colocou taças e
fizemos um jantar a luz de velas.
Me fez rir, cantar e dançar,
Ouvimos 'Wallows' a noite toda.
O mal da noite é que ela acaba...
Vamos pela estrada dessa cidade
Acelerando eu e você,
Que se dane todo mundo!
Eu amo o clichê.`,
    // date: "3 de Agosto, 2021",
    preview: "Hoje ganhei flores do meu amor...",
    tags: ["amor", "romance", "felicidade"],
  },
  {
    id: 6,
    title: "Sussano",
    content: `Olho ao redor querendo não acreditar,
Transtorno na mente
Transformo em escritas.
Passo horas tentando escrever
A noite chega a eu não consigo descrever
Destroços na mente, caminhos fácies me fez corromper.
Perdi a sensibilidade, me sinto vazio novamente
Não há mais verdade, sombrio e sem saída
Porque a briga? Tanta pressão e pressa.
Cresci acreditando no amor
Amadureci e vi que era apenas utopia,
Tantos anos que minha vida é guerra
Que acredito que a paz é uma mentira.
Quando minha alma desvanecer
Enfim vou poder sorrir,
Sei que não vai agradar a todos,
Então me desculpe por partir.`,
    // date: "11 de Setembro, 2022",
    preview:
      "Olho ao redor querendo não acreditar, Transtorno na mente, Transformo em escritas....",
    tags: ["dor"],
  },
  {
    id: 7,
    title: "Cousin",
    content: `Precisei falar sobre você...
Porque ainda dói depois de tanto tempo
Porque nunca disse o que meu coração quer te dizer agora.
E você não pode me ouvir, nem ler, nem nada...
Eu sinto tanto sua falta,
Encontrei um jeito de não sofrer tanto.
Lutei contra meus pensamentos,
E por mais que tenha sido levado pelos momentos hoje eu não quero mais ir embora,
Eu sei que tem pessoas que precisam de mim.
Meu irmão, hoje seria seu dia.
A gente iria comprar aquele lanche que você gosta, que nem da última vez.
Difícil me abrir, sabe...
Mas aqui estou depois de tanto tempo,
Eu só queria voltar no tempo
Pra poder reviver os momentos
Mas você se foi,
e sei que não vai mais voltar.
E mesmo que tudo tenha passado eu não sei onde estou,
Sem você aqui pra me abraçar.
Sinto sua falta.`,
    // date: "2 de Novembro, 2022",
    preview:
      "Precisei falar sobre você..., Porque ainda dói depois de tanto tempo...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 8,
    title: "Curto",
    content: `Seu amor por mim se apagou tão rápido,
Como borracha apaga rabiscos de um lápis no papel.
Você se foi, mas as marcas ficaram...`,
    // date: "29 de Novembro, 2022",
    preview: "Seu amor por mim se apagou tão rápido...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 9,
    title: "Faded poet",
    content: `Não consulte o poeta sanguíneo, pois ele tem uma visão rósea de tudo. Ele vê na lepra apenas a beleza de sua neve; ele olha para o lago verde e não vê nada ali além de algum indício de verdura. Não consulte o pessimista sombrio, pois ao meio-dia ele não vê nada além de uma variedade de meia-noite, e em toda a beleza do verão ele não vê nada além de uma tentativa de escapar da tristeza do inverno.

Sem meio termo, ainda vale o poeta moribundo, que ouve os segredos das flores. Ele escreve com tinta sua melancolia; de alma vazia, enche o papel até transbordar.`,
    // date: "27 de Março, 2024",
    preview:
      "Não consulte o poeta sanguíneo, pois ele tem uma visão rósea de tudo...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 10,
    title: "O Preço do Amor Não Vendido",
    content: `A pele desfalece com o tempo,
E o talento, ao esquecimento, enferruja.
Ficou com quem não te deu o coração,
Enquanto o "amor" criava rugas.
Até às mentiras viraram poesia,
De quem queria um pedaço para degustar.
No fim, ficou você sozinha
E uma história para aturar.
Existe preço na exclusividade,
Que o dinheiro não pode comprar.
Existe um apreço verdadeiro,
Além dessa tela nua e crua.
É tinta de ódio ou remorso?
Escolha a tela que quer pintar.
Amaldiçoada bela flor,
Como ousaram te machucar?
Como puderam te tocar?
Afliges-te nas páginas destes livros,
Desejando a cada linha,
Da rima à poesia,
Que o amor verdadeiro seja real.`,
    // date: "29 de Março, 2024",
    preview:
      "A pele desfalece com o tempo, E o talento, ao esquecimento, enferruja....",
    tags: ["reflexão"],
  },
  {
    id: 11,
    title: "Asas Cansadas",
    content: `Me perguntam como me sinto...
Sinceramente? Eu não sinto.
Não há espaço para sorrisos,
tampouco tempo para lágrimas.
Corro, mas não chego a lugar algum.
Bebo, mas a sede me acompanha.
Como, e a fome persiste.
Durmo, e ainda assim, estou exausto.

Ao meu redor, o mundo gira,
todos seguem em frente,
mas eu?
Eu permaneço.
Tudo muda,
todos se movem,
e eu? Eu fico estagnado,
preso ao mesmo chão que me amarra.

Minha melancolia,
como garrafas vazias,
refletem o peso da lembrança.
Por mais que eu sorria,
essa agonia
não cessa.

Já se foram anos,
já se perderam planos,
e por mais que eu fuja,
o passado sempre me encontra.
Desde criança,
sou como um pássaro,
aprisionado,
com as asas cansadas
de bater contra os mesmos limites.`,
    // date: "29 de Setembro, de 2024",
    preview: "Me perguntam como me sinto... Sinceramente?",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 12,
    title: "Adeus",
    content: `Ei, amor, o que tem feito?
Pra onde foi o amor que um dia prometeu?
Não precisa mais criar desculpas,
Eu já entendi, é como aquele ciclo que nunca se rompeu.

Então é assim que acaba?
Você vai embora sem nem olhar pra trás,
Como as marcas invisíveis que ficam,
E o peso delas, eu sei que não se desfaz.

Tantos erros que cometi por nós,
Quantas pontes queimei, quantas vezes voltei,
Assim como as flores que murcham no jarro,
Eu acreditei que nosso amor era raro.

Mas o passado às vezes é cruel,
E promessas não mudam o que é real.
O que será de mim?
Palavras que um dia pareciam seguras,
Hoje soam vazias.
Eu, cego de amor, não percebi.`,
    // date: "29 de Setembro, de 2024",
    preview: "Ei, amor, o que tem feito?...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 13,
    title: "Sorrindo para o vazio",
    content: `Minha mente não anda bem,
Carrego culpa e me afogo na dúvida.
Com o tempo, fico mais frio,
E, ao invés de forte, me sinto fraco.

Não quero mais cigarro nem overdose,
Mas e minhas neuroses?
Por que ainda precisam de mim?
Por que dói tanto existir?
Insisto em escrever, mesmo sabendo
Que vão esquecer.

Busquei sentido na vida, mas não sou daqui.
Talvez não haja lugar onde eu me encaixe.
Será destino viver nesse vazio?
Tudo ao redor parece bonito,
Até que se torna obsoleto — e resta o nada.

Então, sigo vagando nesse pesadelo,
Sorrindo para a realidade,
Mesmo ela sendo meu maior medo.`,
    // date: "12 de Outubro, de 2024",
    preview: "Minha mente não anda bem, Carrego culpa e me afogo na dúvida....",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 14,
    title: "Capa de Solitude",
    content: `Tentei tanto, chegar tão longe,
Mas a jornada pesa no silêncio da noite.
Eu fico feliz em estar só...
Mas é na madrugada que o medo me envolve.

A solitude que visto é capa e armadura,
Um disfarce de força, de falsa bravura.
Por trás, um sopro basta para sucumbir,
E não há caminho além, só o que está porvir.

Não há segunda, nem terceira saída,
Apenas o vazio, a ferida na minha alma.
Odeio o toque, o peso, o olhar,
O que fazer para que acabe, como fazer para o ciclo parar?
Se tudo que sinto me consome e corrói,
E cada pensamento em mim se destrói?
É difícil aceitar: sou eu o labirinto,
Minha própria sombra, meu caos e ocasião.

Meu rosto firme, sem lágrimas cair,
Esconde o caos que insiste em rugir.
Você não sabe, não é sua culpa,
A tempestade em mim, ninguém escuta.
E assim sigo, capa ao vento,
Tentando ser forte contra o tempo.
Mas no fundo, anseio por redenção,
Um toque, um pouco de chão.`,
    // date: "21 de Novembro, de 2024",
    preview: "A solitude que visto é capa e armadura...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  // { MUDAR
  //     id: 15,
  //     title: "Ecos na Escuridão",
  //     content: `Seguro o que me fere,
  // Só para sentir que ainda estou aqui.
  // Meu canto escuro é meu abrigo,
  // Mas também é meu algoz,
  // E as pessoas...
  // Falsas, mascaradas,
  // Um desfile de mentiras e suas danças envolventes
  // de alegria disfarçada.

  // E Se eu sorrir e disser que estou bem,
  // Você vai acreditar?
  // Ou, se confessar que está tudo desmoronando,
  // Você vai fingir que se importa?
  // Consegue ouvir?
  // Essa confusão...
  // É como um tremor,
  // Um furacão interno,
  // Uma náusea constante.

  // Será que fiquei tempo demais na escuridão?
  // Ou é apenas o mundo girando rápido demais,
  // Deixando-me tonto,
  // Vendo amores que não existem...
  // Eu me sinto mal, tão mal,
  // Mas não quero sair.
  // Quero apenas me afundar,
  // Deixar as lágrimas caírem,
  // Sem explicações,
  // Sem redenção.`,
  //     // date: "27 de Setembro, 2020",
  //     preview: "E quando não tem mais tempo pro arrependimento...",
  //     tags: ["reflexão", "arrependimento", "dor"],
  //   },
  {
    id: 16,
    title: "Ecos na Escuridão",
    content: `Seguro o que me fere,
Só para sentir que ainda estou aqui.
Meu canto escuro é meu abrigo,
Mas também é meu algoz,
E as pessoas...
Falsas, mascaradas,
Um desfile de mentiras e suas danças envolventes
de alegria disfarçada.

E Se eu sorrir e disser que estou bem,
Você vai acreditar?
Ou, se confessar que está tudo desmoronando,
Você vai fingir que se importa?
Consegue ouvir?
Essa confusão...
É como um tremor,
Um furacão interno,
Uma náusea constante.

Será que fiquei tempo demais na escuridão?
Ou é apenas o mundo girando rápido demais,
Deixando-me tonto,
Vendo amores que não existem...
Eu me sinto mal, tão mal,
Mas não quero sair.
Quero apenas me afundar,
Deixar as lágrimas caírem,
Sem explicações,
Sem redenção.`,
    // date: "21 de Novembro, de 2024",
    preview: "Será que fiquei tempo demais na escuridão...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 17,
    title: "Cores é Utopia",
    content: `Eu vejo preto e branco na televisão
Aonde lanço minha agonia, e o fardo da aversão?
Essa alegria é um sopro,
É estranho a sensação
De quem já nasce morto,
Achar que tem continuação.
Será que existe uma salvação?
Será que tem uma luz pra mim?
Nesse silêncio excêntrico...
Será que tem explicação?
Miserável homem que sou
Perdido no pó do espaço tempo
Perdido em meus pensamentos,
E afogado no mar da mornidão.`,
    // date: "24 de Novembro, de 2024",
    preview: "Eu vejo preto e branco na televisão...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 18,
    title: "Pesadelo",
    content: `No silêncio da noite, caí no abismo do meu próprio vazio.
Era um precipício sem fim, um mar de escuridão que me engolia.
Cada vez mais fundo, cada vez mais escuro,
O ar se tornava raro, e a angústia, imensa.

Minha mente, um campo de batalha.
Vejo Papel, caneta, isqueiro
Enquanto eu escrevo, vejo o mundo girar

Corri até as pernas cederem,
Mas o chão nunca se moveu.
Preso no mesmo lugar,
Uma monotonia, uma prisão que não consigo evitar,
E, dentro dela, minha mente se afogava
Em um coração raso, que só quer descansar.

Tentava não ferir os que me cercavam,
Mas minhas cicatrizes tocavam todos ao redor.
O fim sussurrava...
A falta pulsava, como uma ferida aberta,
E o medo me prendia nas sombras de mim mesmo.

Perguntei ao vazio:
Existe um lugar onde eu possa me encaixar?
Minha alma, amarga riu.
"Nem mesmo aqui," ela sussurrou.
O ódio crescia dentro de mim,
Rodeado por dúvidas que me faziam calar.

E assim, na madrugada que não acabava,
Afundei mais uma vez.
Não há respostas, só a queda.
E no papel, deixei meu grito silencioso,
Enquanto o mundo continuava a girar.`,
    // date: "24 de Novembro, de 2024",
    preview: "Uma monotonia, uma prisão que não consigo evitar...",
    tags: ["reflexão", "arrependimento", "dor"],
  },
  {
    id: 19,
    title: "Bulimia psicológica",
    content: `Mais uma vez, olha onde estou
Cai denovo... No fundo do poço.
De onde fui resgatado
E o cronômetro reiniciou
Foi o meu querer, me convém somente o meu prazer
Não ligo para você, não é recíproco
É tóxico.

Queria ser luz
Mas sou trevas
Queria a luz
Mas amo as escuridão, e as suas doces mentiras.

Por que me preocupo?
Por que me incomoda?
Me sinto salvo, me sinto perdoado,
E todo isso é um absurdo
Pois continuo sujo.
Me acostumei com as bolotas dos porcos
E, não consigo voltar
Não consigo me arrepender
Não existe mais lágrimas em mim.

Eu só queria fugir,
Me sinto na prensa.
Eu só queria sumir,
E pra onde eu vou?
Se todas essas falhas me frusta,
Me acompanham, me seguem
Independente da ande eu for
Elas me buscam.
Minha mente vira uma máquina de perguntas
E a dúvida me rodeia.
E o medo me consome
Isso reflete minha fome
Nunca tive tanta fome, e o que preenche essa vão?`,
    // date: "1 de Dezembro, de 2024",
    preview: "Minha mente vira uma máquina de perguntas...",
    tags: ["reflexão"],
  },
  {
    id: 20,
    title: "Vazio",
    content: `Para onde foi a rima?
Cadê a poesia?
Onde se esconde, ó poeta?
Teceste linhas para nelas esconder teu segredo?

Quem és sem a atenção que recebes?
Dos olhares que te veem, alimentas teu ego semeado.
Sentes raiva, sentes medo,
Tens pressa e uma angústia que talvez
Nunca se tornará algo útil de ser lido.

Não há nada de especial em ti.
Tudo que tens são fragmentos dos outros.
Rouba sentimentos alheios,
Sente dor só para provar que está vivo.

Não adianta mergulhar no teu vazio.
O vício te espreita na insônia,
E o amanhã te assombra na penumbra.
Abraças a ansiedade que te beija,
Te feres com o arame farpado
Que colocaste ao redor da flor.

Se foi, se vá, poeta.
O fundo do poço é teu.
De lá não sairás.`,
    // date: "26 de Fevereiro, 2024",
    preview: "E o amanhã te assombra na penumbra...",
    tags: ["reflexão"],
  },
  {
    id: 21,
    title: "Caminhos ",
    content: `E se não houver mais caminhos para mim?
Se um dia minha vida se esvair,
Ao menos saberei que tentei.

Meus sentimentos pedem desculpas por partir,
Minhas palavras ecoam um lamento sem fim.
Se caso por mim, alguma lágrima cair,
Que seja apenas uma lembrança distante.

Eu sei que nem tudo o que fiz foi para um bem maior,
Mas sempre foi para mim, e só para mim.
E quem sou, senão um amontoado de ego inflado,
Um ego murcho, a quem devo meu sorriso sincero?

As belas palavras que tanto quis escrever
Nunca foram mais do que um reflexo do que não sou.
Nunca fui fã de ler livros, mas acabei gostando
De tanto laço que criei, acabei me sabotando
De tanto nó que criei acabei me sufocando

Fui escravo das minhas vontades
Tentei portar o mundo em minhas mãos
Quis ser tudo, mas dentro de mim não havia nada.
Decepção é a palavra né?
Frustração, culpa, medo, arrependimento, vazio
Ciclos que se quebram, coração que se parte
Sentimentos e preocupações,
É um texto de confusões.
E por mais livre que eu pareça está agora
Mesmo assim,
Me desculpe por partir.`,
    // date: "26 de Fevereiro, 2024",
    preview:
      "As belas palavras que tanto quis escrever, Nunca foram mais do que um reflexo do que não sou.",
    tags: ["reflexão"],
  },
  {
    id: 22,
    title: "Consciência",
    content: `Sou um espelho cruel.
Não pedirei desculpas por expor tua fragilidade.
Querido poeta, sei que dentro de ti não há autenticidade.
Por que ainda insistes em transcrever tua dor no papel?

Tua aceitação melancólica me surpreende.
Tua rima é vazia, tua queda, inevitável.
Lamentável. Te conduzes ao desfecho sem resistência.

Pois bem... amarga é a verdade que escolheste.
E à medida que te entregas ao destino, eu me calo.
Junto a ti, vejo a escuridão se aproximar.
É teu fim. É o meu fim.

Junto a ti,
Peço desculpas por partir.`,
    // date: "",
    preview: "Querido poeta, sei que dentro de ti não há autenticidade...",
    tags: ["reflexão"],
  },
  {
    id: 23,
    title: "Fique",
    content: `Sinto que tudo que faço
não basta pra te manter aqui,
como se o chão se abrisse
sempre que você sorri...

Tenho medo,
de errar, de ser pouco,
de te perder num sopro,
num olhar que diz "cansei".

Fique.
Mesmo que eu seja falho,
mesmo que às vezes me perca.

Maldita tristeza que transborda, mesmo calada.
Só você faz sentido,
quando o mundo inteiro pesa,
quando tudo desaba ao meu redor...
Você é o meu bem, algo bom que quero para sempre.

Te dou meu coração,
sem filtro, sem armadura,
com as rachaduras expostas
e a esperança de que você fique.

Porque se você for embora…
Não é só o amor que se parte,
sou eu também.`,
    // date: "",
    preview: "Você é o meu bem, algo bom que quero para sempre...",
    tags: ["reflexão"],
  },
  {
    id: 24,
    title: "Desperdício",
    content: `Quanto tempo jogado fora.
afeto, palavras, promessas,
planos feitos...
A falta que sinto
tem o mesmo peso do arrependimento.

Por que se foi?
Como fui tão cruel
com sentimentos tão sinceros?

Por que ainda dói?
E se eu voltasse no tempo,
tentaria mudar tudo...
Evitaria que meus olhos encontrassem os teus.
Nossos corações
jamais teriam se tocado.

Te odeio pelo quanto te amei.
Prometeu ficar até o fim...
e foi a primeira a partir.
Podia ter apenas ido embora,
mas levou um pedaço de mim.
Pior,
ficou tempo o bastante
pra mentir.

A verdade que não queremos aceitar,
não sabemos amar.
Nos perdemos em promessas,
poemas, gestos grandiosos.
Parecem ensolarados,
mas ditos ou feitos na chuva,
vão direto pro ralo.`,
    preview: "Evitaria que meus olhos encontrassem os teus...",
    tags: ["reflexão"],
  },
  {
    id: 25,
    title: "Assalto",
    content: `Saiu no jornal uma grande notícia!
Disseram que do céu a lua sumiu.
Sim, eu fiz uma grande loucura,
Roubei a lua e botei no bolso, tô levando ela pra você.
Talvez eu receba punição divina,
Ou os homens da terra queiram me castigar.
Mas já era previsto
Que na terra você sofre só de pensar em amar.
Agora, pelo mundo tô sendo procurado,
Mas eu ainda não posso morrer.
Tô planejando meu último assalto,
Vou roubar as estrelas do céu pra você.`,
    // date: "",
    preview: "Roubei a lua e botei no bolso, tô levando ela pra você...",
    tags: ["reflexão"],
  },
  {
    id: 26,
    title: "A Dama e o Universo",
    content: `Quando estamos juntos, tudo se torna bom;
Ela é a Dama que rege meu universo.
E ao chegar dela, silenciado é o tom,
Apenas nós, imersos no inverso.

Conta-me, então, teus temores mais profundos,
Enquanto roubo teus pesadelos...
Diz-me como foi teu dia,
Trago fim a essa agonia.

Com notas suaves, 
compus melodias para afastar teus medos.
Tenho o toque que te acalma, usando meus dedos
E beijos ternos, a cada acorde um abraço,
No meu peito, encontrarás paz e espaço.

Talvez as palavras não sejam suficientes
para te libertar dessas correntes,
dessas ansiedades.
Apenas uma noite comigo, um jantar à luz de velas,
Histórias velhas, vamos de carro
Acelerando eu e você até um lugar de tranquilidade
Longe do caos dessa cidade.
Tenho mais que uma canção, talvez um refúgio,
Um lugar onde tua alma encontre abrigo,
E tua agonia desvaneça em mim.

Nesta noite, então, compor irei,
Músicas extraídas do teu ser,
Não são apenas rimas que direi,
Pois é o teu afeto, que transmuta
As borboletas no estômago em serenidade absoluta.`,
    // date: "",
    preview: "As borboletas no estômago em serenidade absoluta...",
    tags: ["reflexão"],
  },
  {
    id: 27,
    title: "Flower",
    content: `O teu toque causa-me delírio,
Procuro resposta em livros, nas rosas, tulipas e lírios.
Existe algo que possa me explicar?
Não acho razão pra essa palpitação,
Ou a solução para minhas mãos pararem de soar,
quando vejo você chegar.
Falho em definir com palavras
tudo o que você causa em mim,
tudo que você é pra mim.
Querer você me deixa rouco,
E mesmo sendo um pouco do oposto,
Você é minha cura,
Você é tipo a madruga,
Vem e tira meu sono.
Não gosto quando tem que ir,
Tudo fica lento quando você não tá aqui.
Me diz,
Quantas cartas de amor são necessárias
Pra convencer você a se mudar pra minha área?`,
    // date: "",
    preview: "Procuro resposta em livros, nas rosas, tulipas e lírios...",
    tags: ["reflexão"],
  },
  {
    id: 28,
    title: "Pretty and surreal",
    content: `Isso não faz sentido, a sua beleza é sur réalisme!
Me perco navegando no oceano dos seus olhos,

E todo esse esplendor desafia até mesmo o próprio Sol.
O que vem após teu sorriso?
Aonde se põe esse brilho?
Vou ao seu encontro, aos seus abraços e beijos que me deixam tonto.
Me sinto desorientado, perdido quando você caminha.
Caio entregue às suas curvas, sempre há um acidente em suas linhas.
Você é quem ri, mas sou eu quem perde o fôlego...
É quando você sorri, me torno novamente bobo.
Sinto-me um neófito, pois não há explicação,
Como o toque dos teus lábios perturba e agita meu estômago?

Meu coração não sabe mais como bater, meus olhos não sabem para onde olhar,
Minhas pernas não sabem para onde correr,
Deste vento impetuoso que me leva até você.`,
    // date: "",
    preview:
      "Meu coração não sabe mais como bater, meus olhos não sabem para onde olhar...",
    tags: ["reflexão"],
  },
  {
    id: 29,
    title: "Primavera",
    content: `Era uma vez uma rosa
Tão livre na ponta do Mount Cook,
Solitária, como o único ponto de cor numa tela cinza.
Ela se vê como uma falha do artista, aonde sem intenção nasceu, quando ele deixou respingar tinta em sua tela.
Os ventos fortes deixa-a flexível, mas ela se sente deslocada.
Ela queria ser as tulipas da lojinha, prefere ser podada do que ficar sozinha.
O mundo dela é frio, quem sabe isso explica os espinhos.
Amaldiçoada com a eternidade, para cada morte dos que tentaram escalar.
Lá do alto escutei seu murmúrio: Poeta atroz, não romantize ser uma flor!`,
    // date: "",
    preview:
      "Ela se vê como uma falha do artista, aonde sem intenção nasceu, quando ele deixou respingar tinta em sua tela...",
    tags: ["reflexão"],
  },
  {
    id: 30,
    title: "O mar e sua calmaria",
    content: `Eu sei o que é liberdade! – o mar diria
O quão profundo seria?
Quais palavras o mar expressaria

Veja o vento pairando sobre as águas,
Dando vida às ondas que,
Levam conchas até a ponta da costa,
Como se buscassem algo que nunca será delas.

Será que o mar sabe o que é ser livre?
Às vezes, só tateia a terra,
Mas, quando sofre pressão invade vários lugares
Rústica liberdade,
Conquistada à força, ao custo da dor
E dos gritos das cidades.

O mar levou tudo que não lhe pertencia,
O vento cessou, o grito emudeceu.
Nada restou além da calmaria.
Pois a água afogou toda vida que existia.`,
    // date: "",
    preview: "Mas, quando sofre pressão invade vários lugares...",
    tags: ["reflexão"],
  },

  {
    id: 31,
    title: "Tempo",
    content: `Não estou tão longe, meu bem
Estou bem perto, logo ali no mês de fevereiro, antes de março. 
Vou morar aqui, nos seus abraços
Tome-me, todos os pedaços. 

Eu gasto papéis, te dou toda flor
Toda poesia que fala de amor,
Toda inspiração que usei pra compor,
são suas, é você.

Você é a força quântica que faz meu coração palpitar,
Mais bela que o Teto da Capela Sistina,
Mais linda que toda arte de Michelangelo,
E tudo quanto nelas cabe.

Você é mais perfeita que um double flip saindo de nose slide,
Ainda mais que a rua e sua estrutura moderna,
E as obras renascentistas de Vasari.

Uma bela trick, ou uma nova track,
Cheia de poesia, fracassa nas linhas,
Se perde no ato,
Pois nem todas as palavras dos escritos de Homero
Conseguem explicar a sensação boa de ter você ao meu lado.`,
    // date: "",
    preview: "Você é mais perfeita que um double flip saindo de nose slide...",
    tags: ["reflexão"],
  },
  {
    id: 32,
    title: "Book",
    content: `Moça vou te despir usando meu lírico
Marolar no seu sorriso até umas horas
Me desculpa se ando um pouco sumido
Mas no final do dia te trago flores
Mas a verdade, é que é muito chato não te ter agora
Não é muito boa essa mistura de sabores
Entre o doce se for ficar
E o amargo de te ver indo embora.`,
    // date: "",
    preview: "Mas a verdade, é que é muito chato não te ter agora...",
    tags: ["reflexão"],
  },
  {
    id: 33,
    title: "Ópera",
    content: `Toda matéria sucumbirá em seu determinado momento,
Prédios, fortalezas e monumentos.
A pedra se curva ao vento e à erosão.
As flores mais belas, se rendem ao murchar.
Até o mais forte vidro quebra sob pressão.
A folha seca desaparece ao sopro do vento.
Mesmo o puro ouro perde o brilho ao toque do tempo.

Mas eu quero você,
pois, quando tudo desabar ao nosso redor,
quero está agarrado a algo bom,
algo que valha a pena,
você.`,
    // date: "",
    preview: "Toda matéria sucumbirá em seu determinado momento...",
    tags: ["reflexão"],
  },
  {
    id: 34,
    title: "Por favor, fique",
    content: `Oh, como eu te quero.
Não há nenhum homem tão apavorado
Como o homem que corre o risco de te perder.
Preciso de você, oh, Deus.
Não há tire daqui.
Por favor, fique.

Sinto por coisas que não aconteceu
Meus pensamentos vão longe,
Consigo vê, e penso:
A partida dói, leva um pedaço de mim,
Na verdade, tudo o que sou.
E novamente preciso me reconstruir.
Sobre tudo que é bom? As vezes tentamos agarrar com unhas e dentes para não virar saudade,
Mas não podemos portar a imensidão, pois não cabe em nossas mãos, não há como segura-lá.

Não menti quando disse que escrevi dez canções,
Espero que cê ouça.
Gritei em silêncio, deixando seus sentimentos roucos,
O quanto fui insano com o que sentia.
Me viram desabando como um louco.
Percebi tudo que perdia, pois não esqueço de nada.
Escrevi em cima do muro, Hoje em cima da sacada.

Não são meras juras de amor,
Para poder te despir.
O tanto que insisti,
Como não vi que era tarde?!
Talvez me encontre por aí,
Cantando por mil anos,
Tirando o verso do coração,
Tocando meu violão
No centro da sua cidade.`,
    // date: "",
    preview:
      "Sobre tudo que é bom? As vezes tentamos agarrar com unhas e dentes para não virar saudade...",
    tags: ["reflexão"],
  },
  {
    id: 35,
    title: "Cântico",
    content: `Pra você, entrego toda minha criatividade,
o último suspiro da minha caneta,
todas as flores que o mundo pode produzir
No mesmo tom sábio de quem disse que tudo é vaidade,
escrevi cânticos só pra te ver sorrir.`,
    // date: "",
    preview: "Pra você, entrego toda minha criatividade...",
    tags: ["reflexão"],
  },
  {
    id: 36,
    title: "Kaboom",
    content: `São bons os sons,
E o tom dessa turba,
A cor desse caos.
E eu, na busca pela paz,
Por uma luz no meio da ventania,
Que pesa meus olhos.
Me faço de cego diante de todos.
Ensurdecedor silêncio, como te anseio,
Como te quero.
Me faz tanta falta
Teu colo,
Onde meu coração encontra quietude.
Consigo escutar a grama crescer.
Mas o barulho tem seu sabor.
E eu… eu não vou reclamar.
Vou agradecer,
Pois meus ouvidos ainda escutam
Todas as coisas boas que me tiram o sono.
Tão bom o som.

Procurei ao Deus meu na mais suave brisa,
E Ele estava lá.
Mas ignorei o vento forte,
Onde Ele também estava.
Haveria algum lugar onde Ele não esteja?
E nós… nós não podemos estar em todo lugar.
Mas preciso buscá-Lo onde eu estiver.
E com certeza,
Vou encontrar o barulho que traz paz
No silêncio do meu coração.`,
    // date: "",
    preview: "Procurei ao Deus meu na mais suave brisa...",
    tags: ["reflexão"],
  },
  {
    id: 37,
    title: "Ela tem gosto do Vinho Vincent",
    content: `Ela é tão linda, não me canso de dizer Ela cansa de ouvir, o mundo todo e suas turbas Não me canso de percorrer aquelas belas curvas. Quero escrever, mas seu sorriso me distrai Prefiro tê-la, seja minha razão Longe de você não encontro paz.

Talvez eu seja a calmaria que você procura, então desculpe o verso em estado bruto Precisa ser lapidado, seu brilho não é difícil de achar, está em sua retina.
Perco o sono, fico sem chão Você me tem em suas mãos, e eu me pergunto como? Prometi para mim mesmo não vou me apegar Mas seu jeito, seu cheiro não me deixa cumprir Essa troca de sorrisos, olha no que foi dá Sinceramente não importa, não importa...

Se importa? Se eu desabotoar seu coração, Te despi com as linhas que escrevi, Te tocar com pincel, tinta guache e lápis.
Quando escrevo para você, eu suo É mais que mera sensação, Quando você está aqui, eu sou.
Quando nosso abraço se encaixa, eu voo.
Transpiramos adrenalina, A batida dos nossos corações rima E em seu beijo, viajo por dimensões, escrevo mil canções
Mas o som perfeito para mim é te ouvir.
Mesmo que chova, quero tirar música de você Mesmo que chore, que taça é digna de te receber?`,
    // date: "",
    preview:
      "Ela é tão linda, não me canso de dizer Ela cansa de ouvir, o mundo todo e suas turbas...",
    tags: ["reflexão"],
  },
  {
    id: 38,
    title: "Sem Adiar",
    content: `Parece que não consigo passar um dia sem te ver,
Parece até que os ponteiros do tempo giram em teu nome.
Supõe-se que nasci pra você...
e eu, tolo, não ouso negar o que o meu peito já sabe.
Não tenho mais tempo a perder, a vida me ensinou com silêncios e ausências que amor adiado é amor ferido.

Te amei com pressa, sem medo, como quem encontra abrigo em pleno vendaval.
Porque o amor não se adia, não se guarda para depois, pois o tempo não se compadece de quem espera...`,
    // date: "",
    preview: "Parece que não consigo passar um dia sem te ver...",
    tags: ["reflexão"],
  },
  {
    id: 39,
    title: "Promessas",
    content: `O presente pro meu coração
é teu sorriso, mágica canção,
que leva embora toda aflição,
e acalma minha inquietação.

Me abraçe nos dias de dor,
e sussurre esperança e amor.
Quando o mundo parecer sem cor,
Ore comigo,
sabemos pois que não e o universo que escuta
Em meio a tanta rima bruta
E passos tão escuro
Sabemos que o criador nos cura.

Te dou tudo quanto eu puder te dá
As folhas dessas páginas não conseguem adivinhar,
Aonde eu vou está...

Eu? Estarei sempre aqui,
te amando, até o fim.`,
    // date: "",
    preview: "As folhas dessas páginas não conseguem adivinhar...",
    tags: ["reflexão"],
  },
  {
    id: 40,
    title: "Ballistic",
    content: `Ouso dizer: é divino.
Me diga então —
Por que, agora, brotam palavras que antes nem sabiam existir,
e nelas mora a inspiração?
Por que este velho livro de poesia
conta a história de um simples camponês
e seu amor feito imensidão?
E por que essas fases de lua
fazem disparar meu coração?

E se o destino não nos unir, eu cedo aos argumentos despedaçados pelo tempo,
corroído por sentimentos, no meio de toda razão desvanecida, meu mundo se despinta,
e tudo perde a cor...

É pesada a bala no crânio, que estoura os miolos, que apelidei de amor, moça do sorriso que é um tiro, mirou na minha cabeça e os gatilhos me fez compor.`,
    // date: "",
    preview:
      "É pesada a bala no crânio, que estoura os miolos, que apelidei de amor, moça do sorriso que é um tiro...",
    tags: ["reflexão"],
  },
];
