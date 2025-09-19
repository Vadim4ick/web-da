import payload from 'payload'

export const clearSeeds = async () => {
  console.log('🧹 Обнуляем коллекции...')

  try {
    // 1️⃣ Тестовые данные и результаты
    await payload.updateGlobal({
      slug: 'about',
      data: {},
    })
    await payload.delete({ collection: 'cases', where: {} })
    await payload.delete({ collection: 'services', where: {} })

    console.log('✅ Все коллекции очищены')
  } catch (err) {
    console.error('❌ Ошибка при очистке:', err)
    throw err
  }
}
