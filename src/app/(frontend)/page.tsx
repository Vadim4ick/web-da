import { AboutInfo } from '@/components/AboutInfo'
import { Banner } from '@/components/Banner'
import { BannerSend } from '@/components/BannerSend'
import { OurCases } from '@/components/OurCases'
import { HashScroller } from '@/shared/lib/HashScroller'
import { getPayloadClient } from '@/shared/lib/payloadClient'
import { CasesHomePage } from '@/shared/types/cases.type'

export const revalidate = 60

const Home = async () => {
  const payload = await getPayloadClient()

  const results = await Promise.allSettled([
    payload.find({ collection: 'services' }),
    payload.findGlobal({ slug: 'about' }),
    // payload.find({
    //   collection: 'cases',
    //   limit: 5,
    //   select: {
    //     title: true,
    //     description: true,
    //     mainImage: true,
    //     tags: true,
    //   },
    // }),
    payload.findGlobal({ slug: 'homepage', depth: 3 }),
    payload.find({ collection: 'banner' }),
  ])

  const servicesItems = results[0].status === 'fulfilled' ? results[0].value : null
  const aboutInfo = results[1].status === 'fulfilled' ? results[1].value : null
  const homepage = results[2].status === 'fulfilled' ? results[2].value : null
  // const casesItems = results[2].status === 'fulfilled' ? results[2].value : null
  const banners = results[3].status === 'fulfilled' ? results[3].value : null

  return (
    <>
      {banners && <Banner banners={banners.docs} />}

      {servicesItems && aboutInfo && (
        <AboutInfo servicesItems={servicesItems?.docs} aboutInfo={aboutInfo} />
      )}

      {homepage && homepage.featuredCases && (
        <OurCases cases={homepage.featuredCases.map((item) => item.case) as CasesHomePage[]} />
      )}

      <BannerSend />

      <HashScroller />
    </>
  )
}

export default Home
