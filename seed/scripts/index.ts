import payload from 'payload'

import config from '../../src/payload.config'
import { seed } from '../seed'
import { seedServices } from 'seed/data/services'

const run = async () => {
  try {
    await payload.init({
      config: config,
    })

    await seed()
    await seedServices()

    console.log('✅ Сидеры успешно выполнены.')
    process.exit(0)
  } catch (err) {
    console.error('❌ Ошибка при запуске сидеров:', err)
    process.exit(1)
  }
}

run()
