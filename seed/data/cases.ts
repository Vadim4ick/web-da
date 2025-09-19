import {
  buildRichText,
  createHeading,
  createParagraph,
  createTextNode,
} from '@/shared/lib/richText'
import payload from 'payload'

const items = [
  {
    text: buildRichText([
      createHeading('h2', [createTextNode('Задачи', 1)], true),
      createParagraph([createTextNode('Разработать современный, адаптивный сайт для компании')]),
      createParagraph([createTextNode('Обеспечить удобную навигацию и каталог продукции')]),
      createParagraph([
        createTextNode('Внедрить систему управления контентом для обновления информации'),
      ]),
      createParagraph([createTextNode('Оптимизировать сайт для поисковых систем')]),
    ]),
  },
  {
    text: buildRichText([
      createHeading('h2', [createTextNode('Наше решение', 1)], true),
      createParagraph([createTextNode('Провели анализ требований клиента')]),
      createParagraph([createTextNode('Создали дизайн, сочетающий современность и удобство')]),
      createParagraph([createTextNode('Реализовали сайт на CMS с адаптивным дизайном')]),
      createParagraph([createTextNode('Настроили SEO-оптимизацию и быструю загрузку страниц')]),
    ]),
  },

  {
    text: buildRichText([
      createHeading('h2', [createTextNode('Результат', 1)], true),
      createParagraph([
        createTextNode('Привлекательный и удобный сайт, полностью соответствующий задачам клиента'),
      ]),
      createParagraph([createTextNode('Возможность легко обновлять каталог и мероприятия')]),
      createParagraph([
        createTextNode('Внедрить систему управления контентом для обновления информации'),
      ]),
      createParagraph([
        createTextNode('Повышение узнаваемости бренда и увеличение обращений от клиентов'),
      ]),
    ]),
  },
]

export const seedCases = async () => {
  console.log('🌱 Сидинг коллекции "cases"...')

  const demoCases = [
    {
      title: 'Evergreen design',
      description: 'студия интерьерного озеленения',
      mainImage: 1,
      tags: [{ tag: 'UI/UX' }, { tag: 'SEO' }],
      items: items,
      blocks: [],
    },
    {
      title: 'Demokrat',
      description: 'стоматологическая клиника',
      mainImage: 1,
      tags: [{ tag: 'E-commerce' }, { tag: 'Payments' }],
      items: items,
      blocks: [],
    },
    {
      title: 'Evergreen design',
      description: 'студия интерьерного озеленения',
      mainImage: 1,
      tags: [{ tag: 'UI/UX' }, { tag: 'SEO' }],
      items: items,
      blocks: [],
    },
    {
      title: 'Demokrat',
      description: 'стоматологическая клиника',
      mainImage: 1,
      tags: [{ tag: 'E-commerce' }, { tag: 'Payments' }],
      items: items,
      blocks: [],
    },
    {
      title: 'Evergreen design',
      description: 'студия интерьерного озеленения',
      mainImage: 1,
      tags: [{ tag: 'UI/UX' }, { tag: 'SEO' }],
      items: items,
      blocks: [],
    },
  ]

  for (const c of demoCases) {
    await payload.create({
      collection: 'cases',
      // @ts-ignore
      data: c,
    })
  }
}
