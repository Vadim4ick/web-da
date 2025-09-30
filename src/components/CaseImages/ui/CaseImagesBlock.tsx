/* eslint-disable @next/next/no-img-element */
import { CaseBlock } from '@/shared/types/cases.type'

const CaseImagesBlock = ({ caseBlock }: { caseBlock: CaseBlock }) => {
  return (
    <div className="flex flex-col">
      {caseBlock.title && (
        <div className="max-tablet:rounded-t-[20px] max-mobile:py-[48px] flex items-center justify-center rounded-t-[40px] bg-white py-[80px]">
          <p className="text-primary-black max-mobile:text-[32px] text-[48px] leading-[125%] font-semibold">
            {caseBlock.title}
          </p>
        </div>
      )}

      {typeof caseBlock.image !== 'number' && caseBlock.image?.url && (
        <img className="w-full" src={caseBlock.image.url} alt={'image case'} />
      )}
    </div>
  )
}

export { CaseImagesBlock }
