import { BannerSend } from '@/components/BannerSend'
import { CaseImagesBlocks } from '@/components/CaseImages'
import { getPayloadClient } from '@/shared/lib/payloadClient'
import { Container } from '@/shared/ui/container'
import RichText from '@/shared/ui/rich-text'
import { notFound } from 'next/navigation'

export const revalidate = 60

const PageCase = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  const payload = await getPayloadClient()

  const caseEl = await payload.findByID({
    collection: 'cases',
    id,
  })

  if (!caseEl.id) {
    return notFound()
  }

  return (
    <section className="max-tablet:pt-[64px] max-mobile:py-[48px] pt-[80px]">
      <Container>
        <div className="max-mobile:gap-3 flex flex-col items-center justify-center gap-4">
          <h1 className="text-primary-black max-mobile:text-[32px] max-mobile:leading-[110%] text-center text-[48px] leading-[125%] font-semibold">
            {caseEl.title}
          </h1>

          {caseEl.description && (
            <p className="text-additional-grey-60 font-raleway max-mobile:text-[18px] text-[24px] leading-[125%] font-medium">
              {caseEl.description}
            </p>
          )}
        </div>

        {caseEl.items && (
          <div className="about-grid max-tablet:gap-[8px!important] max-mobile:pt-[48px] max-mobile:gap-[4px!important] max-mobile:pb-[64px] pt-[80px] pb-[120px]">
            {caseEl.items.map((item) => (
              <article key={item.id} className="rounded-[12px] bg-white px-[36px] py-[32px]">
                <RichText
                  className="text-additional-grey-50 font-raleway text-[18px] leading-[130%] font-medium"
                  key={item.id}
                  data={item.text}
                />
              </article>
            ))}
          </div>
        )}
      </Container>

      {caseEl.blocks && <CaseImagesBlocks caseBlocks={caseEl.blocks} />}

      <Container>
        <BannerSend className="max-tablet:py-[128px] max-mobile:pt-[96px] max-mobile:pb-[48px] py-[160px]" />
      </Container>
    </section>
  )
}

export default PageCase
