
import React from 'react';
import { BookOpen, Users, Compass, Scroll, Heart, Shield } from 'lucide-react';
import { QuizCategory } from './types';

export const CATEGORIES: QuizCategory[] = [
  {
    id: 'old-testament',
    name: { fr: 'Ancien Testament', en: 'Old Testament' },
    icon: 'BookOpen',
    description: { 
      fr: 'De la Genèse aux Prophètes, explorez les fondations du futur.',
      en: 'From Genesis to the Prophets, explore the foundations of the future.'
    },
    color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
  },
  {
    id: 'new-testament',
    name: { fr: 'Nouveau Testament', en: 'New Testament' },
    icon: 'Scroll',
    description: {
      fr: "La vie de Jésus et l'expansion galactique de la foi.",
      en: "The life of Jesus and the galactic expansion of faith."
    },
    color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  },
  {
    id: 'characters',
    name: { fr: 'Personnages Bibliques', en: 'Biblical Characters' },
    icon: 'Users',
    description: {
      fr: 'Les avatars de la sagesse à travers les dimensions.',
      en: 'The avatars of wisdom across dimensions.'
    },
    color: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20'
  },
  {
    id: 'parables',
    name: { fr: 'Parables et Enseignements', en: 'Parables and Teachings' },
    icon: 'Compass',
    description: {
      fr: 'Protocoles de vie codés par le Grand Architecte.',
      en: 'Life protocols coded by the Grand Architect.'
    },
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  },
  {
    id: 'psalms-proverbs',
    name: { fr: 'Psaumes et Proverbes', en: 'Psalms and Proverbs' },
    icon: 'Heart',
    description: {
      fr: 'Résonances spirituelles et fréquences de sagesse.',
      en: 'Spiritual resonances and frequencies of wisdom.'
    },
    color: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  },
  {
    id: 'miracles',
    name: { fr: 'Miracles et Signes', en: 'Miracles and Signs' },
    icon: 'Shield',
    description: {
      fr: 'Anomalies divines dans la matrice de la réalité.',
      en: 'Divine anomalies in the matrix of reality.'
    },
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  Scroll: <Scroll className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />
};
