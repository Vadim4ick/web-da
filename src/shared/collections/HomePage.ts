import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homepage',
  label: 'Главная страница',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Контент',
  },
  fields: [
    {
      name: 'featuredCases',
      type: 'array',
      label: 'Кейсы на главной',
      labels: { singular: 'Кейс', plural: 'Кейсы' },
      admin: {
        components: {
          RowLabel: '@/app/(payload)/components/CaseRowLabel.tsx',
        },
      },
      // admin: {
      //   components: {
      //     RowLabel: ({ data }) => data?.case?.title ?? 'Кейс',
      //   },
      // },
      fields: [
        {
          name: 'case',
          type: 'relationship',
          relationTo: 'cases',
          required: true,
          label: 'Выберите кейс',
        },
      ],
    },
  ],
}
