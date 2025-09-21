import type { CollectionConfig } from 'payload'

export const Banner: CollectionConfig = {
  slug: 'banner',
  labels: {
    singular: 'Главный баннер',
    plural: 'Главные баннера',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Контент',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Изображение',
      required: true,
    },
  ],
}
