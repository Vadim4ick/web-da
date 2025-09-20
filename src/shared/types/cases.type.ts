import { Media } from '@/payload-types'

export interface CasesHomePage {
  id: number
  title: string
  description?: string | null | undefined
  mainImage: Media | number
  tags?: CasesTags[] | null | undefined
}

interface CasesTags {
  tag: string
  id?: string | null
}

export interface CaseBlock {
  title?: string | null | undefined
  image?: number | Media | null | undefined
  id?: string | null
}
