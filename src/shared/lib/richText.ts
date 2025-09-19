/* eslint-disable @typescript-eslint/ban-ts-comment */
type Node = {
  type: string
  tag?: string
  format?: string | number
  text?: string
  children?: Node[]
}

export const createTextNode = (text: string, format: number = 0): Node => ({
  type: 'text',
  text,
  // @ts-ignore
  detail: 0,
  format,
})

export const createParagraph = (children: Node[]): Node => ({
  type: 'paragraph',
  children,
})

export const createHeading = (
  tag: 'h1' | 'h2' | 'h3' | 'h4',
  children: Node[],
  bold = false,
): Node => ({
  type: 'heading',
  tag,
  format: bold ? 'bold' : '',
  children,
})

export const buildRichText = (children: Node[]) => ({
  root: {
    type: 'root',
    children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})
