import { AboutInfo } from '@/components/AboutInfo'
import { Banner } from '@/components/Banner'
import { BannerSend } from '@/components/BannerSend'
import { OurCases } from '@/components/OurCases'
import { getPayloadClient } from '@/shared/lib/payloadClient'

const Home = async () => {
  const payload = await getPayloadClient()

  const servicesItems = await payload.find({
    collection: 'services',
  })

  const aboutInfo = await payload.findGlobal({
    slug: 'about',
  })

  const casesItems = await payload.find({
    collection: 'cases',
    limit: 5,
    select: {
      title: true,
      description: true,
      mainImage: true,
      tags: true,
    },
  })

  return (
    <>
      <Banner />

      <AboutInfo servicesItems={servicesItems.docs} aboutInfo={aboutInfo} />

      <OurCases cases={casesItems.docs} />
      <BannerSend />
    </>
  )
}

export default Home
