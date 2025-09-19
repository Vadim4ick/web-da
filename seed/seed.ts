import { clearSeeds } from './data/_clear'
import { seedAbout } from './data/about'

export const seed = async () => {
  console.log('🌱 Запуск сидеров...')

  // if (process.env.NODE_ENV === 'production') {
  //   throw new Error('Сидеры запрещены в продакшене')
  // }

  await clearSeeds()

  await seedAbout()

  console.log('✅ Сидеры завершены.')
}
