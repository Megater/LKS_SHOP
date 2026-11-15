import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroEvent',
  title: 'Ważne wydarzenie (Sekcja główna)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł wydarzenia',
      type: 'string',
      description: 'Główny nagłówek komunikatu (np. Po 12 latach przerwy wracamy do rozgrywek seniorskich!)',
      validation: (rule) => rule.required(),
      initialValue: 'Po 12 latach przerwy wracamy do rozgrywek seniorskich!',
    }),
    defineField({
      name: 'badge',
      title: 'Czerwona etykieta (Badge)',
      type: 'string',
      description: 'Krótki tekst na czerwonym tle (np. Ważne wydarzenie)',
      initialValue: 'Ważne wydarzenie',
    }),
    defineField({
      name: 'season',
      title: 'Podpis dodatkowy / Sezon / Data',
      type: 'string',
      description: 'Żółty tekst obok etykiety (np. Sezon 2026/2027)',
      initialValue: 'Sezon 2026/2027',
    }),
    defineField({
      name: 'description',
      title: 'Treść / Opis wydarzenia',
      type: 'text',
      rows: 3,
      description: 'Szczegółowy opis widoczny pod tytułem',
      validation: (rule) => rule.required(),
      initialValue: 'W przyszłym roku LKS Pniewy wystawi pierwszą drużynę seniorów, stawiając na utalentowaną młodzież z terenu Gminy Pniewy.',
    }),
    defineField({
      name: 'isActive',
      title: 'Czy wydarzenie jest aktywne?',
      type: 'boolean',
      description: 'Gdy wyłączone (lub gdy brak wpisu), na stronie głównej nie wyświetli się żaden komunikat',
      initialValue: true,
    }),
  ],
});
