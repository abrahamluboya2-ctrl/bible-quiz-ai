
import { BibleBook } from '../types';

export const OFFLINE_BIBLE_FR: Record<string, BibleBook> = {
  'Genèse': {
    name: 'Genèse',
    chapters: {
      1: [
        { book: 'Genèse', chapter: 1, verse: 1, text: "Au commencement, Dieu créa les cieux et la terre." },
        { book: 'Genèse', chapter: 1, verse: 2, text: "La terre était informe et vide; il y avait des ténèbres à la surface de l'abîme." },
        { book: 'Genèse', chapter: 1, verse: 3, text: "Dieu dit: Que la lumière soit! Et la lumière fut." }
      ],
      2: [
        { book: 'Genèse', chapter: 2, verse: 1, text: "Ainsi furent achevés les cieux et la terre, et toute leur armée." },
        { book: 'Genèse', chapter: 2, verse: 7, text: "L'Éternel Dieu forma l'homme de la poussière de la terre, il souffla dans ses narines un souffle de vie." }
      ],
      3: [
        { book: 'Genèse', chapter: 3, verse: 1, text: "Le serpent était le plus rusé de tous les animaux des champs." },
        { book: 'Genèse', chapter: 3, verse: 4, text: "Alors le serpent dit à la femme: Vous ne mourrez point." }
      ]
    }
  },
  'Exode': {
    name: 'Exode',
    chapters: {
      14: [
        { book: 'Exode', chapter: 14, verse: 21, text: "Moïse étendit sa main sur la mer. Et l'Éternel refoula la mer par un vent d'orient." }
      ],
      20: [
        { book: 'Exode', chapter: 20, verse: 1, text: "Alors Dieu prononça toutes ces paroles, en disant:" },
        { book: 'Exode', chapter: 20, verse: 3, text: "Tu n'auras pas d'autres dieux devant ma face." },
        { book: 'Exode', chapter: 20, verse: 12, text: "Honore ton père et ta mère, afin que tes jours se prolongent dans le pays." }
      ]
    }
  },
  'Psaumes': {
    name: 'Psaumes',
    chapters: {
      23: [
        { book: 'Psaumes', chapter: 23, verse: 1, text: "L'Éternel est mon berger: je ne manquerai de rien." },
        { book: 'Psaumes', chapter: 23, verse: 2, text: "Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles." },
        { book: 'Psaumes', chapter: 23, verse: 4, text: "Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi." }
      ],
      100: [
        { book: 'Psaumes', chapter: 100, verse: 1, text: "Poussez vers l'Éternel des cris de joie, Vous tous, habitants de la terre!" }
      ],
      121: [
        { book: 'Psaumes', chapter: 121, verse: 1, text: "Je lève mes yeux vers les montagnes... D'où me viendra le secours?" },
        { book: 'Psaumes', chapter: 121, verse: 2, text: "Le secours me vient de l'Éternel, Qui a fait les cieux et la terre." }
      ]
    }
  },
  'Matthieu': {
    name: 'Matthieu',
    chapters: {
      5: [
        { book: 'Matthieu', chapter: 5, verse: 3, text: "Heureux les pauvres en esprit, car le royaume des cieux est à eux!" },
        { book: 'Matthieu', chapter: 5, verse: 9, text: "Heureux ceux qui procurent la paix, car ils seront appelés fils de Dieu!" },
        { book: 'Matthieu', chapter: 5, verse: 14, text: "Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée." }
      ]
    }
  },
  'Jean': {
    name: 'Jean',
    chapters: {
      1: [
        { book: 'Jean', chapter: 1, verse: 1, text: "Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu." }
      ],
      3: [
        { book: 'Jean', chapter: 3, verse: 16, text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle." }
      ],
      14: [
        { book: 'Jean', chapter: 14, verse: 6, text: "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi." }
      ]
    }
  },
  'Apocalypse': {
    name: 'Apocalypse',
    chapters: {
      1: [
        { book: 'Apocalypse', chapter: 1, verse: 8, text: "Je suis l'alpha et l'oméga, dit le Seigneur Dieu, celui qui est, qui était, et qui vient, le Tout Puissant." }
      ],
      21: [
        { book: 'Apocalypse', chapter: 21, verse: 1, text: "Puis je vis un nouveau ciel et une nouvelle terre; car le premier ciel et la première terre avaient disparu." },
        { book: 'Apocalypse', chapter: 21, verse: 4, text: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus." }
      ]
    }
  }
};

export const OFFLINE_BIBLE_EN: Record<string, BibleBook> = {
  'Genesis': {
    name: 'Genesis',
    chapters: {
      1: [
        { book: 'Genesis', chapter: 1, verse: 1, text: "In the beginning God created the heaven and the earth." }
      ]
    }
  },
  'John': {
    name: 'John',
    chapters: {
      3: [
        { book: 'John', chapter: 3, verse: 16, text: "For God so loved the world, that he gave his only begotten Son." }
      ]
    }
  }
};
