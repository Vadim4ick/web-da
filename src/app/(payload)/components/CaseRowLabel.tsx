'use client'

import { memo, useEffect, useState } from 'react'
import { useRowLabel } from '@payloadcms/ui'
import styles from './CaseRowLabel.module.scss'
import type { Case, Media } from '@/payload-types'
import { getCasesCache, loadCasesOnce } from './casesCache'

function CaseRowLabelComponent() {
  // Типизация данных RowLabel (Payload передаёт поля строки)
  const { data } = useRowLabel<{ case?: string | number }>()
  const caseId = data?.case ? String(data.case) : null

  // Типизированная карта кейсов
  const [casesMap, setCasesMap] = useState<Record<string, Case> | null>(getCasesCache)

  // Загружаем кейсы, если кэша нет
  useEffect(() => {
    if (casesMap) return

    loadCasesOnce().then((map) => {
      // map: Record<string, Case>
      setCasesMap(map)
    })
  }, [casesMap])

  // Нет выбранного кейса
  if (!caseId) {
    return <div className="text-xs text-gray-400 italic">Кейс не выбран</div>
  }

  // Кейс ещё не загружен
  const caseData = casesMap?.[caseId] || null
  if (!caseData) {
    return <div className="text-xs text-gray-400 italic">Загрузка…</div>
  }

  // Проверяем mainImage (оно может быть id или объектом Media)
  const imageUrl =
    typeof caseData.mainImage === 'object' && caseData.mainImage !== null
      ? (caseData.mainImage as Media).url
      : null

  return (
    <div className={styles.wrapper}>
      {/* IMAGE */}
      <div className={styles.image}>
        {imageUrl ? (
          <img src={imageUrl} alt={caseData.title} />
        ) : (
          <div className={styles.fallback}>No</div>
        )}
      </div>

      {/* TEXT BLOCK */}
      <div className={styles.textBlock}>
        <span className={styles.title}>{caseData.title}</span>

        {caseData.description && <span className={styles.desc}>{caseData.description}</span>}

        {Array.isArray(caseData.tags) && caseData.tags.length > 0 && (
          <div className={styles.tags}>
            {caseData.tags.slice(0, 2).map((t) => (
              <span key={t.tag} className={styles.tag}>
                {t.tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(CaseRowLabelComponent)
