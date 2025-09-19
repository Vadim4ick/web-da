'use client'

import { useRowLabel } from '@payloadcms/ui'

const ArrayRowLabel = () => {
  const { data } = useRowLabel<{ title?: string }>()

  const customLabel = `${data.title || 'Введите название'} `

  return <div> {customLabel}</div>
}

export default ArrayRowLabel
