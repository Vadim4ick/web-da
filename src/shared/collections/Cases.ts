import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Cases: CollectionConfig = {
  slug: 'cases',
  labels: {
    singular: 'Кейс',
    plural: 'Кейсы',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
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
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Главное изображение',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Теги',
      labels: { singular: 'Тег', plural: 'Теги' },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
          label: 'Тег',
        },
      ],
    },

    {
      name: 'items',
      type: 'array',
      label: 'Информационные блоки',
      labels: { singular: 'Блок', plural: 'Блоки' },
      fields: [
        {
          name: 'text',
          type: 'richText',
          required: true,
          label: 'Текст задачи',
          editor: lexicalEditor({
            features: () => [
              HeadingFeature({ enabledHeadingSizes: ['h2'] }),
              BoldFeature(),
              FixedToolbarFeature(),
              UnorderedListFeature(),
              OrderedListFeature(),
            ],
          }),
        },
      ],
    },

    // 🔹 Блоки "Заголовок + картинка"
    {
      name: 'blocks',
      type: 'array',
      label: 'Блоки контента',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Заголовок блока',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Картинка',
        },
      ],
    },
  ],
}

// {
//   name: 'contentBlocks',
//   type: 'blocks',
//   label: 'Контентные блоки',
//   blocks: [
//     {
//       slug: 'tasks',
//       labels: { singular: 'Задачи', plural: 'Задачи' },
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           label: 'Заголовок блока',
//           defaultValue: 'Задачи',
//         },
//         {
//           name: 'items',
//           type: 'array',
//           label: 'Список задач',
//           fields: [{ name: 'text', type: 'richText', label: 'Текст задачи' }],
//         },
//       ],
//     },

//     {
//       slug: 'headlineWithImage',
//       labels: { singular: 'Заголовок + Картинка', plural: 'Заголовки + Картинки' },
//       fields: [
//         { name: 'title', type: 'text', label: 'Заголовок' },
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Картинка',
//         },
//       ],
//     },
//   ],
// },
