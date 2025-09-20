import { CaseBlock } from '@/shared/types/cases.type'
import { CaseImagesBlock } from './CaseImagesBlock'

const CaseImagesBlocks = ({ caseBlocks }: { caseBlocks: CaseBlock[] }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {caseBlocks.map((block) => (
        <CaseImagesBlock key={block.id} caseBlock={block} />
      ))}
    </div>
  )
}

export { CaseImagesBlocks }
