import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Услуга',
    plural: 'Услуги',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['order', 'title', 'priceFrom'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Название',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'priceFrom',
      type: 'number',
      label: 'Цена от',
      required: true,
    },
    {
      name: 'extras',
      type: 'array',
      label: 'Доп. услуги',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Название услуги',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Цена',
          admin: {
            description: 'Можно писать как число или текст (например: "+8000 ₽" или "от 10 000 ₽")',
          },
        },
      ],
    },
  ],
}
