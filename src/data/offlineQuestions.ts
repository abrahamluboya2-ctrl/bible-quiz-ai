
import { Question } from '../types';

export const OFFLINE_QUESTIONS: Record<string, Question[]> = {
  'old-testament': [
    { id: 'ot1', question: "Combien de jours Dieu a-t-il mis pour créer le monde ?", options: ["5 jours", "6 jours", "7 jours", "8 jours"], correctAnswer: "6 jours", explanation: "Dieu a créé le monde en 6 jours et s'est reposé le septième jour.", reference: "Genèse 1" },
    { id: 'ot2', question: "Qui a construit l'arche pour échapper au déluge ?", options: ["Moïse", "Abraham", "Noé", "Isaac"], correctAnswer: "Noé", explanation: "Noé a construit l'arche pour sauver sa famille et les animaux.", reference: "Genèse 6" },
    { id: 'ot3', question: "Quel prophète a été jeté dans la fosse aux lions ?", options: ["Jérémie", "Ézéchiel", "Daniel", "Isaïe"], correctAnswer: "Daniel", explanation: "Daniel a été épargné par les lions car il est resté fidèle à Dieu.", reference: "Daniel 6" },
    { id: 'ot4', question: "Quel est le premier livre de la Bible ?", options: ["Exode", "Genèse", "Lévitique", "Nombres"], correctAnswer: "Genèse", explanation: "Genèse signifie 'commencement'.", reference: "Genèse 1:1" },
    { id: 'ot5', question: "Qui a reçu les Dix Commandements ?", options: ["Aaron", "Josué", "Moïse", "Caleb"], correctAnswer: "Moïse", explanation: "Dieu a donné la Loi à Moïse sur le mont Sinaï.", reference: "Exode 20" },
    { id: 'ot6', question: "Qui a tué Goliath avec une fronde ?", options: ["Saül", "Salomon", "David", "Samson"], correctAnswer: "David", explanation: "David, le jeune berger, a vaincu le géant philistin.", reference: "1 Samuel 17" },
    { id: 'ot7', question: "Quelle mer Moïse a-t-il séparée en deux ?", options: ["Mer Morte", "Mer Rouge", "Mer de Galilée", "Méditerranée"], correctAnswer: "Mer Rouge", explanation: "L'Éternel a ouvert la mer pour laisser passer les Hébreux.", reference: "Exode 14" },
    { id: 'ot8', question: "Qui était la femme de l'homme le plus fort, Samson ?", options: ["Ruth", "Esther", "Dalila", "Débora"], correctAnswer: "Dalila", explanation: "Dalila a trahi Samson en découvrant le secret de sa force.", reference: "Juges 16" },
    { id: 'ot9', question: "Quel fils de Jacob avait une tunique de plusieurs couleurs ?", options: ["Juda", "Joseph", "Benjamin", "Lévi"], correctAnswer: "Joseph", explanation: "Son père Jacob l'aimait plus que ses autres fils.", reference: "Genèse 37" },
    { id: 'ot10', question: "Comment s'appelait la première femme ?", options: ["Sarah", "Eve", "Rébecca", "Léa"], correctAnswer: "Eve", explanation: "Eve a été créée à partir d'une côte d'Adam.", reference: "Genèse 2" }
  ],
  'new-testament': [
    { id: 'nt1', question: "Dans quelle ville Jésus est-il né ?", options: ["Nazareth", "Jérusalem", "Bethléem", "Capharnaüm"], correctAnswer: "Bethléem", explanation: "Jésus est né à Bethléem en Judée.", reference: "Matthieu 2:1" },
    { id: 'nt2', question: "Quel apôtre a renié Jésus trois fois ?", options: ["Jean", "Pierre", "Jacques", "André"], correctAnswer: "Pierre", explanation: "Pierre l'a renié avant que le coq ne chante.", reference: "Luc 22:61" },
    { id: 'nt3', question: "Qui a écrit la majorité des épîtres ?", options: ["Jean", "Pierre", "Paul", "Luc"], correctAnswer: "Paul", explanation: "Paul a écrit 13 lettres aux églises.", reference: "Actes / Épîtres" },
    { id: 'nt4', question: "Combien d'apôtres Jésus avait-il ?", options: ["10", "12", "14", "7"], correctAnswer: "12", explanation: "Jésus a choisi douze disciples.", reference: "Matthieu 10:1" },
    { id: 'nt5', question: "Quel est le dernier livre de la Bible ?", options: ["Actes", "Romains", "Hébreux", "Apocalypse"], correctAnswer: "Apocalypse", explanation: "La révélation de Jean.", reference: "Apocalypse 1:1" },
    { id: 'nt6', question: "Qui a baptisé Jésus dans le Jourdain ?", options: ["Pierre", "Jean le Baptiste", "Paul", "Jacques"], correctAnswer: "Jean le Baptiste", explanation: "Il préparait le chemin du Seigneur.", reference: "Matthieu 3" },
    { id: 'nt7', question: "Combien de pains Jésus a-t-il multipliés pour 5000 hommes ?", options: ["5", "7", "12", "2"], correctAnswer: "5", explanation: "Avec 5 pains et 2 poissons.", reference: "Jean 6" },
    { id: 'nt8', question: "Sur quelle montagne Jésus a-t-il été transfiguré ?", options: ["Sinaï", "Thabor", "Oliviers", "Calvaire"], correctAnswer: "Thabor", explanation: "Sa face resplendit comme le soleil.", reference: "Matthieu 17" },
    { id: 'nt9', question: "Quelle femme a été la première à voir Jésus ressuscité ?", options: ["Marie sa mère", "Marie de Magdala", "Marthe", "Jeanne"], correctAnswer: "Marie de Magdala", explanation: "Elle se tenait près du sépulcre.", reference: "Jean 20" },
    { id: 'nt10', question: "Qui a trahi Jésus pour 30 pièces d'argent ?", options: ["Thomas", "Judas Iscariote", "Barthélemy", "Matthieu"], correctAnswer: "Judas Iscariote", explanation: "Il l'a livré avec un baiser.", reference: "Matthieu 26" }
  ],
  'characters': [
    { id: 'ch1', question: "Qui a vaincu Goliath ?", options: ["Saül", "David", "Samson", "Gédéon"], correctAnswer: "David", explanation: "David a vaincu le géant avec une fronde.", reference: "1 Samuel 17" },
    { id: 'ch2', question: "Qui a été vendu par ses frères ?", options: ["Benjamin", "Joseph", "Ruben", "Juda"], correctAnswer: "Joseph", explanation: "Vendu par jalousie à cause de ses rêves.", reference: "Genèse 37" },
    { id: 'ch3', question: "Qui était l'homme le plus fort ?", options: ["David", "Samson", "Salomon", "Goliath"], correctAnswer: "Samson", explanation: "Sa force venait de son vœu à Dieu.", reference: "Juges 16" },
    { id: 'ch4', question: "Qui était le roi le plus sage ?", options: ["David", "Saül", "Salomon", "Josias"], correctAnswer: "Salomon", explanation: "Il demanda la sagesse au lieu des richesses.", reference: "1 Rois 3" },
    { id: 'ch5', question: "Qui a survécu dans la fosse aux lions ?", options: ["Daniel", "Élie", "Élisée", "Jonas"], correctAnswer: "Daniel", explanation: "Dieu a fermé la gueule des lions.", reference: "Daniel 6" }
  ],
  'parables': [
    { id: 'p1', question: "Qui aide l'homme blessé ?", options: ["Prêtre", "Lévite", "Samaritain", "Scribe"], correctAnswer: "Samaritain", explanation: "La parabole du Bon Samaritain.", reference: "Luc 10:33" },
    { id: 'p2', question: "Où le fils prodigue est-il allé ?", options: ["À la guerre", "Dans un pays lointain", "À Jérusalem", "Au désert"], correctAnswer: "Dans un pays lointain", explanation: "Il y a mangé tout son héritage.", reference: "Luc 15" },
    { id: 'p3', question: "Quelle semence est la plus petite selon Jésus ?", options: ["Blé", "Moutarde", "Orge", "Maïs"], correctAnswer: "Moutarde", explanation: "Le grain de sénevé.", reference: "Matthieu 13" }
  ],
  'psalms-proverbs': [
    { id: 'pp1', question: "Quel est le début du Psaume 23 ?", options: ["Dieu est mon refuge", "L'Éternel est mon berger", "Bénis l'Éternel", "Le Seigneur règne"], correctAnswer: "L'Éternel est mon berger", explanation: "Psaume de confiance.", reference: "Psaume 23:1" },
    { id: 'pp2', question: "Le commencement de la sagesse est...", options: ["La peur", "La crainte de l'Éternel", "Le travail", "L'étude"], correctAnswer: "La crainte de l'Éternel", explanation: "C'est le fondement de la connaissance.", reference: "Proverbes 1:7" }
  ],
  'miracles': [
    { id: 'm1', question: "Quel fut le premier miracle de Jésus ?", options: ["L'eau en vin", "Guérison d'aveugle", "Multiplication", "Marcher sur l'eau"], correctAnswer: "L'eau en vin", explanation: "Aux noces de Cana.", reference: "Jean 2:11" },
    { id: 'm2', question: "Qui a été ressuscité après 4 jours ?", options: ["Pierre", "Jean", "Lazare", "Étienne"], correctAnswer: "Lazare", explanation: "À Béthanie.", reference: "Jean 11" },
    { id: 'm3', question: "Qui a marché sur l'eau vers Jésus ?", options: ["Jean", "Jacques", "Pierre", "André"], correctAnswer: "Pierre", explanation: "Il a eu peur et a commencé à enfoncer.", reference: "Matthieu 14" }
  ]
};

export const OFFLINE_QUESTIONS_EN: Record<string, Question[]> = {
  'old-testament': [
    { id: 'ot1e', question: "How many days did God take to create the world?", options: ["5 days", "6 days", "7 days", "8 days"], correctAnswer: "6 days", explanation: "God created the world in 6 days.", reference: "Genesis 1" }
  ],
  'new-testament': [
    { id: 'nt1e', question: "Where was Jesus born?", options: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], correctAnswer: "Bethlehem", explanation: "Jesus was born in Bethlehem.", reference: "Matthew 2:1" }
  ]
};
