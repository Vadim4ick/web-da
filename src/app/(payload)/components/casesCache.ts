/* eslint-disable @typescript-eslint/no-explicit-any */
let cache: Record<string, any> | null = null
let loadingPromise: Promise<any> | null = null

export function getCasesCache() {
  return cache
}

export async function loadCasesOnce() {
  // Уже загружено → возвращаем
  if (cache) return cache

  // Уже идёт загрузка → ждём
  if (loadingPromise) return loadingPromise

  // Делаем загрузку один раз
  loadingPromise = fetch(
    `/api/cases?limit=200&depth=1&select[title]=true&select[description]=true&select[mainImage]=true&select[tags]=true`,
  )
    .then((r) => r.json())
    .then((json) => {
      const map: Record<string, any> = {}
      json.docs.forEach((i: any) => (map[i.id] = i))
      cache = map
      return map
    })

  return loadingPromise
}
