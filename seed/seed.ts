import { clearSeeds } from './data/_clear'
import { seedAbout } from './data/about'
import { seedCases } from './data/cases'

export const seed = async () => {
  console.log('🌱 Запуск сидеров...')

  // if (process.env.NODE_ENV === 'production') {
  //   throw new Error('Сидеры запрещены в продакшене')
  // }

  await clearSeeds()

  await seedAbout()
  await seedCases()

  console.log('✅ Сидеры завершены.')
}
