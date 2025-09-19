import { BannerSend } from '@/components/BannerSend'
import { OurCases } from '@/components/OurCases'
import { getPayloadClient } from '@/shared/lib/payloadClient'

export default async function Home() {
  const payload = await getPayloadClient()

  const casesItems = await payload.find({
    collection: 'cases',
    limit: 100,
    select: {
      title: true,
      description: true,
      mainImage: true,
      tags: true,
    },
  })

  return (
    <>
      <OurCases
        cases={casesItems.docs}
        className="max-tablet:pt-[64px] max-mobile:pt-[48px] pt-[80px]"
      />
      <BannerSend />
    </>
  )
}
