import { Philosophies } from '../interface/philosophies';

export const philosophiesData: Philosophies = [
  {
    name: 'Estoicismo',
    type: 'ethics',
    description:
      'Uma filosofia grega antiga que ensina o desenvolvimento do autocontrole e da fortaleza como meio de superar emoções destrutivas.',
    key_figures: ['Zenão de Cítio', 'Sêneca', 'Marco Aurélio'],
    quote: 'A felicidade do homem consiste em viver de acordo com a natureza.',
  },
  {
    name: 'Existencialismo',
    type: 'metaPhysics',
    description:
      'Uma teoria filosófica que enfatiza a existência do indivíduo como um agente livre e responsável, determinando seu próprio desenvolvimento através de atos da vontade.',
    key_figures: ['Jean-Paul Sartre', 'Simone de Beauvoir', 'Albert Camus'],
    quote: 'A existência precede a essência.',
  },
  {
    name: 'Empirismo',
    type: 'epistemology',
    description:
      'Uma teoria do conhecimento que afirma que o conhecimento vem apenas ou principalmente da experiência sensorial.',
    key_figures: ['John Locke', 'George Berkeley', 'David Hume'],
    quote:
      'Não há nada no intelecto que não tenha estado primeiro nos sentidos.',
  },
  {
    name: 'Utilitarismo',
    type: 'ethics',
    description:
      'Uma teoria ética que afirma que a ação moralmente correta é aquela que produz o maior bem para o maior número de pessoas.',
    key_figures: ['Jeremy Bentham', 'John Stuart Mill', 'Peter Singer'],
    quote: 'O maior bem para o maior número de pessoas.',
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
  },
];
