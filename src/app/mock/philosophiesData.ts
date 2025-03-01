import { Philosophies } from '../interface/philosophies';

export const philosophiesData: Philosophies = [
  {
    name: 'Estoicismo',
    type: 'ethics',
    description:
      'Uma filosofia grega antiga que ensina o desenvolvimento do autocontrole e da fortaleza como meio de superar emoções destrutivas.',
    key_figures: ['Zenão de Cítio', 'Sêneca', 'Marco Aurélio'],
    quote: 'A felicidade do homem consiste em viver de acordo com a natureza.',
    principles: [
      'Virtude como o bem supremo',
      'Aceitação do destino',
      'Controle sobre as reações emocionais',
      'Viver de acordo com a razão e a natureza',
    ],
    impact:
      'O Estoicismo teve uma influência duradoura na filosofia ocidental e na psicologia moderna. Suas ideias sobre a resiliência emocional e a aceitação do que está além do nosso controle continuam a ressoar nos dias de hoje, influenciando abordagens terapêuticas como a Terapia Cognitivo-Comportamental.',
    major_works: [
      '"Meditações" - Marco Aurélio',
      '"Cartas a Lucílio" - Sêneca',
      '"Manual" - Epicteto',
    ],
  },
  {
    name: 'Existencialismo',
    type: 'metaPhysics',
    description:
      'Uma teoria filosófica que enfatiza a existência do indivíduo como um agente livre e responsável, determinando seu próprio desenvolvimento através de atos da vontade.',
    key_figures: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus'],
    quote: 'A existência precede a essência.',
    principles: [
      'Liberdade e responsabilidade individual',
      'A vida não tem um significado inerente',
      'Autenticidade',
      'Angústia como condição humana',
    ],
    impact:
      'O Existencialismo influenciou profundamente a literatura, arte e psicologia do século XX. Suas ideias sobre liberdade e responsabilidade individual continuam a ser relevantes em debates éticos e políticos contemporâneos.',
    major_works: [
      '"O Ser e o Nada" - Jean-Paul Sartre',
      '"O Estrangeiro" - Albert Camus',
      '"O Segundo Sexo" - Simone de Beauvoir',
    ],
  },
  {
    name: 'Empirismo',
    type: 'epistemology',
    description:
      'Uma teoria do conhecimento que afirma que o conhecimento vem apenas ou principalmente da experiência sensorial.',
    key_figures: ['John Locke', 'George Berkeley', 'David Hume'],
    quote:
      'Não há nada no intelecto que não tenha estado primeiro nos sentidos.',
    principles: [
      'Conhecimento baseado na experiência',
      'Rejeição do inatismo',
      'Ênfase na observação e experimentação',
      'Ceticismo em relação a ideias abstratas',
    ],
    impact:
      'O Empirismo teve um impacto significativo no desenvolvimento do método científico e na filosofia da ciência. Influenciou o pensamento iluminista e continua a ser uma base importante para a pesquisa científica moderna.',
    major_works: [
      '"Ensaio sobre o Entendimento Humano" - John Locke',
      '"Tratado sobre os Princípios do Conhecimento Humano" - George Berkeley',
      '"Investigação sobre o Entendimento Humano" - David Hume',
    ],
  },
  {
    name: 'Utilitarismo',
    type: 'ethics',
    description:
      'Uma teoria ética que afirma que a ação moralmente correta é aquela que produz o maior bem para o maior número de pessoas.',
    key_figures: ['Jeremy Bentham', 'John Stuart Mill', 'Peter Singer'],
    quote: 'O maior bem para o maior número de pessoas.',
    principles: [
      'Consequencialismo',
      'Maximização da felicidade ou bem-estar',
      'Imparcialidade',
      'Consideração igual dos interesses de todos os afetados',
    ],
    impact:
      'O Utilitarismo tem sido influente em políticas públicas, economia e ética aplicada. Suas ideias sobre a maximização do bem-estar coletivo continuam a informar debates sobre justiça social, distribuição de recursos e ética animal.',
    major_works: [
      '"Introdução aos Princípios da Moral e da Legislação" - Jeremy Bentham',
      '"Utilitarismo" - John Stuart Mill',
      '"Ética Prática" - Peter Singer',
    ],
  },
  {
    name: 'Fenomenologia',
    type: 'metaPhysics',
    description:
      'Um método filosófico que se concentra no estudo da consciência e dos objetos da experiência direta.',
    key_figures: [
      'Edmund Husserl',
      'Martin Heidegger',
      'Maurice Merleau-Ponty',
    ],
    quote: 'Às coisas em si mesmas!',
    principles: [
      'Epoché (suspensão do julgamento)',
      'Intencionalidade da consciência',
      'Descrição da experiência vivida',
      'Rejeição do dualismo mente-corpo',
    ],
    impact:
      'A Fenomenologia influenciou significativamente a filosofia continental, a psicologia e as ciências cognitivas. Suas abordagens à consciência e à experiência subjetiva continuam a informar estudos em percepção, cognição e inteligência artificial.',
    major_works: [
      '"Ideias para uma Fenomenologia Pura" - Edmund Husserl',
      '"Ser e Tempo" - Martin Heidegger',
      '"Fenomenologia da Percepção" - Maurice Merleau-Ponty',
    ],
  },
  {
    name: 'Ceticismo',
    type: 'epistemology',
    description:
      'Uma abordagem filosófica que questiona a possibilidade do conhecimento absoluto.',
    key_figures: ['Pirro de Élis', 'Sexto Empírico', 'David Hume'],
    quote: 'A única coisa que sei é que nada sei.',
    principles: [
      'Suspensão do julgamento',
      'Dúvida metódica',
      'Questionamento de crenças e suposições',
      'Relativismo epistemológico',
    ],
    impact:
      'O Ceticismo tem sido uma força motriz no desenvolvimento do pensamento crítico e do método científico. Continua a influenciar debates sobre a natureza do conhecimento, a justificação de crenças e os limites da razão humana.',
    major_works: [
      '"Hipotiposes Pirrônicas" - Sexto Empírico',
      '"Meditações" - René Descartes (embora não seja um cético, usa o ceticismo metodológico)',
      '"Investigação sobre o Entendimento Humano" - David Hume',
    ],
  },
  {
    name: 'Materialismo Dialético',
    type: 'metaPhysics',
    description:
      'Uma abordagem filosófica e metodológica desenvolvida por Karl Marx e Friedrich Engels, baseada no materialismo e na dialética.',
    key_figures: ['Karl Marx', 'Friedrich Engels', 'Vladimir Lenin'],
    quote:
      'A história de todas as sociedades até hoje tem sido a história das lutas de classes.',
    principles: [
      'Primazia da matéria sobre a ideia',
      'Dialética como motor da mudança histórica',
      'Luta de classes como força motriz da história',
      'Determinismo econômico',
    ],
    impact:
      'O Materialismo Dialético teve um impacto profundo na teoria social, política e econômica. Influenciou movimentos revolucionários em todo o mundo e continua a ser uma perspectiva importante na análise crítica da sociedade e da economia.',
    major_works: [
      '"O Capital" - Karl Marx',
      '"A Ideologia Alemã" - Karl Marx e Friedrich Engels',
      '"Materialismo e Empiriocriticismo" - Vladimir Lenin',
    ],
  },
  {
    name: 'Idealismo',
    type: 'metaPhysics',
    description:
      'Uma corrente filosófica que afirma que a realidade é fundamentalmente mental ou imaterial.',
    key_figures: ['Platão', 'Immanuel Kant', 'Georg Wilhelm Friedrich Hegel'],
    quote: 'O mundo sensível é apenas uma sombra do mundo das ideias.',
    principles: [
      'Primazia da mente ou espírito',
      'Realidade como construção mental',
      'Conhecimento a priori',
      'Unidade do ser e do pensamento',
    ],
    impact:
      'O Idealismo teve uma influência duradoura na filosofia ocidental, particularmente na metafísica e na epistemologia. Suas ideias sobre a natureza da realidade e do conhecimento continuam a ser debatidas e influenciam áreas como a filosofia da mente e a teoria do conhecimento.',
    major_works: [
      '"A República" - Platão',
      '"Crítica da Razão Pura" - Immanuel Kant',
      '"Fenomenologia do Espírito" - G.W.F. Hegel',
    ],
  },
  {
    name: 'Pragmatismo',
    type: 'epistemology',
    description:
      'Uma filosofia que enfatiza a experiência prática e os resultados como fundamentos do conhecimento.',
    key_figures: ['Charles Sanders Peirce', 'William James', 'John Dewey'],
    quote: 'A verdade é aquilo que funciona.',
    principles: [
      'Verdade como utilidade prática',
      'Anti-fundacionalismo',
      'Falibilismo',
      'Pluralismo metodológico',
    ],
    impact:
      'O Pragmatismo teve um impacto significativo na filosofia americana e na teoria educacional. Suas ideias sobre a natureza da verdade e do conhecimento influenciaram campos como a psicologia, a sociologia e as ciências políticas.',
    major_works: [
      '"Como Tornar Nossas Ideias Claras" - Charles Sanders Peirce',
      '"Pragmatismo" - William James',
      '"Democracia e Educação" - John Dewey',
    ],
  },
  {
    name: 'Contractualismo',
    type: 'ethics',
    description:
      'Uma teoria ética e política que defende que a moralidade e a legitimidade política derivam de um contrato social.',
    key_figures: ['Thomas Hobbes', 'John Locke', 'Jean-Jacques Rousseau'],
    quote: 'O homem nasce livre, mas em toda parte encontra-se acorrentado.',
    principles: [
      'Estado de natureza',
      'Contrato social',
      'Consentimento dos governados',
      'Direitos naturais',
    ],
    impact:
      'O Contractualismo teve um impacto profundo na teoria política moderna e no desenvolvimento de sistemas democráticos. Suas ideias sobre a origem e a legitimidade do governo continuam a influenciar debates sobre direitos, liberdades e a relação entre o indivíduo e o Estado.',
    major_works: [
      '"Leviatã" - Thomas Hobbes',
      '"Segundo Tratado sobre o Governo Civil" - John Locke',
      '"O Contrato Social" - Jean-Jacques Rousseau',
    ],
  },
];
