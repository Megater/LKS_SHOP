import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Produkty',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nazwa produktu',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Cena (zł)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Koszulki', value: 'Koszulki' },
          { title: 'Bluzy', value: 'Bluzy' },
          { title: 'Akcesoria', value: 'Akcesoria' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Etykieta (np. Nowość / Bestseller)',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Zdjęcia produktu',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'sizes',
      title: 'Dostępne rozmiary',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Opis produktu',
      type: 'text',
      rows: 4,
    }),
  ],
});