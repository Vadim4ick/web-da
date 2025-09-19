import React from 'react'
// import { DefaultHead } from 'payload/components/head'

const CustomHead: React.FC = () => {
  return (
    <>
      {/* стандартный head Payload */}
      {/* <DefaultHead /> */}
      {/* твой favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* можно добавить og:image и мета-теги */}
      {/* <meta property="og:image" content="/assets/og-image.png" /> */}
      <meta property="og:title" content="Web-da Admin" />
    </>
  )
}

export default CustomHead
