import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'О нас',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Контент',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },

    {
      name: 'items',
      type: 'array',
      label: 'Блоки с информацией о нас',
      labels: { singular: 'Блок', plural: 'Блоки' },
      admin: {
        components: {
          RowLabel: '@/app/(payload)/components/ArrayRowLabel.tsx',
        },
      },

      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Заголовок',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Описание',
          required: true,
        },
      ],
    },
  ],
}
